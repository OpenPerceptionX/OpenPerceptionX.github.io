# Retired design and superseded documentation

This file preserves historical requirements and comparison notes for recall. It does not govern the current site. Current requirements live in [DESIGN.md](../DESIGN.md), with workflow in [AGENTS.md](../../AGENTS.md) and pending checks in [verification](verification.md). Do not restore retired behavior without a new request.

## Historical reference: v202605 (retired)

This archive preserves the previous design's features and the pre-migration comparison notes so they can be recalled on request. **Everything below is historical, not instructions for the current public UI.** Mentions of “original” refer to v202605; “preview” refers to the then-unreleased v202609. Palette values and pending-check statements below are snapshots and are superseded by the current sections above.

Key v202605 features: default-dark theme with localStorage preference and pre-paint script; light/dark raster logos and QR artwork; ambient brand glows and landing logo glow; a right-side robot with progressively blurred lower body (1/2/4/7/11px bands), theme-swapped robot.png/robot-white.png and load-gated reveal; bounded header/footer with theme toggle; native click-to-expand founder cards; compact bordered investor logo chips; rounded article media with controls enabled by default; header-offset pinned TOC; compact 404 with vertical divider. Shared citation layouts, routing, fonts and data assets existed in both versions.

Exact retired source paths at `c0a6bd7`: `app/[locale]/(default)/page.tsx`, `components/layout/header.tsx`, `components/layout/footer.tsx`, `app/layout.tsx`, `app/globals.css`, `app/not-found.tsx`, and `app/[locale]/blog/whole-body-intelligence/{article,foundation-model-stack}.tsx`. The old palette used light surface rgb(233,233,233), foreground #0d0d0d, brand #102878, muted #565e6b; dark background #0d0d0d, secondary surface #1c1c1c, foreground #e9e9e9, brand #6f86e0, gray #9aa1ad. Source recovery is available in git; no public legacy routes are retained.

<details>
<summary>Pre-migration feature documentation and comparison history</summary>

## Style Conventions

### Verification Follow-up
- Preview article section numbers use `select-none`, matching blog/demo numbering, while section headings stay selectable. English preview chrome and article breadcrumbs use `lang="en"`; each article language-switch label carries its own language tag.
- Preview footer social links and QR triggers use equal 24px control boxes with centered 20px glyphs and 24px gaps. Keep QR trigger sizing scoped to `theme="v202609"`; original footer sizing stays separate.
- New UI language tags follow the actual content, independently of the URL locale: English preview home, blog index, demo pages, and 404 use `lang="en"`; Chinese hero text and founder names use `lang="zh"`. Preview articles use their `lang` prop on the wrapper, with English metadata explicitly tagged. Keep the existing per-prose and callout language tags as well.
- Supporting links outside semantic navigation wrappers also need `select-none`: homepage featured-research navigation, demo page/file link lists, and the 404 return link. Homepage progress status is metadata and is also excluded from page selection.
- Build and lint pass after the final title-group and spacing-consistency edits. Browser confirmation remains pending: check desktop, tablet, and mobile, original light/dark pages, and the independent preview palette. Compare breadcrumb/title positions, spacing after the full article title/metadata/BibTeX group, first index entries, and mobile media-to-section/footer spacing. For selection, use Ctrl+A then copy into plain text to confirm the actual copied content excludes chrome, figures/captions, and BibTeX while retaining main prose; visual selection highlighting alone is not sufficient. Confirm BibTeX's explicit Copy action and navigation/media controls still work. Update this note when those checks are completed; it is a pending check, not a confirmed defect.

### Spacing
- Audit effective spacing across component boundaries: parent gaps/margins and child padding add together. Preview article opening-media blocks and demo-player content end with `pb-12 md:pb-24`, while retaining `pt-24` for header clearance. Homepage capability items already provide `pt-6`; do not add a heading `mb-6` that doubles the heading-to-list gap. Keep media/captions, controls, and other intentionally grouped content on their own internal spacing.
- Allowed values for `m-` and `p-`: `6`, `12`, `24` only (e.g. `p-6`, `mx-12`, `mt-24`)
- The scale governs **layout rhythm**. Small self-contained *controls* (e.g. a segmented toggle's `p-1` / `px-3 py-1`) are exempt - like shadcn's own button internals - but keep the exception to genuine control padding, not page/section spacing.

### Typography
- Headings: use `text-t1` / `text-t0` (custom responsive classes, not ad-hoc `text-3xl xl:text-4xl`)
- With Outfit, page titles, section headings, and founder names use `font-normal` (400); small subheadings use `font-medium` (500). `text-t0` uses line height 1.2 and `text-t1` uses 1.25 at every breakpoint. Short article emphasis uses `font-semibold` (600); full-sentence highlights use `font-medium` (500), including in callouts. Keep body text at 400 and preserve existing sizes, body line heights, and letter spacing. This supersedes older `font-bold` examples for these headings below; diagram numbers are separate.
- Main body content uses the shared **`text-body`** class in `globals.css`: 18px, weight 400, normal letter spacing, line height 1.8 for English and 2.1 for Chinese. Apply it to homepage prose, founder biographies, capability lists, article prose/callouts, and demo descriptions. Set `lang={lang}` on bilingual prose blocks and callouts so `:lang(zh)` selects Chinese leading. Keep 24px paragraph gaps. Headings, hero slogans, captions, metadata, diagrams, navigation, and code retain their separate typography. Do not duplicate main-content size/leading utilities in pages.
- Notes: `text-xs`
- Figure/Video captions: `text-sm leading-relaxed text-muted-foreground/80`
- Prose bullet lists: `list-disc pl-6 marker:text-o-blue` (brand-colored marker). Do not hand-roll dot `<span>`s with margin hacks (e.g. `mt-3`) - that breaks the `6/12/24` spacing scale. (The homepage capabilities list is a different, deliberately ruled two-column list - see Two-column Ruled Lists.)

### Layout
- Scroll offset: `scroll-mt-32`
- Border radius: `rounded-sm`
- Breakpoints in use: `md` / `xl` / `3xl`
- Max widths: `max-w-6xl` is the main alignment (header, footer, section dividers, and section content)
- Section content uses a **two-column grid within `max-w-6xl`**: the section label/title (`SectionHeader`) in the left column, prose/content in the right - `md:grid-cols-3` with header `md:col-span-1` and content `md:col-span-2` (stacks on mobile). Avoid a lone narrow `max-w-4xl` text block inside a `max-w-6xl` section (looks unbalanced); let content fill the right column so it aligns to the `6xl` edge.
- **`position: sticky` is broken app-wide** because `app/[locale]/layout.tsx` renders content inside `<main className="w-full overflow-hidden">`, and an `overflow-hidden` ancestor makes descendants stick to *that* box (which doesn't scroll) instead of the viewport. For floating/pinned UI (e.g. the blog's table of contents) use `position: fixed` + a throttled scroll/`resize` handler to place it (align to a reference element, then clamp to a top offset), not `sticky` - unless you're prepared to remove that `overflow-hidden`.

### Colors
- Never hardcode hex values - always use custom color tokens
- Background / section surface: `o-background-soft`
- Foreground text: `foreground`
- Brand / links / focus ring: `o-blue`
- Separators / borders / inputs: `o-gray` (`#9aa1ad`)
- Secondary/muted **text**: `text-muted-foreground` - a dedicated darker token (`#565e6b`) in light mode for legibility (decoupled from `o-gray`, which was too faint); falls back to `o-gray` on the dark surface. Do not use raw `o-gray` for body/secondary text.
- Do not create separate hover colors for links; use underline only on hover
- Do not add a separate main background token; use the soft background as the page background

### Dark Mode
- Toggled by a `.dark` class on `<html>`; an inline script in `app/layout.tsx` applies it **before paint** from `localStorage.theme` (key `theme`, values `light`/`dark`, **default dark** - `.dark` is applied unless the user explicitly chose light). The header has the toggle button.
- All color tokens have light/dark values, so building with tokens makes components adapt for free. Test every UI change in both modes.
- Tailwind dark variant is wired via `@custom-variant dark (&:is(.dark *))` in `globals.css`.
- `color-scheme` is declared per theme in `globals.css` (`:root` → `light`, `.dark` → `dark`) so the browser themes **native UI** (scrollbars, form controls, text-selection) to the *site* surface. Without it the native scrollbar follows the **OS** theme and vanishes on the dark surface. Keep these in sync if you add a theme.

### Versioned Themes
- `v202609` is an opt-in page theme, separate from the global light/dark modes. Apply the `v202609` class to a page-level wrapper only when explicitly requested for that page; do not add version checks throughout its components.
- Permanent White + Cobalt palette: primary `#2455D6`, foreground `#202630`, secondary/auxiliary `#DEE6F5`, page/footer background `#FFFFFF`, white `#FFFFFF`. Muted text mixes 78% foreground with the background; semantic borders mix 40%. The temporary palette selector, session preference logic, experimental palettes, and logo filter hooks have been removed. QR artwork keeps a white surface.
- The class overrides the existing semantic tokens (`background`, `foreground`, `o-blue`, `o-background-soft`, `o-gray`, and shadcn tokens), so existing descendants inherit it. The palette also supports direct Tailwind utilities such as `text-v202609-primary`, `bg-v202609-background`, and their corresponding named colors.

### Versioned Preview UI
- Blog/demo indexes, registered demo players, and both preview article languages share a 96px opening top clearance, a top-aligned `min-h-10` breadcrumb/control row, and a 48px gap before the title. Space after the title block matches section-to-separator spacing: 48px below `md`, 96px from `md` upward. Index headings use `pt-24 pb-12 md:pb-24`, and the first numbered entry has `first:pt-0` to avoid double padding. The article title group includes the heading, publication/share metadata, and BibTeX, with 48px internal gaps; apply the extra `md:pb-12` after BibTeX, before the opening media. Player title wrappers apply it after the title/description block. This combines with the parent's 48px gap to make the outer spacing 96px at `md` and above. The 40px minimum breadcrumb row accommodates the language switch without shifting article titles; allow natural wrapping on narrow screens. Subsequent entries retain the approved responsive section spacing. Keep title height natural for multiline text; homepage and 404 remain separate.
- Visual design reviews preserve the current content and order. Compare colors, typography, spacing, and element styling using focused visual demonstrations before applying a new design choice. Implement the user's selected options; unselected color/contrast proposals remain suggestions, not approved conventions. Distinguish reconstructed comparison specimens from screenshots or verified browser rendering.
- Keep redesign work isolated: `lib/preview-routes.ts` is the explicit route list used by both `RouteHeader` and `RouteFooter`. Add new preview routes there rather than duplicating pathname checks. Existing production routes continue using the original components until migration is explicitly requested.
- The preview header/footer are deliberately **full width**, with `px-6`; this is an exception to the main `max-w-6xl` alignment. **Blog content retains its original `max-w-6xl` widths**, section grids, and citation layout. Do not widen articles when changing the shared chrome.
- Repeated preview-home/article sections and blog/demo index entries use `py-12 md:py-24`: 48px top/bottom padding below `md`, 96px from `md` upward. Their stacked heading/content grids use `gap-6 md:gap-12` (24px mobile, 48px tablet/desktop). Keep paragraph gaps and card padding at 24px. Preserve opening title/breadcrumb clearance beneath the fixed header, homepage hero geometry, header/footer spacing, and 404 layout. Original homepage/article spacing remains separate.
- Header: Careers → Contact → back-to-top; no theme toggle. It keeps the scroll-hide behavior and a white background fade. Its top/bottom padding is `py-3` (an explicit spacing exception); the current footer copyright uses `pt-6 pb-6`. Careers and Contact retain pill styling with `text-sm font-normal` (400), `h-9`, and `px-4`; back-to-top remains an icon button. Use `gap-3 md:gap-6` between controls so the header fits narrow screens.
- Footer: navigation first on mobile, then logo/socials; at `md` and above, logo/socials sit left and navigation right. Keep mobile DOM/focus order aligned with the visual order. Numbers use `/ 01`, `text-sm font-medium tracking-widest text-muted-foreground tabular-nums`, centered vertically beside 24px titles. Numbers remain outside links; link padding belongs to the link's clickable area.
- Footer brand lockup: CDN `logo/LOGO-ARCHON-black-2048.png`, intrinsic 2048×238, currently `w-60` (240px). Distinguish the **A mark**, **whole lockup**, and **social icons** when sizing: matching the A mark to the header's 32px logo does not mean shrinking the whole lockup to 32px. Social glyphs are 20px, ordered X → LinkedIn → YouTube → WeChat → Xiaohongshu; email is the third numbered navigation item, Contact. All social glyphs scale to 103% on hover with a 300ms transform transition; retain full opacity/color. This includes the preview QR triggers, while original footer behavior remains unchanged.
- The cobalt preview palette stays independent of the saved global dark/light state. Put the theme class on preview wrappers and portaled dropdown/popover surfaces; use the dark logo/black QR assets against this light surface. Do not rely on an ancestor to theme a Radix portal.
- The viewport scrollbar belongs to `<html>`, outside the page wrapper. `html:has(.v202609)` in `globals.css` forces native UI to the light color scheme on preview pages, overriding a saved global `.dark` preference without affecting production routes.
- The preview 404 uses two SVG text lines with equal `textLength` so both scale to the same width; shared maximum is `37.6rem` (about 602px). Both the error code and "Page Not Found" heading use `select-none`, including their SVG and accessible text equivalents; the return link is also non-selectable. Preserve the accessible text and intrinsic SVG proportions. Copy lives in `data/not-found-v202609.ts`.
- Preview pages, header fade, and footer use pure white `#FFFFFF`; keep the palette independent of original light/dark routes. Browser confirmation remains pending on desktop, tablet, and mobile, including portals and native controls.

### New UI Media and Controls
- Preview blog videos in both article languages initially hide native controls. A full-video semantic button enables controls on click/tap or Enter/Space and transfers focus to the video; only one clip is active. Clicking outside, moving focus outside, or pressing Escape disables controls again. Once enabled, native control visibility follows the browser's behavior. Preserve autoplay, muted looping, posters, captions, and responsive media geometry. Original articles and demo players retain their separate behavior. Build and lint pass for this change; desktop/tablet/mobile browser checks of activation, dismissal, keyboard focus, and playback remain pending.
- New UI controls that previously faded on hover (footer socials/QR triggers and homepage investor links) now scale to 103% with `transition-transform duration-300`. Use transforms so the effect does not reflow surrounding content. Keep entrance fades and QR image-loading fades unchanged.
- These exceptions apply to opted-in new UI pages only. Photos and videos have square corners and no outer border. Keep their aspect ratios, captions, posters, playback controls, and existing content widths.
- Text-based diagrams, highlighted callouts, and BibTeX blocks retain subtle `border border-o-gray/30` outlines with square corners. Diagram cells also use square corners and the same border tone; structural internal rules remain. Do not remove useful boundaries simply because a text diagram is rendered inside a `<figure>`.
- The preview blog language switch has square corners on both its outer frame and selected label; retain its border, selected-language fill, and hover behavior. This does not change the approved header pills or unrelated popover controls.
- Preview BibTeX uses `CiteThis` with `appearance="panel"` and `copyAppearance="text"`. BibTeX and the model stack share `article-panel` / `article-panel-header`: square corners, a subtle border, page-background content, and a lightly primary-tinted toolbar with muted-foreground text and primary-color icons. Both preview blocks have a decorative 2px `h-0.5 bg-o-blue` top line; default BibTeX retains its original 4px line. Preview callouts match team cards with a transparent surface, `border border-o-gray/30`, and `p-6`. Copy visually matches the braces/BibTeX label: icon and text, no button border or fill. Keep a semantic button, keyboard interaction, hover transition, check icon, and Copied/live-region feedback. The default appearance stays unchanged for original pages.

- Preview model stack: all four middle layer blocks use `bg-secondary`; retain the input/output cells and connecting arrows. Layer title labels use `font-medium` (500), while layer identifiers retain `font-bold` (700); original diagram styling stays separate. Both toolbar labels, including "Four layers, explicit interfaces" and its Chinese translation, use `select-none`.
- Preview team cards: use an equal-width, stretching `xl:grid-cols-2` grid with `gap-6`; the first founder spans both columns. Keep square corners, `border border-o-gray/30`, a transparent surface, and `p-6`. The two cards sharing a row have equal height without fixed heights. Photos remain 160px squares. At `md` and above, email icons sit 24px below the photo, aligned to its left edge; below `md`, keep email icons after the biography/mission. Hide the inactive responsive copy with `display: none` so it is excluded from keyboard navigation. Original homepage accordion behavior remains separate.

### Demo Directory and Players
- `/demo` is an unlisted directory generated from `data/videos.ts`, with labels in `data/demo-index.ts`. Keep it out of public navigation and the sitemap, with `noindex/nofollow` metadata. This is discoverability control, not authentication: anyone with the URL can open it. Player routes currently retain their separate metadata behavior.
- The index and all registered `/demo/<slug>` player pages use `v202609 min-h-svh`; blank space fills the remaining viewport height when content is short. `lib/preview-routes.ts` includes `/demo` and generates the player route entries from `videos`; do not duplicate slug lists or use a broad pathname prefix that themes unknown routes.
- Retain `max-w-6xl`, `px-6`, and the blog's `text-t0 font-normal` page title. Demo sections use `/ 01` numbering and `text-t1 font-normal` headings with `gap-6 py-12 md:gap-12 md:py-24`. Add separators between numbered entries only (`border-t border-o-gray/60 first:border-t-0 md:border-o-gray/30`), with no rule immediately under the page title. Section titles are plain text, without links or hover link icons; keep `id={video.slug}` and `scroll-mt-32` on the heading for incoming anchors. Page and file links remain in the right column. At `md` and above, the title takes **two-thirds** and the links **one-third** of the three-column grid; below `md`, title and links stack. This deliberately reverses the blog's column proportions.
- Breadcrumbs show `Archon Robotics /` on the index and `Archon Robotics / Demos /` on players. Names link to their respective routes; separators are non-interactive. Do not restore the back-arrow wording or add a language switch to these pages.
- Index Page links use localized `/demo/<slug>` navigation. File links display the short `/demo/<file>` path but link directly to `videoSrc(video)` on the assets CDN with `target="_blank" rel="noreferrer"`. Preserve the existing raw-file redirects for shared URLs.
- At the latest audit, both registered demo videos lack posters. Keep this tracked as a blocked-autoplay fallback gap; do not claim poster support until real poster assets are supplied or generated and configured.

### Fonts
- Code/BibTeX uses an explicit system monospace stack through `--font-mono` (`ui-monospace`, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace). Do not point it at an undefined font variable: an invalid `font-family: var(...)` can inherit the body sans font instead of restoring the earlier monospace declaration. This fallback applies site-wide; Outfit/Noto Sans SC body typography stays unchanged.
- The site uses **Outfit for Latin text and Noto Sans SC for Chinese**, self-hosted as variable WOFF2 files in `public/fonts/outfit/` and `public/fonts/noto-sans-sc/`, each with its SIL OFL license. `globals.css` imports `fonts-noto-sans-sc.css`, whose Unicode ranges load only the subsets needed on a page. `--font-sans` lists Outfit first, Noto Sans SC second, then the Apple/system fallback; `body` is `antialiased`. Preserve existing sizes, weights, and spacing when changing font families. Code/BibTeX stays monospace. Ask before changing to another font.

### Titles
- Do not use all-caps for titles/headings (no `uppercase`). Use normal case.

### Punctuation
- Use a regular hyphen (`-`) instead of an em dash (`—`) in user-facing copy and responses.

---

## Tailwind Approach

- Use the most naive, default shadcn/ui styling - do not invent styles beyond what is needed
- Do not add decorative Tailwind classes (shadows, gradients, arbitrary colors, extra borders) unless explicitly requested
- Prefer shadcn/ui component defaults; only override when explicitly specified
- FlyonUI plugin is loaded in `globals.css` - do not remove it

### Custom Utility Classes
These are defined in `globals.css` - use them instead of reinventing with inline Tailwind:

| Class | Purpose |
|---|---|
| `text-t0` | Responsive display heading size |
| `text-t1` | Responsive section heading size |
| `text-body` | Shared 18px/400 main-content typography, with language-aware line height |
| `app-background` | Ambient brand-glow background (on the fixed full-page layer in RootLayout) |
| `header-fade` | Opaque→transparent vertical gradient behind the header; cross-faded in on scroll via an opacity layer |
| `header-fade-v202609` | Continuous background fade across the versioned preview header's existing height |
| `logo-glow` | Soft light beneath the landing logo; uses `--foreground` so it's black in light / white in dark |
| `no-scrollbar` | Hide scrollbars cross-browser |

---

## Component Registry

Self-developed (non-shadcn) components live in `components/`. **Before building a new interaction, check this table first** - reuse or extend an existing component rather than reinventing it. **When you add a new reusable component, add a row here** (and keep it out of a single route folder - put genuinely reusable pieces in `components/`, not e.g. a `blog/` subfolder).

| Component / exports | File | What it does |
|---|---|---|
| `FadeIn` | `components/animation/fade-in.tsx` | The single entrance-animation primitive - opacity fade on mount (`delay 0.3s / duration 0.6s`). Wrap every visible content block in it. See the FadeIn section. |
| `CitationsProvider`, `CitationLayer`, `CiteRef`, `CitationList`, `useCitationMode` | `components/citations.tsx` | Footnote/reference citations for long-form articles, with a three-tier responsive layout (right margin → left column → mobile `References` grid). See Blog / Article Pages. |
| `CiteThis` | `components/cite-this.tsx` | Academic code / BibTeX block with a format toolbar and stable copy-state label (icon + text). Wraps long lines - no horizontal scrollbar. Pass text via `code`; optional `formatLabel` / `copyLabel` / `copiedLabel` props customize the UI labels. `className` adjusts the outer frame; `appearance="panel"` selects the shared preview article frame and lightly tinted toolbar; `copyAppearance="text"` enables the preview's unboxed copy control, while the default remains a button appearance. |
| `VideoPlayer` | `components/video-player.tsx` | Native `<video controls>` (default browser UI) plus a `window`-level **YouTube-style keyboard layer**: Space/K play, ←→ 5s, J/L 10s, ↑↓ volume, M mute, F fullscreen, 0–9 jump, `,`/`.` speed. Listener is on `window` (not the element) so Space works when the page - not the player - has focus; handled keys `preventDefault()` so Space doesn't scroll. Skips typing targets and Ctrl/Meta/Alt chords. Used by the `/demo/<slug>` player page. |
| `WechatIcon`, `XiaohongshuIcon`, `XIcon` | `components/ui/brand-icons.tsx` | Inline brand glyphs (Simple Icons) as `currentColor` SVGs that adapt to dark mode. Add brand glyphs lucide lacks here. |
| `CustomButtonV1` | `components/ui/custom/button.tsx` | The site's icon button (used for header controls). |
| `Header` | `components/layout/header.tsx` | Fixed site header: logo, Careers link, back-to-top, theme toggle, hover dropdown menus. **Auto-hides on scroll**: visible on load and within the top band (`TOP_ZONE` 80px), slides out (`-translate-y-full`) when scrolling down, returns on scroll up. Thresholds are **measured from the last direction reversal** (`anchorY` re-anchors at the turning point), **not frame-to-frame** - a gentle scroll only moves a few px per frame, so a frame-to-frame delta never accumulates past the threshold and the header would react to fast flicks only. They're asymmetric on purpose: `UP_DELTA` 4px (reveal feels instant) vs `DOWN_DELTA` 12px (hiding takes a deliberate scroll). Reads are rAF-throttled; `onFocusCapture` re-reveals it so keyboard focus never lands off-screen. |
| `Footer` | `components/layout/footer.tsx` | Site footer: social links + QR popovers (with a loading spinner while the QR image decodes). |
| `QrPopover` | `components/qr-popover.tsx` | Shared hover/click QR popover with loading fade. Default follows light/dark; optional `v202609` theme keeps the portal and QR on the warm light surface. |
| `FooterV202609` | `components/layout/footer-v202609.tsx` | Full-width white versioned footer with 24px side padding and a large brand lockup and all social accounts on the left, numbered blog, careers, and email contact links on the right, and copyright below; content lives in `data/footer-v202609.ts`. |
| `RouteFooter` | `components/layout/route-footer.tsx` | Selects `FooterV202609` for routes listed in `lib/preview-routes.ts`; all other routes keep the existing `Footer`. Uses the locale-aware pathname. |
| `HeaderV202609` | `components/layout/header-v202609.tsx` | Full-width preview header with 24px side padding and the cobalt `v202609` palette, dark logo, and themed dropdown portals; Careers and Contact links, back-to-top, and the original scroll behavior. No theme toggle; navigation lives in `data/header-v202609.ts`. |
| `RouteHeader` | `components/layout/route-header.tsx` | Selects `HeaderV202609` for routes listed in `lib/preview-routes.ts`; all other routes keep the existing `Header`. Uses the locale-aware pathname. |

shadcn/ui primitives in `components/ui/` (`button`, `popover`, `dropdown-menu`, `separator`, `drawer`, `sheet`, `aspect-ratio`) are library components - not listed here. Page-specific helpers used by exactly one route (e.g. an article's `SectionHeader` / `MetaBlock`) stay in that route folder, per Data below.

---

## Component Rules

### General
- Use `<Link>` instead of `<a>`
- Use `<Image>` instead of `<img>`
- Use `<div><Image /></div>` instead of CSS `background-image`
- Links must set `target={href.startsWith('http') ? '_blank' : '_self'}`
- External links with `target="_blank"` must also set `rel="noreferrer"`
- Wrap foreground content blocks in `<FadeIn>` for the entrance animation - check layout after, as FadeIn can affect flow (see the FadeIn section below)
- Add `select-none` to decorative / non-interactive elements (icons, logos, UI chrome). **Portaled** content (Radix `PopoverContent`, `DropdownMenuContent`, etc.) renders outside its DOM parent, so it does **not** inherit `select-none` / `dark:` / other classes from an ancestor like `<footer>` - set them on the portaled content itself.
- Large or purely decorative images: lazy-load them (omit `priority` - lazy is the `next/image` default) so they don't compete with the LCP, and the `display:none` off-theme copy isn't fetched until the theme switches. Reserve `priority` for the above-the-fold hero (the landing logo). Always pass `width`/`height` so the box is reserved and nothing reflows across the unloaded → loading → loaded states.

### Navigation
- In localized routes/components, import `Link`, `useRouter`, and `usePathname` from `@/i18n/navigation`
- Avoid `next/link` for user-facing internal navigation

### Text Links
- Site-wide text selection: `globals.css` makes `header`, `footer`, `nav`, `figure`, and `figcaption` non-selectable, including their contents, so Ctrl+A focuses on the page's main text. This covers previous/next navigation, breadcrumbs, TOCs, diagram content, and media captions on original and preview pages. `CiteThis` also uses `select-none` for its entire block, while its explicit Copy button still copies the citation. Demo video descriptions are non-selectable. Keep main headings, prose, lists, and callouts selectable, with the explicit exception of the preview 404 error code and heading. Portaled header/footer menus and QR surfaces require their own `select-none` because they render outside the semantic wrappers. Do not intercept Ctrl+A or disable link, keyboard, or media interactions.
- All inline/text links use `text-o-blue` and the shared underline animation in `globals.css`: it grows from the left on hover/keyboard focus, then retracts toward the right on exit, with a 400ms accelerating curve. Reduced motion disables the transition. Existing `hover:underline` utilities are overridden by this global treatment. Links with `no-underline` and image/icon links remain exempt. For padded text links, keep `no-underline hover:no-underline` on the link and wrap its label in `<span className="link-underline">` so the line follows the text rather than the clickable area's padding. Preserve inline wrapping.

### Brand Assets
- **`/assets` is now a CDN, not a local folder**: everything that used to live under `public/assets/` (robot images, founder headshots, investor logos, blog figures/posters) is served from `https://assets.archonrobotics.tech/`, with the same subpath structure (`/logo/`, `/people/`, `/blog/<slug>/`, plus root-level files like `robot.png`). Reference these with the full CDN URL, not a local `/assets/...` path. The CDN's `remotePatterns` entry lives in `next.config.ts` (`hostname: 'assets.archonrobotics.tech'`) - required for `next/image` to serve them at all; add a new remote host there the same way if another CDN/domain is introduced. Favicons, the header/landing logo lockup, and `public/qrcode/` are unaffected - those still live in `public/` (root) since they were never under `/assets`.
- Landing hero robot: `.../robot-white.png` (silver wireframe, dark mode) and `.../robot.png` (luminance-inverted, light mode), theme-swapped like the logo. Rendered in `app/[locale]/(default)/page.tsx` as a softened decorative backdrop - a multi-layer **progressive blur** (clear head → blurred legs, driven by the `ROBOT_BLUR_BANDS` array) with a **load-gated** linear opacity reveal (entrance fires on the image's `onLoad`, not on mount). It's centered in the **empty right half** of the `max-w-6xl` column (each theme layer is boxed to `inset-y-0 left-1/2 right-0`, image `left-1/2 -translate-x-1/2`), beside the left-aligned hero text - not flush-right.
- Founder headshots: `.../people/<name>.jpg`, square **384×384** JPG (e.g. `hongyang_li.jpg`). Rendered in the homepage Team section as small `size-20 rounded-sm object-cover` figures. Not theme-dependent (real photos), so a single file each - no light/dark pair.
- Investor logos: `.../logo/<name>.{svg,png,webp}`, native brand files, tightly cropped to their own content (no letterboxing) - mixed formats/aspect ratios are fine since each is sized from its own intrinsic `width`/`height` in `data/investors.ts`. If a supplied file has excess canvas padding, either fix it at the source (re-export tightly cropped, as was done for `hku.png`/`sii.png`/`miracle_plus.png`) or, for a vector file, tighten its `viewBox` in place to the actual content bounds (done for `gaorong.svg`: `viewBox="0 0 1250 703"` → `"240 220 770 260"`, computed via the browser's `getBBox()` on its path elements) - don't guess a crop, verify the content bounds first.
  - **Rendered in native brand color on a card matching the blog's `Callout` shape** (`rounded-sm border border-o-gray/40 p-6` - see `Callout` in `article.tsx`) rather than a flat opaque white block, which read as a jarring cutout against the page. A uniform grayscale/invert filter was tried first and rejected (brief was to keep native brand color). The card's fill is `bg-o-background-soft dark:bg-neutral-200` - **not** `bg-o-background-soft` alone: that token is `#1c1c1c` in dark mode, barely lighter than the page, so dark-brand-color logos (Gaorong's caption, HKU's fine print, Gobi's linework, `5y.svg`'s `#004436`) lost contrast. `dark:bg-neutral-200` pins the card to a fixed light surface in dark mode (still softer than pure white) while light mode keeps the normal token. If a future logo needs even more contrast, adjust this fill - don't reach for a filter on the image again.
  - Each logo links out to the investor's official site (`target="_blank" rel="noreferrer"`, per the External Links convention).

### Icons & Theme-dependent Images
- UI icons are **lucide-react** (`currentColor`) so they adapt to dark mode automatically - no variants needed
- Brand glyphs lucide lacks (WeChat, Xiaohongshu) are inline SVGs from Simple Icons in `components/ui/brand-icons.tsx` (`fill="currentColor"`, 24×24); add new ones there the same way
- Swap theme-dependent **raster** images with CSS, never JS - render both and toggle with `dark:hidden` / `hidden dark:block`. This avoids the hydration-mismatch warning and the wrong-theme flash. A JS `src` swap on `theme` state will hydrate-mismatch.
- If a raster icon has no dark/white counterpart in `public/`, ask the user to add one rather than guessing
- **Brand mark (the Archon "A")** - two separate concerns, don't conflate them:
  - **Favicon**: `public/favicon.svg` is a RealFaviconGenerator file that embeds **both** polarities (a black `#light-icon` and a white `#dark-icon`) and switches between them with its own internal `@media (prefers-color-scheme: dark)`. So `app/layout.tsx` lists it **unconditionally** - do **not** re-add `media`-conditioned icon entries, and don't hand-edit the SVG. `favicon.ico` / `favicon-96x96.png` are static-black fallbacks for browsers that ignore SVG favicons.
  - **In-page logo**: uses the **older, edge-to-edge** mark, kept deliberately - `android-chrome-512x512.png` / `android-chrome-white-512x512.png` (landing hero) and `apple-touch-icon.png` / `favicon-white-32x32.png` (header), swapped with `dark:hidden` / `hidden dark:block`. Do **not** "modernise" these to the favicon set's artwork: that version adds heavy internal padding (~12% ink vs ~24%), so at the same `size-8` / `size-24` box the mark renders about half as large. These must also stay separate raster pairs because the site theme is a `.dark` **class** (default dark, independent of the OS), whereas `favicon.svg`'s switch follows the **OS** scheme - using the SVG in-page would desync the logo from the theme toggle. If these files ever go missing, recover them from git history (they predate commit `b3efe09`) rather than re-exporting.

### Videos
Always use this combination:
```tsx
<video autoPlay muted loop controls playsInline poster="..." preload="metadata" className="... aspect-video rounded-sm">
  <source src="..." type="video/mp4" />
</video>
```
- The `poster` is **required**, not optional: the in-app **WeChat** browser (and other webviews) frequently block muted autoplay, so without a poster the video renders as a black box until tapped. Generate one by extracting a frame from the clip - e.g. `ffmpeg -ss 1 -i clip.mp4 -frames:v 1 -q:v 4 poster.jpg` (seek ~1s to skip a black intro) - and upload it alongside the post's other assets on the CDN (`https://assets.archonrobotics.tech/blog/<slug>/posters/`).

### Section Headings
Every `<h2>` section anchor uses a `<Link>` with `scroll-mt-32`, `group`, a matching `id`, and a hover-revealed SVG link icon. The icon must **flow inline like a trailing word** - do **not** wrap the `<Link>` in `flex items-center`: flex centers the icon against the *whole* multi-line title (not the last line) and flex-shrinks it when space is tight. Keep it inline (`align-middle`), and separate it from the text with a real **space** (`{" "}`), not `ml-*` - a margin still indents the icon when it wraps onto its own line, whereas a space collapses at the line break.
```tsx
<h2 className="text-t1">
  <Link href="#section-id" className="scroll-mt-32 group" id="section-id">
    Section Title{" "}
    <span className="hidden size-6 align-middle group-hover:inline-block text-foreground">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    </span>
  </Link>
</h2>
```

### Section Comments (page structure - house style)
Label **every** major JSX block with a terse `{/* … */}` comment naming it, so a page's structure scans top-to-bottom at a glance. Conventions:
- Homepage / landing blocks use a **short name**: `{/* Landing */}`, `{/* Slogan */}`, `{/* Mission */}`, `{/* Team */}`, `{/* Technology */}`, `{/* Featured blog CTA */}`.
- Numbered article sections use **`{/* NN - Title */}`**: `{/* 01 - Overview */}`, `{/* 02 - Why humanoids need a new scaling path */}`.
- When a block needs a *why*, append it after an **em-dash**: `{/* Floating TOC - only in the wide layout (same signal as right-margin citations) */}`.

When adding a section, give it a comment in this style; keep the label in sync if the section's purpose changes.

### Header External Links
- The **Careers** link (`https://careers.archonrobotics.tech`) is a `CustomButtonV1`-styled pill applied directly to the `Link` itself, not `<CustomButtonV1><Link>…</Link></CustomButtonV1>` - `Button`/`CustomButtonV1` don't expose Radix's `asChild`, so nesting a `<button>` inside the `<a>` would be invalid HTML. Its classes are `CustomButtonV1`'s visual output copied by hand (`h-9 px-4 rounded-full bg-transparent text-o-blue`, hover fills `bg-o-blue text-background`) - if `CustomButtonV1` is ever given `asChild` support, prefer switching this back to composing the real component instead of hand-copied classes.

### Header Dropdowns
- Use shadcn `DropdownMenu` (Radix) with **`modal={false}`** - modal mode locks body scroll, which hides the scrollbar and shifts the fixed header. Menus open on hover.
- Item highlight must be set explicitly, e.g. `focus:bg-o-blue focus:text-background` - the default shadcn `accent` token equals the popover background here, so the default highlight is invisible.
- The language switch is currently hidden (`hidden` class on its wrapper); the menu button is a hover dropdown.

### FadeIn
- `components/animation/fade-in.tsx` is the **single animation primitive** for the whole site - a simple opacity fade (`0 → 1`, `delay 0.3s`, `duration 0.6s`). Do **not** hand-roll `motion.*`, ad-hoc `transition`/`animate`, or other entrance effects; use `<FadeIn>` so timing stays uniform everywhere.
- It animates **on mount**, not on scroll-into-view - below-the-fold blocks finish fading before you scroll to them (this is intentional; don't switch to `whileInView` without asking).
- Every visible content block is wrapped in it for a consistent entrance: header controls, homepage sections/lockups, the footer body, and the 404 view. When adding a new page or section, wrap its blocks in `<FadeIn>` the same way.
- **Structural separators/dividers stay outside `<FadeIn>`** - they don't animate. The homepage/blog section rules (`border-t border-o-gray/60 md:border-o-gray/30` - stronger on mobile, softer at `md`+) sit outside the section's FadeIn wrappers, and the footer `<Separator>` sits outside the footer's FadeIn; only the content fades in. Keep new dividers static the same way.
- It is typed `HTMLMotionProps<"div">`, so it accepts `className` and other motion-div props (e.g. add `relative` to anchor a child, or move a parent's flex/`col-span` classes onto the wrapper).
- **Permitted exception - load-gated reveals.** `FadeIn` fires on *mount*; when an entrance must instead wait for an asset to finish loading (e.g. the hero robot's `onLoad`, the QR popover spinner→image swap), a minimal CSS `transition-opacity` toggled by a `loaded` state is fine. Keep it to a linear/opacity fade so it still reads as consistent - this is the one place not to use `<FadeIn>`.

### Two-column Ruled Lists
- Preview homepage core capabilities use one column below 1568px and two columns from 1568px (`min-[1568px]:grid-cols-2`). This explicit cutoff matches the approximate viewport scale at which the blog TOC appears, rather than `xl` (1280px). Keep the second item's top divider below this cutoff and remove it at the same breakpoint as the column split; retain the existing responsive border tones and surrounding layout. Original homepage behavior stays separate. Build and lint pass; browser confirmation remains pending on desktop, tablet, and mobile, especially just below/above 1568px.
- For numbered/ruled lists in a 2-col grid with an **odd** item count, use symmetric `py-6` + `border-t` on every item (plus `border-b` on each column's last item) and **no row gap**. Adding bottom padding to only one cell of a row makes the grid stretch the whole row and creates uneven gaps.

### Centering Pattern (Project Pages)
Use empty `<div>` spacers flanking content inside a `flex-row gap-6 justify-center` wrapper:
```tsx
<div className="flex flex-row gap-6 justify-center mt-6">
  <div></div>
  <div className="w-full max-w-4xl ...">content</div>
  <div></div>
</div>
```

---

## Data

- All content (publications, events, team, navigation) lives in `data/` files as typed arrays/records
- Never hardcode content directly in page components
- Components used by only one page should live in the same route folder as that page
- **Shareable demo videos**: `data/videos.ts` (`Video[]` - `slug`, `file`, `title`, optional `description`, `poster`) is the **single source of truth**. Adding one entry lights up **both** delivery paths with no other edits - do not hand-write either:
  - `/demo/<file>` (the real, **dotted** filename) → 307 straight to the CDN file. `next.config.ts` **generates** one redirect per entry by importing this list (relative `./data/videos` - tsconfig `@/` aliases are not resolved while Next loads the config).
  - `/demo/<slug>` (**extension-less**) → the universal player page `app/[locale]/demo/[slug]/page.tsx`, which renders the clip `muted` with `controls`. It sets `generateStaticParams` from the list plus `dynamicParams = false`, so only listed slugs exist and anything else 404s at the routing layer.
  - The dotted/extension-less split is what makes this work: the i18n middleware matcher **skips paths containing a dot**, so `.mp4` URLs bypass the app router and hit the `next.config` redirect, while extension-less paths go through the middleware and are locale-prefixed. Keep `slug` distinct from `file` or the two behaviours collide.
- **Founders**: the homepage Team section (`02`) is driven by `data/founders.ts` (`Founder[]` - `name`, `nameZh`, `role`, `photo`, `bio`, optional `mission`, `links`). Rendered as a **two-column grid** (`grid items-start gap-12 xl:grid-cols-2`) where the **first founder spans the full first row** (`xl:col-span-2`, featured) and the rest share the next row. The two-column split only kicks in at **`xl`** (not `sm`) because the founders sit inside the section's narrow `md:col-span-2` content column - splitting earlier cramped the cards and clipped a role line under `<main overflow-hidden>`; below `xl` they stack vertically (single column). Cards are **click-to-expand** - a native `<details>`/`<summary>` accordion (uma.bot pattern; the boss's "帅照 → 点开 → details" vision), no JS/deps. Collapsed `<summary>` = the compact header row (figure + name/title + a `ChevronDown` that rotates via `group-open:rotate-180`); expanded body = bio + mission + email links. Kill the default disclosure triangle with `list-none [&::-webkit-details-marker]:hidden`. The grid needs **`items-start`** so expanding one card doesn't stretch its row-mate to match height. EN name and `nameZh` sit **inline** (`flex items-baseline gap-3`). **Content style - modeled on [uma.bot](https://uma.bot/), the boss's reference (an earlier academic long-prose version was rejected as "too Chinese" / "still the OpenDriveLab mindset"; a bare-bullets version was then rejected as too thin):**
  - `bio` is a **1–2 sentence, impact-first** blurb: verb-forward, native English, leading with landmark work / awards (e.g. *"Pioneer of end-to-end autonomous driving: he led UniAD…"*). **No** professor titles or institution pedigree (the HKU affiliation was explicitly removed), **no** multi-paragraph prose. Rendered as a single `<p>` at `text-base leading-relaxed`.
  - `mission` is an optional personal one-liner rendered `italic text-muted-foreground` after the bio - used **only for the CEO** (like UMA's CEO card), not every founder.
  - `links` is **email only** - we deliberately do **not** link co-founders out to personal/academic homepages, because pointing the company's co-founders at their academic pages signals they aren't fully committed to the company. The `icon` union is just `"email"`, mapped to a lucide glyph via a page-local `FOUNDER_LINK_ICONS` record + `FounderLinks` renderer in `page.tsx` (page-specific, so it stays there, not in the registry). Icon links follow the **logo/icon** pattern (`text-o-blue no-underline hover:no-underline`), not the inline text-link underline treatment.
  - Homepage is English-only, so all copy is English (no in-page ZH toggle like the blog).
- **Investors**: the homepage Investors section (`04`, after Technology) is driven by `data/investors.ts` (`Investor[]` - `name`, `nameZh`, `logo`, `width`, `height`, `visualScale`, `url`). **Order is deliberate** (company-specified), not alphabetical - don't resort it. Rendered as a `flex flex-wrap` row of `<Link>` cards (`gap-6`), each logo on its own `rounded-sm border border-o-gray/40 bg-o-background-soft px-4 py-3` card (the blog's `Callout` shape, but compact - the `px-4 py-3` is a control-padding exemption for these small chips, not page-level spacing). Each card links to `url` (the investor's official site) - see the Brand Assets note above for the card styling rationale and the one known muted-contrast case.
  - **Sizing - `visualScale`**: most of these logo files are lockups pairing a wordmark with a smaller secondary line (a Chinese name, "CAPITAL", a subtitle) or an oversized icon (Gobi's mountain mark, MiraclePlus's bar chart), so sizing every logo to the same raw canvas `height` made single-line marks like IDG Capital look much bigger than two-line ones - canvas height isn't a fair proxy for how big the mark actually reads. `visualScale` is a hand-tuned multiplier - not measured off pixels - chosen by eyeballing each logo and nudging it until the primary wordmarks look roughly the same height across the row; a new investor logo should be eyeballed against its neighbors the same way rather than defaulting to `1`. **The card's own bound stays constant across every entry** - only the mark inside scales: each logo sits in a fixed `h-9` area (`24 * visualScale` at the current max `1.5`) and is centered within it (`items-center justify-center`), so the card itself never grows/shrinks per logo.

---

## Blog / Article Pages

- Posts live at `app/[locale]/blog/<slug>/` as two files: a **server** `page.tsx` (exports `metadata`, renders the article) and a **client** `article.tsx` (the `"use client"` body). Keep `metadata` in the server file - a client component can't export it.
- Mirror the homepage section primitives - they're defined per-page (not exported), so **replicate the markup exactly** rather than importing: `SectionHeader` (numbered `/ 01`), the `max-w-6xl` `md:grid-cols-3` grid (header `col-span-1`, content `col-span-2`), `border-t border-o-gray/60 md:border-o-gray/30` dividers **outside** `<FadeIn>`, `text-lg leading-relaxed` body, `text-t0` title. Keep them visually identical to the homepage.
- **Figures** go on the CDN under `https://assets.archonrobotics.tech/blog/<slug>/` (per-post subfolder - see the Brand Assets note above, `/assets` is no longer a local folder). Constrain a figure to the content column (empty `md:col-span-1` spacer + figure in `md:col-span-2`) so it aligns to the prose edge, not the full `6xl` width.
- **Citations / margin notes**: `components/citations.tsx` (see the Component Registry) renders footnote-style references with a **three-tier responsive layout** chosen by `useCitationMode()` → `"right" | "left" | "list"`: (1) `right` - notes floated in the right margin (outside the divider), each aligned to its `<CiteRef>` line, when there's room; (2) `left` - no room on the right but the section is still two columns (≥ `md`), so all the section's notes group into the empty **left column**, bottom-aligned to the section's last row (positioned purely with CSS off the content block: `right: calc(100% + <grid-gap>px)`, `width: calc((100% - <grid-gap>px) / 2)`, `bottom: 0`); (3) `list` - single-column/mobile, fall back to the end-of-article `References` list (a three-column **column-major** grid - `grid-flow-col` with `gridTemplateRows: repeat(ceil(n/3), …)` - so the numbers read straight down each column and short labels fill the width). Wrap the article in `<CitationsProvider>`, each content region in `<CitationLayer>` - this must wrap **all** of a section's content (prose **and** any figures/videos below it), so the `left`-mode notes bottom-align to the section's *true* bottom, not just the prose; pass `className` to set its container layout (e.g. `gap-12 md:col-span-2` when it wraps the whole content column). Mark references inline with `<CiteRef citations={…} />`, and gate the fallback list on `mode === "list"`. EN and ZH keep **separate** cite maps, each numbered in that language's own reading order.
- **Task / demo videos** follow the Videos convention (`autoPlay muted loop controls playsInline`, `aspect-video rounded-sm`), driven from an array with per-language captions (like `Figure`), laid out `grid gap-6 sm:grid-cols-2`. Place the media **inside** the section's `<CitationLayer>` (see above) so `left`-mode notes still bottom-align to the true section bottom.
- **Floating table of contents** (`TableOfContents`, page-local): a `fixed` scroll-spy nav - **not `sticky`** (broken by `<main overflow-hidden>`, see Layout). Shown only in the wide layout (gated on `useCitationMode() === "right"`, the same signal as right-margin notes) and width-matched to the citation note (`w-40`). A throttled `scroll`/`resize` handler (a) aligns its top to §01's `SectionHeader` marker then clamps to the header offset (starts level with `/ 01`, then floats), and (b) sets `active` = the last section whose heading passed the top offset - **position-based, not IntersectionObserver enter/leave**, so it's correct scrolling up too. Labels are **abbreviated** (short forms; the `id`s must still match the sections). Its placement effect depends on `[lang]` so it re-places on the language toggle (the hero title height changes and shifts every section).

### Versioned Blog Previews
- Preview article tables of contents use `z-0`, below the preview header's `z-10`, so its existing background fade paints over the menu wherever they overlap. Apply this to both article languages; preserve menu placement, responsive visibility, and original article behavior. Build and lint pass; desktop/tablet/mobile browser confirmation remains pending, including header overlap where the TOC is visible.
- English and Chinese preview routes live under `app/[locale]/preview/blog/`, sharing their own copied article and diagram. Keep original blog files unchanged when editing previews. Language links stay inside preview routes; canonical/share links retain production article URLs. Preview metadata is noindex/nofollow and previews stay out of the sitemap.
- **Preview TOC behavior differs from the original:** start alongside Overview's `/ 01` marker, move upward with that section, then hold at the viewport's vertical center. Calculate `top = max(markerTop, (viewportHeight - menuHeight) / 2)`. Do not pin it to the center from initial load, and do not clamp it to the header offset. Keep `position: fixed` because the layout's overflow ancestor breaks sticky.
- Preserve the separate scroll-spy threshold near the header (`TOC_TOP`); menu placement and active-section detection serve different purposes. Recalculate placement on scroll/resize and language changes. Keep the menu scrollable on short screens and retain its existing wide-layout visibility gate.

### In-Page Language Toggle
- An article can be bilingual **without** touching the site locale or URL: hold the language in local `useState` and branch the body copy. This is separate from the (currently hidden) site-wide `/zh` locale switch - the URL stays put, and the toggle starts in English.
- The **title and body content** toggle with the language. The back-link and metadata block (Published / Share) stay in English regardless.
- The toggle is a **single switch**, not two independent buttons: the whole control is one `<button>` whose click flips `en ↔ zh`. Both labels stay visible (active one highlighted `bg-o-blue text-background`), but they're non-interactive `<span>`s - don't nest `<button>`s. Use `group` + `group-hover:text-foreground` on the inactive label as the hover cue. (Its `p-1` / `px-3 py-1` are the allowed small-control padding exception.)

---

## Routing & Metadata

- Use the production domain in sitemap and future canonical/Open Graph metadata
- Keep Next-discovered middleware at root `middleware.ts`
- Root `middleware.ts` may re-export the `default` handler from `i18n/middleware`, but `config.matcher` MUST be declared inline in `middleware.ts` - Next.js reads the matcher via static analysis, and a re-exported `config` is not analyzable, so middleware silently runs on every request (including `/_next` assets) and breaks CSS
- Locale prefix is `as-needed` (default locale `en` has no URL prefix; only `/zh` is prefixed)
- Automatic locale detection is **off** (`localeDetection: false` in `i18n/routing.ts`). `/` always serves English regardless of the visitor's `Accept-Language` header or `NEXT_LOCALE` cookie; users switch to `zh` only via the (currently hidden) language toggle. Do not re-enable detection without asking - the boss does not want Chinese-browser visitors auto-redirected to `/zh`.

---

## Linting

- Run: `npm run lint` (backed by ESLint CLI)
- Config lives in `eslint.config.mjs`
- Generated files (`.next/**` and `.next-dev/**`) are ignored automatically

## Debugging Lessons

- Hover reveals must not change layout. New UI section-link icons use `invisible inline-block` with `group-hover:visible group-focus-visible:visible`, reserving the icon's space before hover. `hidden` → `inline-block` can add a line and move every following section. Preserve the inline trailing-word placement; apply this fix to both demo and preview blog headings without changing original pages incidentally.
- A fixed outer control width alone does not prevent its contents shifting. For text-style Copy feedback, reserve the widths of both labels in the same grid cell using invisible, `aria-hidden` sizing copies, then overlay the active label. This keeps the icon and text start stable even when localized labels have different lengths.
- Distinguish a cursor changing when crossing a control boundary from a cursor flickering while stationary. Padding changes address hit areas, not stationary flicker. Ask for a recording early when the symptom is unclear.
- If cursor behavior reproduces on plain HTML without site CSS/React and in multiple browsers, stop making speculative app changes. That isolates the problem outside the app, but does not identify the exact browser/OS cause. Cursor color alone is not proof of a customization bug. Remove temporary public diagnostic pages after testing.
- Build/lint success verifies compilation and static checks, not visual alignment, hover behavior, or responsive layouts. Report browser verification as pending when it has not been performed.

</details>

## Superseded documentation statements

Superseded by the current 840px article grid and 600px founder portrait layout; retained here only as history.

> | Below `md` (768px) | Stacked section grids; founder email after bio; 24px section-grid gaps and 48px repeated section padding |

Superseded by the current 840px article grid and 600px founder portrait layout; retained here only as history.

> | From `md` (768px) | Article one-third/two-thirds grid; founder photo/email column; 48px section-grid gaps and 96px repeated section padding |

The old responsive-table qualification is replaced by explicit current rows in DESIGN.md.

> Breakpoints change composition as well as size. Homepage width classes follow GIST.md, including height classes inheriting horizontal settings. The table below describes other routes and the immersive hero exception; the homepage, article, and index rules above supersede its old md/xl section thresholds; homepage rules also supersede its old founder thresholds.

Former cross-file ownership wording. Current ownership is defined at the top of AGENTS.md and DESIGN.md; design requirements are no longer duplicated between the two.

> Read [DESIGN.md](../DESIGN.md) for a structured distillation of the official UI's visual intent, tokens, composition, responsive behavior, and interactions. This file retains detailed implementation rules, workflow, historical context, and pending verification. Keep shared design guidance aligned across both files when accepted conventions change; the historical v202605 section is not a source of current design requirements.

Former cross-file ownership wording. Current ownership is defined at the top of AGENTS.md and DESIGN.md; design requirements are no longer duplicated between the two.

> The official **v202609** design covers the homepage, blog, English and Chinese articles, demos, and 404. This document distills the current conventions in [AGENTS.md](../../AGENTS.md) and accepted principles for extending the design. Development rules, implementation constraints, historical references, and pending browser checks remain in `AGENTS.md`. Its detailed current rules govern cases abbreviated here. Keep both documents aligned when an accepted design decision changes. Accepted guidance does not establish that every existing page has passed visual review.

This older review summary incorrectly retained visible media recovery as a proposal. Recovery is accepted and implemented; its browser checks remain pending. Other listed proposals remain unapproved.

> - Usability reference review: [DESIGN.md - Usability references and review lessons](references.md#usability-references-and-review-lessons) records the Nielsen Norman Group and UX Pilot articles, reusable review lessons, and source-based improvement candidates from 2026-09-24. Consult it for future usability work and re-check source observations before acting. Narrower-screen article contents was accepted and implemented after the four opening videos with a separator; browser confirmation remains pending. Playback controls, visible media recovery, contact fallback, opening copy, and expandable BibTeX remain proposals, not adopted UI requirements.

## Superseded hero checklist wording

The older hero checklist asked for the following, superseded by the accepted complete-description requirement and the homepage audit fixes:

> only the four point descriptions are limited to two displayed lines (ellipsis when needed)

The active browser check now requires all four descriptions to wrap fully, including short-screen fitting and the normal-flow fallback. The other hero checks remain pending.
