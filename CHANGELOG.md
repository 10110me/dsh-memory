# Changelog

All notable changes to dsh-memory. The in-app updater reads this file to show what's new.

## 1.1.7

- Entity count is now unbounded: no 200 cap on the input or the API (defaults to 50 per session as before). Very large graphs automatically reduce layout iterations to stay responsive.
- Clusters sit much closer together: groups are now packed by their measured bounding boxes after physics (56px gap), instead of pre-allocated slots that left large empty margins.
- Initial view no longer zooms out too far: auto-fit has a 62% zoom floor — it starts on a readable close-up of the middle of the graph; pan/zoom out for the full picture.

## 1.1.6

- The layout coordinate space is now unbounded: each connected component gets a region sized by its node count (fixed generous 130px ideal spacing, 90px minimum), regions are shelf-packed into a large virtual canvas, and the view auto-fits (scale + center) so everything is visible. No more compressing nodes to squeeze them into a fixed box — overlap at any node count is impossible by construction.
- View auto-fits after every relayout (first open, reset, entity-count change); zoom range stays 5%–800% for exploring the full spread.

## 1.1.5

- Fixed persistent node overlap: spacing is now adaptive — ideal and minimum distances are capped by the largest spacing that can physically fit the visible node count inside the canvas, so constraints are always satisfiable (50 nodes at a fixed 85px minimum simply cannot fit a 660px-wide canvas). Taller canvas (620px) and more layout iterations support this.
- Entity-count control now gives feedback: an always-visible stats line shows "实体 N · 关系 E · 共 T 个实体", plus an explicit note when everything is already shown so raising the limit on a small graph no longer looks like "nothing happened". Repeated identical applies are skipped.
- Reset now also restores session settings (entity count back to default 50).
- Graph requests carry a cache-buster to avoid stale HTTP-cached responses.

## 1.1.4

- Graph toolbar redesigned into one row of three modules above the canvas: zoom (−/percent/+/reset), entity count, and edge width.
- Fixed zoom boundary drift: scrolling past the minimum/maximum zoom no longer pans the canvas.
- Wider zoom range: 5% – 800% (was 20% – 400%).
- Entity count is now a per-session control on the graph toolbar (default 50, resets on reopen) instead of a persisted config field.
- Roomier layout: minimum node spacing 40 → 85 px, ideal spacing floor 60 → 120 px, doubled repulsion — nodes no longer crowd together.

## 1.1.3

- Fixed graph collapse: a whole entity group could shrink to a single point when two entity names hashed to the same starting position — the zero-distance repulsion then produced NaN and poisoned every position in that connected component. Initial positions now use a stronger rolling hash plus golden-ratio per-index jitter, coinciding pairs get a random nudge before the repulsion force, and any non-finite coordinate is reset during layout.

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
