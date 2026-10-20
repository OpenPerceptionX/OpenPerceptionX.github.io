# OpenDriveLab design baseline

Read [GIST.md](GIST.md) first. This document describes the current site and provides preservation/review guidance for future changes. It is based on source at `9e2d0590` and a limited published-site inspection on 2026-10-20. It does not approve a redesign or certify responsive/accessibility behavior. See [verification](design/verification.md) for coverage and [proposals](design/references.md) for improvements.

## Purpose and visual identity

OpenDriveLab is a research and community website. Readers need to discover work, inspect its evidence, find papers/code/data, identify contributors, and participate in events or recruitment. Preserve those information paths when improving presentation.

The main site uses a white canvas, near-black text, cyan/blue accents, blue gradient display headings, broad whitespace, and a left navigation sidebar. Research imagery, publication records, timelines, and people provide the content. It is a directory and research showcase; future work should fit each content type rather than impose the same section template everywhere.

The baseline is not a requirement to retain every inconsistency. Changes should name the problem, affected page family, and desired outcome, and distinguish a proposed treatment from the implemented state.

## Color and surfaces

Main-site tokens live in `app/globals.css`:

| Role | Current source |
|---|---|
| Page | `--background: oklch(1 0 0)` (white) |
| Primary text | `--foreground: #0d0d0d` |
| Brand blue | `--o-blue: #00a0e8` |
| Light blue | `--o-light-blue: #53c2f0` |
| Dark blue | `--o-dark-blue: #0c318f` |
| Supporting gray | `--o-gray: #76777B` |
| Display gradient | `fg-gradient-blue`: dark blue → light blue → blue |
| Media/background gradient | `bg-gradient-landing`: diagonal dark blue → light blue → blue |
| Primitive surfaces, borders, focus, charts | Existing semantic variables and `@theme inline` mappings |

The semantic `primary` is neutral, not the brand-blue token. Choose tokens by their actual role. Main-site `.dark` declarations currently repeat the light palette; the root does not implement device-driven theme selection. Do not describe this as an accepted dark theme. Independent project pages may use dark surfaces or other accent colors.

## Typography and spacing

The main application loads **Inter** through `next/font/google` in `app/layout.tsx`, with Latin subsets and `display: swap`. It is not the other project's self-hosted Outfit/Noto setup. Chinese content relies on available fallback glyphs. Font changes require approval.

[GIST](GIST.md) records the current `text-t0`/`text-t1` sizes. Page introductions usually combine `text-t0 font-bold` and `fg-gradient-blue`; section headings commonly use `text-t1` without bold. The landing title uses bold `text-t1`, not `text-t0`. Body typography is contextual: normal text defaults to 16px, introductory copy often uses 20px, publication author lists use 14px, and navigation/notes often use 12px. `leading-relaxed` is common; no global 18px prose or auxiliary monospace system exists.

The layout is based on flex/grid, maximum widths, and Tailwind spacing. There is no site-wide 4/8/12-column grid. Most directory content uses an outer `px-6` and an inner `w-full max-w-7xl`; narrower prose/project areas also use `max-w-5xl`, `max-w-4xl`, and other explicit sizes. Account for the expanded sidebar when evaluating available content width. Media can be much wider than comfortable prose.

GIST pixel equivalents assume a 16px root. Breakpoints are viewport-based, not remaining-content-width breakpoints. `md`, `lg`, and `xl` use Tailwind defaults; `3xl` is explicitly 112rem (1792px). Some project/event components also use `sm` (640px) or `2xl` (1536px); GIST groups the main directory patterns and does not override those exceptions.

Common relationships use `gap-3`, `gap-6`, and `gap-12`; section separation often uses `mt-24` or `mt-36`. These are current patterns, not uniform vertical padding at both ends. Prefer the nearby page-family convention and avoid compounding parent/child spacing accidentally. `rounded-sm` is common for media and small controls, while primitive corner radii have their own token definitions.

## Navigation and shared shell

`Header` presents fixed OpenDriveLab and HKU/MMLab logo links, a sidebar toggle, and a bottom-right back-to-top link. The standard desktop sidebar starts expanded; below 768px it uses a sheet. It combines site navigation and route-specific contents, selected from the navigation data maps. A project route may have contents without the full directory navigation.

The header suppresses `AppSidebar` on paths starting with `/tamen` or `/bitacman`; other header controls still render. Do not generalize that exception to all research pages. Inspect project-local chrome before changing shared header behavior.

The footer belongs to `app/(default)/layout.tsx`: wrapping social links, WeChat/WeChat Group drawers, subscription form, and copyright. It is not a separate versioned footer component. Static HTML projects do not inherit it.

Section headings commonly link to their own IDs with `scroll-mt-32`. The chain icon appears on hover using a normal-flow span, so layout movement is possible. Keep anchor destinations and contents maps aligned; stable hover/focus geometry is a proposed improvement, not an existing guarantee.

## Page families

| Family | Current composition | Preserve during improvement |
|---|---|---|
| Homepage | Viewport-height featured carousel; News → Recruit → Research → Publication → Event | Real research media, explicit feature ordering, resource links, section IDs |
| Publications | Gradient introduction; categorized image/text records; stacked below `lg`, rows at `lg` | Full titles/authors, venue/award notes, paper/code/data/citation links; category membership |
| Research (`/EmbodiedAI`, `/AutonomousDriving`) | Gradient introduction, research progression/timeline, dataset sections | Research chronology, milestone evidence, scientific imagery and dataset destinations |
| Team | Gradient introduction and media; recognition content and member groups; 2/3/4/5-column portrait grids | Names, roles, member grouping, profile links, alumni and recognition information |
| Events | Gradient introduction, timeline, year-grouped imagery; one column then two at `xl` | Event date/place, edition history, workshop/challenge links |
| Recruit | Chinese role descriptions and application instructions, anchored sections | Language, complete role requirements, contacts and application process |
| Datasets route | Currently only a heading in `/datasets` | Treat this as incomplete; actual dataset content exists on the two research pages |
| React project/workshop pages | Research-specific media, papers, charts, citations, schedules, demos, or embeds | Their own content hierarchy, media controls, resource links, and technical meaning |
| Static project/event pages | Self-contained HTML/CSS/JS in `public/`; varied local styling and navigation | Public URL, assets, credits, project identity, and independent interaction model |

## Homepage carousel and media

`landing.tsx` builds features from publication records and AlpaSim data, with explicit leading picks and index-based ordering for remaining work. It uses an Embla carousel with 6666ms autoplay, looping, index labels, and pagination dots. Slides stack media above text below `lg`, and use two columns at `lg`.

Each slide may specify `imageFit` and `imageAspectRatio`. Some scientific teasers use contain to keep their full frame; the default uses cover. Preserve the selected fit and aspect ratio rather than applying one crop rule to every paper. Long titles, slide controls, short screens, and sidebar width need browser checks. Autoplay pause/reduced-motion behavior is not accepted by this baseline.

Use real demonstrations and figures as evidence. Keep labels readable and show the relevant experiment context. Existing project video, chart, and 3D/embed implementations are heterogeneous; there is no universal loading wrapper, shared demo player, or common keyboard shortcut system.

## Interaction-state reference

These are observed source behaviors, not a claim of complete state coverage.

| Control | Implemented behavior | Missing or pending review |
|---|---|---|
| Sidebar toggle | Button with accessible label/expanded state; desktop/mobile state; Ctrl/Cmd+B shortcut | Focus return, shortcut inside editable fields, navigation close behavior, route normalization |
| Sidebar groups | Collapsible groups and rotating chevrons; light blue hover surface | Keyboard traversal and accessible state announcements across layouts |
| Carousel | Autoplay, dots, slide count, carousel keyboard handling | Pause control, focus/hover interaction, reduced motion, short-screen fit |
| Resource links / imagery | Text color/underline and image/icon scaling on hover | Consistent keyboard equivalents, accessible names, touch target size |
| Section permalink | Hash link, scroll margin, hover-revealed icon | Stable geometry and keyboard-visible affordance |
| QR and citation drawers | Existing Vaul/Radix-based drawer components | Trigger semantics, focus, Escape, mobile scroll, asset failure |
| Citation copy | `CitationChen2025` shows copied state for two seconds | Clipboard error feedback and assistive announcement; other project copies differ |
| Subscription | Email validation, disabled submit, pending ellipsis, success placeholder | Errors are swallowed; visible persistent status, label, announcements, retry need work |
| Back-to-top | Fixed hash link, rounded hit area, blue hover, smooth page scrolling | Accessible name, focus destination, keyboard and reduced motion |
| FadeIn | Opacity 0 → 1 on mount; 0.3s delay, 0.6s duration | No shared reduced-motion branch or no-JavaScript fallback identified |

Future interaction changes should specify default, hover, focus, active, disabled, loading, error, and success states where applicable. Use semantic buttons for actions and links for destinations; do not assume existing nested controls or clickable divs are approved accessibility patterns.

## Scope and acceptance

Main-site styling should remain coherent while project pages retain their identity. New fonts, a new palette, a site-wide grid, or a new navigation model require an explicit design decision. Do not treat the previous project's v202605/v202609 labels, article system, subscription preview, or animation proposals as this site's requirements.

For each UI change, inspect the affected family at desktop/tablet/mobile widths and nearby breakpoint boundaries, with the sidebar open/closed where applicable. Record actual checks in [verification](design/verification.md); leave untested conditions pending. Source-derived responsiveness is not browser acceptance.
