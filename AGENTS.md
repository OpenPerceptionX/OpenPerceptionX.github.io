# OpenDriveLab development guidelines

Read [GIST.md](docs/GIST.md) first, then [DESIGN.md](docs/DESIGN.md) for UI work. These documents describe **this OpenDriveLab repository**. The initial documentation was copied from another project and was replaced after a source and published-site review on 2026-10-20.

## Document ownership

| Document | Responsibility |
|---|---|
| [GIST.md](docs/GIST.md) | Single table of the main site's current responsive layout, spacing, and main type sizes |
| [DESIGN.md](docs/DESIGN.md) | Visual baseline, page families, interaction behavior, and design guardrails |
| [Implementation](docs/design/implementation.md) | Source ownership, content dependencies, routing, media, and technical constraints |
| [Verification](docs/design/verification.md) | Actual validation results, known gaps, and pending browser checks |
| [References and proposals](docs/design/references.md) | Review evidence and prioritized improvements that are not implementation approval |
| [History](docs/design/history.md) | Documentation provenance and compatibility context |
| [SEO.md](docs/SEO.md) | Metadata/discovery baseline and follow-up |

GIST owns the documented main-site dimensions; keep it as one table, with explanations elsewhere. Its current values are a source baseline, not approval of a new design. Update values only when the corresponding design change is requested or approved. Do not apply its main-site dimensions to an independent project page without checking that page's design. Keep implementation facts, proposed improvements, and browser acceptance distinct. If source and docs diverge, investigate and identify the discrepancy rather than silently treating either as a new approved design.

## Project and architecture

OpenDriveLab presents research in embodied AI and autonomous driving, publications, datasets, people, recruitment, events, and individual research projects. Preserve scientific names, authorship, affiliations, dates, award claims, citations, and resource destinations unless the task explicitly changes them.

The main application uses Next.js 15.2.4, React 19, TypeScript, Tailwind CSS 4, shadcn/Radix primitives, DaisyUI, Framer Motion, Embla, and Recharts. Check `package.json` and the lockfile before changing versions. Charts, carousels, drawers, aspect-ratio helpers, and sidebars are present here; do not remove them based on cleanup instructions from another project.

There are two delivery surfaces:

- `app/` contains App Router pages. `app/layout.tsx` owns Inter, the sidebar provider, header, favicon, and analytics. `app/(default)/layout.tsx` owns the shared main/footer.
- `public/` contains both assets and independently authored HTML/CSS/JS websites. Project and event folders can be active published pages even when nothing imports them from React. Inspect their own entry HTML and local assets before editing.

There is no locale routing layer. Use `next/link` and `next/navigation` in React. The main shell is light; a complete device-driven dark theme is not implemented. Project-specific styles are separate design surfaces, with possible global CSS interactions that must be checked.

## Development workflow

- Recheck `git status`, `git log --oneline -3`, and the relevant files before work. A message opening with **"okay"** is a new-task/session boundary: assume the user may have edited, committed, or reverted work, and re-verify deferred tasks.
- Preserve unrelated changes. Use `rg` to locate consumers before changing shared data, section IDs, routes, styles, assets, or components.
- Ask before installing any new dependency or changing fonts. Do not replace the current brand palette or page architecture as a side effect of a small fix.
- Do not start a dev, preview, or production server to verify changes. The user runs the preview. Do not run deployment commands; deployment and GitHub pushes are user-controlled unless separately requested.
- `npm run build` runs `next build`; `npm run lint` runs `next lint`. Use those for implementation checks and report failures honestly. Lint currently requires configuration; see [verification](docs/design/verification.md#validation-record).
- This repository currently uses the default `.next` directory for both development and builds; `.next-dev` separation is **not implemented**. Before a build, ensure a user-run dev session is stopped or output isolation has been separately implemented. Do not assume a production build is safe alongside the preview.
- After UI changes, leave explicit desktop, tablet, and mobile checks for the user. Include keyboard/focus, overflow, media, and relevant states; a passing build is not visual acceptance. Existing production pages may be inspected for research without starting a server.
- Run `git diff --check` before handing off. For documentation-only changes, verify links, referenced source files, and factual claims; a new application build is not required.
- Do not commit, push, deploy, or delete existing website sections without the corresponding authorization.

## Content maintenance

Use the [source map](docs/design/implementation.md#source-and-route-map) before adding content. Publications, people, events, navigation, and the AlpaSim challenge have shared data owners. Some other content remains inline; do not claim it has already been centralized.

Publication edits can affect the catalogue, both research timelines, homepage selection, and recent news. Preserve `keys`, `timeline`, dates, author links, icon mappings, and the separate list/landing image fields. Homepage carousel ordering also has explicit selections in `landing.tsx`; a data edit alone may not produce the intended order.

Section IDs must stay aligned with `data/navigator-page.tsx` and `data/navigator-project.tsx`. Preserve case-sensitive public project URLs and existing redirect aliases in `components/redirect.tsx`. An unlinked route is not automatically unpublished, noindex, or safe to remove.

Preserve the original language of content. The shell is English, while recruitment and some descriptions contain Chinese. There is no automatic translation or language-switch system.

## UI implementation conventions

- Extend the nearest canonical component/page family. Compare its wrapper boundaries, responsive classes, inherited styles, and interaction states, not just component names.
- Reuse existing primitives and interactions. Shared helpers belong in `components/`; single-page helpers stay beside the page. Project-local UI copies require an ownership check before consolidation.
- In React, prefer `Image` with intrinsic dimensions or a reserved aspect ratio and useful alt text; preserve deliberate native image/video/iframe use where appropriate. Static HTML projects keep native markup.
- Use internal links for local routes and the existing new-tab convention for HTTP external resources; include `rel="noreferrer"` on new or edited external new-tab links. Existing coverage is uneven and should not be described as already complete.
- Preserve readable scientific diagrams and each asset's intended contain/crop treatment. Do not replace real media with decorative placeholders or invent results to fill a layout.
- Reuse `FadeIn` where an entrance is appropriate; it currently fades on mount. Do not wrap every element by default or assume reduced-motion/no-JavaScript handling exists.
- Preserve section anchors and scroll clearance when changing headings. Add concise comments for major JSX sections where useful.
- Keep source content selectable unless there is a specific control-level reason. Existing broad `select-none` usage is a review item, not a requirement for new prose.

## Component registry

| Component | Source | Role |
|---|---|---|
| Header / NavigatorTrigger | `components/header.tsx`, `components/navigator-trigger.tsx` | Fixed brand controls, navigation toggle, back-to-top |
| AppSidebar / SidebarProvider | `components/app-sidebar.tsx`, `components/ui/sidebar.tsx` | Site navigation, page/project contents, mobile sheet |
| Landing / home carousel | `app/(default)/(home)/landing.tsx`, `components/ui/homecarousel.tsx` | Featured research/event slides and pagination |
| FadeIn | `components/animation/fade-in.tsx` | Mount opacity entrance |
| EmailSubscribe | `components/mailing.tsx` | Shared footer mailing-list form |
| WeChat / WeChatGroup | `components/app-drawer.tsx` | QR drawers |
| Chen2025_value_learning / CitationChen2025 | `components/citation-drawer.tsx`, `components/citation-chen2025.tsx` | Specific publication citation drawer and copy feedback |
| CitationLayout / CitationNote | `components/citation.tsx` | Measured marginal notes; inspect the consumer and responsive fallback |
| Timeline primitives | `components/junwen-k/timeline.tsx` | Event timeline structure |
| Redirect | `components/redirect.tsx` | Client-side legacy/case aliases and fallback from not-found |

## End-of-work routine

A message containing only **end of work**, ignoring capitalization and whitespace, invokes this routine:

1. Recheck status, the last three commits, final files, and diff; preserve user changes.
2. Finish authorized work and resolve inconsistencies within its scope. Remove only task-generated disposable previews/reports; preserve public project sites, assets, and maintained docs.
3. Update each requirement in its owning document. Record reusable workflow lessons here; record proposals separately from accepted behavior. Re-verify TODOs before carrying them forward.
4. Run any still-needed implementation checks under the build/preview constraint above, plus `git diff --check`. Reuse results when only docs changed. Record pending user browser checks without claiming acceptance.
5. Summarize completed work, documentation, validation, remaining items, and whether changes are uncommitted. This phrase alone does not authorize a commit, push, deployment, or archive.
