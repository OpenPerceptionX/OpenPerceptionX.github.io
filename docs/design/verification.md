# Verification and pending checks

This record applies to OpenDriveLab. Validation claims imported from the other project do not apply. A source review, a successful command, a production screenshot, and user acceptance are different evidence levels.

## Validation record

Review date: **2026-10-20**. Starting revision: `9e2d0590`; working tree was clean before documentation edits.

| Check | Result and limits |
|---|---|
| Source review | Reviewed main styles/layouts, navigation, homepage, catalogue, research/team/event/recruit/dataset pages, shared forms/citations, representative React/static project files, metadata, and build configuration. Not a line-by-line review of every standalone project. |
| Published homepage content | Read `https://opendrivelab.com/`; confirmed the research directory, featured work, news, resource links, and footer content. |
| Published visual sample | Viewed homepage, `/publications`, `/team`, and `/P2P-T/` at the browser's existing desktop viewport. Evidence of broad composition only; some media was still loading. Not a layout acceptance run or proof deployed content equals this checkout. |
| Lint | `CI=1 npm run lint </dev/null` exited 1 at the initial ESLint configuration prompt. No lint analysis completed; no config/dependency installed. |
| Build | Not run for this documentation-only change. No current passing build is asserted. Local dev/build output is shared in `.next`. |
| Documentation checks | Local Markdown link targets and documented source paths checked; `git diff --check` passed after the rewrite. |
| Servers, deployment, form submission | None started or performed. |
| Responsive/runtime acceptance | Pending user checks. No tablet/mobile, full keyboard, reduced-motion, network-failure, or end-to-end form acceptance is claimed. |

## Confirmed source gaps

These findings are actionable, but are not authorization to implement the proposals. Priorities live in [references](references.md#prioritized-improvement-candidates).

| Finding | Evidence | What would close it |
|---|---|---|
| `/datasets` is incomplete | Page renders only an introduction heading; navigation map lists `embodied` and `driving` targets that are absent | Decide whether to complete or redirect the route; align navigation, metadata, and dataset content |
| Event contents miss 2026 | `data/events.tsx` includes 2026; `/events` contents map starts at 2025 | Align year navigation with rendered years; test all jump targets |
| Subscription has silent failures | Empty non-OK/catch branches in `components/mailing.tsx` | Implement agreed error/retry/status behavior and test with mocked or authorized requests |
| Shared navigation semantics need review | Logo links nested in a button, QR div triggers, icon-only back-to-top, unfiltered Ctrl/Cmd+B handler | Semantic/focus fixes followed by keyboard and screen-reader checks |
| Hero is fragile to content/order | Explicit URL matches and positional index ordering in `landing.tsx`; fixed viewport-height wrapper | Stable selection strategy and checks with long titles/short screens |
| Shared motion fallback is incomplete | FadeIn starts opacity 0; no reduced-motion branch/no-JS fallback in shared wrapper | Agreed fallback behavior; test disabled JS and reduced-motion preferences |
| Section link geometry can shift | Icon uses `hidden group-hover:inline-block` in normal flow | Stable placement and keyboard discoverability verified at wrapped headings |
| Contents route normalization is limited | Sidebar lowercases path but does not remove trailing slash | Confirm canonical route forms and test direct/client navigation |
| Sidebar persistence is incomplete | Cookie is written, root does not initialize from it | Either implement intended persistence or remove the misleading persistence assumption |
| BiTacMan metadata is stale | Its layout description/keywords still refer to FreeTacMan | Correct project metadata and check rendered head |
| Indexing and fallback behavior need a policy | Template/deprecated/stub route sources and client not-found redirects | Decide intended publication/indexing and verify actual HTTP behavior; see [SEO](../SEO.md) |
| Automated lint is not established | Initial configuration prompt instead of analysis | Approve/setup required tooling and obtain a real lint result |

## User browser checklist

The user runs the preview. After a relevant UI implementation change, check desktop, tablet, and mobile; useful samples are 1440px, 768px, and 390px, plus the actual changed breakpoints. Include narrow 320px and short landscape when content is dense. These are test targets, not new design breakpoints.

- **Shared shell:** expanded/collapsed sidebar, mobile sheet open/close, Escape, focus return, scroll lock, brand links, back-to-top, no occluded content, and direct/trailing-slash routes.
- **Homepage:** first and later slides, dot/keyboard controls, long paper titles, full scientific figures, short-height fit, autoplay/pause expectations, and section jumps.
- **Directories:** publication author/resource wrapping, portrait grids, timeline ordering, year anchors, readable recruitment Chinese, and dataset destination decisions.
- **Projects/events:** original page styling, client navigation in/out of local CSS, video playback/posters, charts, 3D/iframe loading, schedules, footnotes, citations, and copy behavior.
- **Interactions:** mouse and keyboard focus, touch target usability, text selection, 200% text zoom, reduced motion, slow/failed media, and no-JavaScript access to essential content.
- **Forms:** label, invalid input, pending, success, non-OK response, network failure, retry and announcements; use mocks or specifically authorized addresses.
- **Theme scope:** the main site remains light under both device preferences; inspect standalone project themes on their own terms. Do not mark a main dark mode as tested or implemented.
- **Distribution:** user-deployed HTML metadata, static routes, aliases, HTTP status, social previews, and real image URLs; see [SEO](../SEO.md).

Record page/route, viewport, relevant preference/state, result, and remaining issues after each check. An implementation fix closes a source issue only; keep browser acceptance pending until that check actually happens.
