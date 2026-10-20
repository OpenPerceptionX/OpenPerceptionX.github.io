# Archon Robotics Design System

Read [GIST.md](GIST.md) first. It remains the highest-priority design reference and owns the approved size-class configuration. This document owns the current **v202609** visual and interaction requirements for the homepage, blog, both article languages, demos, and 404, including component exceptions and responsive behavior.

Use [AGENTS.md](../AGENTS.md) for development workflow, [implementation notes](design/implementation.md) for technical constraints, and [verification](design/verification.md) for acceptance status. [Reference studies and proposals](design/references.md) and [retired history](design/history.md) are separate from current requirements. Documented behavior does not establish browser acceptance. Keep each design rule here, with configuration references to GIST.md; do not duplicate the specification in AGENTS.md.

## Visual intent

Archon presents robotics research through a calm, precise interface. White space, regular-weight typography, subtle rules, and cobalt accents establish hierarchy. Robot footage and research diagrams carry the visual detail; the surrounding UI gives them room.

The homepage balances a prominent moving demonstration with readable company information. Articles use a more structured editorial layout for long prose, diagrams, and citations. Shared typography, colors, spacing, and interactions connect these different compositions.

The active site follows the device’s light/dark preference using CSS, including native controls and portaled surfaces. Legacy startup scripts, saved theme preferences, ambient glows, and preview-only designs remain retired.

## Hierarchy and content density

The reference studies inform one Archon system. The consensus below consolidates accepted guidance; it does not imply that every reference uses the same treatment. Source provenance and study-specific proposals remain under [Reference influences and decision status](design/references.md#reference-influences-and-decision-status).

| Shared principle | Application to Archon | Canonical reference / acceptance criterion |
|---|---|---|
| **One primary idea per section** | Give the heading or media clear priority. Keep supporting copy, metadata, and actions subordinate through composition, size, and spacing before adding color or weight. In research explanations, each section should establish one understandable step that supports what follows. | `home.tsx` section composition; `globals.css` regular-weight headings and cobalt accents; `article.tsx` explanatory sequence as an editorial review criterion |
| **Media carries useful information** | Evaluate media and text together: a readable panel must leave the robot, relevant objects, and task context legible. Technical figures must retain readable labels and relationships. Keep recurring concepts recognizable through consistent names, labels, and visual encodings across related figures, using the established tokens. | `home-hero.tsx`, article media, and `foundation-model-stack.tsx`; visual acceptance criterion. Preserve the wide-overlay crop exception and complete landscape frame in the stacked layout. |
| **Spacing expresses relationships** | Group headings, supporting copy, and actions as one unit, with clear separation from the next group. Account for parent and child spacing together using existing tokens and component exceptions. Do not uniformly enlarge padding or add copy to fill shorter columns. | Mission/Featured Research in `home.tsx`; layout and spacing rules below |
| **Composition and density follow content** | Keep demonstrations expansive, Mission and articles readable, founder biographies complete, and investors/research lists appropriately compact. Support both sequential reading and direct access to evidence through existing article navigation. Preserve the accepted order and responsive behavior rather than forcing equal widths, equal-height sections, or alternating splits. | `home-hero.tsx`, `home.tsx`, blog index, and article compositions; shared article section IDs, floating and compact contents |
| **A consistent visual system supports varied layouts** | Reuse semantic surface, text, action, and focus roles across compositions. Keep fonts, palette, geometry, and interaction feedback consistent with Archon's established rules and explicit exceptions. | `globals.css`, shared controls, and the interaction-state reference below |

These principles preserve existing component boundaries and do not mandate viewport-height sections, new calls to action, or changes to accepted content, spacing, or media assets. They guide future work and visual review; they do not establish browser acceptance of the current implementation. The shared editorial review principle is: **state the idea clearly, make it observable, and provide the detail needed to understand it.** Connect company identity to supplied research, demonstrated behavior, actual engineering work, and people's relevant contributions.

Let a concise introduction lead to supporting detail through existing demonstrations, Featured Research, and complete founder biographies (`home-hero.tsx`, `home.tsx`, `data/founders.ts`, and `article.tsx`). Use this to assess the relationship between a statement and its support; do not invent evidence or treat it as a requirement for new sections, claims, or copy. Preserve the accepted content, section order, and responsive compositions.

Reference-study consensus: one primary idea per section; media carries useful information; spacing expresses relationships; composition/density follow content; a consistent visual system supports varied layouts. Apply the consolidated table in [DESIGN.md - Hierarchy and content density](DESIGN.md#hierarchy-and-content-density). Establish hierarchy through composition, size, and spacing before stronger color or weight.

Evaluate media and text together using the media acceptance criteria below. Group headings, supporting copy, and actions with clear separation from the next group; compare parent/child gaps using existing spacing tokens and exceptions, with Mission/Featured Research in `home.tsx` as the canonical reference. Do not uniformly enlarge padding or add copy to fill shorter columns.

Keep demonstrations expansive, prose readable, founder biographies complete, and investors/research lists appropriately compact. Preserve the accepted order, responsive behavior, and component boundaries; do not force equal widths, equal-height sections, alternating splits, or new calls to action. Research application of the consensus: each explanatory section should establish one understandable step that supports what follows.

Keep recurring concepts recognizable through consistent names, labels, and visual encodings across related figures using existing tokens (`article.tsx`, `foundation-model-stack.tsx`; editorial/visual review criteria). Support sequential reading and direct access to evidence through existing article contents and shared section IDs, preserving both languages and responsive behavior. These accepted Anthropic study lessons do not establish that current articles have passed review.

Shared editorial review principle: state the idea clearly, make it observable, and provide the detail needed to understand it. Connect company identity to supplied research, demonstrated behavior, actual engineering work, and people's relevant contributions. Use existing demonstrations, Mission/Featured Research, complete impact-first founder biographies (`data/founders.ts`), and article explanations as the reference scope.

This incorporates the B&O study into the consensus as a review lens; preserve accepted content, order, and responsive compositions, and do not invent evidence or add history sections/luxury language.

## Color and surfaces

[app/globals.css](../app/globals.css) is the palette source of truth. Use semantic tokens in components; the hex values below document those tokens.

| Role | Token | Light value / treatment |
|---|---|---|
| Light page surface | `background` | `#FFFFFF` |
| Primary text and headings | `foreground` | `#212121` |
| Brand, links, focus accents | `primary` / `o-blue` | `#1769D2` |
| Secondary surface | `secondary` / `o-background-soft` | `#F5F7FA` |
| Auxiliary accent surface | `accent` | `#EAF2FC` |
| Secondary text | `muted-foreground` | 78% foreground mixed with background |
| Semantic borders and inputs | `border` / `input` | 40% foreground mixed with background |

The night palette uses `background` #111418, `foreground` #E4E8EE, `secondary` #1B2027, `accent` #21334A, and `primary`/`o-blue` #80B4F8. Night muted text and `o-gray` use #AEB8C5; semantic borders mix 24% foreground with background. Filled blue controls use `primary-foreground` (white in light mode, charcoal #111418 in dark mode).

All values live in `globals.css`. Borders have a hierarchy. Founder cards and article panels use subtle `border-o-gray/30`; main homepage/footer rules use `border-o-gray/60 md:border-o-gray/30`.

In light mode `o-gray` maps to foreground; night mode uses the softer #AEB8C5 to keep rules subordinate. Use `muted-foreground` for secondary prose. Content panels use flat surfaces and thin borders for separation.

Preserve the distinctions between primary content, neutral secondary surfaces, and blue-tinted accents in both themes. The article toolbar specifically uses `bg-o-blue/5`; it is not interchangeable with every other tinted surface. The header's background fade is a functional layering treatment.

Choose a surface by its role, rather than alternating colors for decoration:

| Intent | Surface choice and reference |
|---|---|
| Present primary content | Theme `background`: white in light mode, charcoal in dark mode |
| Separate supporting content | Neutral `secondary`, as in middle model-stack layers |
| Give a control auxiliary emphasis | Theme `accent`: pale blue in light mode, deep blue in dark mode; preserve named control exceptions |
| Group related content without adding a filled surface | Transparent, subtly bordered container, as in founder cards |
| Identify an article panel toolbar | The existing `article-panel-header` with `bg-o-blue/5` and its separate 2px accent line |

Keep the existing surface and border hierarchy when extending these patterns. An accent token is not a reason to add blue section backgrounds or replace a component's established treatment. Choose surfaces by role: theme `background` for primary content (white in light, charcoal in dark), neutral `secondary` for supporting surfaces such as the model layers, theme `accent` for auxiliary control emphasis, and transparent subtle borders for grouping such as founder cards.

Preserve the separate `bg-o-blue/5` article toolbar treatment. Do not alternate section colors for decoration or apply accent fills universally. Canonical references are `app/globals.css` and the existing components catalogued in `DESIGN.md`.

Palette source of truth is `app/globals.css`: primary `#1769D2`, foreground `#212121`, secondary `#F5F7FA`, auxiliary/accent `#EAF2FC`, background/white `#FFFFFF`. Muted text mixes 78% foreground with background; semantic borders mix 40%. Use tokens, never component-level hex values.

Night mode follows the device setting without a selector or startup script. Its selected palette uses background #111418, foreground #E4E8EE, secondary #1B2027, accent #21334A, primary #80B4F8, muted text/o-gray #AEB8C5, and 24% foreground semantic borders.

## Typography and language

Use the existing self-hosted **Outfit** for Latin and **Noto Sans SC** for Chinese. Code uses the explicit system monospace stack.

Use `font-aux` for article publication/reading/share metadata, article, blog-index, and demo-index section numbers, homepage demo and footer navigation numbers, figure/video/graph labels and descriptions (including long captions, demo descriptions, demo Page/File details, and player shortcut hints), the BibTeX panel title, Copy/Copied control and clipboard-failure feedback, and progress/status labels. It uses the existing system monospace families with Noto Sans SC for Chinese fallback; it does not identify or bundle the screenshot font. Keep dates and reading time at normal tracking, with modest tracking only on short labels/numbers.

Use regular weight (400). Apply the shared optical size correction in `globals.css`: auxiliary `text-xs` 11px, `text-sm` 13px, default 15px, and `text-body` 17px (rem-based), each 1px below the corresponding original size. Keep existing line-height utilities and normal body/heading/code sizes.

Retain Outfit/Noto Sans SC for main prose, headings (including diagram layer titles), navigation text, citation markers/references, and technical values (including diagram layer IDs); code/BibTeX keep `font-mono`. No forced uppercase.

| Content | Treatment |
|---|---|
| Date, reading time, Share and its links | `font-aux`, normal letter spacing |
| Section/directory, homepage demo, and footer numbers | `font-aux`, regular weight, `tracking-wide`, `tabular-nums`; apply to the number alone |
| Media labels, diagram descriptions, and full captions | `font-aux`; normal spacing for sentences, modest spacing for short labels |
| Demo Page/File details and player hints | `font-aux`; retain wrapping and link behavior |
| Progress/status, BibTeX title, Copy/Copied and failure feedback | `font-aux`; preserve focus, live announcements, and stable control width |
| Main prose, headings, navigation text, citation markers/references, technical values | Existing Outfit/Noto Sans SC treatment |
| Code and BibTeX contents | Existing `font-mono` |

Apply the font to the smallest relevant text group, not a whole section or figure. Use the shared auxiliary size correction; preserve line-height settings, color, selection behavior, and language tags. `text-body font-aux` is the explicit exception for demo descriptions; its CSS override uses the 17px auxiliary body size and retains body line-height settings.

System monospace appearance varies by platform. There is no separate graph component today; future graph captions should follow the same media-description rule.

| Role | Class / treatment | Size | Weight | Line height |
|---|---|---|---|---|
| Page-scale heading | `text-t0` | 48px; 60px from 840px; 72px from 1600px | 400 | 1.2 |
| Section heading | `text-t1` | 30px; 36px from 840px; 48px from 1600px | 400 | 1.25 |
| Small subheading | Existing component size | Typically 16px | 500 | Component-specific |
| Main prose | `text-body` | 18px | 400 | 2 EN / 2.1 ZH |
| Metadata, captions, controls | Existing component styles | Smaller supporting scale | Component-specific | Component-specific |

GIST.md records the three main type roles in the existing size-class table. `tokens.css` defines their rem-based sizes through `--type-page-size`, `--type-section-size`, and `--type-body-size`; px values here and in GIST assume the default 16px root. Compact/medium use the first configuration, expanded/large the second, and extra-large the third.

Height classes inherit the active width configuration. The existing shared `text-t0`, `text-t1`, and `text-body` classes consume these tokens in `app/globals.css`, so homepage, blog, both article languages, and demo consumers share the scale. Their layout breakpoints remain independent.

Supporting sizes are fixed: existing normal text utilities retain 12px/14px/16px, while the auxiliary tokens retain 11px/13px/15px/17px. Footer links use `--site-footer-link-size`: 20px below 600px, 24px thereafter. The hero keeps its more-specific measured type rules, including the 24–30px stacked title, proportional overlay heading, and fitted body/numbers.

Preserve font families, weights, language-specific leading, and content. Keep 24px between prose paragraphs and normal letter spacing in `text-body`. Use the shared classes instead of duplicating prose size and leading utilities.

Founder names and the homepage research-card title retain their existing 80% section-heading scale (24px / 28.8px / 38.4px). Founder enclosing line boxes retain section-heading metrics; the research title and arrow share the actual title size and 1.25 line height. Diagram layer headings use 500 and layer IDs may use 700; auxiliary diagram labels/descriptions use 400; these are distinct from regular-weight headings. Language tags follow the content: English chrome, homepage, index, demos, and 404 use `lang="en"`; Chinese names and slogans use `lang="zh"`; article prose uses its actual language independently of site locale.

Titles use normal case and user-facing punctuation uses regular hyphens. Heading alignment comes from the text alone. Trailing anchor icons reveal on hover or keyboard focus without affecting width, centering, wrapping, or flow.

Preserve the zero-width positioning span and absolutely positioned icon. Outfit for Latin and Noto Sans SC for Chinese remain self-hosted variable WOFF2 with SIL OFL licenses and Chinese Unicode subsets.

Use `text-t0` / `text-t1` for responsive headings, weight 400, line heights 1.2 / 1.25. GIST.md records the main type sizes; `tokens.css` supplies rem-based `--type-page-size` (48/60/72px) and `--type-section-size` (30/36/48px), changing at 840px and 1600px, plus fixed `--type-body-size` (18px). Px equivalents assume a 16px root.

Height classes inherit the current width configuration. These shared classes apply across homepage, blog, both article languages, and demos without changing their structural breakpoints. Founder names and the homepage research-card title retain the 80% section-heading scale and existing enclosing line boxes.

Supporting text utilities retain their sizes, auxiliary sizes are centralized in `--type-aux-*` tokens, and footer labels retain 20/24px at 600px through `--site-footer-link-size`. Preserve the hero-specific fitted typography. Small subheadings use 500.

Main prose uses `text-body`: 18px/400, English leading 2, Chinese 2.1 with appropriate language tags. Paragraph gaps are 24px. Chinese names/slogans use `lang="zh"`, English chrome/home/index/demo/404 use `lang="en"`, articles use their actual content language. The hero demo panel retains its height-aware leading exception documented below.

## Layout and spacing

Homepage, both Whole-Body Intelligence article languages, blog/demo indexes, and registered demo players follow GIST.md. Their section rhythm changes at 840px. The **6 / 12 / 24 rhythm refers to Tailwind spacing keys**, corresponding to **24 / 48 / 96px** at the default root size.

These are layout values, not a literal 6px base grid.

| Relationship | Treatment |
|---|---|
| Homepage/article section padding | `--section-padding`: 48px below 840px, 96px thereafter |
| Homepage/article major group gaps | `--section-gap`: 24px below 840px, 48px thereafter; horizontal gaps use the GIST gutter |
| Card interiors and paragraph gaps | `p-6` / `gap-6`: 24px |
| Header/footer horizontal inset | Fixed 24px each side, no maximum body width |
| Article opening, content, dividers, contents, references, and navigation | Standard GIST body through `app/article.css` |
| Article section composition | Full-span stacked below 840px; heading four columns, content eight thereafter, with a 24px gutter |

Small control internals, compact metadata/captions, and control-group gaps have their own scale. Header 12px vertical padding and hero opening spacing are explicit exceptions. The hero reserves the fixed header's 60px height separately from its opening gaps.

When the initial video fits within the viewport with the normal 60px gaps above and below the title/slogan group, divide the remaining height equally among header-to-wordmark, slogans-to-video, and video-to-viewport-bottom gaps. Otherwise retain 60px above and below the title/slogan group. Recalculate on resize and intro size changes, using the initial video size rather than its scroll-expanded size.

The opening wrapper has `min-h-dvh` so Mission begins below the first screen, including with reduced motion. The hero's scroll geometry is separate from ordinary section spacing. Measure spacing across component boundaries: parent gaps, child padding, and margins add together.

Keep intentionally different content widths. On mobile, equal CSS gaps can still produce unequal visible whitespace because text line boxes contribute space. The working grid uses 4/8/12 columns for compact/medium/expanded-and-wider widths, with 16dp/24dp gutters.

The 12-column transition is at 840dp. Compact and medium bodies scale within fixed 16dp and 32dp side margins. Expanded uses a fixed 752dp body (b1), and extra-large uses a fixed 1152dp body (b2), both with scaling margins; large uses a scaling body within fixed 224dp margins (x2) per side.

For a centered fixed body, each margin is (viewport width - body width) / 2. Height classes inherit these horizontal settings from the current width class. Grid selection rationale: b2 preserves the homepage Mission/Team max-w-6xl cap of 72rem (1152 CSS px at the default 16px root), used as the 1152dp design reference.

Derive x2 = (1600 - 1152) / 2 = 224dp, then b1 = 1200 - 2 × 224 = 752dp. This keeps body width continuous at 1200dp and 1600dp and leaves positive margins throughout each class. At 840dp, the body narrows by 24dp relative to the medium-class limiting width of 776dp, and each margin grows from 32dp to 44dp.

This is the selected tradeoff for preserving the homepage cap; continuity at all three boundaries would instead require a 1176dp extra-large body. Implementation is proceeding section by section from the current GIST.md. The shared header and footer now consume tokens.css through app/site-chrome.css on every route that renders them.

Header, wide-layout opening video, investor logos, and footer share GIST.md’s single Full-width sections exception: 24dp side insets, no maximum body width, and the current width-class columns/gutters. tokens.css exposes --layout-margin-wide and --layout-wide-body-width for this shared geometry. The edge-to-edge hero film and wide overlay retain their separately authorized immersive geometry. Header controls use 16dp/24dp gaps at 600dp.

Footer content and copyright share this full-width frame; from 840px, brand and navigation each span six of twelve columns, with the standard 24px grid gutter between the two halves. Navigation starts at column seven, 12px right of the page midpoint. The opening hero uses the standard GIST body for its brand frame through app/homepage.css.

The opening video spans 10 centered columns (columns 2–11) of the full-width 12-column GIST grid in overlay layout (24px outer insets, no maximum body width). In stacked layout, it targets 24px side insets and snaps to the nearest centered whole-column span. The stacked video may extend the standard GIST column rhythm beyond the fixed body into the margins, while staying within the viewport.

Recalculate the span from the active width class on resize; retain the existing scroll expansion. Its unchanged bilingual slogans use regular 18px text-body with balanced wrapping. The stacked demo panel now uses the GIST body, including the short-screen document-flow fallback.

Its number/text gap follows the GIST gutter; Full Video spans four grid columns (all compact columns, half the medium body, one-third of expanded bodies), retaining its 12rem minimum and available-width cap. The wide overlay keeps its immersive right-aligned geometry. Mission and Featured Research now also use the GIST body and 4/8/12-column grid: stacked below 840px, heading four columns and content eight above it, left-aligned at every width.

Their vertical padding is 48px/96px and group gaps 24px/48px at 840px, using the shared homepage spacing tokens. Team and Investors match Mission’s stacked introduction below 840px: full body width, left-aligned throughout. From 840px they retain centered titles above centered max-w-2xl prose within the GIST body.

It retains the shared section spacing. Founder cards use the GIST body and gutters, staying full-width until their body container reaches 1024px; then the first stays full-width and the next two span six columns each with portraits on the left and prose on the right. All cards place the 160px portrait beside the biography from 600px, and stack below 600px.

Investors follows the same responsive introduction alignment and measure as Team. Its separator uses that same body. The logo grid uses the GIST full-width exception with 24px side insets and no maximum width; logos use two of four columns below 600px, four of eight from 600px, and three of twelve from 840px (two items per row below 840px, four thereafter).

Preserve the current single-table GIST.md; keep rationale outside that file. Layout margin/padding uses Tailwind keys 6/12/24 (24px/48px/96px at the default root size). Small control internals are exempt.

Blog/demo index sections use the standard GIST body and `--section-padding` through `app/index-pages.css`; their 48px/96px padding changes at 840px. Both Whole-Body Intelligence articles use the GIST section rhythm at 840px. Homepage horizontal geometry follows GIST.md; its section padding and vertical group gaps change at 840px as detailed below.

Header 12px vertical padding and hero opening spacing are approved exceptions. Compact metadata, captions, and control groups may retain their smaller internal gaps. Account for parent and child spacing together.

## Brand assets

In-page logos come from `https://assets.archonrobotics.tech/logo/`. Preserve aspect ratios, intrinsic dimensions, and explicit rendered sizes. Favicons are separate assets.

| Placement | CDN filename | Intrinsic dimensions |
|---|---|---|
| Header mark | `LOGO-black-2048-202608.png` | 2048 × 1782 |
| Hero wordmark | `ARCHON-black-2048-202608.png` | 2048 × 196 |
| Footer lockup | `LOGO-ARCHON-black-2048-202608.png` | 2048 × 238 |

The footer lockup renders at 240px wide, constrained by available width. `BrandImage` uses Next `getImageProps` with native picture sources to select the matching white CDN variants in night mode; intrinsic dimensions and rendered sizes stay unchanged. In-page company logos always use Aliyun CDN assets under `https://assets.archonrobotics.tech/logo/`: header mark `LOGO-black-2048-202608.png` (2048×1782), hero wordmark `ARCHON-black-2048-202608.png` (2048×196), footer lockup `LOGO-ARCHON-black-2048-202608.png` (2048×238).

Matching `white` variants are selected in night mode by `components/brand-image.tsx`, using Next `getImageProps` and native picture sources. Preserve aspect ratios and use explicit rendered sizes; do not use local favicon artwork as an in-page logo. Browser favicons/manifest assets remain separate.

## Header and footer

The full-width header contains Blog (`/blog`), Careers, Contact, and back-to-top. When the three navigation pills no longer fit alongside the logo and back-to-top with their GIST gaps, they collapse together into the shared sidebar menu. It uses the header full-width exception in GIST.md: 24dp side insets and no maximum body width.

Controls use the GIST gutter: 16px below 600px and 24px thereafter. Keep the navigation pills at `h-9 px-4` with normal small text. Outside the full-width hero sequence, it reveals on upward scrolling or focus and hides on downward scrolling; preserve the 80px top zone and 4px up / 12px down thresholds measured from direction reversals.

Its opaque mobile background and desktop fade cover the article TOC. The footer surface, upper grid, and copyright remain full width on all shared-layout routes, with 24px content insets and no maximum body width, following the footer exception in GIST.md. Its height follows content, with 48px top and bottom padding on the upper grid.

The shared footer uses the user's supplied animated FLOW gradient export, with its two stops mapped in order to `accent` and page (`background`); secondary is excluded. This is an explicit exception to the neutral secondary-surface treatment above. Use the supplied speed 30, starting phase, zero blur, and grain/noise 6; use the corresponding device-theme tokens and update them when the theme changes. The decorative background fills the content-defined footer at all widths, behind its existing text, logo, social controls, navigation, and copyright. Pause movement offscreen, in hidden tabs, and with reduced motion. A static theme-token gradient covers loading, unavailable animation, and no-JavaScript rendering. See [implementation](design/implementation.md#footer-background) and [pending verification](design/verification.md#header-and-footer).

Navigation precedes brand/socials below 840px; from 840px, brand and navigation each span six of twelve columns. A standard 24px grid gutter separates the halves; navigation begins at column seven, 12px right of the page midpoint. The brand half has no extra gutter padding.

Footer labels use 20px below 600px and 24px thereafter, with the GIST gutter between baseline-aligned numbers and text. Long labels can wrap naturally when needed. Numbers remain separate from their links, and the last navigation item has no extra bottom padding.

Copyright stays in normal flow with 24px top and bottom padding through `site-footer-copyright`. Social order is GitHub, Hugging Face, X, LinkedIn, YouTube, WeChat, Xiaohongshu. Preserve 24px controls, 20px glyphs, and 24px gaps.

WeChat and X use the user-supplied 256×256 Phosphor SVGs inline in `WechatIcon` and `XIcon`, retaining their supplied paths and `currentColor` fills with optical size and weight adjustments.

The Hugging Face icon uses the user-supplied `hf-logo-pirate.svg` geometry inline in `components/ui/brand-icons.tsx`. Render it in `currentColor`, with the white regions and tongue as transparent cutouts, so it follows the same device-theme foreground as the other social icons.

Xiaohongshu uses the user-supplied 48×48 Arcticons outlined square and lettering in `XiaohongshuIcon`, with `currentColor` strokes and optical size and weight adjustments. Artwork: [Donnnno / Arcticons](https://icon-sets.iconify.design/arcticons/xiaohongshu-rednote/), [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/); adapted to JSX with caller-controlled dimensions and adjusted viewBox/stroke weights.

Social icons retain 20px SVG boxes inside 24px controls, with balanced visible size and contour weight. Dense face and lettering details deliberately remain finer for legibility. These adjustments apply to the official shared footer on all routes and widths; there is no preview-only variant. The selected artwork and optical adjustments, including the final Hugging Face enlargement, are source-implemented. The latest light-theme screenshot was assessed as balanced; full responsive/theme browser acceptance remains pending. See [footer icon implementation](design/implementation.md#footer-social-icons) and [verification](design/verification.md#header-and-footer).

Footer QR popovers use `theme="system"`: black WeChat/Xiaohongshu artwork in light mode and the existing white variants in dark mode. The portal, artwork frame, and loading/failure/retry feedback follow the device palette. The optional `v202609` black-on-white artwork variant remains available.

These social dimensions are specific to this component, not a general sizing rule for all controls. QR loading, artwork, and failure feedback share the same 176px square frame. Failed loads show a message and Try again button; retry keeps keyboard focus in the frame and announces the loading state.

Each light/dark artwork owns its load state, and reopening remounts it. English feedback lives in `data/qr-popover.ts`; the portal carries `lang="en"`. Reduced motion disables the spinner rotation and artwork fade.

The header shows Blog (`/blog`), Careers, and Contact in that order before back-to-top. When their measured widths plus the logo, back-to-top, and GIST gaps no longer fit, all three pills collapse into one menu trigger immediately before back-to-top. Resizing and font/layout changes recalculate the fit.

The header and article contents share `components/sidebar-menu.tsx`: the same numbered, vertically centered left sidebar, surface fade, scroll preservation, focus containment, dismissal gestures, and reduced-motion behavior described below. The header close button stays over its trigger during the transition. Internal navigation runs after exit releases the scroll guard; external and mailto targets retain native behavior.

Header menu links start neutral on every route and at every scroll position, with blue feedback only while pressed; do not derive a selected link from the route or reading position. Opening the header menu focuses its close control rather than a link. Preserve keyboard focus feedback and the article contents menu's separate current-section highlighting/focus.

Header/footer surfaces remain full width on all shared-layout routes. Header content uses its GIST full-width exception: 24dp side insets without a maximum; controls use 16dp gaps below 600px and 24dp thereafter. Footer content and copyright use the GIST full-width exception with 24dp side insets and no maximum width.

Footer navigation precedes brand/socials below 840px; from 840px brand and navigation each span six columns. Use the standard 24px grid gutter between the halves; navigation starts at column seven, 12px right of the page midpoint, with no extra gutter padding inside the brand half. Link labels use 20px below 600px and 24px thereafter, with the GIST gutter between baseline-aligned numbers and links.

Keep long labels fully readable with natural wrapping when needed. Layout tokens live in tokens.css and scoped consumers in app/site-chrome.css. Both Whole-Body Intelligence article languages and the blog/demo indexes now use the standard GIST body; other page sections retain their existing layout.

Header: Blog (`/blog`), Careers, Contact, back-to-top; no theme toggle. Focus outlines appear immediately; transition only the hover background, text color, and shadow, not outline properties. Shared base buttons transition background and text color only so focus rings are immediate.

Pills retain `h-9 px-4`, normal small text. Scroll hide thresholds are 4px up / 12px down from direction reversals, top zone 80px, rAF throttled, focus reveals header. Opaque mobile background and desktop fade cover the TOC (`header z-10`, TOC `z-0`).

Back-to-top releases its button focus after mouse/touch activation so subsequent downward scrolling can hide the header normally. Keyboard and assistive activation retain focus and the existing header visibility protection. Smooth scrolling and reduced-motion instant scrolling use the same focus behavior.

Header navigation collapses Blog, Careers, and Contact together only when their measured pill widths, logo, back-to-top control, and GIST gaps exceed the available header width. Recalculate on resize and font/layout changes. Keep the logo and back-to-top visible.

The menu trigger occupies the slot before back-to-top; its close button stays in that slot. Reuse `components/sidebar-menu.tsx` with the article contents for the left sliding/fading native modal, numbered vertically centered links, 300ms icon motion, reduced-motion support, scroll preservation, keyboard focus containment, Escape/outside/close/link dismissal, and left-swipe dismissal. Internal navigation waits until modal exit releases the scroll guard; Careers keeps its external-tab behavior and Contact its mailto target.

Footer height follows content, with no minimum height. The upper brand/navigation grid has equal 48px top and bottom padding; the final navigation item has no extra bottom padding. Copyright currently stays in normal flow at all widths with 24px top and bottom padding through `site-footer-copyright`; it adds to total footer height.

Its English name, Chinese name, and year remain in the typed footer data; render the Chinese name with its own `lang="zh"` span. Do not restore the earlier absolute-position experiment without a new request. Footer: mobile navigation precedes brand/socials; desktop brand left, navigation right.

Use the 2048×238 lockup at 240px width, black in light mode and white in night mode. Numbered links stay separate from their numbers. Social order: GitHub, Hugging Face, X, LinkedIn, YouTube, WeChat, Xiaohongshu.

Controls 24px, glyphs 20px, gaps 24px. Footer QR popovers explicitly use `theme="system"`: black artwork in light mode and the existing white WeChat/Xiaohongshu assets in dark mode. Preserve the 176px frame and per-artwork loading state.

The optional `v202609` variant retains black artwork on a white frame. Socials/QR and investor links scale to 103% over 300ms on hover.

`QrPopover` keeps loading/artwork/failure feedback in a fixed 176px square; failed loads show Try again, retry keeps focus in the frame, and status changes are announced. Each artwork owns its load state and remounts on reopening.

English feedback lives in `data/qr-popover.ts`, and the portal uses `lang="en"`. Reduced motion disables spinner rotation and artwork fade. Preserve both theme variants and both QR assets.

## Homepage spacing configurations

GIST.md records the five homepage spacing roles alongside the horizontal grid in its single table. Its Full-width sections row uses “By component” for spacing and typography because the header, footer, investor section, and hero retain their component settings below. Homepage sections use two vertical-spacing configurations, selected by width at 840px.

Values below are CSS px at the default 16px root size; inner spacing and chrome tokens retain rem units. Height classes do not select a different density for ordinary document-flow sections.

| Relationship / token in `tokens.css` | Below 840px | From 840px |
|---|---:|---:|
| Section padding, each end: `--home-section-padding` | 48px | 96px |
| Major group gap: `--home-section-gap` | 24px | 48px |
| Paragraphs, card content, founder rows: `--home-content-gap` | 24px | 24px |
| Closely related text, such as name/role: `--home-related-gap` | 12px | 12px |
| Card inner padding: `--home-card-padding` | 24px | 24px |

Mission/Featured Research, Team, and Investors consume the section tokens through `app/homepage.css`. Inner groups use the role-based Tailwind aliases `gap-home-content`, `gap-home-related`, and `p-home-card`; investor frames retain 24px vertical padding via `py-home-content`. GIST columns and horizontal gutters remain independent.

Founder row gaps stay 24px; investor row gaps follow the major group setting. These spacing roles preserve the existing composition; heading configurations are specified in Typography and language. Shared chrome has fixed settings in `tokens.css`: `--site-header-padding` is 12px per end, `--site-footer-padding` is 48px per end of the upper grid, `--site-footer-group-gap` is 48px, and `--site-footer-item-gap` is 24px.

The footer uses the latter for link padding, social gaps, and copyright padding. Keep the first navigation item's top and last item's bottom unpadded, preserve padding on the clickable link itself, and keep dividers outside `FadeIn`. Header/footer settings apply on every route rendering them; other page content retains its existing spacing.

Use spacing by relationship rather than separate margin and padding scales. Each section owns its top and bottom padding; do not add a second outer margin at the same boundary. Adjacent main sections therefore have 96px below 840px or 192px from 840px between their content, with a divider between them.

Line boxes still affect perceived spacing. The hero retains its separately measured opening gaps, scroll geometry, and height-aware fitting. Homepage vertical spacing is configured by role in `tokens.css`: section padding is 48px per end below 840px and 96px from 840px; major group gaps are 24px/48px at the same boundary.

`--home-content-gap` keeps paragraphs, card content, and founder rows at 24px; `--home-related-gap` keeps closely related items at 12px; `--home-card-padding` keeps card interiors at 24px. Use the corresponding `home-content`, `home-related`, and `home-card` Tailwind spacing aliases. Investor frame vertical padding is 24px; investor row gaps follow the major group setting.

Inner spacing uses rem units at the default 16px root. GIST horizontal gutters stay independent. Shared chrome uses fixed role tokens: 12px header vertical padding, 48px upper-footer vertical padding and group gaps, and 24px footer item/social gaps and copyright vertical padding.

Keep padding on clickable footer links, omit the first item's top and last item's bottom padding, and retain divider/FadeIn boundaries. Each section owns its padding; avoid adding outer margins that duplicate it. Height classes do not select another density for ordinary sections.

Preserve the hero's separately measured spacing/fitting, typography, and other routes' content spacing.

## Homepage hero

After the opening brand/video hero, section order is Mission with WBI (Featured Research) → Team → Investors at all viewport widths. The hero uses the overlay layout only when the browser viewport is at least 1024 CSS pixels wide and its width/height ratio is at least 4:3; otherwise it uses the stacked layout. The opening brand group uses the GIST body width.

The opening video spans 10 centered columns (columns 2–11) of the full-width 12-column GIST grid in overlay layout (24px outer insets, no maximum body width), with width calculated as 10 times the column pitch minus one gutter. In stacked layout, it targets viewport width minus 48px, snapped to the nearest centered whole-column span. The wide opening retains its landscape height and may extend below the viewport; do not shrink it to fit the first screen.

Its stage accommodates the opening film height, while the pinned overlay retains its viewport-height crop. Derive the column pitch from the full-width frame in overlay layout and the measured standard GIST body in stacked layout, using the current column count and gutter. Only the stacked target may extend its body grid into the margins, with a viewport-width ceiling.

Choose an even column count so both edges align symmetrically, and recalculate on resize. Preserve scroll-driven cubic expansion over at most 240px. The wordmark retains its 70% inner width and 25.2rem cap; both supplied slogans use regular 18px text-body, with English/Chinese line heights and balanced wrapping.

The stacked demo menu uses the GIST body width, including the height-aware document-flow fallback; number/text gaps use the GIST gutter. Full Video spans four grid columns (full compact body, half medium body, one-third expanded body), retaining its 12rem minimum and available-width cap; the full-width film and wide overlay remain the immersive exception. The opening hero plays demo/20260930/landing.mov until full width.

The pinned sequence then uses wbi-reduced.mov for main framework point 01, followed by s0.mov, pre-train-reduced.mov, and post-train-reduced.mov for points 02/03/04, all under the same CDN folder. The heading, descriptions, menu, and background enter when the video reaches its final resting position: the balanced top gap in the stacked layout, or the viewport top for the wide overlay. Full width alone does not reveal the panel.

A position-derived pinned sequence selects the same clip in either scroll direction; menu buttons jump to their corresponding scroll positions and mark the active item with `aria-current` and blue text. Render all four demos in one ordered list beneath Whole-Body Intelligence. Point 01 uses the main framework statement from homeDemos.description; points 02/03/04 use their supplied statements.

Each row is a full-width semantic button with the same number/text columns; there is no separate introductory button or duplicated compact caption. Clicking it or pressing Enter/Space returns to the first demo using the same scroll navigation as the numbered entries. Keep the heading, all four demo entries, and Full video label free of hover underlines.

Preserve shared keyboard focus feedback and aria-current when active. Its text turns theme blue while the first demo is selected and returns to muted foreground for the other demos. All point rows share the available panel width; the title link still returns to the first demo and exposes aria-current while it is active.

Every point reserves the same 2px border and 12px padding on the marker side (left in the stacked layout, right in the overlay layout), with aligned number and text columns. Point 01 retains its animated blue rule. At full density, keep 48px between the title and list in the overlay layout, 24px in the stacked layout, and 24px between points.

Height-aware fitting may reduce these gaps as described below. Apply text-body to the numbered button itself and render its title as a block, so the main point and numbered entries share the same fitted line-box metrics without extra inline-title leading (18px/1.8 at full density). Check visible gaps in the browser; equal CSS spacing alone does not establish visual acceptance.

When the first demo becomes active, the rule grows from the top and fades in over 300ms; it reverses when another demo becomes active, and switches immediately with reduced motion. This is active-state feedback, separate from FadeIn. Items 01/02/03/04 stack vertically in one column at every width, retaining their numbered format, up to 24px row gaps, indentation, active marker-side rule, and original scroll destinations while pinned.

Each demo receives max(400px, 85% viewport height) of scrolling before the sequence exits into Mission. This replaces the old downward-only hold. Desktop uses a right-anchored theme-aware rail over the viewport-filling film, keeping the left-side action clear.

Its surface fades from opaque on the right to transparent on the left. From 1280px, the overlay content width is clamp(32rem,40vw,42rem), plus 12rem total horizontal padding. Between 1024px and 1280px, landscape-tablet overlays use clamp(28rem,40vw,42rem) content width plus 6rem total horizontal padding, retaining more visible film.

Let the full list use this width instead of a narrow max-w-sm column. Show each complete point description directly at every width, with natural wrapping and balanced desktop lines; do not truncate or rely on native title tooltips. Keep each supplied statement rendered once.

The existing height-aware fitting measures the complete statements and switches to normal document flow when they cannot fit at the minimum readable density. The full-density type size remains 18px. The heading retains its own 33.333vw desktop width, capped by the panel, independently of the wider points.

Keep 96px horizontal panel padding from 1280px and 48px on smaller overlay viewports: the left side separates text from the fade edge, while the right side retains trailing-anchor clearance. In the overlay layout, right-align the heading, main point, and numbered statements; align the title group, full-width menu, and button to the panel’s right content edge. Put numbers and active rules on the right of each desktop statement, keeping DOM reading order unchanged.

Mirror the main point’s padding and animated rule to the right at the same breakpoint. In the stacked layout retain the compact layout’s left alignment, numbers, and rules; in the stacked layout, the complete landscape film sits above a single-column menu, with its frame capped at half the viewport height during the sequence. Compute the final balanced gap before the approach and distribute the remaining height equally above the video, between the video and heading/menu group, and below that group.

Clamp the approaching video to that final top gap, so it never moves higher and then drops back down when the menu appears. Measure the complete title/menu/button group at its natural height and retain a viewport-height stage whenever the content fits. Never make the panel or title/menu group internally scrollable.

Spacing and vertical placement follow scroll position directly without a delayed padding/margin animation; resize and content-height changes recalculate the three gaps. Adjust the pin start, menu destinations, and reserved exit height together for the balanced gap. The wide overlay retains its separate full-height composition.

Reduced motion switches directly between initial/full geometry without scaling animation, retaining access to every demo. Preserve autoplay/muted/loop/playsInline, shared loading/failure feedback, and the existing opening spacing. The framework, pre-training, and post-training clips use the user-uploaded compressed `-reduced.mov` versions.

Preserve the existing explicit JPG poster URLs in `data/home.ts` (without `-reduced`), including the opening landing clip. Whole-Body Intelligence uses a fitted 24–30px heading in the stacked layout, with the same zero-width, hover/focus-revealed anchor icon as Mission/Team. Its #robot-demos target lives outside the stage at the measured sequence start, supporting heading clicks and direct hash navigation.

In the overlay layout, the title restores the larger scale from commit `0d4d94f`: `min(5.67vw, 17.01cqw)` type with 1.2 line height and regular weight, in its right-aligned one-third-viewport column. The container-relative cap keeps the type proportional when the panel reaches its maximum width. Whole-Body Intelligence wraps naturally with balanced lines; do not shrink it to force a single line.

In the stacked layout, retain natural wrapping and the fitted 24–30px heading size. The points use the adaptive panel width and normal content size. Apart from the Whole-Body Intelligence heading and separate numbering treatment, all hero demo text uses a shared full-density text-body size of 18px, reduced together only by height-aware fitting: the main introduction, numbered statements, and Full video label.

Render each supplied statement once at all widths; there is no separate sub-description or compact active caption. Use the standard Outfit/Noto Sans SC text-body font for the introduction and numbered statements at every width, matching the other homepage sections. Only demo numbers retain font-aux text-sm tracking-wide tabular-nums, using regular weight and the shared 13px optical size at full density.

Height-aware fitting may reduce them to 11px alongside the body text. Preserve baseline alignment with their fitted titles and active blue color. This hero description treatment is an explicit exception to auxiliary media-caption typography elsewhere.

Long menu labels wrap within their columns. The Full video link sits beneath the text at the right-side desktop panel’s lower right, with matching top/bottom clearance up to 96px according to available height. A flex column and auto top margin absorb available space, with 12–24px separation from the menu according to the fitted density; on short desktop screens reduce typography and spacing to retain the title, all four entries, and button together.

Leave the trailing title anchor visible within the panel padding without introducing a scroll region. In the stacked layout the link stays in normal flow beneath the menu, preserving the balanced compact layout. Use a four-column grid span with a 12rem minimum and available-width cap in the stacked layout, independent of the heading width.

Keep the Full video label left-aligned at every width, with the arrow on the right. Keep Full video on one line with a 24px label/arrow gap. The link and WBI card use the [shared arrow-control rules](#arrow-controls): static square subtle border outside foreground FadeIn, equal text-relative padding, primary text/arrow, and rightward arrow motion on hover/focus. Full video retains its single label without a note.

Its copy and href live in homeDemos.fullVideo. Full video links to https://youtu.be/b0h9oC8FhpU in a new tab with noreferrer; remove the dummy-button state and To be released note. Preserve the blue label, arrow, hover/focus styling, width treatment, equal top/bottom padding, and vertically centered arrow.

Include the complete button height in compact equal-gap calculations. While the full-width hero video stage is visible, suppress the header in both scroll directions and exclude its controls from keyboard/accessibility navigation. Pin the stage at the viewport top on every screen size; the compact layout balances the video and menu within that stage.

Release suppression when returning to the initial clip, after the stage leaves the viewport, or on route unmount; normal header scroll/focus behavior resumes. Clip changes use a fixed 300ms ease-out dissolve without adding extra fade time after a slow load: retain the outgoing film fully opaque until the incoming film has a presented frame (decoded-frame fallback for paused/older browsers), then fade the incoming layer over it. Reduced motion completes directly without waiting for a transition event.

During a switch, keep the outgoing clip visible while waiting and suppress visual loading spinners on both layers; retain accessible loading status and failure feedback. Initial hero loading and other site videos retain their normal loading indicators. The heading, descriptions, menu, and background move together from/to the right with a 300ms ease-out slide and opacity fade; retain the timing of the mobile blog contents sidebar, with the direction matching this right-side panel.

The panel exits when scrolling back above the pin start or beyond the pinned sequence end, and reverses on re-entry. Hidden/exiting content is inert and excluded from accessibility navigation; reduced motion makes both transitions immediate. These interaction transitions are separate from the shared FadeIn mount entrance.

Height-aware fitting is a hero-only exception to the full-density sizes and spacing above: measure the complete title, four entries, and Full video button on resize, font/content changes, and visual-viewport height changes. Use the largest fitting density, with body/button text from 14–18px, line height 1.4–1.8, auxiliary numbers 11–13px, compact headings 24–30px, and content gaps 12–24px. Full video padding follows its fitted font size through the shared arrow-control ratio. Overlay vertical padding ranges from 24–96px; the one-third-width title retains its previous maximum scale and can shrink to fit, with a 28px floor.

Preserve 44px minimum menu/button targets. The stacked video receives the remaining height, capped at half the viewport; balance the three outer gaps. Neither the panel nor its contents may scroll internally.

At exceptionally short heights or enlarged accessibility text where even the minimum readable treatment cannot fit, switch to a stacked section in normal document flow; keep all four demos available through their buttons. This fallback disables pinning rather than clipping content.

## Mission and Featured Research

Mission and Featured Research use the shared GIST body and 4/8/12-column grid. Mission’s introduction stacks across the grid below 840px, left-aligned throughout; from 840px its heading spans columns 1–4 and copy spans 5–12. Below 840px, Team and Investors match Mission’s stacked alignment and full-body prose width; from 840px they keep centered titles above centered max-w-2xl introductory prose.

Section padding is 48px below 840px and 96px from 840px; vertical group gaps are 24px/48px at the same breakpoint, while horizontal gutters remain 16px below 600px and 24px thereafter. The WBI link stays below Mission prose in the same column, with its square static border outside FadeIn, unchanged copy, and the [shared arrow-control spacing and feedback](#arrow-controls). Preserve natural research-title wrapping and the shared focus/reduced-motion behavior.

After the opening brand/video hero, homepage section order is Mission with WBI (Featured Research) → Team → Investors at all viewport widths. Featured Research is rendered in `home.tsx`, separately from `HomeHero`.

## Founders

Founder biographies remain fully visible. Cards span the complete GIST grid until the founder-list container reaches 1024px; then the first remains full-width and the next two span six columns each. All cards, including the two half-width profiles, use 160px portraits on the left and prose on the right from 600px.

Below 600px, portraits and prose stack. Email is below the photo only in horizontal cards and follows the biography in stacked cards; hide the unused copy with display:none. Preserve square subtle borders outside FadeIn, transparent backgrounds, 24px padding/row gaps, bilingual names, email-only links, complete impact-first bios, and the CEO-only italic mission.

## Investors

The Investors heading and introduction remain vertically stacked within the normal GIST body. Below 840px, their alignment and full-body prose width match Mission (left-aligned throughout); from 840px they are centered with max-w-2xl prose. The separator uses the normal body.

Investor logos use the GIST full-width exception (24px side insets, no maximum width) with the width-class grid: two items per row below 840px (two of four columns below 600px, four of eight from 600px), then four items per row (three of twelve columns) from 840px. Horizontal gaps are the 16px/24px GIST gutters; vertical gaps are 24px below 840px and 48px thereafter. Keep transparent artwork frames at 90% of their grid-cell width, 88–128px shared height, square corners, no outline, 24px vertical padding, and 4px horizontal padding below 840px / 24px thereafter.

Use the original CDN logos in light mode and matching `_e4e8ee` variants (suffix before the original extension) in dark mode through `LoadingImage` native picture selection. Do not add a surrounding artwork background. Preserve data order, visualScale, links, intrinsic image proportions, and 103% hover/focus feedback.

## Blog and demo indexes

Blog/demo index openings and lists use the standard GIST body through `app/index-pages.css`, without additional side padding or a separate max-width. Keep 96px top clearance (`pt-24`) and a breadcrumb row of at least 40px (`min-h-10`). The breadcrumb-to-title gap uses `--section-gap`: 24px below 840px and 48px thereafter.

Opening bottom padding and entry padding use `--section-padding`: 48px/96px at 840px; the first entry has no top padding or top border. Demo rows use the 4/8/12-column grid with the GIST 16px/24px horizontal gutter and `--section-gap` between stacked groups. They stack full-span below 840px; thereafter headings span columns 1–8 and Page/File details span columns 9–12.

Structural dividers remain outside FadeIn. Registered demo players also use `index-body index-opening` from `app/index-pages.css`: breadcrumb, title, and player span the standard GIST body, without additional side padding or a separate max-width. Keep 96px top clearance and the minimum 40px breadcrumb row; breadcrumb-to-title and title-to-player gaps use `--section-gap` (24px/48px at 840px), with no extra title padding.

Bottom padding uses `--section-padding` (48px/96px at 840px). Keep the 12px player-to-hints gap. Preserve natural multiline title height.

Blog index entries appear newest first while retaining chronological numbers: PingpongDuo is 02 above Whole-Body Intelligence as 01. PingpongDuo links to the standalone `/research/PingpongDuo` page and shows only October 15, 2026. Standalone entries use document navigation without a locale prefix.

Blog index entries include the publication date and optional reading time inside the title/arrow link, as a full-width note row 13px below the title. Use the shared fixed 13px auxiliary note type, muted color, middle dot, and accessible labels. Main text and notes are selectable. Keep this note on its own grid row so wrapping cannot move the arrow away from the final title line.

Keep metadata in a separate row inside the link so the arrow remains aligned with the final title line at every width. Publication and reading-time values live in `data/blog-navigation.ts`. Blog/demo index openings and lists consume the standard GIST body through `app/index-pages.css`, without additional side padding or a separate max-width.

Opening clearance remains `pt-24` and the breadcrumb row `min-h-10`; the breadcrumb-to-title gap uses `--section-gap` (24px below 840px, 48px thereafter). Opening bottom padding and entry padding use `--section-padding` (48px/96px at 840px); the first entry has no top padding or top border. Demo rows use the 4/8/12-column GIST grid and its 16px/24px horizontal gutter, stacking full-span below 840px and placing headings in columns 1–8 and Page/File details in columns 9–12 thereafter.

Keep structural borders outside FadeIn and preserve blog title/arrow alignment and the shared 13px note gap. Preserve natural multiline title height and the 12px player-to-hints gap.

## Articles and metadata

Both article openings retain 96px top clearance beneath the fixed header and a minimum 40px breadcrumb/control row. Opening group gaps use 24px below 840px and 48px thereafter; bottom padding uses 48px/96px. The opening videos follow the metadata with the standard opening group gap.

Model-stack panel and card interiors use 24px padding. Its horizontal input/layer/output arrangement starts only when the panel itself reaches 640px; narrower panels retain the stacked arrangement so labels fit within the GIST content column. Article metadata uses a compact, non-selectable small-text strip: publication date and reading time separated by a middle dot on the left, the Share/Cite action group on the right.

Below `sm` (640px), the Share/Cite group moves below with a 24px gap; from `sm`, the groups share a row and wrap when needed. Date and reading-time labels remain accessible to screen readers without repeating visible labels. Reading-time label/value remain English with `lang="en"` in both article languages, matching publication and sharing metadata.

Estimates live in typed data in `data/blog-navigation.ts` and should be revisited after substantial prose edits. Both article languages show `12 min read`. The verified ten-section prose count is 2,250 English words, or 4,379 Han characters plus 146 Latin/alphanumeric words.

At the editorial rates of 200 words/min and 400 Han characters/min, these yield 11.25 and 11.6775 minutes respectively, rounded up. Count prose, lists, and callouts with hyphenated terms as one word; exclude headings, figures/captions, videos, navigation, citation markers, references, and BibTeX. These are calculated estimates, not measured reading durations.

Both Whole-Body Intelligence article languages consume `app/article.css`: the opening, sections/dividers, inline contents, references, navigation, and citation ruler share the standard GIST body. Sections stack full-span below 840px; heading/content span four/eight columns thereafter with the 24px gutter. Section padding is 48px/96px and major group gaps 24px/48px at 840px.

Opening top clearance remains 96px; metadata-to-media spacing uses the standard opening group gap. Model-stack panel interiors use 24px padding, with a horizontal diagram only when the panel itself reaches 640px. Generic spacing tokens in `tokens.css` own the values; home variables remain aliases.

Citations measure the same frame, use its gutter for left notes, and switch to end references below 840px; the floating TOC measures the actual article left edge. Keep structural dividers outside FadeIn. These article rules supersede the older article grid guidance retained in [history](design/history.md); they do not redefine other routes' component layouts.

Article metadata is a compact, non-selectable small-text strip: date and reading time separated by a middle dot on the left, the Share/Cite group on the right from `sm` (640px), wrapping when needed; below `sm`, the action group sits below with a 24px gap. Publication/reading-time labels are screen-reader-only; the date uses semantic `time` markup.

The action group keeps Share, X, and LinkedIn together with 12px gaps. A subtle vertical rule separates the adjacent `Cite` text link, with 24px spacing on each side of the rule. The link stays English in both article languages and has no arrow. Both groups use the existing auxiliary typography, cobalt links, shared hover/focus underline and keyboard outline. Allow the groups to wrap with a 12px row gap; keep each link label on one line. Cite jumps to `#bibtex` with the shared 128px header clearance and smooth scrolling, immediate with reduced motion.

BibTeX is the final article section after the conclusion and, in list mode, References, before optional article navigation. It has no separate section heading: the BibTeX panel spans the complete standard GIST article body at every width, retaining its toolbar label and Copy control. The focusable panel wrapper owns the `#bibtex` target and header clearance. Retain the shared CiteThis panel and its internal foreground fades; the panel border and section divider stay static. The ten-section contents and floating rail boundary remain unchanged.

Reading-time label/value remain English with `lang="en"` in both article languages, matching publication/share metadata. Keep estimates in typed `data/blog-navigation.ts` records and revisit them after substantial prose edits. Current Whole-Body Intelligence estimates both display `12 min read`: the verified prose count is 2,250 English words (11.25 minutes at 200 words/min) or 4,379 Han characters plus 146 Latin/alphanumeric words (11.6775 minutes at 400 characters/min plus 200 words/min), rounded up.

Count prose, lists, and callouts in the ten main sections; hyphenated terms count as one word. Exclude headings, figures/captions, videos, navigation, citation markers, references, and BibTeX. This is an editorial estimate, not a measured reading duration.

Recount actual content when auditing the estimate; do not infer its correctness from the existing label. Article panels/callouts/diagram cells use square subtle borders. `CiteThis` and model stack share `article-panel` / `article-panel-header`, lightly tinted toolbar and 2px accent line.

Copy is a semantic button with stable label width and live feedback. On clipboard failure, show a localized manual-copy message and focus/select the now-selectable citation; normal BibTeX remains excluded from page selection. Middle model layers use `bg-secondary`, labels 500, numbers 700.

Language switch is square. The model-stack diagram retains its existing responsive layout and connecting arrows. Keep borders outside foreground fades.

Canonical source: `foundation-model-stack.tsx`.

## Subscription form preview

The user-requested `/test` route reuses the complete English WBI article with a cobalt `Form` button directly below the article title, before its metadata. The button follows the title's left alignment and the opening's responsive group gaps in normal document flow. This replaces the standalone email test page. It remains unlisted/noindex; the public WBI article, citation/share URLs, and language destinations remain unchanged. This route is an explicit exception to the retired preview-route rule.

The form uses the shared left-sliding native sidebar modal with a separate full-screen blurred, theme-tinted backdrop. Its square frame follows `CiteThis`: subtle border, 2px cobalt accent, tinted `article-panel-header`, auxiliary Form label and braces icon, and 24px inner padding. The frame moves with the sidebar; only its foreground uses the inner FadeIn. The form reuses the actual `article-body` and `article-section-grid` classes and spans every column at all widths, matching the title and BibTeX block's full standard GIST body width and both edges. It remains vertically centered when space permits. Short screens scroll the panel contents; backdrop coverage remains full-screen.

Escape, close, backdrop click, and left swipe dismiss the panel; input/control touches retain native editing rather than swipe dismissal. Keyboard opening focuses the available email input; pointer opening focuses close to avoid immediately summoning the mobile keyboard. The native modal contains focus and blocks the background, with the shared focus return and page-scroll preservation. Reduced motion removes sliding/fading. Closing/reopening preserves the draft and request/result state. The existing live subscription API, validation, pending controls, status announcements, and timeout remain. Browser acceptance is tracked separately in [verification](design/verification.md#interaction-checks).

An alternative inline disclosure sits 24px directly below the Form button, before metadata, spanning the title's full standard body width. Its `Subscribe by email` summary uses normal article typography, thin top/bottom rules, and a trailing shared plus/minus disclosure icon. Expanded content remains on the page surface, with a short prose introduction, visible email label, email/Subscribe row, and the live-preview notice. Below 600px the input and button stack at full width; from 600px they share a row. The inline form and modal share the same draft, pending request, and result. Collapsing preserves them. Native disclosure behavior supplies keyboard activation and expanded state; the icon follows the shared disclosure motion below.

The expanded form includes a selectable direct URL and Copy link control with success announcement and manual-copy fallback. The displayed and copied URL is always `https://www.archon.tech/test#subscribe`, including on localhost and locale-prefixed previews. Visiting that link opens the disclosure and scrolls it below the header without programmatically focusing the summary or email input. A plain `/test` visit starts collapsed. These are implemented preview behaviors, with desktop/tablet/mobile and theme acceptance still pending.

## Media and demo players

Media have square corners and no outer border. Article callouts, diagram cells, and reference panels have square subtle borders. Header pills remain a deliberate exception to square content geometry.

Loadable images and videos share the QR spinner through `LoadingSpinner` in `components/media-status.tsx`. `LoadingImage` reserves each image's supplied aspect ratio at its existing responsive width; `LoadingVideo` reserves a 16:9 frame by default; the hero sequence can constrain frame height on short screens while containing the full video. Artwork/video and status overlays sit absolutely inside these frames, so loading, success, failure, and buffering do not change page layout.

This covers brand artwork, founder photos, investor logos, and homepage/article/demo videos. Images fade in after loading. Failed videos and standalone founder portraits show localized visible failure text and Try again inside the reserved frame.

Retry focuses the frame, then reloads the existing video element or remounts the portrait. Linked brand/investor artwork uses compact alt-label fallback text (an unavailable icon for empty labels), without nested buttons. Failure controls sit above video activation overlays; wide hero feedback stays left of its text rail, and hidden standby/incoming layers are inert.

Reduced motion disables rotation and image fades. Posters and controls remain available while videos load; the hero transforms the full media frame. Directly rendered HTML/SVG figures need no artificial loading state.

QR keeps its existing retry behavior. The spinner itself has no background fill; preserve the media frame's surface and reserved space. Development and production both load resources normally.

Real loading/failure transitions and the complete responsive/theme matrix remain tracked in [verification](design/verification.md#media-and-demo-players). Choose footage and crops that make the demonstrated capability understandable: retain the robot, relevant objects, and task context. Technical figures must preserve readable labels and relationships at their rendered size.

Review media framing and figure readability on desktop, tablet, and mobile, including both article languages. These are acceptance criteria, not a claim that existing assets have been visually verified. The hero retains its documented crop exception in the wide overlay layout (viewport width ≥1024px and aspect ratio ≥4:3); choose source framing with that crop in mind.

In the stacked layout, keep its complete landscape frame. Preserve existing posters and aspect ratios. The two current demo videos still need real poster assets, as tracked in [verification](design/verification.md#browser-verification-checklist); do not substitute invented assets or mark that work complete.

`CiteThis` and the model stack share `article-panel` / `article-panel-header`, a lightly tinted toolbar, and a 2px accent line. Middle model layers use `bg-secondary`; the language switch is square. Copy uses a semantic button, stable label width, and live feedback.

Its Copy/Copied labels and success announcement stay English with `lang="en"` in both article languages. Clipboard failure reveals a localized manual-copy message and focuses/selects the citation. The model diagram retains its existing responsive layout and connecting arrows.

Input/output roles remain in accessible labels; do not add visible Input/Output headings to the cells. Cell borders remain outside their foreground fades. Article videos expose controls when clicked/tapped or activated with Enter/Space, focusing the active video.

Outside click/focus or Escape dismisses controls. Preserve native behavior after activation and existing autoplay/muted loops/posters. Demo players retain native controls and their keyboard layer.

Demo shortcut captions share the article video caption treatment: 12px below the media (`gap-3`), using `font-aux text-sm leading-relaxed text-muted-foreground/80`. Match both the gap and the text line box for consistent visible spacing; retain selection exclusion and responsive wrapping. Demo initial loading uses the same transparent-backed spinner as the blog, with native controls deferred until the first frame is ready.

A frame-sized activation button also reveals and focuses controls on click/tap or Enter/Space, so blocked autoplay/loading does not prevent manual access. When loading finishes while that button is focused, focus transfers to the video. Once revealed, controls remain enabled during buffering; frame dimensions and fullscreen/speed behavior stay unchanged.

The demo player shows the actual playback rate (for example, `0.75x` or `1.5x`) in a small top-right, right-aligned overlay whenever it differs from `1x`. Its right edge stays fixed as the digit count changes. It follows native `ratechange` events, stays visible while that rate is selected, and ignores pointer input.

Use regular `font-aux text-sm`, following the shared auxiliary status typography, with a translucent `media-surface` and fixed white `media-foreground` text. F fullscreens the player container to retain the speed overlay. The fullscreen video fills the container with object-contain, preserving the complete frame.

The browser-native video fullscreen button, iOS video-only fallback, and picture-in-picture omit this page overlay. Media acceptance criteria: footage/crops should retain the robot, relevant objects, and task context; technical figures must retain readable labels and relationships at actual desktop/tablet/mobile sizes and in both article languages. Preserve the hero's wide-overlay crop exception and complete landscape frame in the stacked layout, along with existing posters/aspect ratios.

These criteria do not establish visual acceptance of existing assets or resolve the deferred demo posters. Article videos hide controls until click/tap or Enter/Space activates one video and focuses it. Preserve browser-native behavior after activation, autoplay/muted loops/posters.

Demo initial loading matches the blog's transparent-backed shared spinner: defer native controls until the first frame is ready, then keep controls enabled during later buffering. A frame-sized activation button can reveal/focus controls earlier by click/tap or Enter/Space if autoplay/loading is blocked. If loading completes while this button is focused, transfer focus to the video.

Frame dimensions, demo shortcuts, and fullscreen/speed feedback remain unchanged. Demo shortcut captions match article video captions: `gap-3` (12px) below the media, with `font-aux text-sm leading-relaxed text-muted-foreground/80`. Preserve selection exclusion and responsive wrapping; compare the gap and text line box together when matching visible spacing.

Loadable media use the QR's shared `LoadingSpinner` (`components/media-status.tsx`), without a background behind the spinner itself; retain each media frame's existing surface and dimensions. `LoadingImage` covers founder/investor images and `BrandImage` artwork; `LoadingVideo` covers homepage, EN/CN article, and demo videos. Reserve image dimensions with the supplied aspect ratio and video frames with a fixed 16:9 ratio before requests finish; media and feedback are absolute children so loading, success, failure, and buffering cannot resize the frame.

Preserve responsive sizes, posters, native controls, and the hero's scroll transform on the whole media frame. Images fade in on load; reduced motion disables both the fade and spinner rotation. Failed videos and standalone founder portraits show localized visible failure text and a Try again button inside the reserved frame.

Retry focuses the frame before the button unmounts; videos reload the existing element, and portraits remount the image. Brand/investor artwork inside links uses compact fallback text from its supplied alt label, or an unavailable icon when the label is empty; never nest retry buttons inside links. Failure feedback sits above video activation overlays, and hero feedback stays on the left in the wide overlay so the text rail cannot block it.

Hidden standby/incoming hero layers are inert. HTML/SVG figures render directly without an artificial loader. QR retains its existing fixed frame and retry behavior.

Normal resource loading is enabled in development and production; the temporary forced-loading preview code has been removed. Demo playback speed uses a persistent top-right, right-aligned overlay only when the actual rate differs from `1x`, updated by native `ratechange` events. Keep its right edge fixed across digit counts at all widths.

Use regular `font-aux text-sm` text, following the shared auxiliary status typography, on the translucent `media-surface` with fixed white `media-foreground` text; fullscreen backgrounds use `media-surface` in both themes. The overlay is non-selectable and ignores pointer input. F fullscreens the player container, keeping the badge visible at non-normal rates; fullscreen video uses object-contain to preserve the complete frame.

The native video fullscreen button, iOS video-only fallback, and picture-in-picture still omit the page overlay. Canonical source: `components/video-player.tsx`.

## Article navigation and citations

Citations measure the same GIST body as the article: use right-margin notes when 208px of clearance is available, bottom-aligned left-column notes from 840px otherwise, and an end references list below 840px. Left-note geometry consumes the actual grid gutter. The wide TOC measures the article’s left edge rather than assuming a 1152px body.

Their layout includes both prose and media so notes align with the true section bottom. The wide-screen TOC starts alongside Overview, holds at viewport center, and clamps before the last article row; preserve its fixed positioning and short-screen scrolling. On narrower article layouts (`useCitationMode() !== "right"`), the four opening videos are followed by an always-visible **On this page / 目录** section, with no collapse control.

The page-local `compact-table-of-contents.tsx` shares the floating TOC's `SECTIONS` IDs and translated labels; chrome labels live in `data/blog-navigation.ts`. Use the standard GIST body and section spacing, with a main-tone top separator outside FadeIn. The opening media's existing bottom padding supplies clearance above the separator.

From 840px, the heading spans four columns and navigation spans eight, with the GIST gutter. Inline links form one column below `sm` and two from `sm`, with 12px row gaps. Sidebar work must preserve this inline composition.

After the entire contents section scrolls above the viewport, a bottom-right menu button opens a native modal sidebar from the left. Size it to its longest numbered link plus 24px left padding and 192px right fade clearance, capped at the viewport width with label wrapping when necessary. This keeps breathing room after the links across screen widths and languages instead of shrinking it with a fixed viewport fraction.

Match the header back-to-top control's 36px button and 16px icon. Keep the menu/close button 24px from the right edge (`right-6`), aligned on the same vertical centerline as the header control inside `px-6`. Vertically center the one-column numbered links without a visible title; retain the accessible dialog label.

On short screens, the list scrolls internally with hidden scroll indicators and no clipping of the first/last links. Block background scrolling while open and during exit, preserving the real page scrollbar and content positions by leaving document overflow/body padding untouched. Intercept wheel/touch input outside the scrollable menu and at its boundaries, and guard the captured page scroll position.

Release the guard before section-link navigation. Its theme surface and backdrop blur fade horizontally to transparent at the sidebar's right edge, based on the header's background fade; the rest of the viewport stays clear. Open/close motion lasts 300ms and is immediate with reduced motion.

A horizontal left swipe of at least 48px dismisses it without activating a link; vertical gestures scroll the menu. Escape, outside click, the close button, or a section link also dismiss it. Opening focuses and marks the current reading section using the desktop TOC's threshold, revealing it inside the menu if necessary.

Pointer/touch interaction suppresses the focus outline; keyboard input restores it. The modal contains focus; non-swipe dismissal returns focus to the trigger, while section selection moves focus to that heading link. Swipe dismissal leaves the menu trigger unfocused, undoing native dialog focus restoration if necessary; keyboard dismissal retains focus return.

The wide floating TOC is unchanged. Compact contents numbers follow the shared section order in both languages. Keep each number outside its linked label, baseline-aligned with a 24px gap, using regular `font-aux text-sm tracking-wide tabular-nums`; labels retain the primary site font.

Preserve the existing one/two-column layout and leave the wide floating TOC unnumbered. Confirm number alignment and label wrapping during browser review. Sidebar entries use 24px vertical gaps (`gap-y-6`), matching the desktop floating TOC's `gap-6`.

Inline contents retains 12px row gaps. Preserve the sidebar's typography, vertical centering, and scrolling on short screens. The menu button's list/close icons crossfade with a quarter-turn and subtle scale over 300ms, reversing when the sidebar closes by button, swipe, Escape, outside click, or section selection.

Keep the 36px button and 16px icon frame stationary. The modal owns the transition through exit, then reveals the static trigger icon; reduced motion switches immediately. This control-state animation is separate from foreground FadeIn.

Citations retain three layouts: right margin when space permits, bottom-aligned left-column notes on tablet, end references list on mobile. CitationLayer wraps prose AND media to align with the true section bottom. Start alongside Overview marker, then hold at viewport center, clamp before the last article row.

Placement differs from the header-offset active-section scroll spy. Keep wide-layout visibility, resize/scroll/language updates and short-screen scrolling. When citation mode is not `right`, keep the always-visible On this page / 目录 section after the four opening article videos; do not make it collapsible.

Its page-local implementation is `compact-table-of-contents.tsx`; reuse the floating TOC's `SECTIONS` IDs and translated labels, with typed chrome labels in `data/blog-navigation.ts`. Use the standard GIST body and section spacing, preserving the main-tone top separator outside FadeIn. The opening media's bottom padding supplies clearance above the separator.

From 840px, the heading spans four columns and navigation eight, with the GIST gutter. Inline links use one column below `sm` and two from `sm`, 12px row gaps, shared underlines/focus, and non-selectable navigation text. After the whole section scrolls above the viewport, a bottom-right menu button opens a native modal sidebar from the left, sized to its longest numbered link plus 24px left padding and 192px right fade clearance, capped at the viewport width.

Let labels wrap when that cap is reached; do not size the sidebar as a fixed viewport fraction. Vertically center the one-column numbered sidebar links, without a visible title; retain an accessible dialog label. On short screens, allow internal scrolling with hidden scroll indicators and all links reachable.

While the sidebar is open (including exit animation), block background scrolling while preserving the real page scrollbar and layout width. The theme surface and backdrop blur fade horizontally to transparent at the sidebar's right edge; the remaining viewport stays clear. Sidebar open/close motion is 300ms, immediate with reduced motion.

A horizontal left swipe of at least 48px dismisses the sidebar; vertical gestures continue to scroll its contents, and swipes must not activate a link. On opening, focus and mark the current reading section using the desktop TOC's active-section threshold. Touch/pointer interaction has no focus outline; keyboard interaction restores the shared outline.

Reveal the current link within the sidebar if necessary. Escape, outside click, close button, and section selection also dismiss it; contain focus and return it to the trigger on non-swipe dismissal or the selected heading link on navigation. Swipe dismissal leaves the menu trigger unfocused, undoing native dialog focus restoration if necessary; preserve keyboard dismissal focus return.

Compact contents numbering runs 01-10 in shared section order, in a semantic ordered list. Keep numbers outside the linked labels with a 24px baseline-aligned gap; numbers use regular `font-aux text-sm tracking-wide tabular-nums`, while labels retain the primary site font. Preserve numbering in both languages and the existing one/two-column layout; the wide floating TOC remains unnumbered.

The inline contents retains its 12px row gaps; keep the sidebar's existing typography, vertical centering, and short-screen scrolling. The sidebar button's list/close icons crossfade with a quarter-turn and subtle scale over 300ms, reversing on every dismissal path. Animate the modal's icon through exit before handing back to the static trigger icon; keep the 36px button and 16px icon frame fixed.

Reduced motion switches icons immediately. This is a control-state animation, separate from foreground FadeIn.

## 404

The 404 outer body uses `--layout-body-width` through `app/not-found.css`, with centered SVG artwork capped at 37.6rem and a 24px gap between its two lines. Preserve its equal `textLength`, intrinsic proportions, accessible equivalents, non-selectable decorative text, and existing copy; the SVG sizing is an approved exception to the standard heading scale. Section padding is 48px/96px and the title-to-return-link gap is 24px/48px at 840px.

Retain the viewport-centered composition and allow normal page scrolling on short screens. Localized pages reserve the fixed header height separately (36px controls plus shared header padding, 60px at the default root size); the bare root fallback reserves no header space. The root fallback has no localized chrome; localized not-found pages use their layout.

Root fallback has no localized chrome.

## Motion, interaction, and selection

### Arrow controls

Full video, Featured Research, and the blog title/arrow links use one shared treatment. The main text remains regular weight. The arrow's square frame is 1.2em of the actual main text size, with a 1.5-unit SVG stroke chosen to visually match regular text; center it in a single inherited line-height frame aligned to the last text line, including wrapped titles. Visual stroke/height matching still requires browser confirmation.

Bordered controls use primary main text; the borderless, unpadded blog variant uses foreground main text. Arrows always use primary, and notes use muted foreground. Arrow-control main text and notes are selectable in every variant; decorative arrows and the separate blog numbers remain excluded from selection. Labels have no underline in any state. Hover and keyboard focus translate only the arrow right by 0.18em over 300ms ease-out, reversing on exit without scale or layout movement. The displacement follows the main text size. Reduced motion removes the displacement and its transition; keyboard outlines appear immediately.

Bordered controls have equal padding on all four sides at 1em of their main text size. This preserves the compact research card's original 24px padding around its 24px title, then scales proportionally: 24/28.8/38.4px for research and 14–18px for the fitted Full video label. This component-specific rule replaces fixed card padding for these controls only. Borders remain outside FadeIn.

On hover or keyboard focus, the primary border draws from the top-left corner along two paths: top edge left-to-right and left edge top-to-bottom first, then right edge top-to-bottom and bottom edge left-to-right, meeting at bottom-right. Each stage lasts 150ms with linear interpolation (300ms total); exit retracts in reverse order toward top-left. Keep the existing neutral border underneath. For research and Full video, both border layers remain outside FadeIn. The effect changes only the border, preserving geometry, background, text, and arrow behavior. Reduced motion switches the primary outline immediately. Use the shared `BorderTrace` for bordered research and Full video controls and the article language switch; blog index links remain borderless. The language switch preserves its selected fill, label hover colors, dimensions, and existing opening entrance.

Notes use the blog's existing `font-aux` family at fixed `--type-aux-sm-size` (13px at the default root), weight 400, with a one-em line height. The gap between note and main text equals that note size, independent of viewport and main text size. Blog entry numbers are separate from the control and are not notes: preserve their original auxiliary typography and position 24px above the title, outside the link. Publication/reading metadata is a note inside the link, in its own row below the title with the shared 13px gap. The blog title, arrow, and note share the native link, preserving localized versus standalone destinations. Implementation ownership is recorded under [arrow controls](design/implementation.md#arrow-controls).

### Other motion and interaction

Disclosure content reveals from top to bottom as its container height grows, then retracts from bottom to top on collapse. Keep content anchored below the summary without scaling or per-item staggering; animate height over the same 300ms ease-out as the plus/minus icon, starting both together. Restore natural height after opening so validation messages and responsive wrapping fit. Preserve form draft/result state while collapsed, reverse smoothly on rapid toggles, and switch immediately with reduced motion. Current scope is the inline subscription preview; this is separate from mount-only FadeIn.

Expandable content uses `DisclosureIcon` (`components/ui/disclosure-icon.tsx`): a plus when collapsed and a minus when expanded. Keep the horizontal stroke fixed; rotate the vertical stroke clockwise 90 degrees until it overlaps the horizontal stroke, reversing counterclockwise on collapse. Use 300ms ease-out in both directions, without delay, bounce, fade, or scale. This timing matches the existing 300ms control feedback; reduced motion switches immediately. Preserve the icon frame, inherited color, summary focus/hover/pressed feedback, and native keyboard behavior at every viewport. The current consumer is the inline subscription preview; header/article modal navigation retains its separate list/close treatment. Implementation details live under [disclosure icons](design/implementation.md#disclosure-icons); browser acceptance remains pending.

Use shared `FadeIn` for mount entrances: 0.3s delay, 0.6s duration. With device reduced motion enabled, show its foreground immediately without delay or fading; the CSS override also applies before hydration and when the preference changes. Fade foreground content while structural dividers and borders remain static.

The shared entrance runs in CSS from the element's first styled appearance, with a visible resting state so completion or hydration cannot reset it to hidden. See [shared foreground entrance](design/implementation.md#shared-foreground-entrance) for implementation constraints; Windows blink confirmation remains in [verification](design/verification.md#browser-verification-checklist).

`CiteThis`, model-stack cells, and article callouts own their internal fades; do not fade their entire bordered container through an ancestor wrapper. Hero scroll motion and load-gated image/QR fades are specific exceptions. Section-anchor navigation and Back to top jump immediately with device reduced motion enabled; retain smooth scrolling otherwise.

Keep the existing immediate hero-menu and Skip to content navigation. This scrolling/entrance convention does not change video playback. Ordinary text links use the shared animated underline with no separate hover color.

TOC links retain blue for the active section and muted text for inactive sections, including on hover. Existing logo links, founder email icons, footer social/QR icons, and investor logos use 103% hover and keyboard-focus scale feedback over 300ms. Arrow controls use their separate translation treatment above. This is not a universal rule for all links or controls.

Reduced motion disables that scale feedback and the underline transition. Header navigation pills and the back-to-top button retain their control treatment: blue background, `primary-foreground` text/icon, and a subtle shadow on hover, with existing keyboard-focus outlines. The square article language switch uses a cobalt fill for the selected language and changes the inactive label from muted to foreground on hover.

The Copy button changes its text from muted to foreground on hover and provides its existing icon/label and live-region feedback after activation. These controls are exceptions to ordinary text-link styling; preserve their existing shapes and interactions. Keyboard navigation starts with a focus-only Skip to content link outside the animated header, targeting the shared focusable main landmark (including root 404).

A baseline 2px theme-blue outline with 4px offset covers ordinary links and native controls; specialized component focus styles take precedence. The header stays visible while focused. Article-video Escape restores focus to its activation button outside fullscreen, and QR hover timers leave keyboard focus intact.

Keep portals explicitly themed and non-selectable. Preserve existing keyboard focus, accessible labels, and semantic controls; reuse shared components for their interaction states. Copy, the article language switch, founder email links, the footer logo/social links, and QR controls use the header's 2px cobalt keyboard-focus outline with a 4px offset.

This feedback does not change their default layout or hover treatment. Prose, including demo descriptions, and headings remain selectable. Chrome, numbering (including inline citation markers and reference-list numbers), figures/captions, supporting navigation, and normal BibTeX are excluded from page selection.

Mobile reference titles remain selectable; margin-note blocks retain their existing selection exclusion. Explicit BibTeX Copy still works, with selectable text available on clipboard failure. Decorative 404 text is the heading exception.

Existing logo links, founder email icons, footer social/QR icons, and investor logos scale to 103% over 300ms on hover and keyboard focus, disabled for reduced-motion users. Do not apply this universally to other links or controls; arrow controls translate instead. Keep special hero scroll geometry separate from ordinary layout rhythm.

Keyboard navigation: `SkipToContent` is the first body control, outside header motion and FadeIn. Its English label and shared `main-content` target live in `data/accessibility.ts`; both localized and root-404 main landmarks use that ID and `tabIndex={-1}`. The link appears only on focus, transfers focus to main, and scrolls immediately without changing the route/hash.

Ordinary links/native controls have a shared 2px theme-blue focus outline and 4px offset; component-specific/inset outlines take precedence. Header remains visible while a descendant has focus outside the full-width hero sequence; that sequence suppresses the header and makes its controls inert. QR hover previews never steal focus; the close timer preserves focused trigger/content, and keyboard dismissal retains Radix focus return.

Article-video Escape restores the activation button after controls hide, except when fullscreen owns Escape; inactive videos are excluded from Tab order. Demo players have explicit tab stops and data-sourced accessible names. Copy, the article language switch, founder email links, footer logo/social links, and QR controls use the header's 2px cobalt keyboard-focus outline with 4px offset.

Preserve default geometry and existing hover treatments. `FadeIn` is the shared mount entrance animation (0.3s delay / 0.6s duration). Wrap foreground blocks, keep structural dividers/borders outside.

`CiteThis`, model-stack cells, and article callouts own their foreground fades; do not wrap these whole bordered components in an ancestor FadeIn. Load-gated image/QR fades and hero scroll motion are approved exceptions. Do not replace with scroll-triggered entrance animations.

Ordinary text links use shared animated underline, no separate hover color; TOC links keep active blue/inactive muted colors on hover. Header pills and back-to-top retain their blue background, `primary-foreground` text/icon, and subtle shadow on hover, plus existing keyboard-focus outlines. The square article language switch retains its selected cobalt fill and inactive-label hover color; Copy retains its text hover color and activation feedback.

These are control exceptions, not ordinary text-link styling. Heading alignment is determined by text alone. Anchor icons use a zero-width inline positioning span with an absolutely positioned trailing SVG, revealed on hover/focus without changing text width or flow.

Apply this to homepage and article SectionTitle helpers. Numbering (including inline citation markers and reference-list numbers), chrome, figures/captions, BibTeX and supporting navigation use select-none; prose, including demo descriptions, and headings remain selectable except decorative 404 text. Mobile reference titles remain selectable; margin-note blocks retain their selection exclusion.

Explicit BibTeX Copy still copies the citation.

## Interaction-state reference

This table summarizes the current source behavior. Browser confirmation remains separate. When extending a control, document its applicable default, hover, keyboard-focus, active, loading, and failure states; do not invent states for controls that do not need them.

Preserve native focus behavior where no custom focus treatment is specified.

| Control / canonical source | Default | Hover and keyboard focus | Activation / selection | Loading / failure |
|---|---|---|---|---|
| Subscription preview: `app/[locale]/test/subscription-panel.tsx`, `subscription-form.tsx` | WBI article copy with Form directly below the title; closed modal; form shares the title/BibTeX block's full article body width and horizontal position at every breakpoint | Shared button hover/focus; native input keyboard outline; square BibTeX-style frame and toolbar | Form opens the shared left sidebar over full-screen blur; close/Escape/backdrop/swipe dismiss; keyboard opening focuses email; submits to the live Worker | Disabled input/submit while pending; live success/error/timeout feedback; draft and result survive closing/reopening; native required/email validation |
| Inline subscription alternative: `app/[locale]/test/subscription-inline.tsx` | Full-body-width native disclosure below Form; collapsed on plain visits; article-style prose and form when open | Summary hover/pressed color and focus outline; labeled inputs and shared buttons | Summary toggles with pointer/keyboard, synchronized plus/minus rotation and top-to-bottom content reveal (reverse on collapse); `#subscribe` arrival opens and scrolls without automatic focus; Copy link copies the deployment URL | Shared submission pending/result state; Copy temporarily disables while pending, announces Copied, and selects URL with manual-copy feedback on failure |
| Skip to content: `skip-to-content.tsx` | Hidden offscreen, first in keyboard order | Focus reveals the link above header/popups with a visible outline | Enter focuses main and immediately scrolls there; next Tab enters content | Native same-document anchor remains available before hydration |
| Text links and TOC: `globals.css`, article TOC | Ordinary link color; TOC active blue, inactive muted | Underline appears on hover/focus without changing the link's color; reduced motion removes the transition | Navigate to the destination; TOC tracks the active section | No custom loading or failure UI |
| Compact article contents: `compact-table-of-contents.tsx` | Always-visible inline numbered list; floating 36px button after scrolling past | Current section blue; touch/pointer focus has no outline, keyboard focus retains cobalt outline; link underlines and button hover fill | Button opens animated left sidebar with vertically centered one-column links, no visible title, hidden internal scrollbar, preserved page scrollbar, current-section focus, focus containment, background scroll blocking and swipe-left dismissal; links navigate after exit to shared anchors | No loading/failure state; reduced motion removes sliding/fading |
| Arrow controls: `arrow-action.tsx`, `globals.css` | Bordered Full video/research links have equal 1em padding and primary labels; blog title/arrow links have no border/padding and foreground labels; primary arrows and fixed auxiliary notes | Arrow shifts right 0.18em over 300ms without scaling; no label underline and immediate keyboard outline; bordered variants also trace primary edges from top-left to bottom-right; reduced motion disables displacement and switches border state immediately | Native link navigation; blog title/arrow/note share one link, with the number outside it; destination and external-tab behavior preserved | No custom loading or failure UI |
| Header pills and back-to-top: `header-v202609.tsx`, `CustomButtonV1` | Transparent background, cobalt text/icon | Hover adds blue fill, `primary-foreground` text/icon, subtle shadow; keyboard focus has an immediate cobalt outline; only hover background, text color, and shadow transition | Navigate or scroll to top; focus reveals the header and keeps it visible; back-to-top releases mouse/touch focus so scroll hiding resumes, retaining keyboard/assistive focus | No custom loading or failure UI |
| Article Cite link: `MetaBlock` in `article.tsx` | Cobalt `Cite` beside Share, separated by a subtle rule | Shared underline on hover/focus and cobalt keyboard outline | Same-document navigation to the final citation panel with header clearance; smooth unless reduced motion is enabled | Native anchor remains available before hydration; no loading/failure state |
| Citation Copy: `cite-this.tsx` | Muted Copy label and cobalt icon | Hover changes label to foreground; keyboard focus has a cobalt outline | Check icon and English Copied label for 2 seconds in both article languages; stable label width and English live announcement | No separate pending indicator; failure announces manual copying and focuses/selects the citation |
| Article language switch: `LangToggle` in `article.tsx` | Current language has blue fill and `primary-foreground` text; other label is muted | Hover changes inactive label to foreground and traces the shared primary border from top-left to bottom-right; keyboard focus also traces the border and retains its immediate cobalt outline; reduced motion switches border state immediately | The whole control navigates to the other language's article | No custom loading or failure UI |
| Images and video frames: `loading-image.tsx`, `loading-video.tsx` | Reserved responsive image ratio / 16:9 video frame | Loading overlays ignore pointer input; failure buttons accept pointer/keyboard input and retain focus in the frame during retry | Images fade in on load; video controls remain native | QR-style spinner for initial load and buffering; visible localized video/portrait failure with Try again, compact fallback for linked artwork; reduced motion stops rotation/fades; geometry stays fixed |
| Article task videos: `VideoClips` in `article.tsx` | Muted autoplay loop with poster; controls hidden | Activation button has a cobalt keyboard-focus outline | Click/tap or Enter/Space exposes native controls and focuses the video; outside click/focus dismisses them; Escape restores the activation button outside fullscreen | Shared video-frame loading/failure treatment above |
| Demo speed status: `video-player.tsx` | Hidden at `1x` | Non-interactive; no hover/focus state | Keyboard or native speed changes update the persistent top-right, right-aligned rate label and polite live region; F includes the badge in container fullscreen | Shared video-frame loading/failure treatment; speed badge remains independent |
| Footer social links: `footer-v202609.tsx`, `brand-icons.tsx` | Accessible labels, theme foreground, optically balanced icons | Icons scale to 103% on hover/focus, except with reduced motion; cobalt keyboard-focus outline | HTTP destinations open in a new tab with `rel="noreferrer"` | Inline icons need no loading/failure UI; destination loading is native |
| Footer QR: `qr-popover.tsx` | Labeled icon button; popover closed | Icon scales to 103% on hover/focus, except with reduced motion; cobalt focus outline; pointer hover opens popover | Click or keyboard activation toggles the shared popover; pointer departure uses a 150ms delay that preserves focused trigger/content; hover previews do not move focus; keyboard Escape returns focus through Radix | Fixed-size artwork box shows loading, then artwork or failure with Try again; live status feedback; reduced motion disables spinner rotation and artwork fade |

## Responsive rules

| Width / condition | Structural behavior |
|---|---|
| Articles and Mission: below / from 840px | Full-span stacked / four-column heading and eight-column content within the standard GIST body; 48px/96px section padding |
| Founder cards: below / from 600px | Portrait/prose stack with email after biography / 160px portrait beside prose, email below portrait |
| Blog/demo indexes: below / from 840px | GIST body at all widths; 48px/96px section padding and 24px/48px opening gaps; demo rows stack / split eight-four columns with a 24px gutter |
| Shared footer: below / from 840px | Navigation above brand / equal six-column halves separated by the 24px grid gutter; full width with 24px side insets |
| Hero: width ≥1024px and aspect ratio ≥4:3 | Viewport-filling video with right-aligned overlay; initial video spans centered columns 2–11 of the full-width 12-column grid (24px outer frame insets), with its bottom allowed below the screen |
| Hero: all other viewport shapes | Complete landscape video above left-aligned text; initial video targets 24px side insets, snapped to centered columns; stacked menu uses the GIST body |
| Homepage founder body ≥1024px | First profile spans all columns; the other profiles share a row with portraits left and prose right |
| From 1568px | Capability list becomes two columns; TOC visibility follows its own nearby geometry threshold |
| From 840px / 1600px | Shared headings use the middle / largest type configuration; structural breakpoints remain independent |

Citation placement follows available space through its shared component. Preserve resizing, language changes, long-title wrapping, and mobile portrait/landscape behavior. The detailed desktop/tablet/mobile acceptance checklist lives in [verification](design/verification.md#browser-verification-checklist).

Written conventions, source review, and passing build/lint checks do not establish full visual compliance; browser acceptance remains pending until the user confirms those checks. Follow the [development verification workflow](../AGENTS.md#development).

## Canonical references and guardrails

| Design area | Reference |
|---|---|
| Palette, typography, underlines, article panels | [globals.css](../app/globals.css) |
| Section order, Featured Research, founders, investors | [home.tsx](../app/[locale]/(default)/home.tsx) |
| Hero geometry | [home-hero.tsx](../app/[locale]/(default)/home-hero.tsx) |
| Device-theme brand artwork | [brand-image.tsx](../components/brand-image.tsx) |
| Shared header and footer | [header-v202609.tsx](../components/layout/header-v202609.tsx), [footer-v202609.tsx](../components/layout/footer-v202609.tsx) |
| Article composition and model diagram | [article.tsx](../app/[locale]/blog/whole-body-intelligence/article.tsx), [foundation-model-stack.tsx](../app/[locale]/blog/whole-body-intelligence/foundation-model-stack.tsx) |
| Citation layouts and Copy behavior | [citations.tsx](../components/citations.tsx), [cite-this.tsx](../components/cite-this.tsx) |
| Keyboard entry and focus | [skip-to-content.tsx](../components/skip-to-content.tsx), [globals.css](../app/globals.css) |
| Entrance animation and QR portal | [fade-in.tsx](../components/animation/fade-in.tsx), [qr-popover.tsx](../components/qr-popover.tsx) |

Compare the full component boundaries when extending a pattern, including what deliberately stays outside animation or layout wrappers. Preserve the current fonts, palette, widths, content order, and documented exceptions. Avoid restoring legacy glows, rounded media, collapsed founder bios, a theme toggle, or retired preview routes; the explicitly requested `/test` subscription preview is scoped above.

Reference collections such as `awesome-design-md` provide inspiration; their brand-specific rules do not override Archon's conventions.
