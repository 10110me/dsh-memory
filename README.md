# dsh-memory

Persistent programming memory for [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) (DSH). Store pitfalls, lessons, knowledge and notes; search them fast (keyword + embedding); browse an interactive entity-relationship graph; let the current programming model help organize your memory.

## Features

- **Memory store** — save `pitfall` / `knowledge` / `note` memories, persisted to `.dsh-memory-store.json` in the workspace root.
- **Model-assisted organization** — when saving, the current model extracts a summary, tags and named entities.
- **Semantic search option** — configure an OpenAI-compatible embedding API for vector retrieval.
- **Fast keyword search** — built-in inverted index; searches on every keystroke with debounce, no button needed, millisecond responses.
- **Entity relationship graph** — browse memories as an entity graph with zoom, pan, drag, click-to-highlight connected chains, adjustable edge width, and force-directed layout that groups connected components with clear spacing.
- **4 model-facing tools** — `memory_save`, `memory_search`, `memory_list`, `memory_delete`.
- **System prompt guidance** — tells DSH to search memory before non-trivial work and save pitfalls as they happen.
- **DSH Web settings panel** — a 「记忆 / Memory」section with Config / Memory / Graph tabs.

## Project layout

This is a standard DSH plugin package built with TypeScript + tsdown.

```
dsh-memory/
├── src/
│   ├── index.ts        # Host plugin: tools, HTTP API, keyword search, system prompt (strict TS)
│   └── client/
│       └── index.tsx   # Client bundle: settings UI + graph canvas (built by tsdown)
├── client/client.js    # Built __ModuleLoader__ bundle
├── lib/index.js        # Built ESM host bundle
├── cordis.patch.yml    # Injects the plugin row at boot
├── tsconfig.json       # Host typecheck
├── tsconfig.client.json# Client typecheck
├── tsdown.config.ts    # Build pipeline (host ESM + client __ModuleLoader__ factory)
├── vitest.config.ts    # Test runner
└── tests/              # vitest smoke tests over the build artifacts
```

## Build

```bash
pnpm install
pnpm build        # tsc typecheck (host) + tsdown (host + client bundles)
pnpm test         # vitest smoke tests over the build output
pnpm check        # typecheck + build + restart-smoke (requires a live DSH)
```

## Install into a DSH profile

Copy the built package into a profile and register the bundle:

1. Copy this directory to `<profile>/node_modules/dsh-memory/`.
2. Edit `<profile>/package.json`:
   - add `"dsh-memory": "file:./dsh-memory"` to `dependencies`
   - append `"dsh-memory"` to `dsh.profile.bundles`
3. Ensure `<profile>/cordis.patch.yml` is `[]` (the bundle's own patch injects the plugin).
4. Restart `dsh web`.

## Configuration

The DSH Web settings → 「记忆 / Memory」→ Config tab exposes:

| Field | Description |
|-------|-------------|
| API Base | OpenAI-compatible endpoint, e.g. `https://api.openai.com/v1` |
| API Key | Secret for the embedding service |
| Model | e.g. `text-embedding-3-small`, `qwen3-embedding-8b` |
| Embedding dimensions | `0` = use the model default |
| Max graph nodes | 3–200, default 50 |
| Enable vector search | off = keyword-only (no API, fastest) |
| Organize with model | extract summary/tags/entities on save |

> The API key is stored in plaintext in `.dsh-memory-config.json` at the workspace root — do not commit it.

## Data files

- `.dsh-memory-store.json` — all memory data
- `.dsh-memory-config.json` — configuration

## Uninstall

1. Remove `dsh-memory` from `dependencies` and `dsh.profile.bundles`.
2. Delete `<profile>/node_modules/dsh-memory`.
3. Optionally delete `.dsh-memory-*.json` from the workspace.

## License

MIT