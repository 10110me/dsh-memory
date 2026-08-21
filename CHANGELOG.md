# Changelog

All notable changes to dsh-memory. The in-app updater reads this file to show what's new.

## 1.1.2

- Localized changelog: a Chinese changelog (CHANGELOG.zh.md) is fetched alongside the English one, and the update banner picks the right language automatically based on the browser/UI language.
- Visible update progress: the update button now runs two real stages — download & verify, then install — each shown live with a spinner and step text, instead of a silent wait.

## 1.1.1

- Workflow knowledge is now saved automatically: when a session establishes repeatable build/release/deploy steps, the model records them as type "knowledge" with exact commands and paths (new trigger in memory_save description and system prompt rule 5).

## 1.1.0

- Smarter memory tool usage: the model now searches memory FIRST when it hits a bug or error, and saves a pitfall (symptom + root cause + fix) after fixing a non-trivial bug — enforced through tool descriptions and the system prompt.
- `memory_delete` accepts a `query` in addition to an exact `id`: one-step best-match delete, returns the deleted summary for confirmation.
- In-app update system: the settings panel shows an update banner (new version + changelog) with 忽略 / 忽略这个版本 / 更新 actions, and can update itself from GitHub — touching only files inside its own package directory.

## 1.0.0

- Initial release.
- Memory store (pitfall / knowledge / note) persisted to `.dsh-memory-store.json`.
- Model-assisted organization: summary, tags and entities extracted on save.
- Optional embedding search (OpenAI-compatible API) + built-in inverted-index keyword search with debounced auto-search.
- Entity relationship graph: zoom, pan, drag, click-to-highlight, edge-width control, force-directed layout with connected-component grouping.
- Four model tools (`memory_save`, `memory_search`, `memory_list`, `memory_delete`) and system-prompt guidance.
- DSH Web settings panel with Config / Memory / Graph tabs.
