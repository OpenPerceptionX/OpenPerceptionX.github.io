# OpenDriveLab implementation notes

This is the technical companion to [DESIGN.md](../DESIGN.md), not a second design specification. Source was inspected on 2026-10-20. Recheck ownership before a change; route groups in parentheses do not appear in URLs.

## Source and route map

| Surface / content | Source owner |
|---|---|
| Global font, metadata icon, analytics, sidebar provider and header | `app/layout.tsx` |
| Main tokens, shared typography, gradients and breakpoints | `app/globals.css` |
| Shared main/footer, social destinations, QR triggers, mailing form placement | `app/(default)/layout.tsx` |
| `/` | `app/(default)/(home)/page.tsx`; carousel `landing.tsx`; recent news `news.tsx` |
| `/publications` | `app/(default)/(page)/publications/page.tsx`; `data/publications.tsx` |
| `/datasets`, `/recruit` | Corresponding folders under `app/(default)/(page)/` |
| `/EmbodiedAI`, `/AutonomousDriving` | Corresponding folders under `app/(default)/(research)/`; shared publication data |
| `/team`, `/team/recognition2025` | `app/(default)/(team)/team/`; `data/team.tsx` |
| `/events` | `app/(default)/(event)/events/page.tsx`; `data/events.tsx` |
| `/alpasim2026` | `app/(default)/(event)/alpasim2026/page.tsx`; `data/alpasim2026.ts` |
| Workshops | `app/(default)/(event)/cvpr2026/workshop/`, `rss2026/workshop/`, `icra2027/workshop/` |
| React projects | `app/(default)/(project)/ReSim/`, `kai0/`, `FreeTacMan/`, `BiTacMan/` |
| Other route sources requiring publication-policy review | `app/(default)/(project)/template/`, `app/(default)/(event)/challenge2026_/`, `app/(default)/(teaching)/DEPRECATEDAP0001/` |
| Not-found handling / visible missing page | `app/not-found.tsx`, `components/redirect.tsx`; separate `app/missing/page.tsx` |
| Standalone project/event pages | Each `public/<project-or-event>/index.html`, its CSS/JS and assets; examples: `P2P-T`, `NativeMEM`, `RISE`, `AMS`, `cvpr2025`, `challenge2025` |
| Navigation contents | `data/navigator-page.tsx`, `data/navigator-project.tsx` |
| Resource type labels | `data/mapping.tsx` |

The route list groups responsibilities; it is not a sitemap or a guarantee every source is intended for indexing. Check the actual filesystem and host for route availability.

## Content dependencies

`data/publications.tsx` owns category definitions, publication records, and scholar-link lookup. Member scholar links from `data/team.tsx` feed the author lookup; per-publication `authorLinks` can override it. Keep authors' spelling/order and the `", "` author delimiter compatible with rendering.

A publication's `keys` controls catalogue and homepage membership; `timeline` feeds research views. `image` and `image_sliding` serve different compositions. Preserve `linkLabel`, resource labels, venue notes, award fields, and resource links. The homepage also selects particular records by paper URL and orders remaining records by indices. Review all these consumers when inserting, removing, or reordering work; stable feature IDs are a proposal, not implemented.

`news.tsx` computes recent publications from `time` over the preceding three months and sorts descending, alongside pinned/manual news. Dates use dotted strings converted to ISO-like dates. This is time-dependent module-level logic in a client component; recheck behavior around build time, hydration, and long-lived sessions before promising automatic freshness.

`data/events.tsx` owns year grouping and event records, including `editor_pick` entries. AlpaSim data is reused by its page, event data, and homepage landing. Some schedules and speaker information remain beside individual pages. Research-page dataset entries and recruitment copy are inline; `/datasets` is currently a stub.

When adding a resource type, update `type_mapping` and every renderer that consumes it; some fallbacks are generic. Keep exact paper/code/data destinations and public casing. Do not infer a paper URL from a repository link.

## Navigation and routing

`SidebarProvider` lowercases `usePathname()` to look up both navigation maps. It does not strip a trailing slash. Keep keys and deployed route forms compatible; test direct entry and client navigation. `AppSidebar` conditionally renders directory navigation when the page map exists, and project contents take precedence for the contents list.

Desktop state starts open and mobile state starts closed. The provider writes a `sidebar_state` cookie but no initial cookie read is wired in the root layout. Do not promise persistence from the cookie write alone. The existing Ctrl/Cmd+B handler does not filter editable targets.

`Header` keys its rendered header by pathname and hides `AppSidebar` for `/tamen*` and `/bitacman*`. Check header/provider and project-local headers together; hiding the sidebar does not remove the shared shell.

The not-found component invokes `Redirect`, whose client-side conditions map legacy/case/prefix aliases to current routes or external destinations, then fall back to `/`. `/missing` is a separate visible 404-style page. This is not a verified HTTP redirect/status policy. Prefix matching and a static host's fallback behavior need host-level checks; preserve aliases until a replacement is explicitly scoped.

Static sites in `public/` rely on URL paths, relative assets, and sometimes their own scripts. Do not convert folder names to lowercase, remove trailing-slash destinations, migrate them to React, or delete old editions as an incidental cleanup. Check references in both `app/`/`data/` and first-party static HTML, excluding vendored libraries when appropriate.

## Styling and component boundaries

Tailwind 4 is imported directly in `app/globals.css`, with `tw-animate-css` and the DaisyUI plugin. Semantic CSS variables are mapped in `@theme inline`; `3xl` is defined in `@theme`. There is no shared `tokens.css` or GIST token-generation script.

The central component registry is in [AGENTS.md](../../AGENTS.md#component-registry). The BiTacMan/FreeTacMan folders also contain local styles and UI copies. Their CSS includes global declarations; route-local ownership does not prove CSS isolation. Inspect cross-route navigation and shared primitives when modifying these files.

`FadeIn` adds a `motion.div`. That wrapper can change flex/grid child relationships and initial visibility. Compare the exact wrapper boundary before reuse. Do not import another project's divider exclusions or timing as if already implemented here.

## Media, citations and forms

Next Image remote sources are allowlisted in `next.config.ts`. Check the exact hostname/path and existing image use before adding a new host. Current sources include OpenDriveLab GitHub assets, raw GitHub, ImageKit paths, shields.io, and the configured Archon/Kinetix asset hosts. Their presence is legitimate asset configuration, not proof this website is Archon's company site.

Prefer reserved media geometry and preserve aspect-ratio choices. Static projects own native media, posters, and scripts. Native video and iframe behavior varies by project; examine the local helper before modifying autoplay, preloading, visibility observers, keyboard input, or 3D embeds. Do not claim shared loading/error feedback exists.

`CitationLayout`/`CitationNote` in `components/citation.tsx` measure marginal notes and listen for resize/scroll; note markers are hidden below `xl`. Check fallback access to the reference content in the consuming page. `citation-chen2025.tsx` is a particular paper's BibTeX, not a general citation database. `kai0` and other project helpers have independent citation/share implementations.

`components/mailing.tsx` posts subscription data to the existing OpenXLab registration service. It validates before sending, disables during a request, clears input on success, and changes the placeholder. HTTP and network failures currently have no user-visible result. Do not change destinations or submit real addresses during verification without authorization. The kai0 mailing component is separate and must be reviewed independently if consolidating forms.

## Build and deployment constraints

The checked-in workflow `.github/workflows/nextjs.yml` builds on pushes to `master` or manual dispatch using Node 20, installs from the lockfile, invokes `actions/configure-pages` with Next support, and uploads `out` to GitHub Pages. This is checked-in configuration, not confirmation of the active production host's pipeline.

Local `next.config.ts` does not set `output: "export"`, a custom `distDir`, or phase-specific output directories. The workflow's Pages configuration can alter build configuration. Do not equate a local `.next` build with the deployed `out` artifact, and do not add server-only behavior without checking deployment compatibility. `CNAME` contains `opendrivelab.com`.

Both local dev and build currently use `.next`. Follow the preview constraint in [AGENTS.md](../../AGENTS.md#development-workflow). The root `npm run lint` needs initial ESLint setup; do not install packages silently. There is no automated test script declared in `package.json`. Validation status belongs in [verification](verification.md).
