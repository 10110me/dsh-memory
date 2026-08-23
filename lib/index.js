import { promises, readFileSync } from "node:fs";
import * as nodePath from "node:path";
import { fileURLToPath } from "node:url";
import { defineTool } from "@deepseek-ai/dsh-tools";
//#region src/index.ts
const name = "dsh-memory";
const inject = [
	"tools",
	"webServer",
	"fs"
];
const DEFAULT_CONFIG = {
	apiBase: "",
	apiKey: "",
	model: "text-embedding-3-small",
	dimensions: 0,
	enabled: false,
	organizeWithModel: true,
	maxNodes: 50,
	ignoredUpdateVersion: ""
};
const EMBED_SCRIPT = `let b='';process.stdin.setEncoding('utf8');process.stdin.on('data',function(d){b+=d});process.stdin.on('end',async function(){try{var q=JSON.parse(b);var body={model:q.model,input:q.input};if(q.dimensions)body.dimensions=q.dimensions;var r=await fetch(q.url,{method:'POST',headers:{'Content-Type':'application/json',Authorization:'Bearer '+(q.key||'')},body:JSON.stringify(body)});var t=await r.text();process.stdout.write(JSON.stringify({ok:r.ok,status:r.status,body:t}));}catch(e){process.stdout.write(JSON.stringify({ok:false,status:0,body:String((e&&e.message)||e)}));}})`;
const FETCH_SCRIPT = `let b='';process.stdin.setEncoding('utf8');process.stdin.on('data',function(d){b+=d});process.stdin.on('end',async function(){try{var q=JSON.parse(b);var r=await fetch(q.url,{method:q.method||'GET',headers:q.headers||{}});var t=await r.text();process.stdout.write(JSON.stringify({ok:r.ok,status:r.status,body:t}));}catch(e){process.stdout.write(JSON.stringify({ok:false,status:0,body:String((e&&e.message)||e)}));}})`;
const UPDATE_REPO_RAW = "https://raw.githubusercontent.com/10110me/dsh-memory/main/";
/** Runtime files replaced during an update, relative to the package root. */
const UPDATE_FILES = [
	"package.json",
	"cordis.patch.yml",
	"README.md",
	"LICENSE",
	"CHANGELOG.md",
	"CHANGELOG.zh.md",
	"lib/index.js",
	"lib/index.d.ts",
	"client/client.js",
	"client/client.d.ts",
	"src/index.ts",
	"src/client/index.tsx"
];
const UPDATE_TMP_DIR = ".dsh-update-tmp";
/** This package's root directory (…/node_modules/dsh-memory), derived from the running bundle. */
function ownPackageDir() {
	return nodePath.resolve(nodePath.dirname(fileURLToPath(import.meta.url)), "..");
}
function parseVersion(v) {
	return String(v || "").trim().replace(/^v/, "").split("-")[0].split(".").map(function(n) {
		return parseInt(n, 10) || 0;
	});
}
function isNewerVersion(candidate, current) {
	const a = parseVersion(candidate), b = parseVersion(current);
	for (let i = 0; i < 3; i++) {
		if ((a[i] || 0) > (b[i] || 0)) return true;
		if ((a[i] || 0) < (b[i] || 0)) return false;
	}
	return false;
}
/** Version of the currently running package (read once from our own package.json). */
const CURRENT_VERSION = (function() {
	try {
		const pkg = JSON.parse(readFileSync(nodePath.join(ownPackageDir(), "package.json"), "utf8"));
		return String(pkg.version || "0.0.0");
	} catch (e) {
		return "0.0.0";
	}
})();
function nowSec() {
	return Math.floor(Date.now() / 1e3);
}
function uid() {
	return "mem-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 8);
}
function unique(list) {
	const out = [];
	const seen = /* @__PURE__ */ new Set();
	(list || []).forEach(function(s) {
		const v = String(s == null ? "" : s).trim();
		if (v && !seen.has(v)) {
			seen.add(v);
			out.push(v);
		}
	});
	return out;
}
function extractJson(text) {
	let t = String(text || "").trim();
	const fence = t.indexOf("```");
	if (fence >= 0) {
		const nl = t.indexOf("\n", fence);
		const end = t.indexOf("```", fence + 3);
		if (nl >= 0 && end > nl) t = t.slice(nl + 1, end);
		else if (end > fence) t = t.slice(fence + 3, end);
	}
	const i = t.indexOf("{");
	const j = t.lastIndexOf("}");
	if (i >= 0 && j > i) t = t.slice(i, j + 1);
	return t;
}
function apply(ctx) {
	const fsRaw = ctx.get("fs");
	if (!fsRaw) return;
	const fs = fsRaw;
	const subprocess = ctx.get("subprocess");
	const llm = ctx.get("llm");
	const systemPrompt = ctx.get("systemPrompt");
	const agentDefaultModel = ctx.get("agentDefaultModel");
	const sandboxPolicy = ctx.get("sandboxPolicy");
	const webServer = ctx.get("webServer");
	const root = sandboxPolicy && sandboxPolicy.workspaceRoot || "";
	let config = Object.assign({}, DEFAULT_CONFIG);
	let memories = [];
	let pending = [];
	let loaded = false;
	let nodePathPromise = null;
	let kwIndex = null;
	async function resolveTarget(name) {
		return root ? fs.resolve(name, { cwd: root }) : fs.resolve(name);
	}
	async function ensureLoaded() {
		if (loaded) return;
		loaded = true;
		try {
			const t = await resolveTarget(".dsh-memory-config.json");
			if (await fs.stat(t)) config = Object.assign({}, DEFAULT_CONFIG, JSON.parse(await fs.readText(t)));
		} catch (e) {}
		try {
			const t = await resolveTarget(".dsh-memory-store.json");
			if (await fs.stat(t)) {
				const d = JSON.parse(await fs.readText(t));
				memories = Array.isArray(d.memories) ? d.memories : [];
			}
		} catch (e) {}
		memories.forEach(function(m) {
			if (m && m.__tokens) delete m.__tokens;
		});
		if (kwIndex) kwIndex = null;
	}
	async function persistConfig() {
		try {
			await fs.writeText(await resolveTarget(".dsh-memory-config.json"), JSON.stringify(config, null, 2));
		} catch (e) {}
	}
	async function persistStore() {
		try {
			const clean = memories.map(function(m) {
				const copy = {};
				for (const k in m) if (k !== "__tokens" && k !== "__vec") copy[k] = m[k];
				return copy;
			});
			await fs.writeText(await resolveTarget(".dsh-memory-store.json"), JSON.stringify({ memories: clean }));
		} catch (e) {}
	}
	function setPending(pid, patch) {
		for (let i = 0; i < pending.length; i++) if (pending[i].id === pid) {
			Object.assign(pending[i], patch);
			return;
		}
	}
	function gcPending() {
		const now = nowSec();
		pending = pending.filter(function(p) {
			return !p.doneAt || now - p.doneAt < 3;
		});
	}
	async function resolveNode() {
		if (!nodePathPromise) nodePathPromise = (subprocess ? subprocess.resolveExecutable("node") : Promise.resolve("node")).catch(function() {
			return "node";
		});
		return nodePathPromise;
	}
	async function embedTexts(texts, cfg, signal) {
		if (!subprocess) throw new Error("subprocess service unavailable");
		let base = String(cfg.apiBase || "");
		while (base.length && base.charAt(base.length - 1) === "/") base = base.slice(0, -1);
		if (!base) throw new Error("embedding apiBase not configured");
		const nodeExe = await resolveNode();
		const payload = {
			url: base + "/embeddings",
			key: cfg.apiKey || "",
			model: cfg.model || "text-embedding-3-small",
			input: texts,
			dimensions: cfg.dimensions > 0 ? cfg.dimensions : void 0
		};
		const handle = subprocess.spawn({
			argv: [
				nodeExe,
				"-e",
				EMBED_SCRIPT
			],
			cwd: root || ".",
			stdio: {
				stdin: { data: JSON.stringify(payload) },
				stdout: { maxBytes: 8388608 },
				stderr: { maxBytes: 262144 }
			},
			graceMs: 5e3,
			signal
		});
		await handle.done;
		const out = handle.collected && handle.collected.stdout ? handle.collected.stdout.readFrom(0).text : "";
		let parsed;
		try {
			parsed = JSON.parse(String(out).trim());
		} catch (e) {
			throw new Error("embed runner returned non-JSON output");
		}
		if (!parsed.ok) throw new Error("embed HTTP " + parsed.status + ": " + String(parsed.body || "").slice(0, 400));
		let body;
		try {
			body = JSON.parse(parsed.body);
		} catch (e) {
			throw new Error("embed response not JSON");
		}
		if (!body || !Array.isArray(body.data) || !body.data.length) throw new Error("embed response missing data[]");
		return body.data.map(function(d) {
			return d.embedding;
		});
	}
	let updateCache = null;
	const UPDATE_TTL = 3600;
	let updateRunning = false;
	async function httpViaNode(url, method) {
		if (!subprocess) throw new Error("subprocess service unavailable");
		const nodeExe = await resolveNode();
		const handle = subprocess.spawn({
			argv: [
				nodeExe,
				"-e",
				FETCH_SCRIPT
			],
			cwd: root || ".",
			stdio: {
				stdin: { data: JSON.stringify({
					url,
					method: method || "GET"
				}) },
				stdout: { maxBytes: 16777216 },
				stderr: { maxBytes: 65536 }
			},
			graceMs: 2e4
		});
		await handle.done;
		const out = handle.collected && handle.collected.stdout ? handle.collected.stdout.readFrom(0).text : "";
		return JSON.parse(String(out).trim());
	}
	async function checkForUpdate(force) {
		const now = nowSec();
		if (!force && updateCache && now - updateCache.at < UPDATE_TTL) return updateCache.result;
		try {
			const pkgRes = await httpViaNode(UPDATE_REPO_RAW + "package.json");
			if (!pkgRes.ok) throw new Error("GitHub HTTP " + pkgRes.status);
			const latest = String(JSON.parse(pkgRes.body).version || "");
			let changelog = "";
			let changelogZh = "";
			try {
				const cl = await httpViaNode(UPDATE_REPO_RAW + "CHANGELOG.md");
				if (cl.ok) changelog = String(cl.body || "").slice(0, 4e3);
			} catch (e) {}
			try {
				const clz = await httpViaNode(UPDATE_REPO_RAW + "CHANGELOG.zh.md");
				if (clz.ok) changelogZh = String(clz.body || "").slice(0, 4e3);
			} catch (e) {}
			const result = {
				ok: true,
				current: CURRENT_VERSION,
				latest,
				hasUpdate: isNewerVersion(latest, CURRENT_VERSION),
				changelog,
				changelogZh,
				checkedAt: nowSec()
			};
			updateCache = {
				at: nowSec(),
				result
			};
			return result;
		} catch (e) {
			return {
				ok: false,
				current: CURRENT_VERSION,
				error: String(e && e.message || e),
				checkedAt: nowSec()
			};
		}
	}
	/** Version staged by prepareUpdate, awaiting applyUpdate. */
	let updateStagedVersion = null;
	async function prepareUpdate() {
		if (updateRunning) return {
			ok: false,
			error: "update already in progress"
		};
		const check = await checkForUpdate(true);
		if (!check.ok || !check.latest) return {
			ok: false,
			error: check.error || "cannot determine latest version"
		};
		if (!isNewerVersion(check.latest, CURRENT_VERSION)) return {
			ok: false,
			error: "already up to date (" + CURRENT_VERSION + ")"
		};
		updateRunning = true;
		const base = ownPackageDir();
		const tmp = nodePath.join(base, UPDATE_TMP_DIR);
		try {
			await promises.rm(tmp, {
				recursive: true,
				force: true
			});
			for (const rel of UPDATE_FILES) {
				const r = await httpViaNode(UPDATE_REPO_RAW + rel);
				if (!r.ok || !r.body || !r.body.length) throw new Error("download failed: " + rel + " (HTTP " + r.status + ")");
				const target = nodePath.join(tmp, rel);
				await promises.mkdir(nodePath.dirname(target), { recursive: true });
				await promises.writeFile(target, r.body, "utf8");
			}
			const staged = JSON.parse(await promises.readFile(nodePath.join(tmp, "package.json"), "utf8"));
			if (!isNewerVersion(String(staged.version || ""), CURRENT_VERSION)) throw new Error("staged version is not newer than " + CURRENT_VERSION);
			updateStagedVersion = String(staged.version);
			return {
				ok: true,
				to: updateStagedVersion
			};
		} catch (e) {
			try {
				await promises.rm(tmp, {
					recursive: true,
					force: true
				});
			} catch (e2) {}
			updateStagedVersion = null;
			return {
				ok: false,
				error: String(e && e.message || e)
			};
		} finally {
			updateRunning = false;
		}
	}
	async function applyUpdate() {
		if (updateRunning) return {
			ok: false,
			error: "update already in progress"
		};
		if (!updateStagedVersion) return {
			ok: false,
			error: "no staged update — call prepare first"
		};
		updateRunning = true;
		const base = ownPackageDir();
		const tmp = nodePath.join(base, UPDATE_TMP_DIR);
		try {
			for (const rel of UPDATE_FILES) {
				const dst = nodePath.join(base, rel);
				await promises.mkdir(nodePath.dirname(dst), { recursive: true });
				await promises.copyFile(nodePath.join(tmp, rel), dst);
			}
			await promises.rm(tmp, {
				recursive: true,
				force: true
			});
			const to = updateStagedVersion;
			updateStagedVersion = null;
			return {
				ok: true,
				from: CURRENT_VERSION,
				to,
				restartRequired: true
			};
		} catch (e) {
			try {
				await promises.rm(tmp, {
					recursive: true,
					force: true
				});
			} catch (e2) {}
			return {
				ok: false,
				error: String(e && e.message || e)
			};
		} finally {
			updateRunning = false;
		}
	}
	async function runSelfUpdate() {
		const p = await prepareUpdate();
		if (!p.ok) return {
			ok: false,
			error: p.error
		};
		const a = await applyUpdate();
		if (!a.ok) return {
			ok: false,
			error: a.error
		};
		return a;
	}
	async function organizeWithModel(content, type, cfg, signal) {
		if (!cfg.organizeWithModel || !llm || !agentDefaultModel) return null;
		let sel;
		try {
			sel = agentDefaultModel.currentSelection();
		} catch (e) {
			return null;
		}
		if (!sel || !sel.provider || !sel.model) return null;
		const system = "You are a knowledge organizer for a programming memory system. Output ONLY a JSON object with keys: summary (one concise line), content (a cleaned, self-contained version of the note), tags (array of 1-6 short lowercase keywords), entities (array of 1-6 named entities such as libraries, tools, files, concepts).";
		const userText = "Note type: " + type + ". Raw note: " + content;
		let text = "";
		try {
			const it = llm.stream({
				provider: sel.provider,
				model: sel.model,
				reasoningEffort: sel.reasoningEffort,
				system,
				messages: [{
					id: uid(),
					role: "user",
					content: [{
						type: "text",
						text: userText
					}],
					source: { kind: "user" }
				}],
				signal
			})[Symbol.asyncIterator]();
			while (true) {
				const r = await it.next();
				if (r.done) break;
				const c = r.value;
				if (c && c.type === "text-delta") text += c.text;
			}
		} catch (e) {
			return null;
		}
		try {
			const m = JSON.parse(extractJson(text));
			return {
				summary: typeof m.summary === "string" ? m.summary : "",
				content: typeof m.content === "string" && m.content.trim() ? m.content : content,
				tags: unique(m.tags),
				entities: unique(m.entities)
			};
		} catch (e) {
			return null;
		}
	}
	function publicConfig() {
		return {
			apiBase: config.apiBase,
			apiKey: config.apiKey,
			model: config.model,
			dimensions: config.dimensions,
			enabled: config.enabled,
			organizeWithModel: config.organizeWithModel,
			maxNodes: config.maxNodes,
			ignoredUpdateVersion: config.ignoredUpdateVersion || "",
			version: CURRENT_VERSION
		};
	}
	function memoryView(m) {
		return {
			id: m.id,
			type: m.type,
			summary: m.summary,
			content: m.content,
			tags: m.tags,
			entities: m.entities,
			createdAt: m.createdAt,
			updatedAt: m.updatedAt
		};
	}
	function computeGraph(limitOverride) {
		const freq = {};
		memories.forEach(function(m) {
			(m.entities || []).forEach(function(e) {
				if (e) freq[e] = (freq[e] || 0) + 1;
			});
		});
		const all = Object.keys(freq).map(function(e) {
			return {
				id: e,
				label: e,
				weight: freq[e]
			};
		});
		all.sort(function(a, b) {
			return b.weight - a.weight;
		});
		const rawLimit = limitOverride !== void 0 && limitOverride !== null && !Number.isNaN(limitOverride) ? Number(limitOverride) : Number(config.maxNodes) || 50;
		const limit = Math.max(1, Math.floor(Number(rawLimit) || 50));
		const top = all.slice(0, limit);
		const ids = {};
		top.forEach(function(n) {
			ids[n.id] = true;
		});
		const edgeMap = {};
		memories.forEach(function(m) {
			const ents = unique((m.entities || []).filter(function(e) {
				return ids[e];
			}));
			for (let i = 0; i < ents.length; i++) for (let j = i + 1; j < ents.length; j++) {
				const a = ents[i] < ents[j] ? ents[i] : ents[j];
				const b = ents[i] < ents[j] ? ents[j] : ents[i];
				const k = a + "|" + b;
				edgeMap[k] = edgeMap[k] || {
					a,
					b,
					weight: 0
				};
				edgeMap[k].weight += 1;
			}
		});
		const edges = Object.keys(edgeMap).map(function(k) {
			return edgeMap[k];
		});
		edges.sort(function(a, b) {
			return b.weight - a.weight;
		});
		return {
			nodes: top,
			edges: edges.slice(0, 300),
			totalEntities: all.length,
			limit
		};
	}
	async function doSearch(query, limit, type, signal, semantic) {
		const q = String(query || "").trim();
		if (!q) return [];
		return doKeywordSearch(q, Math.max(1, Math.min(50, Number(limit) || 5)), type);
	}
	function tokenize(text) {
		return String(text || "").toLowerCase().split(/[^\p{L}\p{N}]+/u).filter(Boolean);
	}
	function buildKwIndex() {
		kwIndex = {};
		memories.forEach(function(m) {
			if (!m.__tokens) {
				const hay = ((m.summary || "") + " " + (m.content || "") + " " + (m.tags || []).join(" ")).toLowerCase();
				m.__tokens = Object.create(null);
				tokenize(hay).forEach(function(tok) {
					m.__tokens[tok] = (m.__tokens[tok] || 0) + 1;
				});
			}
			const toks = Object.keys(m.__tokens);
			for (let i = 0; i < toks.length; i++) {
				const t = toks[i];
				(kwIndex[t] = kwIndex[t] || []).push(m);
			}
		});
	}
	function doKeywordSearch(q, lim, type) {
		if (!kwIndex) buildKwIndex();
		const qTokens = tokenize(q);
		if (!qTokens.length) return [];
		const cand = /* @__PURE__ */ new Map();
		for (let ti = 0; ti < qTokens.length; ti++) {
			const post = kwIndex[qTokens[ti]] || [];
			for (let pi = 0; pi < post.length; pi++) {
				const m = post[pi];
				if (type && m.type !== type) continue;
				if (cand.has(m.id)) continue;
				cand.set(m.id, m);
			}
		}
		const results = [];
		cand.forEach(function(m) {
			let score = 0;
			for (let ti = 0; ti < qTokens.length; ti++) {
				const t = qTokens[ti];
				score += m.__tokens[t] || 0;
				if ((m.summary || "").toLowerCase().indexOf(t) >= 0) score += 2;
			}
			const hit = qTokens.filter(function(t) {
				return m.__tokens[t];
			}).length;
			score += hit * 3;
			results.push({
				m,
				score: score * 10
			});
		});
		results.sort(function(a, b) {
			return b.score - a.score;
		});
		return results.slice(0, lim).map(function(s) {
			const v = memoryView(s.m);
			v.score = Math.round(s.score) / 10;
			return v;
		});
	}
	async function saveMemory(content, type, tags, signal, source) {
		await ensureLoaded();
		let c = String(content || "").trim();
		if (!c) return {
			ok: false,
			error: "empty content"
		};
		const t = type === "pitfall" || type === "knowledge" || type === "note" ? type : "note";
		const src = source || "manual";
		const pid = uid();
		pending.push({
			id: pid,
			source: src,
			preview: c.slice(0, 80),
			stage: "organizing",
			createdAt: nowSec()
		});
		let tagsArr = unique(tags || []);
		let summary = "";
		let entities = [];
		const org = await organizeWithModel(c, t, config, signal);
		setPending(pid, { stage: "embedding" });
		if (org) {
			if (org.content) c = org.content;
			if (org.summary) summary = org.summary;
			tagsArr = unique(tagsArr.concat(org.tags || []));
			entities = unique(org.entities || []);
		}
		if (!summary) summary = c.length > 140 ? c.slice(0, 140) + "…" : c;
		if (!entities.length) entities = tagsArr.slice(0, 6);
		let embedding = void 0;
		let warning = "";
		if (config.enabled && config.apiBase) try {
			embedding = (await embedTexts([c], config, signal))[0];
		} catch (e) {
			warning = String(e && e.message || e);
		}
		const mem = {
			id: uid(),
			type: t,
			content: c,
			summary,
			tags: tagsArr,
			entities,
			embedding,
			createdAt: nowSec(),
			updatedAt: nowSec()
		};
		memories.push(mem);
		if (kwIndex) kwIndex = null;
		await persistStore();
		setPending(pid, {
			stage: "done",
			doneAt: nowSec()
		});
		const out = {
			ok: true,
			id: mem.id,
			summary,
			tags: tagsArr,
			entities,
			embeddingStored: !!embedding
		};
		if (warning) out.warning = warning;
		return out;
	}
	function readBody(req) {
		return new Promise(function(resolve) {
			let body = "";
			req.on("data", function(chunk) {
				body += chunk;
			});
			req.on("end", function() {
				resolve(body);
			});
		});
	}
	function sendJson(res, status, data) {
		const json = JSON.stringify(data);
		res.writeHead(status, {
			"Content-Type": "application/json",
			"Cache-Control": "no-store"
		});
		res.end(json);
	}
	if (webServer) ctx.effect(function() {
		return webServer.register({
			kind: "prefix",
			path: "/memory/api",
			handler: async function(req, res) {
				const url = new URL(req.url, "http://localhost");
				const path = url.pathname;
				const method = req.method;
				if (method === "GET" && path === "/memory/api/config") {
					await ensureLoaded();
					return sendJson(res, 200, publicConfig());
				}
				if (method === "POST" && path === "/memory/api/config") {
					const body = JSON.parse(await readBody(req));
					await ensureLoaded();
					const p = body || {};
					if (typeof p.apiBase === "string") config.apiBase = p.apiBase;
					if (typeof p.apiKey === "string") config.apiKey = p.apiKey;
					if (typeof p.model === "string") config.model = p.model;
					if (p.dimensions !== void 0) config.dimensions = Number(p.dimensions) || 0;
					if (typeof p.enabled === "boolean") config.enabled = p.enabled;
					if (typeof p.organizeWithModel === "boolean") config.organizeWithModel = p.organizeWithModel;
					if (p.maxNodes !== void 0) config.maxNodes = Math.max(3, Math.min(200, Number(p.maxNodes) || 50));
					if (typeof p.ignoredUpdateVersion === "string") config.ignoredUpdateVersion = p.ignoredUpdateVersion;
					await persistConfig();
					return sendJson(res, 200, publicConfig());
				}
				if (method === "GET" && path === "/memory/api/pending") {
					gcPending();
					return sendJson(res, 200, { items: pending.slice().map(function(p) {
						return {
							id: p.id,
							source: p.source,
							preview: p.preview,
							stage: p.stage,
							error: p.error || null,
							createdAt: p.createdAt,
							doneAt: p.doneAt || null
						};
					}) });
				}
				if (method === "GET" && path === "/memory/api/test") {
					await ensureLoaded();
					if (!config.enabled || !config.apiBase) return sendJson(res, 200, {
						ok: false,
						error: "embedding disabled or apiBase empty"
					});
					try {
						return sendJson(res, 200, {
							ok: true,
							dimensions: (await embedTexts(["dsh memory test"], config, void 0))[0].length
						});
					} catch (e) {
						return sendJson(res, 200, {
							ok: false,
							error: String(e && e.message || e)
						});
					}
				}
				if (method === "GET" && path === "/memory/api/list") {
					await ensureLoaded();
					const limit = Math.max(1, Math.min(200, Number(url.searchParams.get("limit")) || 50));
					const off = Math.max(0, Number(url.searchParams.get("offset")) || 0);
					const type = url.searchParams.get("type") || "all";
					const list = memories.slice().reverse();
					const filtered = type !== "all" ? list.filter(function(m) {
						return m.type === type;
					}) : list;
					return sendJson(res, 200, {
						total: filtered.length,
						items: filtered.slice(off, off + limit).map(memoryView)
					});
				}
				if (method === "POST" && path === "/memory/api/search") {
					const body = JSON.parse(await readBody(req));
					await ensureLoaded();
					return sendJson(res, 200, { items: await doSearch(body.query, body.limit, body.type, void 0) });
				}
				if (method === "GET" && path === "/memory/api/graph") {
					await ensureLoaded();
					const qLimit = url.searchParams.get("limit");
					return sendJson(res, 200, computeGraph(qLimit === null ? void 0 : Number(qLimit)));
				}
				if (method === "GET" && path === "/memory/api/stats") {
					await ensureLoaded();
					const types = {};
					const entities = {};
					memories.forEach(function(m) {
						types[m.type || "note"] = (types[m.type || "note"] || 0) + 1;
						(m.entities || []).forEach(function(e) {
							if (e) entities[e] = true;
						});
					});
					return sendJson(res, 200, {
						count: memories.length,
						types,
						entityCount: Object.keys(entities).length
					});
				}
				if (method === "POST" && path === "/memory/api/add") {
					const body = JSON.parse(await readBody(req));
					return sendJson(res, 200, await saveMemory(body.content, body.type, body.tags, void 0, "manual"));
				}
				if (method === "POST" && path === "/memory/api/delete") {
					const body = JSON.parse(await readBody(req));
					await ensureLoaded();
					const before = memories.length;
					memories = memories.filter(function(m) {
						return m.id !== body.id;
					});
					if (memories.length !== before) {
						kwIndex = null;
						await persistStore();
					}
					return sendJson(res, 200, {
						ok: true,
						deleted: before - memories.length
					});
				}
				if (method === "POST" && path === "/memory/api/clear") {
					await ensureLoaded();
					memories = [];
					kwIndex = null;
					await persistStore();
					return sendJson(res, 200, { ok: true });
				}
				if (method === "GET" && path === "/memory/api/update/check") {
					await ensureLoaded();
					const r = await checkForUpdate(url.searchParams.get("force") === "1");
					return sendJson(res, 200, Object.assign({}, r, { ignoredVersion: config.ignoredUpdateVersion || "" }));
				}
				if (method === "POST" && path === "/memory/api/update/ignore") {
					const body = JSON.parse(await readBody(req));
					config.ignoredUpdateVersion = String(body.version || "");
					updateCache = null;
					await persistConfig();
					return sendJson(res, 200, publicConfig());
				}
				if (method === "POST" && path === "/memory/api/update/prepare") return sendJson(res, 200, await prepareUpdate());
				if (method === "POST" && path === "/memory/api/update/apply") return sendJson(res, 200, await applyUpdate());
				if (method === "POST" && path === "/memory/api/update/run") return sendJson(res, 200, await runSelfUpdate());
				res.writeHead(404, { "Content-Type": "application/json" });
				res.end(JSON.stringify({ error: "not found" }));
			}
		});
	}, "dsh-memory: HTTP API");
	const jsonOut = function() {
		return {
			schema: { type: "json" },
			render: function(a, v) {
				return [{
					type: "text",
					text: JSON.stringify(v, null, 2)
				}];
			}
		};
	};
	ctx.tools.register(defineTool({
		name: "memory_save",
		description: "Store a pitfall, lesson, or useful knowledge into persistent memory. Call this proactively when: you just FIXED a non-trivial bug (record symptom, root cause and the working fix as type \"pitfall\"); you discovered a non-obvious gotcha or API quirk; you learned a hard-won fact; you established or refined a repeatable workflow such as build/release/deploy steps (record the exact steps as type \"knowledge\" so later sessions can follow them instead of re-deriving). Skip trivial or obvious things. The note is organized by the current model and embedded for semantic retrieval.",
		parameters: {
			content: {
				type: "string",
				required: true,
				description: "The note to remember (pitfall, lesson, or knowledge)."
			},
			type: {
				type: "string",
				enum: [
					"pitfall",
					"knowledge",
					"note"
				],
				description: "Kind of memory. Defaults to note."
			},
			tags: {
				type: "array",
				items: { type: "string" },
				description: "Optional short tags."
			}
		},
		output: jsonOut(),
		execute: async function(args, exec) {
			const r = await saveMemory(args.content, args.type || "note", args.tags, exec && exec.signal, "agent");
			if (!r.ok) throw new Error(r.error);
			return r;
		}
	}));
	ctx.tools.register(defineTool({
		name: "memory_search",
		description: "Search persistent memory for relevant past pitfalls and knowledge. Call this FIRST when you hit a bug, error message, or unexpected behavior — a stored pitfall may already contain the fix; use keywords from the error text as the query. Also call it before starting a non-trivial coding task.",
		parameters: {
			query: {
				type: "string",
				required: true,
				description: "What to search for."
			},
			limit: {
				type: "number",
				description: "Max results (default 5)."
			},
			type: {
				type: "string",
				enum: [
					"pitfall",
					"knowledge",
					"note"
				],
				description: "Optional kind filter."
			}
		},
		output: jsonOut(),
		execute: async function(args, exec) {
			return { results: await doSearch(args.query || "", args.limit || 5, args.type, exec && exec.signal) };
		}
	}));
	ctx.tools.register(defineTool({
		name: "memory_list",
		description: "List recent memories stored in persistent memory.",
		parameters: {
			limit: {
				type: "number",
				description: "Max results (default 20)."
			},
			offset: {
				type: "number",
				description: "Skip this many."
			},
			type: {
				type: "string",
				enum: [
					"pitfall",
					"knowledge",
					"note"
				],
				description: "Optional kind filter."
			}
		},
		output: jsonOut(),
		execute: async function(args) {
			await ensureLoaded();
			const lim = Math.max(1, Math.min(100, Number(args.limit) || 20));
			const off = Math.max(0, Number(args.offset) || 0);
			const list = memories.slice().reverse();
			const filtered = args.type && String(args.type) !== "all" ? list.filter(function(m) {
				return String(m.type) === String(args.type);
			}) : list;
			return {
				total: filtered.length,
				items: filtered.slice(off, off + lim).map(memoryView)
			};
		}
	}));
	ctx.tools.register(defineTool({
		name: "memory_delete",
		description: "Delete a memory. Pass the exact id, OR pass a query to delete the single best-matching memory (useful for removing an outdated or wrong pitfall). Prefer deleting stale memories over leaving wrong guidance behind.",
		parameters: {
			id: {
				type: "string",
				description: "Exact memory id (from memory_search or memory_list)."
			},
			query: {
				type: "string",
				description: "Delete the best-matching memory for this keyword query (used when the exact id is unknown)."
			}
		},
		output: jsonOut(),
		execute: async function(args) {
			await ensureLoaded();
			let targetId = args.id;
			if (!targetId && args.query && String(args.query).trim()) {
				const hits = doKeywordSearch(String(args.query).trim(), 1, void 0);
				if (hits.length) targetId = hits[0].id;
				else return {
					ok: false,
					error: "no memory matches that query"
				};
			}
			if (!targetId) return {
				ok: false,
				error: "provide id or query"
			};
			const victim = memories.find(function(m) {
				return m.id === targetId;
			});
			const before = memories.length;
			memories = memories.filter(function(m) {
				return m.id !== targetId;
			});
			if (memories.length !== before) {
				kwIndex = null;
				await persistStore();
			}
			const out = {
				ok: true,
				deleted: before - memories.length,
				id: targetId
			};
			if (victim) out.summary = victim.summary;
			return out;
		}
	}));
	if (systemPrompt) systemPrompt.section({
		name: "memory:guidance",
		order: 130,
		text: "You have a persistent programming memory. Use it at these moments: (1) Before starting a non-trivial coding task, call memory_search with a query describing the task. (2) When you hit a bug, error message, or unexpected behavior, call memory_search FIRST — use keywords from the error text or symptom as the query — before trying fixes; a stored pitfall may already contain the answer. (3) After you fix a non-trivial bug, call memory_save with type \"pitfall\" and a self-contained note: the symptom/error, the root cause, and the working fix. (4) When you discover a non-obvious gotcha or useful new fact, save it as well. (5) When you establish a repeatable process for a project — build, release, deploy, or configuration steps — save it via memory_save as type \"knowledge\" with the exact commands and paths, in the same turn you work it out. Skip trivial or obvious observations. When you find an outdated or wrong memory, correct the record with memory_delete. Prefer searching memory over re-discovering known issues."
	});
}
//#endregion
export { apply, inject, name };
