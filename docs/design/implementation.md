# Design implementation constraints

These are current technical constraints for implementing [DESIGN.md](../DESIGN.md), subordinate to [GIST.md](../GIST.md) for design values. Read the relevant section before changing its component. Development commands and approval rules remain in [AGENTS.md](../../AGENTS.md); validation status lives in [verification](verification.md).

The integration examples below document existing exports or explicitly optional examples. Their relocation does not install tooling, introduce aliases, or change generated tokens.

## Hero measurement and video lifecycle

The `hero-wide` CSS variant, title media query, and JavaScript `overlayLayout` media query must share the [hero overlay condition](../DESIGN.md#homepage-hero): viewport width at least 1024 CSS pixels and width/height ratio at least 4:3. The opening brand frame consumes --layout-body-width, --layout-columns, and --layout-gutter in app/homepage.css. After the current clip has a decoded frame, warm only the next sequential clip in a paused video layer with `preload="metadata"`; reuse that same element when selected and promote it to autoplay with `preload="auto"`.

Keep at most two video elements mounted, using the second for either warming or an incoming transition. Preload remains a browser hint. These are code-only loading changes; do not convert or replace CDN video assets.

Content lives in `data/home.ts`. For the Full video link, retain the desktop width and remove title-width measurement plumbing. The shared HeaderVisibilityProvider connects the hero and header without changing document layout.

Use a native CSS opacity transition with an opacity-specific transitionend guard. Keep each video layer's stacking order and compositor hint stable through promotion; retire the old video only after two paint frames at full opacity. Cancel superseded loads, but finish an in-flight fade before serving the latest scroll destination; this avoids stale exit layers flashing during rapid reversals.

Cancel frame callbacks on unmount. For the hero, width/aspect-ratio rules choose the composition; measured available height determines its density. Keep the CSS variant, heading media query, and JavaScript predicate synchronized.

Measure the title, all four entries, the button, and their combined spacing before allocating stacked-video height. Never resolve a fit failure with an internal scrollbar or clipping; use the existing readable-size bounds and normal-document-flow fallback. Verify after orientation, browser-chrome, font, and viewport changes.

A screenshot alone cannot establish a stale-JavaScript or CDN diagnosis.

## 404 routing and metadata

The localized boundary supplies the homepage destination through `getPathname`, preserving `/zh` for Chinese-locale routes and `/` for English; the shared content keeps provider-independent `next/link`, and the root fallback defaults to `/`. Official 404 uses `NotFoundContent` in `app/not-found.tsx`. The catch-all calls `notFound()` and `app/[locale]/not-found.tsx` reuses the content inside the localized layout.

Next handles noindex and non-streamed 404 responses; already-streamed responses can retain HTTP 200. Legacy aliases match exact paths or `/`-delimited subpaths, never arbitrary word prefixes.

## Demo keyboard events

For standard video or player-container fullscreen, the demo speed shortcuts (`,`, `.`, `<`, `>`) use a capture listener before native controls, with the existing focus/modifier/default-prevented guards. Handled speed events stop propagating to avoid duplicate steps; other shortcuts and inline playback retain the bubbling listener. Chrome runtime confirmation remains pending in [verification](verification.md#browser-verification-checklist).

When the demo video or its player container is the standard fullscreen element, handle only speed shortcuts (`,`, `.`, `<`, `>`) in the capture phase before native controls. Reuse the existing focus/modifier/default-prevented guards and stop propagation only after handling the key to avoid duplicate steps. Other shortcuts and inline playback keep their existing bubbling listener; do not move all keyboard handling to capture.

## GIST layout exports

[tokens.css](../../tokens.css) exports the current 600/840/1200/1600px width classes. [app/globals.css](../../app/globals.css) imports it before [app/site-chrome.css](../../app/site-chrome.css). The shared header/footer and opening hero currently consume these tokens. app/homepage.css gives the opening brand frame its standard GIST width; video geometry remains separate. The stacked demo panel also uses this body width, with GIST number/text gutters and a four-column Full Video link.

The overlay retains its separate immersive geometry. Mission and Featured Research also consume the body and grid tokens, with --home-section-padding (48px/96px) and --home-section-gap (24px/48px) changing at 840px. Team and Investors retain the GIST body and shared section spacing.

Their stacked introductions match Mission below 840px and remain centered with max-w-2xl prose from 840px; its logo grid uses the full-width exception with 24px insets. Both article languages also consume the layout tokens through `app/article.css`; blog/demo indexes and registered demo players consume them through `app/index-pages.css`. Generic `--section-padding`, `--section-gap`, `--content-gap`, `--related-gap`, and `--card-padding` tokens hold GIST spacing; existing `--home-*` variables remain aliases.

Shared type sizes live in `tokens.css`; palette, font families, line heights, focus, and motion remain in `app/globals.css`. A standard body uses `width: var(--layout-body-width)` and `margin-inline: auto`. A grid uses `repeat(var(--layout-columns), minmax(0, 1fr))` and `column-gap: var(--layout-gutter)`.

Full-width sections share `--layout-margin-wide: 24px` and `--layout-wide-body-width`. The header uses `padding-inline: var(--layout-margin-wide)`; investor-logo and footer bodies use `width: var(--layout-wide-body-width)`, centered without a maximum width. Their grids retain the width-class columns and gutters, including the footer’s central 24px gap from 840px.

These layout tokens do not redefine shadcn color or control tokens.

## Tailwind v4 integration examples

The role-based inner-spacing aliases are exported by `tokens.css` and consumed by homepage/footer utilities. Section geometry and header/footer outer padding use scoped classes. Optional geometry aliases for future consumers:

```css
@theme inline {
  --spacing-layout-body: var(--layout-body-width);
  --spacing-layout-gutter: var(--layout-gutter);
  --spacing-home-section: var(--home-section-padding);
  --spacing-home-group: var(--home-section-gap);
}
```

## DTCG dimension example

```json
{
  "layout": {
    "$type": "dimension",
    "marginCompact": { "$value": { "value": 16, "unit": "px" } },
    "marginMedium": { "$value": { "value": 32, "unit": "px" } },
    "marginLarge": { "$value": { "value": 224, "unit": "px" } },
    "marginHeader": { "$value": { "value": 24, "unit": "px" } },
    "marginFooter": { "$value": { "value": 24, "unit": "px" } },
    "bodyExpanded": { "$value": { "value": 752, "unit": "px" } },
    "bodyExtraLarge": { "$value": { "value": 1152, "unit": "px" } },
    "gutterCompact": { "$value": { "value": 16, "unit": "px" } },
    "gutter": { "$value": { "value": 24, "unit": "px" } }
  }
}
```

## Article navigation and measurement

The shared EN/CN article uses `ARTICLE_CITATION_ID` for both the metadata Cite link and final focusable citation-panel wrapper (`tabIndex={-1}`). Keep the same-document localized Link and anchor clearance (`scroll-mt-32`), including global reduced-motion scrolling. Render CiteThis after conditional end references, outside the floating TOC's `article-last-row` boundary, with no ancestor FadeIn around its border. The opening no longer has an `article-citation-intro` wrapper or extra BibTeX-to-video padding. Labels live in `data/blog-navigation.ts`; moving the panel does not change citation contents or share destinations.

Keep the citation registration context stable across measurement updates; recreating the provider value can trigger a registration/measurement render loop. Include citation data in the registration effect dependencies. TOC uses fixed positioning because `<main overflow-hidden>` breaks sticky.

Keep document overflow/body padding unchanged; intercept wheel/touch input outside the scrollable menu and at its boundaries, and guard the captured page scroll position. Release that guard before section-link navigation.

## Shared foreground entrance

`FadeIn` renders a native div with React 19 ref forwarding through its props. `app/globals.css` owns its 0.3s delay / 0.6s ease-out CSS animation. The underlying opacity is 1; backwards fill applies the hidden first keyframe during the delay, and no forwards fill retains a stacking context after completion. Hydration does not start or replay the CSS entrance. Keep the same DOM wrapper and existing foreground-only boundaries, including the header/hero measurement refs.

This removes the shared fade's dependency on the installed Motion animation completion handoff, which cancels its browser animation after scheduling the final style update. That handoff is a suspected cause of the reported Windows loading blink, not a browser-confirmed diagnosis. Reduced-motion CSS and the root no-JavaScript fallback disable the entrance and reveal content immediately. Hero/sidebar motion and load-gated media retain their separate implementations.

## Arrow controls

`components/ui/arrow-action.tsx` owns the shared note/copy and decorative Lucide arrow structure; `app/globals.css` owns `.arrow-action` geometry, colors, and interaction. The native link receives `.arrow-action` and optionally `--padded`/`--research` modifiers. Set the main font size and line height on that link so the arrow and padding inherit the actual label metrics. The research modifier consumes 80% of the section-size token; Full video consumes the existing fitted `text-body` metrics. The arrow sits in a fixed `1lh` frame at the bottom of the flex row and is `1.2em` square. Translate the SVG only, leaving its reserved frame stationary. No JavaScript or added dependency is needed.

Keep the shared note size explicit under `.arrow-action` so the hero's auxiliary fitting cannot shrink future notes. Use the shared note token for both its line height and the copy gap, and keep heading elements inside the copy wrapper. Maintain the static research/Full video border wrappers outside FadeIn and preserve the hero action measurement ref. Arrow labels omit `link-underline`, and the native links retain `no-underline`. Shared copy/note selectors explicitly set both `user-select: text` and `-webkit-user-select: text`; keep `select-none` off the bordered wrappers. Only the decorative arrow remains non-selectable within each control. Blog numbers stay outside the link in their original auxiliary type with a 24px number-to-title gap; blog metadata is an `.arrow-action__note` inside the native link. The `--with-note` modifier uses a two-column grid for title/arrow and a full-span note row, preserving final-title-line arrow alignment and the shared note gap; standalone entries retain a plain anchor, and localized entries retain `@/i18n/navigation` Link. Detailed values and behavior belong to [DESIGN.md](../DESIGN.md#arrow-controls).

`BorderTrace` in `components/ui/border-trace.tsx` renders four decorative strokes inside `.border-trace-frame`. Research and Full video place it beside foreground FadeIn; the article language switch places it inside its native link, preserving the existing opening FadeIn boundary. The positioned overlay extends over the existing 1px neutral border and never participates in layout or pointer input. Frame hover, direct `:focus-visible`, or a focus-visible descendant drives the same state, supporting both wrapper frames and native link frames. Top/left transform origins begin at top-left, right begins at top-right, and bottom begins at bottom-left; stagger the pairs and reverse their delays on exit. The shared `--border-trace-step` drives both duration and delay, becoming zero for reduced motion so no delayed switch survives. Keep the overlay outside the hero action measurement flow and preserve selection and the immediate keyboard outline.

## Native picture loading

Native picture loading: when using Next `getImageProps`, attach `onLoad` explicitly to the rendered `<img>` because generated image props omit that handler. Check already-complete cached images after hydration so missed load events cannot leave artwork hidden behind a permanent spinner.

## Portals and locale routing

Keep portaled surfaces explicitly themed/non-selectable. DropdownMenu uses modal=false to avoid scrollbar shifts. Preserve hidden site locale control.

Locale detection is off; English has no prefix, Chinese `/zh`. Root middleware matcher must stay inline for Next static analysis.

## Disclosure icons

`components/ui/disclosure-icon.tsx` is the shared decorative SVG for expandable content. `app/globals.css` owns its transform transition and reduced-motion override. Rotate only the vertical path around the SVG view-box center; equal stroke lengths overlap exactly in the expanded state. Native `details[open] > summary` drives the icon by default, without mirrored React state. During an animated collapse, `data-disclosure-open="false"` reverses the icon while native details stays open long enough to show the shrinking content. A controlled button may supply `expanded` to override native ancestor detection; its own accessible name and `aria-expanded` remain the button's responsibility. The inline preview retains its 20px icon box and cobalt color on desktop/tablet/mobile. The inline consumer also uses the shared content reveal described below.

## Subscription test

`components/ui/use-disclosure-motion.ts` enhances the inline native disclosure with a measured-height Web Animations reveal. Opening clips the content at a growing lower edge; closing retracts that edge toward the summary. Content stays mounted, with natural height and visible overflow restored after completion. Keep the native details open through exit; synchronize summary `aria-expanded` and the icon with the requested state immediately, and make closing content inert/aria-hidden. If focus is inside when closing, return it to the summary without scrolling. Rapid reversals begin at the currently rendered height; ResizeObserver retargets an opening animation after content or width changes. Reduced motion (including a live preference change) and unavailable animation support settle immediately. Cleanup cancels animation and observers/listeners. Without JavaScript, native details still toggles. The hash handler calls the same expand action before its existing no-focus scroll.

`app/[locale]/test/page.tsx` exposes `/test` (and the standard `/zh/test` locale route) without adding navigation or sitemap entries; metadata disables indexing. `data/subscription-test.ts` owns copy and the endpoint `https://template.api.archon.tech/subscribe`. The adjacent client form trims/lowercases email and sends only `{ email }` as JSON directly to the Worker. It requires an OK response with `success: true`; the supplied `INSERT OR IGNORE` API does not distinguish a new subscriber from an existing email. No database credentials or server proxy are involved. The Worker's `allowedOrigins` must include the exact page origin, including port for localhost. Browser network/CORS errors cannot reliably expose the Worker's HTTP response. A timed-out request may already have saved the email.

The test route renders `WholeBodyIntelligenceArticle` in English with the page-local `SubscriptionPanel` in its optional `afterTitle` slot, reusing canonical article source. Public article routes omit the slot. The panel portals the shared `SidebarMenu` with an opt-in `form` variant. The default navigation variant preserves its content-sized fade, padding, focus, and swipe behavior. The form backdrop is a separate full-viewport motion layer, without the navigation fade's mask. The form's full-width slide/scroll layer contains the canonical `article-body article-section-grid` wrapper and a full-span panel (without the narrower `article-section-content` class), so width, alignment, margins, gutters, and breakpoints match the title/BibTeX block directly through `app/article.css`. Scoped styles in `app/site-chrome.css` remove the grid's vertical section padding because the scroller owns clearance. Blank grid space dismisses the modal like the backdrop. The launcher's `useSubscriptionForm` hook owns draft/request state outside the conditionally mounted modal. Keep the API request unchanged when iterating on this preview. Only foreground blocks use nested FadeIn; the BibTeX-style border/accent remain outside those fades.

`SubscriptionInline` adds native `details`/`summary` below the modal trigger in the same launcher. Both forms use its existing `useSubscriptionForm` instance; each rendered form uses `useId` for unique input, notice, and status associations. No new request path is introduced. The `inline` form variant changes presentation only. Rows stack below 600px and use a shrinking email/URL field with a fixed-content action above that breakpoint.

`subscriptionAnchor` in `data/subscription-test.ts` owns `subscribe`. The disclosure ID and URL handler consume it. `subscriptionFormUrl` uses the shared `siteUrl` helper to supply `https://www.archon.tech/test#subscribe` for both display and clipboard, including during server rendering and local preview. Initial hash arrival and `hashchange` open the native disclosure before a requestAnimationFrame scroll (`scroll-mt-24` header clearance) without moving focus; no summary/email autofocus or API submission occurs. Ordinary toggling does not rewrite browser history. The effect removes its listener and scheduled frame on unmount. Clipboard feedback has timer cleanup; clipboard failure focuses/selects the read-only URL for manual copying. The deep-link expansion requires JavaScript, as does submission.

## Footer background

`components/gradients/footer-gradient-engine.js` preserves the latest user-supplied React export (FLOW, two-stop 2048×1152 recipe, startT 67.60229369599982, speed 30, zero blur, grain 6, scale 50, distortion 60, swirl 10). The only engine integration change is a required `stops` prop that overrides the recipe palette per instance. The previous speed multiplier and noise override are retired in favor of this export's settings. Keep the generated code isolated from hand-maintained components; its adjacent declaration types the integration, and the generated file alone disables lint rules. No new runtime dependency or font is required for this recipe.

`components/layout/footer-background.tsx` reads resolved `--accent` and `--background` values in that stop order from the footer's themed wrapper and subscribes to the device theme. Normalize three-digit hex to six-digit hex before passing stops to the generated engine: production CSS minification converts white to `#fff`, while its integer parser assumes six digits and otherwise reads this as `#000fff`. Accept only three- or six-digit hex tokens at this boundary; unsupported formats leave the native CSS gradient visible. It lazy-loads the engine within 200px of the viewport. The supplied engine owns animation frames, offscreen/hidden-tab/reduced-motion pausing, and cleanup. `app/site-chrome.css` supplies the static token gradient and an absolute, clipped, pointer-transparent background layer. Only the decoration clips; foreground controls retain focus-outline clearance. The engine's exported aspect ratio is overridden so the footer remains content-sized on mobile, tablet, and desktop. Existing upper-grid/copyright wrappers sit above it; retain their layout and divider/FadeIn boundaries. Loading or a caught engine error leaves the CSS gradient visible.

## Footer social icons

`data/footer-v202609.ts` owns social destinations/order separately from numbered navigation. `FooterV202609` maps GitHub, LinkedIn, and YouTube to the installed Lucide icons; Hugging Face, X, WeChat, and Xiaohongshu use inline components in `components/ui/brand-icons.tsx`. Keep accessible names on the existing links/QR controls and decorative SVGs hidden from assistive technology. Preserve hover/focus, reduced motion, QR behavior, and device-theme `currentColor` selection.

Current optical tuning at the [documented footer size](../DESIGN.md#header-and-footer): X uses viewBox `16 16 224 224`, Hugging Face `6 -12 488 488`, and Xiaohongshu `1 1 46 46`. Lucide icons use a 1.8-unit stroke (1.5px at 20px); WeChat/X filled contours gain 3/2 source-unit strokes, Hugging Face face/hand contours gain 12 source units, and Xiaohongshu uses a 3.2-unit frame with 1.8-unit lettering. The dense details deliberately remain finer than the main contours. These are source values, not proof of visual acceptance.

Hugging Face retains the supplied artwork as a luminance mask: white/red source regions become transparent cutouts, while a `currentColor` rectangle supplies the visible color. Keep the mask ID unique with `React.useId`; do not turn the cutouts into opaque background-colored regions or apply a stroke indiscriminately to every mask path. Preserve the Xiaohongshu source/license attribution when modifying its artwork.
