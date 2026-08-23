window.__ModuleLoader__.load({ id: "dsh-memory", factory: (require) => {
var module = { exports: {} };
module.exports;
//#region \0rolldown/runtime.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule || !__hasOwnProp.call(mod, "default") ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
//#endregion
let react = require("react");
react = __toESM(react, 1);
//#region src/client/index.tsx
var CSS = ".dshm-root{display:flex;flex-direction:column;gap:12px;padding:6px 2px;font-size:13px;color:inherit}.dshm-tabs{display:flex;gap:6px}.dshm-tab{padding:6px 12px;border:1px solid rgba(127,127,127,.4);border-radius:8px;background:transparent;color:inherit;cursor:pointer;font-size:13px}.dshm-tab-on{background:rgba(100,120,230,.18);border-color:rgba(100,120,230,.7)}.dshm-banner{opacity:.7}.dshm-status{padding:6px 10px;border-radius:8px;background:rgba(255,190,60,.15);color:inherit}.dshm-form{display:flex;flex-direction:column;gap:10px;max-width:480px}.dshm-field{display:flex;flex-direction:column;gap:4px}.dshm-label{opacity:.7;font-size:12px}.dshm-form input[type=text],.dshm-form input[type=password],.dshm-form input[type=number],.dshm-search,.dshm-card textarea{background:rgba(127,127,127,.07);border:1px solid rgba(127,127,127,.4);border-radius:8px;padding:8px 10px;color:inherit;font-size:13px}.dshm-browbar select{color-scheme:dark;background:#1a1d24;color:#e6e6e6;border:1px solid rgba(127,127,127,.4);border-radius:8px;padding:8px 10px;font-size:13px}.dshm-browbar select option{background:#1a1d24;color:#e6e6e6}.dshm-actions{display:flex;gap:8px;margin-top:4px}.dshm-actions button,.dshm-browbar button,.dshm-graph-toolbar button{padding:8px 14px;border:1px solid rgba(127,127,127,.4);border-radius:8px;background:rgba(100,120,230,.18);color:inherit;cursor:pointer}.dshm-actions button:disabled{opacity:.5;cursor:default}.dshm-hint{opacity:.65;font-size:11px;line-height:1.5}.dshm-browser{display:flex;flex-direction:column;gap:10px}.dshm-browbar{display:flex;gap:8px;align-items:center}.dshm-search{flex:1}.dshm-count{opacity:.7;font-size:12px}.dshm-card{border:1px solid rgba(127,127,127,.3);border-radius:10px;padding:10px 12px;display:flex;flex-direction:column;gap:6px;background:rgba(127,127,127,.05)}.dshm-card-head{display:flex;align-items:center;gap:8px}.dshm-badge{font-size:11px;padding:1px 7px;border-radius:999px;border:1px solid rgba(127,127,127,.5);opacity:.85}.dshm-badge-pitfall{color:#e07979;border-color:#c26a6a}.dshm-badge-knowledge{color:#79a8e0;border-color:#6a92c2}.dshm-badge-note{opacity:.8}.dshm-summary{font-weight:600;flex:1}.dshm-del{background:transparent;border:none;color:#d88;cursor:pointer;font-size:12px}.dshm-content{opacity:.8;line-height:1.5;white-space:pre-wrap;word-break:break-word}.dshm-tags{display:flex;flex-wrap:wrap;gap:4px}.dshm-tag{font-size:11px;padding:1px 7px;border-radius:999px;background:rgba(100,120,230,.16)}.dshm-empty{opacity:.7;padding:12px 0}.dshm-pending{display:flex;flex-direction:column;gap:6px}.dshm-pending-item{display:flex;align-items:center;gap:8px;padding:8px 10px;border:1px solid rgba(100,120,230,.35);border-radius:10px;background:rgba(100,120,230,.08)}.dshm-pending-preview{flex:1;opacity:.85;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dshm-spinner{width:14px;height:14px;border:2px solid rgba(127,127,127,.3);border-top-color:rgba(100,120,230,.9);border-radius:50%;display:inline-block;animation:dshmspin .8s linear infinite}@keyframes dshmspin{to{transform:rotate(360deg)}}.dshm-stage{font-size:12px;opacity:.8;white-space:nowrap}.dshm-stage-done{color:#7fd17f}.dshm-stage-err{color:#e07979}.dshm-graph{display:flex;flex-direction:column;gap:8px}.dshm-graph-toolbar{display:flex;gap:10px;align-items:center;flex-wrap:wrap}.dshm-mod{display:inline-flex;gap:6px;align-items:center;border:1px solid rgba(127,127,127,.3);border-radius:8px;padding:4px 10px;background:rgba(127,127,127,.06)}.dshm-mod button{min-width:26px}.dshm-graph-toolbar button{padding:4px 12px}.dshm-svg{display:block;max-width:100%;background:rgba(127,127,127,.04);border:1px solid rgba(127,127,127,.3);border-radius:10px;touch-action:none}.dshm-node-label{fill:currentColor;font-size:11px}.dshm-graph-linew{display:flex;gap:8px;align-items:center;font-size:12px}.dshm-graph-linew input[type=range]{accent-color:rgba(100,120,230,.8)}.dshm-selinfo{padding:10px 12px;border:1px solid rgba(255,200,80,.35);border-radius:10px;background:rgba(255,200,80,.08);display:flex;flex-direction:column;gap:8px}.dshm-selinfo-title{font-weight:600;font-size:14px}.dshm-selinfo-neighbors{display:flex;flex-wrap:wrap;gap:4px}.dshm-selinfo-neighbors .dshm-tag{background:rgba(255,200,80,.16)}.dshm-update{border:1px solid rgba(100,120,230,.55);border-radius:10px;padding:10px 12px;background:rgba(100,120,230,.1);display:flex;flex-direction:column;gap:8px}.dshm-update-title{font-weight:600}.dshm-update-log{font-size:12px;opacity:.85;white-space:pre-wrap;max-height:160px;overflow:auto;border:1px solid rgba(127,127,127,.25);border-radius:8px;padding:8px 10px;background:rgba(127,127,127,.05)}.dshm-update-actions{display:flex;gap:8px;align-items:center;flex-wrap:wrap}.dshm-update-msg{font-size:12px;opacity:.85}";
var styleTag = null;
function ensureCSS() {
	if (styleTag) return;
	if (typeof document === "undefined") return;
	styleTag = document.createElement("style");
	styleTag.setAttribute("data-plugin", "dsh-memory");
	styleTag.textContent = CSS;
	document.head.appendChild(styleTag);
}
function apiGet(path) {
	return fetch("/memory/api" + path, { cache: "no-store" }).then(function(r) {
		return r.json();
	});
}
function apiPost(path, body) {
	return fetch("/memory/api" + path, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(body || {})
	}).then(function(r) {
		return r.json();
	});
}
function typeLabel(t) {
	return t === "pitfall" ? "坑" : t === "knowledge" ? "知识" : "笔记";
}
function field(label, input) {
	return (0, react.createElement)("label", { className: "dshm-field" }, (0, react.createElement)("span", { className: "dshm-label" }, label), input);
}
var ErrorBoundary = (function(Component) {
	function EB(props) {
		Component.call(this, props);
		this.state = { error: null };
	}
	EB.prototype = Object.create(Component.prototype);
	EB.prototype.constructor = EB;
	EB.getDerivedStateFromError = function(error) {
		return { error };
	};
	EB.prototype.componentDidCatch = function(error, info) {};
	EB.prototype.render = function() {
		if (this.state.error) {
			var e = this.state.error;
			return (0, react.createElement)("div", { style: {
				padding: "12px",
				border: "1px solid rgba(238,80,80,.5)",
				borderRadius: "10px",
				background: "rgba(238,80,80,.1)",
				fontSize: "12px"
			} }, (0, react.createElement)("div", { style: {
				fontWeight: "600",
				marginBottom: "6px"
			} }, "❌ 渲染错误："), (0, react.createElement)("div", { style: {
				opacity: ".85",
				whiteSpace: "pre-wrap",
				wordBreak: "break-all"
			} }, String(e && e.message ? e.message : e)), (0, react.createElement)("div", { style: {
				opacity: ".5",
				marginTop: "6px",
				fontSize: "11px",
				whiteSpace: "pre-wrap",
				wordBreak: "break-all"
			} }, String(e && e.stack ? e.stack : "")));
		}
		return this.props.children;
	};
	return EB;
})(react.default.Component);
function GraphCanvas(props) {
	var nodes = props.nodes || [];
	var edges = props.edges || [];
	var W = 660, H = 620;
	var svgRef = react.default.useRef(null);
	var gRef = react.default.useRef(null);
	var nodeElsRef = react.default.useRef({});
	var lineElsRef = react.default.useRef({});
	var posRef = react.default.useRef({});
	var viewRef = react.default.useRef({
		tx: 0,
		ty: 0,
		k: 1
	});
	var dragRef = react.default.useRef(null);
	var adjRef = react.default.useRef({});
	var edgesRef = react.default.useRef(edges);
	var zoomArr = react.default.useState(100);
	var setZoomPct = zoomArr[1];
	var zoomPct = zoomArr[0];
	var selArr = react.default.useState(null);
	var setSelected = selArr[1];
	var sel = selArr[0];
	var lineWArr = react.default.useState(1.2);
	var setLineW = lineWArr[1];
	lineWArr = lineWArr[0];
	var needFitRef = react.default.useRef(false);
	var ufParent = {};
	function ufFind(x) {
		if (ufParent[x] === void 0) {
			ufParent[x] = x;
			return x;
		}
		var root = x;
		while (ufParent[root] !== root) root = ufParent[root];
		while (ufParent[x] !== root) {
			var nx = ufParent[x];
			ufParent[x] = root;
			x = nx;
		}
		return root;
	}
	function ufUnion(a, b) {
		var ra = ufFind(a), rb = ufFind(b);
		if (ra !== rb) ufParent[ra] = rb;
	}
	nodes.forEach(function(n) {
		ufFind(n.id);
	});
	edges.forEach(function(e) {
		ufUnion(e.a, e.b);
	});
	function layoutPositions() {
		var localAdj = {};
		edges.forEach(function(e) {
			(localAdj[e.a] = localAdj[e.a] || []).push(e.b);
			(localAdj[e.b] = localAdj[e.b] || []).push(e.a);
		});
		var groups = {};
		nodes.forEach(function(n) {
			var root = ufFind(n.id);
			(groups[root] = groups[root] || []).push(n.id);
		});
		var groupIds = Object.keys(groups);
		var idealBase = 130, minDistBase = 90;
		var sides = {}, maxSide = 0;
		groupIds.forEach(function(gid) {
			var s = Math.ceil(Math.sqrt(groups[gid].length)) * idealBase + 80;
			sides[gid] = s;
			if (s > maxSide) maxSide = s;
		});
		var rowW = Math.max(W * 1.5, maxSide);
		var regions = {};
		var curX = 0, curY = 0, rowH = 0;
		groupIds.slice().sort(function(a, b) {
			return sides[b] - sides[a];
		}).forEach(function(gid) {
			var s = sides[gid];
			if (curX > 0 && curX + s > rowW) {
				curX = 0;
				curY += rowH + 70;
				rowH = 0;
			}
			regions[gid] = {
				x: curX,
				y: curY,
				w: s,
				h: s
			};
			curX += s + 70;
			if (s > rowH) rowH = s;
		});
		groupIds.forEach(function(gid) {
			var reg = regions[gid];
			var boxW = reg.w, boxH = reg.h;
			var members = groups[gid];
			var n = members.length;
			if (!n) return;
			members.forEach(function(nid, mi) {
				var seed = 5381;
				for (var j = 0; j < nid.length; j++) seed = seed * 31 + nid.charCodeAt(j) >>> 0;
				var rx = (Math.abs(Math.sin(seed)) * .9 + mi * .6180339887) % .9;
				var ry = (Math.abs(Math.cos(seed * 1.7)) * .9 + mi * .3819660113) % .9;
				posRef.current[nid] = {
					x: reg.x + 40 + rx * (boxW - 80),
					y: reg.y + 40 + ry * (boxH - 80),
					vx: 0,
					vy: 0
				};
			});
			var ideal = idealBase;
			var rep = 24e3;
			var maxSpd = 7;
			var minDist = minDistBase;
			var mX = boxW * .22, mY = boxH * .22;
			function clamp(p) {
				p.x = Math.max(reg.x - mX, Math.min(reg.x + boxW + mX, p.x));
				p.y = Math.max(reg.y - mY, Math.min(reg.y + boxH + mY, p.y));
			}
			function disp(p, q, want) {
				var dx = p.x - q.x, dy = p.y - q.y;
				var d2 = dx * dx + dy * dy;
				if (d2 < .01) {
					dx = Math.random() - .5;
					dy = Math.random() - .5;
					d2 = dx * dx + dy * dy || 1;
				}
				var d = Math.sqrt(d2);
				if (d > want) return 0;
				var f = (want - d) / d;
				dx = dx * f;
				dy = dy * f;
				p.x += dx / 2;
				p.y += dy / 2;
				q.x -= dx / 2;
				q.y -= dy / 2;
				return 1;
			}
			for (var iter = 0; iter < 90; iter++) {
				members.forEach(function(nid) {
					var p = posRef.current[nid];
					p.vx = 0;
					p.vy = 0;
				});
				for (var i = 0; i < n; i++) for (var j = i + 1; j < n; j++) {
					var a = posRef.current[members[i]], b = posRef.current[members[j]];
					var dx = a.x - b.x, dy = a.y - b.y;
					var d2 = dx * dx + dy * dy;
					if (!(d2 > 1e-6)) {
						dx = (i % 2 === 0 ? 1 : -1) * (.5 + Math.random());
						dy = (j % 2 === 0 ? -1 : 1) * (.5 + Math.random());
						d2 = dx * dx + dy * dy;
					}
					var d = Math.sqrt(d2);
					var f = rep / d2 / Math.max(1, d);
					var fx = dx / d * f, fy = dy / d * f;
					a.vx += fx;
					a.vy += fy;
					b.vx -= fx;
					b.vy -= fy;
				}
				members.forEach(function(nid) {
					var conns = localAdj[nid];
					if (!conns) return;
					var pa = posRef.current[nid];
					for (var k = 0; k < conns.length; k++) {
						var pb = posRef.current[conns[k]];
						if (!pb) continue;
						var dx2 = pb.x - pa.x, dy2 = pb.y - pa.y;
						var dd = Math.sqrt(dx2 * dx2 + dy2 * dy2) || 1;
						var stretch = (dd - ideal) * .1;
						var fx2 = dx2 / dd * stretch, fy2 = dy2 / dd * stretch;
						pa.vx += fx2;
						pa.vy += fy2;
						pb.vx -= fx2;
						pb.vy -= fy2;
					}
				});
				members.forEach(function(nid) {
					var p = posRef.current[nid];
					p.x += Math.max(-maxSpd, Math.min(maxSpd, p.vx));
					p.y += Math.max(-maxSpd, Math.min(maxSpd, p.vy));
					if (!isFinite(p.x) || !isFinite(p.y)) {
						p.x = reg.x + 40 + Math.random() * Math.max(1, boxW - 80);
						p.y = reg.y + 40 + Math.random() * Math.max(1, boxH - 80);
					}
					clamp(p);
				});
				for (var s = 0; s < 8; s++) {
					var any = false;
					for (var i2 = 0; i2 < n; i2++) for (var j2 = i2 + 1; j2 < n; j2++) if (disp(posRef.current[members[i2]], posRef.current[members[j2]], minDist)) {
						any = true;
						clamp(posRef.current[members[i2]]);
						clamp(posRef.current[members[j2]]);
					}
					if (!any) break;
				}
			}
			members.forEach(function(nid) {
				var p = posRef.current[nid];
				delete p.vx;
				delete p.vy;
			});
		});
		needFitRef.current = true;
	}
	function fitView() {
		var minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
		nodes.forEach(function(nn) {
			var p = posRef.current[nn.id];
			if (!p) return;
			if (p.x < minX) minX = p.x;
			if (p.y < minY) minY = p.y;
			if (p.x > maxX) maxX = p.x;
			if (p.y > maxY) maxY = p.y;
		});
		if (!(maxX >= minX)) return;
		needFitRef.current = false;
		var pad = 46;
		var bw = Math.max(1, maxX - minX), bh = Math.max(1, maxY - minY);
		var k = Math.min(1.25, (W - pad * 2) / bw, (H - pad * 2) / bh);
		k = Math.max(.05, Math.min(k, 1.25));
		viewRef.current.k = k;
		viewRef.current.tx = (W - bw * k) / 2 - minX * k;
		viewRef.current.ty = (H - bh * k) / 2 - minY * k;
		applyView();
		setZoomPct(Math.round(viewRef.current.k * 100));
	}
	if (nodes.some(function(n) {
		return !posRef.current[n.id];
	})) layoutPositions();
	var alive = {};
	nodes.forEach(function(node) {
		alive[node.id] = true;
	});
	Object.keys(posRef.current).forEach(function(id) {
		if (!alive[id]) delete posRef.current[id];
	});
	edgesRef.current = edges;
	var adj = {};
	edges.forEach(function(e, i) {
		(adj[e.a] = adj[e.a] || []).push({
			idx: i,
			end: "a"
		});
		(adj[e.b] = adj[e.b] || []).push({
			idx: i,
			end: "b"
		});
	});
	adjRef.current = adj;
	function svgScale() {
		var el = svgRef.current;
		if (!el) return {
			sx: 1,
			sy: 1
		};
		var r = el.getBoundingClientRect();
		return {
			sx: W / Math.max(1, r.width),
			sy: H / Math.max(1, r.height)
		};
	}
	function applyView() {
		var v = viewRef.current;
		if (gRef.current) gRef.current.setAttribute("transform", "translate(" + v.tx + "," + v.ty + ") scale(" + v.k + ")");
	}
	function syncNode(id) {
		var p = posRef.current[id];
		var el = nodeElsRef.current[id];
		if (el && p) el.setAttribute("transform", "translate(" + p.x + "," + p.y + ")");
	}
	function syncLine(i) {
		var el = lineElsRef.current[i];
		var e = edgesRef.current[i];
		if (!el || !e) return;
		var pa = posRef.current[e.a], pb = posRef.current[e.b];
		if (pa) {
			el.setAttribute("x1", pa.x);
			el.setAttribute("y1", pa.y);
		}
		if (pb) {
			el.setAttribute("x2", pb.x);
			el.setAttribute("y2", pb.y);
		}
	}
	function zoomBy(f) {
		var v = viewRef.current;
		var nk = Math.max(.05, Math.min(8, v.k * f));
		if (nk === v.k) return;
		v.k = nk;
		applyView();
		setZoomPct(Math.round(v.k * 100));
	}
	function onWheel(evt) {
		var sc = svgScale();
		var r = svgRef.current.getBoundingClientRect();
		var px = (evt.clientX - r.left) * sc.sx;
		var py = (evt.clientY - r.top) * sc.sy;
		var v = viewRef.current;
		var f = evt.deltaY < 0 ? 1.15 : 1 / 1.15;
		var oldK = v.k;
		var nk = Math.max(.05, Math.min(8, oldK * f));
		if (nk === oldK) return;
		v.k = nk;
		v.tx = px - (px - v.tx) * (nk / oldK);
		v.ty = py - (py - v.ty) * (nk / oldK);
		applyView();
		setZoomPct(Math.round(v.k * 100));
	}
	function onSvgMouseDown(evt) {
		if (evt.button !== 0) return;
		evt.preventDefault();
		var sc = svgScale();
		dragRef.current = {
			type: "pan",
			sx: evt.clientX,
			sy: evt.clientY,
			tx: viewRef.current.tx,
			ty: viewRef.current.ty,
			sxScale: sc.sx,
			syScale: sc.sy,
			moved: false
		};
	}
	function onNodeMouseDown(evt, id) {
		if (evt.button !== 0) return;
		evt.stopPropagation();
		evt.preventDefault();
		var sc = svgScale();
		var p = posRef.current[id];
		dragRef.current = {
			type: "node",
			id,
			sx: evt.clientX,
			sy: evt.clientY,
			ox: p.x,
			oy: p.y,
			sxScale: sc.sx,
			syScale: sc.sy,
			moved: false
		};
	}
	function onMouseMove(evt) {
		var d = dragRef.current;
		if (!d) return;
		var dx = (evt.clientX - d.sx) * d.sxScale;
		var dy = (evt.clientY - d.sy) * d.syScale;
		if (Math.abs(dx) > 3 || Math.abs(dy) > 3) d.moved = true;
		if (d.type === "pan") {
			viewRef.current.tx = d.tx + dx;
			viewRef.current.ty = d.ty + dy;
			applyView();
		} else if (d.type === "node") {
			var p = posRef.current[d.id];
			p.x = d.ox + dx / viewRef.current.k;
			p.y = d.oy + dy / viewRef.current.k;
			syncNode(d.id);
			var conns = adjRef.current[d.id] || [];
			for (var ci = 0; ci < conns.length; ci++) syncLine(conns[ci].idx);
		}
	}
	function onMouseUp() {
		var d = dragRef.current;
		if (!d) return;
		if (!d.moved) {
			if (d.type === "node") {
				var clickedId = d.id;
				setSelected(function(prev) {
					return prev === clickedId ? null : clickedId;
				});
			} else if (d.type === "pan") setSelected(null);
		}
		dragRef.current = null;
	}
	function reset() {
		setSelected(null);
		posRef.current = {};
		layoutPositions();
		fitView();
		nodes.forEach(function(n) {
			syncNode(n.id);
		});
		for (var i = 0; i < edges.length; i++) syncLine(i);
		if (props.onReset) props.onReset();
	}
	react.default.useEffect(function() {
		function move(evt) {
			onMouseMove(evt);
		}
		function up() {
			onMouseUp();
		}
		window.addEventListener("mousemove", move);
		window.addEventListener("mouseup", up);
		var el = svgRef.current;
		function wheel(evt) {
			evt.preventDefault();
			onWheel(evt);
		}
		if (el) el.addEventListener("wheel", wheel, { passive: false });
		return function() {
			window.removeEventListener("mousemove", move);
			window.removeEventListener("mouseup", up);
			if (el) el.removeEventListener("wheel", wheel);
		};
	}, []);
	react.default.useEffect(function() {
		if (needFitRef.current) fitView();
	}, [nodes.length]);
	var hlNodes = {}, hlEdges = {};
	var selNode = null;
	if (sel) {
		for (var ni = 0; ni < nodes.length; ni++) if (nodes[ni].id === sel) {
			selNode = nodes[ni];
			break;
		}
		hlNodes[sel] = true;
		(adj[sel] || []).forEach(function(c) {
			var e = edges[c.idx];
			hlEdges[c.idx] = true;
			hlNodes[e.a] = true;
			hlNodes[e.b] = true;
		});
	}
	var lines = [];
	for (var i = 0; i < edges.length; i++) {
		var e = edges[i];
		var pa = posRef.current[e.a], pb = posRef.current[e.b];
		if (!pa || !pb) continue;
		var isHL = !!hlEdges[i];
		var dim = sel && !isHL;
		var baseW = Math.max(.5, Math.min(3, e.weight * .5)) * lineWArr;
		lines.push((0, react.createElement)("line", {
			key: "e" + i,
			ref: (function(idx) {
				return function(el) {
					if (el) lineElsRef.current[idx] = el;
					else delete lineElsRef.current[idx];
				};
			})(i),
			x1: pa.x,
			y1: pa.y,
			x2: pb.x,
			y2: pb.y,
			stroke: isHL ? "rgba(255,200,80,0.9)" : "rgba(120,130,200,0.5)",
			strokeWidth: baseW * (isHL ? 2 : 1),
			opacity: dim ? .25 : 1,
			vectorEffect: "non-scaling-stroke"
		}));
	}
	var circles = nodes.map(function(node) {
		var p = posRef.current[node.id];
		var r = 6 + Math.min(16, 4 + node.weight * 1.2);
		var isHL = !!hlNodes[node.id];
		var dim = sel && !isHL;
		var isCenter = sel === node.id;
		return (0, react.createElement)("g", {
			key: node.id,
			ref: (function(nid) {
				return function(el) {
					if (el) nodeElsRef.current[nid] = el;
					else delete nodeElsRef.current[nid];
				};
			})(node.id),
			transform: "translate(" + p.x + "," + p.y + ")",
			onMouseDown: function(evt) {
				onNodeMouseDown(evt, node.id);
			},
			style: {
				cursor: "pointer",
				opacity: dim ? .35 : 1,
				transition: "opacity 0.15s"
			}
		}, (0, react.createElement)("circle", {
			cx: 0,
			cy: 0,
			r,
			fill: isCenter ? "rgba(255,200,80,0.95)" : isHL ? "rgba(255,180,60,0.85)" : "rgba(100,120,230,0.8)",
			stroke: isHL ? "rgba(255,220,120,0.7)" : "rgba(255,255,255,0.18)",
			strokeWidth: isHL ? 2.5 : 1
		}), (0, react.createElement)("text", {
			x: 0,
			y: r + 13,
			textAnchor: "middle",
			className: "dshm-node-label"
		}, node.label));
	});
	var selInfo = null;
	if (selNode) {
		var neighbors = [];
		(adj[sel] || []).forEach(function(c) {
			var e = edges[c.idx];
			var otherId = e.a === sel ? e.b : e.a;
			neighbors.push({
				id: otherId,
				weight: e.weight
			});
		});
		neighbors.sort(function(a, b) {
			return b.weight - a.weight;
		});
		selInfo = (0, react.createElement)("div", { className: "dshm-selinfo" }, (0, react.createElement)("div", { className: "dshm-selinfo-title" }, selNode.label + " （关联 " + neighbors.length + " 个实体）"), neighbors.length ? (0, react.createElement)("div", { className: "dshm-selinfo-neighbors" }, neighbors.map(function(nb) {
			return (0, react.createElement)("span", {
				key: nb.id,
				className: "dshm-tag"
			}, nb.id + " ×" + nb.weight);
		})) : null);
	}
	return (0, react.createElement)("div", { className: "dshm-graph" }, (0, react.createElement)("div", { className: "dshm-graph-toolbar" }, (0, react.createElement)("span", { className: "dshm-mod" }, (0, react.createElement)("button", {
		onClick: function() {
			zoomBy(1.3);
		},
		title: "放大"
	}, "+"), (0, react.createElement)("span", { className: "dshm-count" }, zoomPct + "%"), (0, react.createElement)("button", {
		onClick: function() {
			zoomBy(1 / 1.3);
		},
		title: "缩小"
	}, "−"), (0, react.createElement)("button", {
		onClick: reset,
		title: "重置视图与布局"
	}, "重置")), props.extraControl || null, (0, react.createElement)("span", { className: "dshm-mod dshm-mod-wid" }, (0, react.createElement)("span", { className: "dshm-label" }, "线粗"), (0, react.createElement)("input", {
		type: "range",
		min: .5,
		max: 5,
		step: .1,
		value: lineWArr,
		onChange: function(e) {
			setLineW(Number(e.target.value));
		},
		style: { width: "80px" }
	}), (0, react.createElement)("span", { className: "dshm-count" }, lineWArr.toFixed(1) + "x")), sel ? (0, react.createElement)("span", { className: "dshm-count" }, "已选：" + sel) : null), (0, react.createElement)("svg", {
		ref: svgRef,
		width: W,
		height: H,
		className: "dshm-svg",
		onMouseDown: onSvgMouseDown,
		style: { touchAction: "none" }
	}, (0, react.createElement)("g", {
		ref: gRef,
		transform: "translate(0,0) scale(1)"
	}, lines, circles)), selInfo, (0, react.createElement)("div", { className: "dshm-hint" }, "点击节点高亮关联链 · 拖拽节点移动 · 滚轮缩放（最小 5%） · 拖拽空白平移"));
}
function ConfigForm(props) {
	var apiBase = react.default.useState("");
	var setApiBase = apiBase[1];
	apiBase = apiBase[0];
	var apiKey = react.default.useState("");
	var setApiKey = apiKey[1];
	apiKey = apiKey[0];
	var model = react.default.useState("");
	var setModel = model[1];
	model = model[0];
	var dimensions = react.default.useState("");
	var setDimensions = dimensions[1];
	dimensions = dimensions[0];
	var enabled = react.default.useState(false);
	var setEnabled = enabled[1];
	enabled = enabled[0];
	var organize = react.default.useState(true);
	var setOrganize = organize[1];
	organize = organize[0];
	var busy = react.default.useState(false);
	var setBusy = busy[1];
	busy = busy[0];
	react.default.useEffect(function() {
		if (!props.cfg) return;
		setApiBase(props.cfg.apiBase || "");
		setApiKey(props.cfg.apiKey || "");
		setModel(props.cfg.model || "");
		setDimensions(props.cfg.dimensions ? String(props.cfg.dimensions) : "");
		setEnabled(!!props.cfg.enabled);
		setOrganize(props.cfg.organizeWithModel !== false);
	}, [props.cfg]);
	function persist() {
		return apiPost("/config", {
			apiBase,
			apiKey,
			model,
			dimensions: Number(dimensions) || 0,
			enabled,
			organizeWithModel: organize
		});
	}
	function save() {
		setBusy(true);
		persist().then(function(c) {
			props.onSaved(c);
			setBusy(false);
		}).catch(function(e) {
			props.onStatus("保存失败：" + String(e && e.message || e));
			setBusy(false);
		});
	}
	function test() {
		setBusy(true);
		persist().then(function() {
			return apiGet("/test");
		}).then(function(r) {
			props.onTest(r);
			setBusy(false);
		}).catch(function(e) {
			props.onTest({
				ok: false,
				error: String(e && e.message || e)
			});
			setBusy(false);
		});
	}
	return (0, react.createElement)("div", { className: "dshm-form" }, field("API Base（OpenAI 兼容，如 https://api.openai.com/v1）", (0, react.createElement)("input", {
		type: "text",
		value: apiBase,
		placeholder: "https://api.openai.com/v1",
		onChange: function(e) {
			setApiBase(e.target.value);
		}
	})), field("API Key", (0, react.createElement)("input", {
		type: "password",
		value: apiKey,
		placeholder: "sk-…",
		autoComplete: "off",
		onChange: function(e) {
			setApiKey(e.target.value);
		}
	})), field("嵌入模型", (0, react.createElement)("input", {
		type: "text",
		value: model,
		placeholder: "text-embedding-3-small",
		onChange: function(e) {
			setModel(e.target.value);
		}
	})), field("嵌入维度（0 = 模型默认）", (0, react.createElement)("input", {
		type: "number",
		value: dimensions,
		placeholder: "0",
		onChange: function(e) {
			setDimensions(e.target.value);
		}
	})), field("启用向量检索", (0, react.createElement)("input", {
		type: "checkbox",
		checked: enabled,
		onChange: function(e) {
			setEnabled(e.target.checked);
		}
	})), field("用编程模型整理记忆", (0, react.createElement)("input", {
		type: "checkbox",
		checked: organize,
		onChange: function(e) {
			setOrganize(e.target.checked);
		}
	})), (0, react.createElement)("div", { className: "dshm-actions" }, (0, react.createElement)("button", {
		onClick: save,
		disabled: busy
	}, "保存"), (0, react.createElement)("button", {
		onClick: test,
		disabled: busy
	}, "测试连接")), (0, react.createElement)("div", { className: "dshm-hint" }, "记忆与配置保存在工作区根目录的 .dsh-memory-config.json 与 .dsh-memory-store.json 文件中；API Key 为明文保存，请勿提交到版本库。"));
}
function stageLabel(stage) {
	if (stage === "organizing") return "整理中…";
	if (stage === "embedding") return "向量化中…";
	if (stage === "done") return "已添加";
	if (stage === "error") return "失败";
	return "处理中…";
}
function PendingList(props) {
	var items = props.items || [];
	if (!items.length) return null;
	return (0, react.createElement)("div", { className: "dshm-pending" }, items.map(function(p) {
		var active = p.stage === "organizing" || p.stage === "embedding";
		var cls = p.stage === "done" ? "dshm-stage dshm-stage-done" : p.stage === "error" ? "dshm-stage dshm-stage-err" : "dshm-stage";
		var src = p.source === "agent" ? "AI" : "人工";
		var tip = p.stage === "error" ? p.error || "失败" : src + "：" + (p.preview || "");
		return (0, react.createElement)("div", {
			className: "dshm-pending-item",
			key: p.id,
			title: tip
		}, active ? (0, react.createElement)("span", { className: "dshm-spinner" }) : (0, react.createElement)("span", {
			className: "dshm-stage",
			style: { width: "14px" }
		}, p.stage === "done" ? "✓" : p.stage === "error" ? "✗" : ""), (0, react.createElement)("span", { className: "dshm-pending-preview" }, p.preview || ""), (0, react.createElement)("span", { className: cls }, stageLabel(p.stage)));
	}));
}
function MemoryBrowser(props) {
	var items = react.default.useState([]);
	var setItems = items[1];
	items = items[0];
	var total = react.default.useState(0);
	var setTotal = total[1];
	total = total[0];
	var query = react.default.useState("");
	var setQuery = query[1];
	query = query[0];
	var type = react.default.useState("all");
	var setType = type[1];
	type = type[0];
	var draft = react.default.useState("");
	var setDraft = draft[1];
	draft = draft[0];
	var draftType = react.default.useState("note");
	var setDraftType = draftType[1];
	draftType = draftType[0];
	var pending = react.default.useState([]);
	var setPending = pending[1];
	pending = pending[0];
	var wasBusyRef = react.default.useRef(false);
	var debounceRef = react.default.useRef(null);
	var seqRef = react.default.useRef(0);
	function load(q, t) {
		var seq = ++seqRef.current;
		if (q && q.trim()) apiPost("/search", {
			query: q,
			limit: 50
		}).then(function(r) {
			if (seq !== seqRef.current) return;
			setItems(r.items);
			setTotal(r.items.length);
		}).catch(function() {});
		else apiGet("/list?limit=100&type=" + (t || "all")).then(function(r) {
			if (seq !== seqRef.current) return;
			setItems(r.items);
			setTotal(r.total);
		}).catch(function() {});
	}
	function onQueryChange(val) {
		setQuery(val);
		if (debounceRef.current) window.clearTimeout(debounceRef.current);
		debounceRef.current = window.setTimeout(function() {
			load(val, type);
		}, 300);
	}
	react.default.useEffect(function() {
		load("", "all");
		var alive = true;
		function tick() {
			apiGet("/pending").then(function(r) {
				if (!alive) return;
				setPending(r.items || []);
				var busy = (r.items || []).some(function(p) {
					return p.stage === "organizing" || p.stage === "embedding";
				});
				if (wasBusyRef.current && !busy) load(query, type);
				wasBusyRef.current = busy;
			}).catch(function() {});
		}
		var id = window.setInterval(tick, 1200);
		tick();
		return function() {
			alive = false;
			window.clearInterval(id);
		};
	}, []);
	function remove(id) {
		apiPost("/delete", { id }).then(function() {
			load(query, type);
		});
	}
	function add() {
		var c = draft.trim();
		if (!c) return;
		apiPost("/add", {
			content: c,
			type: draftType,
			tags: []
		}).then(function(r) {
			setDraft("");
			props.onStatus(r.ok ? "已提交：" + (r.summary || r.id) : "保存失败：" + (r.error || ""));
		}).catch(function(e) {
			props.onStatus("保存失败：" + String(e && e.message || e));
		});
	}
	return (0, react.createElement)("div", { className: "dshm-browser" }, (0, react.createElement)("div", { className: "dshm-browbar" }, (0, react.createElement)("input", {
		className: "dshm-search",
		value: query,
		placeholder: "搜索记忆…",
		onChange: function(e) {
			onQueryChange(e.target.value);
		}
	}), (0, react.createElement)("select", {
		value: type,
		onChange: function(e) {
			setType(e.target.value);
			load(query && query.trim() ? query : "", e.target.value);
		}
	}, (0, react.createElement)("option", { value: "all" }, "全部"), (0, react.createElement)("option", { value: "pitfall" }, "坑"), (0, react.createElement)("option", { value: "knowledge" }, "知识"), (0, react.createElement)("option", { value: "note" }, "笔记"))), (0, react.createElement)(PendingList, { items: pending }), (0, react.createElement)("div", { className: "dshm-count" }, "共 " + total + " 条"), (0, react.createElement)("div", { className: "dshm-card" }, (0, react.createElement)("textarea", {
		rows: 2,
		value: draft,
		placeholder: "手动添加一条记忆…",
		onChange: function(e) {
			setDraft(e.target.value);
		}
	}), (0, react.createElement)("div", { className: "dshm-browbar" }, (0, react.createElement)("select", {
		value: draftType,
		onChange: function(e) {
			setDraftType(e.target.value);
		}
	}, (0, react.createElement)("option", { value: "note" }, "笔记"), (0, react.createElement)("option", { value: "pitfall" }, "坑"), (0, react.createElement)("option", { value: "knowledge" }, "知识")), (0, react.createElement)("button", { onClick: add }, "添加"))), items.map(function(m) {
		return (0, react.createElement)("div", {
			className: "dshm-card",
			key: m.id
		}, (0, react.createElement)("div", { className: "dshm-card-head" }, (0, react.createElement)("span", { className: "dshm-badge dshm-badge-" + (m.type || "note") }, typeLabel(m.type)), (0, react.createElement)("span", { className: "dshm-summary" }, m.summary), (0, react.createElement)("button", {
			className: "dshm-del",
			onClick: function() {
				remove(m.id);
			}
		}, "删除")), (0, react.createElement)("div", { className: "dshm-content" }, m.content), m.tags && m.tags.length ? (0, react.createElement)("div", { className: "dshm-tags" }, m.tags.map(function(t) {
			return (0, react.createElement)("span", {
				className: "dshm-tag",
				key: t
			}, t);
		})) : null);
	}));
}
function GraphView() {
	var data = react.default.useState(null);
	var setData = data[1];
	data = data[0];
	var limitInput = react.default.useState("50");
	var setLimitInput = limitInput[1];
	limitInput = limitInput[0];
	var appliedLimit = react.default.useState(50);
	var setAppliedLimit = appliedLimit[1];
	appliedLimit = appliedLimit[0];
	react.default.useEffect(function() {
		apiGet("/graph?limit=" + appliedLimit + "&t=" + Date.now()).then(setData).catch(function() {
			setData({
				nodes: [],
				edges: [],
				totalEntities: 0,
				limit: 0
			});
		});
	}, [appliedLimit]);
	if (!data) return (0, react.createElement)("div", { className: "dshm-empty" }, "加载中…");
	if (!data.nodes || !data.nodes.length) return (0, react.createElement)("div", { className: "dshm-empty" }, "暂无实体。先保存几条带实体（关键词）的记忆。");
	var trunc = data.totalEntities > data.nodes.length;
	function applyLimit() {
		var n = Math.max(3, Math.min(200, parseInt(limitInput, 10) || 50));
		setLimitInput(String(n));
		if (n === appliedLimit) return;
		setAppliedLimit(n);
	}
	function resetSession() {
		setLimitInput("50");
		setAppliedLimit(50);
	}
	var countModule = (0, react.createElement)("span", { className: "dshm-mod dshm-mod-wid" }, (0, react.createElement)("span", { className: "dshm-label" }, "实体数量"), (0, react.createElement)("input", {
		type: "number",
		min: 3,
		max: 200,
		value: limitInput,
		onChange: function(e) {
			setLimitInput(e.target.value);
		},
		onKeyDown: function(e) {
			if (e.key === "Enter") applyLimit();
		},
		style: { width: "56px" },
		title: "仅对当前有效，重新打开后恢复默认 50"
	}), (0, react.createElement)("button", { onClick: applyLimit }, "应用"));
	return (0, react.createElement)("div", { className: "dshm-graph" }, (0, react.createElement)(GraphCanvas, {
		nodes: data.nodes,
		edges: data.edges,
		extraControl: countModule,
		onReset: resetSession
	}), (0, react.createElement)("div", { className: "dshm-hint" }, "实体 " + data.nodes.length + " 个 · 关系 " + data.edges.length + " 条 · 共 " + data.totalEntities + " 个实体" + (trunc ? "，当前显示前 " + data.nodes.length + " 个（可用上方实体数量调整）" : "，已全部显示（调大数量画面不会再变）")));
}
function UpdateBanner(props) {
	var info = props.info;
	var onDone = props.onDone || function() {};
	var zh = (typeof navigator !== "undefined" && navigator.language || "").toLowerCase().indexOf("zh") === 0;
	var L = zh ? {
		title: "插件有更新：",
		ignore: "忽略",
		ignoreV: "忽略这个版本",
		update: "更新",
		fail: "更新失败：",
		opFail: "操作失败：",
		stepDl: "正在下载新版本…",
		stepIn: "正在安装文件…"
	} : {
		title: "Update available: ",
		ignore: "Dismiss",
		ignoreV: "Skip this version",
		update: "Update",
		fail: "Update failed: ",
		opFail: "Operation failed: ",
		stepDl: "Downloading new version…",
		stepIn: "Installing files…"
	};
	var logText = zh && info.changelogZh ? info.changelogZh : info.changelog;
	var busyArr = react.default.useState(false);
	var setBusy = busyArr[1];
	busyArr = busyArr[0];
	var msgArr = react.default.useState("");
	var setMsg = msgArr[1];
	msgArr = msgArr[0];
	var phaseArr = react.default.useState("");
	var setPhase = phaseArr[1];
	phaseArr = phaseArr[0];
	function doIgnore() {
		onDone({ action: "dismiss" });
	}
	function doIgnoreVersion() {
		setBusy(true);
		apiPost("/update/ignore", { version: info.latest }).then(function() {
			onDone({ action: "ignoreVersion" });
		}).catch(function(e) {
			setBusy(false);
			setMsg(L.opFail + String(e && e.message || e));
		});
	}
	function doUpdate() {
		setBusy(true);
		setMsg("");
		setPhase("dl");
		apiPost("/update/prepare", {}).then(function(p) {
			if (!(p && p.ok)) throw new Error(p && p.error || "prepare failed");
			setPhase("in");
			return apiPost("/update/apply", {});
		}).then(function(a) {
			if (!(a && a.ok)) throw new Error(a && a.error || "apply failed");
			onDone({
				action: "updated",
				to: a.to
			});
		}).catch(function(e) {
			setBusy(false);
			setPhase("");
			setMsg(L.fail + String(e && e.message || e));
		});
	}
	var stepText = phaseArr === "dl" ? L.stepDl : phaseArr === "in" ? L.stepIn : "";
	return (0, react.createElement)("div", { className: "dshm-update" }, (0, react.createElement)("div", { className: "dshm-update-title" }, L.title + "v" + info.current + " → v" + info.latest), logText ? (0, react.createElement)("div", { className: "dshm-update-log" }, logText) : null, (0, react.createElement)("div", { className: "dshm-update-actions" }, (0, react.createElement)("button", {
		onClick: doIgnore,
		disabled: busyArr
	}, L.ignore), (0, react.createElement)("button", {
		onClick: doIgnoreVersion,
		disabled: busyArr
	}, L.ignoreV), (0, react.createElement)("button", {
		onClick: doUpdate,
		disabled: busyArr
	}, busyArr ? zh ? "更新中…" : "Updating…" : L.update), busyArr ? (0, react.createElement)("span", { className: "dshm-spinner" }) : null, stepText ? (0, react.createElement)("span", { className: "dshm-update-msg" }, stepText) : null, msgArr && !busyArr ? (0, react.createElement)("span", { className: "dshm-update-msg" }, msgArr) : null));
}
function MemorySettings() {
	var tab = react.default.useState("config");
	var setTab = tab[1];
	tab = tab[0];
	var cfg = react.default.useState(null);
	var setCfg = cfg[1];
	cfg = cfg[0];
	var stats = react.default.useState(null);
	var setStats = stats[1];
	stats = stats[0];
	var status = react.default.useState("");
	var setStatus = status[1];
	status = status[0];
	var upd = react.default.useState(null);
	var setUpd = upd[1];
	upd = upd[0];
	function refresh() {
		apiGet("/config").then(setCfg).catch(function(e) {
			setStatus("读取配置失败：" + String(e && e.message || e));
		});
		apiGet("/stats").then(setStats).catch(function() {});
	}
	react.default.useEffect(refresh, []);
	react.default.useEffect(function() {
		apiGet("/update/check").then(setUpd).catch(function() {});
	}, []);
	function onUpdateDone(r) {
		if (r && r.action === "updated") {
			setStatus((typeof navigator !== "undefined" && navigator.language || "").toLowerCase().indexOf("zh") === 0 ? "✔ 已更新到 v" + r.to + "，重启 dsh web 后生效" : "✔ Updated to v" + r.to + " — restart dsh web to apply");
			refresh();
		}
		setUpd(null);
	}
	var ignoredV = String(cfg && cfg.ignoredUpdateVersion || upd && upd.ignoredVersion || "");
	var showUpdate = !!(upd && upd.ok && upd.hasUpdate && String(upd.latest) !== ignoredV);
	ensureCSS();
	return (0, react.createElement)("div", { className: "dshm-root" }, showUpdate ? (0, react.createElement)(UpdateBanner, {
		info: upd,
		onDone: onUpdateDone
	}) : null, (0, react.createElement)("div", { className: "dshm-tabs" }, (0, react.createElement)("button", {
		className: "dshm-tab" + (tab === "config" ? " dshm-tab-on" : ""),
		onClick: function() {
			setTab("config");
		}
	}, "配置"), (0, react.createElement)("button", {
		className: "dshm-tab" + (tab === "browse" ? " dshm-tab-on" : ""),
		onClick: function() {
			setTab("browse");
		}
	}, "记忆库"), (0, react.createElement)("button", {
		className: "dshm-tab" + (tab === "graph" ? " dshm-tab-on" : ""),
		onClick: function() {
			setTab("graph");
		}
	}, "关系图")), stats ? (0, react.createElement)("div", { className: "dshm-banner" }, "记忆 " + stats.count + " 条 · 实体 " + stats.entityCount + " 个") : null, status ? (0, react.createElement)("div", { className: "dshm-status" }, status) : null, tab === "config" ? (0, react.createElement)(ConfigForm, {
		cfg,
		onSaved: function(c) {
			setCfg(c);
			setStatus("已保存");
		},
		onTest: function(r) {
			setStatus(r.ok ? "连接成功，向量维度 " + r.dimensions : "测试失败：" + (r.error || "未知错误"));
		},
		onStatus: setStatus
	}) : tab === "browse" ? (0, react.createElement)(MemoryBrowser, { onStatus: setStatus }) : (0, react.createElement)(ErrorBoundary, null, (0, react.createElement)(GraphView, null)));
}
//#endregion
module.exports = {
	inject: ["slots"],
	apply: function(ctx) {
		ensureCSS();
		ctx.slots.inject("settings.section", function() {
			return ctx.slots.register({
				name: "settings.section",
				id: "memory",
				order: 30,
				label: "记忆 / Memory"
			}, function() {
				return (0, react.createElement)(MemorySettings, null);
			});
		});
	}
};

return module.exports; } });