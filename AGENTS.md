# Codex Guidelines

Read [GIST.md](docs/GIST.md) first, then [DESIGN.md](docs/DESIGN.md) for UI work. This file owns development workflow, architecture, and maintenance instructions.

| Document | Responsibility |
|---|---|
| [GIST.md](docs/GIST.md) | Highest-priority approved grid, spacing, and main typography configuration; preserve its single table |
| [DESIGN.md](docs/DESIGN.md) | Current visual and interaction requirements, responsive compositions, and design exceptions |
| [Implementation notes](docs/design/implementation.md) | Required technical constraints for the relevant UI work: measurement, loading, events, routing, and token integration |
| [Verification](docs/design/verification.md) | Recorded validation and outstanding browser/runtime checks; consult before claiming acceptance |
| [References and proposals](docs/design/references.md) | Study provenance, review lessons, and unapproved proposals; consult before reference-derived work |
| [History](docs/design/history.md) | Retired v202605 guidance and explicitly superseded notes; not current requirements |
| [SEO.md](docs/SEO.md) | Search/distribution audit and follow-up |

Read the relevant linked implementation and verification sections when working on those components. Maintain each requirement in its owning document and update links instead of copying its specification into another file. Preserve accepted behavior and all unresolved checks when reorganizing documentation; an implemented change is not automatically browser-accepted.

## Document ownership

Read [GIST.md](docs/GIST.md) first. It is the highest-priority project design reference for future website design and takes precedence over conflicting guidance in `AGENTS.md` and `docs/DESIGN.md`. Preserve user-supplied text, values, and formatting exactly unless the user requests a correction.

Do not add assistant-written commentary, headings, summaries, or inferred rules to `docs/GIST.md`. The user-authorized Layout columns, Margin (each side), Body, Gutter, Section padding (each end), Major group gap, Paragraph / content gap, Related-item gap, Card inner padding, Page heading size, Section heading size, and Body text size fields and the single Full-width sections special-case row are scoped exceptions: these may record selected configuration values and undecided placeholders. Preserve these exceptions in the same table.

Keep explanations and implementation notes outside that file.

## Tech Stack

- Next.js 15 + React 19 + TypeScript
- Tailwind CSS 4 + shadcn/ui
- Framer Motion / FadeIn for animations

---

## Development

```bash
npm install   # install dependencies
npm run dev   # local preview
```

- Always get user approval before installing any new dependency
- When sizing by column count, identify the reference grid explicitly: the standard fixed/scaling body and the full-width frame have different column widths. The wide opening video uses 10 columns of the full-width frame; its brand group retains the standard body. Do not substitute a percentage target or the standard body grid for that video span.
- Never run deploy commands - deployment is handled by the user via GitHub push
- **A message opening with "okay" starts a new task, and usually after a real time gap** (the conversation carries no timestamps, so this is the only cue). Treat it as a session boundary, not a continuation: re-check state before acting (`git status`, `git log --oneline -3`, and the specific files involved) rather than trusting the tree as it looked earlier in the conversation. Assume the user may have committed, reverted, hand-edited files, or finished work in between - **a clean tree does not mean nothing changed**. Don't carry forward relative time words from earlier turns ("tonight", "later") - re-anchor them. And re-verify any deferred/`TODO` item is still pending before resuming it; it may already be done.
- After any UI change, verify layout at all three viewports: desktop, tablet, and mobile
- **Do not start a dev / preview / production server to verify** - the user runs the app in the browser themselves and checks visuals/runtime there. Verify only with `npm run build` and `npm run lint`, report what those show, and leave in-browser confirmation to the user
- Development uses `.next-dev`; production build/start use `.next`, selected by phase in `next.config.ts`. Keep these separate so build checks cannot clear the running preview's files. After changing this setting, the user's existing dev server must restart before running a build check.
- When a change affects values other files depend on (a section `id`, a route, a color/asset name, a translation key), update **every** referencing file in the same change - grep for usages first. Example: renaming a homepage section `id` must update the matching anchor in `lib/redirects.ts`
- When applying or auditing a shared convention, compare against the **canonical reference** implementation at the same granularity - *what* it wraps and *what it deliberately excludes* - not just whether the helper is present. Presence ≠ correct application: a grep that confirms "the footer uses `<FadeIn>`" still passes even when the `<FadeIn>` wrongly wraps the `<Separator>`, because the homepage reference keeps dividers *outside* it. Open the reference and the new code side by side and diff the boundaries.
- Shared markup alone does not guarantee shared behavior: inspect ancestor selection restrictions, inherited typography, and page-specific overrides for every consumer. Keep arrow-control text/note selection in the shared styles, and distinguish content inside the clickable control from adjacent numbering. Reuse `BorderTrace` for the approved tracing effect across control types; preserve each consumer's existing entrance boundary. Exact behavior belongs in [DESIGN.md](docs/DESIGN.md#arrow-controls) and [implementation notes](docs/design/implementation.md#arrow-controls).
- If the user repeatedly follows a pattern that differs from this guide, point it out and ask whether `AGENTS.md` should be updated accordingly

---

## End-of-work Routine

- A user message containing only `end of work` (ignoring surrounding whitespace and capitalization) invokes this routine. A mention of the phrase inside a longer message does not trigger it.
- Re-check `git status`, `git log --oneline -3`, and the relevant final files/diff. Preserve the user's changes and distinguish completed work from pending items.
- Wrap up the authorized work and review the final implementation for inconsistencies. Avoid starting unrelated improvements.
- Keep reusable lessons in this file. Clean up task-generated comparison previews and standalone visual-review reports rather than leaving them in the website repository; preserve website files, project configuration, and maintained project instructions.
- Update `AGENTS.md` with agreed development conventions, reusable lessons, corrected assumptions, and explicit wrap-up workflow instructions. Record final accepted visual/interaction behavior in `docs/DESIGN.md`, including responsive and original/preview scope; preserve configuration ownership in `docs/GIST.md` and its editing restrictions. Update the linked implementation, verification, references, or history document when that is the owning record. Replace stale or conflicting guidance rather than accumulating a conversation log. Do not turn unaccepted suggestions into rules.
- Re-verify tracked TODOs before carrying them forward. Record actionable unresolved items and what is needed to finish them; do not claim pending browser checks are complete.
- Review validation results. Run `npm run build` and `npm run lint` if implementation changes have not been checked since the last edit; reuse passing results when only documentation changed. Run `git diff --check`. Follow the existing prohibition on starting servers or deploying, and leave desktop/tablet/mobile and theme visual confirmation to the user.
- Finish with a concise summary of completed work, documentation updates, validation, and any remaining items. State whether changes remain uncommitted. This phrase does not itself authorize a commit, push, deployment, or archiving; perform those only when separately requested or already explicitly authorized.

---

## Official UI and source locations

The new UI is the official site. `/`, `/blog`, both `/blog/whole-body-intelligence` language routes, demos, and 404 use it. Do not restore the old UI on public routes unless requested.

Homepage implementation: `app/[locale]/(default)/home.tsx` and `home-hero.tsx`; data: `data/home.ts`. Articles and their diagram live in the canonical blog route folder. `blogEntries` in `data/blog-navigation.ts` drives navigation.

`app/[locale]/layout.tsx` renders `HeaderV202609` and `FooterV202609` directly. There is no route theme registry. Root HTML and CSS follow the device light/dark setting through `prefers-color-scheme`; saved legacy theme preferences are ignored.

Theme toggle, pre-paint dark script, ambient glow, and old header/footer implementations are retired. Legacy preview routes and compatibility redirects have been deleted at the user’s request. The explicitly requested `/test` subscription preview is the sole current exception: it reuses the canonical WBI article and is unlisted/noindex; scope and behavior live in [DESIGN.md](docs/DESIGN.md#subscription-form-preview). Do not restore other preview-only pages or URL compatibility scaffolding.

Blog index and production articles are indexable; `/demo` remains unlisted/noindex, and demo player metadata is unchanged. Legacy UI is named **v202605**, documented in [the retired historical reference](docs/design/history.md#historical-reference-v202605-retired). That section describes retired behavior, not current implementation requirements.

Exact pre-migration source is available at git commit `c0a6bd7` (resolve the full hash with `git rev-parse c0a6bd7`). Inspect individual files with `git show c0a6bd7:<path>`; do not reset the working tree to recover a feature.

## Shared implementation conventions

Use localized Link/router/pathname from `@/i18n/navigation`; root fallback 404 uses next/link because it can render outside the provider. HTTP external links use target=_blank and rel=noreferrer. Use next/image with intrinsic sizes; `BrandImage` uses Next `getImageProps` for native light/dark picture selection.

Only the above-fold hero logo uses eager/high-priority loading; other assets lazy-load. All content should live in typed data records. Reusable components belong in components; single-page helpers stay alongside their page.

Major JSX blocks receive concise section comments. Preserve section IDs and update every referring anchor/redirect together. Titles use normal case; user-facing punctuation uses regular hyphens.

Demo registrations come only from `data/videos.ts`: raw dotted files get generated CDN redirects; extensionless slugs render the shared player with generateStaticParams/dynamicParams=false. Keep demos out of public navigation/sitemap. Both current demo videos lack posters; adding them is deferred and requires real poster assets.

The approved metadata work excludes video posters. Do not remove FlyonUI. Use existing shadcn primitives and existing interactions before adding abstractions.

No new dependency without approval.

Keep selected custom social SVGs inline in `components/ui/brand-icons.tsx`, using `currentColor` and retaining artwork provenance. Use available Lucide brand icons where already selected; Lucide’s generic `X` is a close control, not the X brand. Equal CSS dimensions do not produce equal visible size or line weight across SVG sets: compare viewBox padding, silhouette, contour weight, and dense details before adjusting. Footer social links and numbered navigation are separate data groups; preserve the requested placement. Exact icon treatment belongs in the linked design/implementation documents.

## Metadata and distribution

Search optimization targets the existing homepage without adding pages, footer navigation, or visible copy. Preserve the existing composition. Shared FadeIn text and loading images remain visible without JavaScript through the root fallback stylesheet; hydrated animations and loading feedback retain their existing behavior.

See [SEO.md](docs/SEO.md) for discoverability and distribution maintenance. Search/distribution configuration uses `https://www.archon.tech` in `data/site-metadata.ts`, matching the observed production host.

Canonicals, article sharing/BibTeX, sitemap, robots sitemap declaration, and standalone PingpongDuo metadata must stay aligned. The SEO request targets the existing homepage: do not add a company page, footer link, or visible copy for SEO without a separate request. The approved homepage and both 404 browser titles are `Archon Robotics 源策未来`; homepage social metadata uses the same title.

The root default title supplies the locale-layout missing-page title; the global 404 uses an absolute title so no suffix is appended. Visible 404 content stays unchanged. Homepage keyword metadata preserves the user-supplied search terms and five exact legal names, but Google ignores that tag; do not present it as a ranking mechanism.

Legal entities are not brand aliases and are not added as unsupported structured-data relationships. Homepage Organization/WebSite and WBI BlogPosting JSON-LD render on the server. Do not turn research terms into organization aliases or use hidden keyword lists.

Automatic next-intl alternate links are off because site-locale copies are not translations; the two WBI slugs own their actual reciprocal language alternates. Sitemap entries derive from public blog data and exclude demos; omit lastmod unless a real editorial modification date is known. The no-JavaScript stylesheet reveals shared FadeIn text and loading images while preserving hydrated behavior.

See [SEO.md](docs/SEO.md) for the audit, exact keyword destinations, and deployment/search-console follow-up. Page metadata titles omit the company suffix because the root template appends it.

Metadata branding and the homepage description live in `data/site-metadata.ts`; `lib/metadata.ts` supplies complete Open Graph/Twitter objects because Next replaces nested metadata rather than deeply merging it. Homepage, blog index, and article previews use their own titles/descriptions and canonical page URLs; articles use their content language independently of site locale. Shared previews use the existing CDN `LOGO-black-2048-202608.png` and Twitter `summary` cards.

This metadata does not change the single English citation/share-button URL. Articles share one implementation for EN/CN; language links point to public article routes, independently of locale. Both languages intentionally share one English publication URL for BibTeX and the article's X/LinkedIn share buttons; do not localize these links.

Keep canonical URLs, citation maps, and metadata correct. `/test` renders the canonical article component for the subscription preview; do not duplicate article content into a separate source file.

## Component registry

| Component | File | Purpose |
|---|---|---|
| FadeIn | components/animation/fade-in.tsx | Shared entrance animation |
| CitationsProvider, CitationLayer, CiteRef, CitationList, useCitationMode | components/citations.tsx | Responsive article references |
| CiteThis | components/cite-this.tsx | BibTeX and explicit Copy feedback; Official panel with text Copy control |
| VideoPlayer | components/video-player.tsx | Demo native player and window-level shortcuts; skip editable/interactive targets, already-handled events, and modifier chords |
| HeaderV202609 | components/layout/header-v202609.tsx | Official full-width header with measured navigation collapse; data/header-v202609.ts |
| SidebarMenu, MenuToggleIcon | components/sidebar-menu.tsx | Shared native modal, scroll/focus handling, swipe dismissal, and icon motion for header navigation and article contents |
| FooterV202609 | components/layout/footer-v202609.tsx | Official footer; data/footer-v202609.ts |
| SkipToContent | components/skip-to-content.tsx | First-tab link to the shared main landmark; data/accessibility.ts |
| BrandImage | components/brand-image.tsx | Native device-theme logo selection using Next-optimized picture sources |
| LoadingImage, LoadingVideo, LoadingSpinner | components/loading-image.tsx, components/loading-video.tsx, components/media-status.tsx | Reserved media geometry and shared loading/failure feedback; localized status in data/media.ts |
| QrPopover | components/qr-popover.tsx | QR loading, failure/retry feedback, and themed portal; data/qr-popover.ts |
| CustomButtonV1 | components/ui/custom/button.tsx | Icon controls |
| ArrowActionContent | components/ui/arrow-action.tsx | Shared arrow-control copy, optional note, and decorative arrow; geometry and interaction in globals.css |
| BorderTrace | components/ui/border-trace.tsx | Shared decorative border tracing for research, Full video, and article language controls |
| HuggingFaceIcon, WechatIcon, XiaohongshuIcon, XIcon | components/ui/brand-icons.tsx | Brand SVG glyphs |

## Cleanup conventions

- Preserve dark-mode-capable assets and reusable theme code. White QR/logo assets and their black counterparts stay in `public/`; the official footer selects `QrPopover`'s `system` variant, while the optional black-on-white `v202609` variant remains available. Tailwind dark variants follow the device preference. `app/dark-mode-reference.css` remains an unimported historical reference for legacy tokens and glows; active night tokens live in `app/globals.css`. Keep the theme toggle, saved legacy preference, and default-dark startup script retired unless requested.
- Keep only used UI primitives and direct dependencies. Retired drawer/sheet/aspect-ratio primitives, chart/carousel packages, unused translation messages have been removed. Locale routing and the hidden language control remain supported. Preserve font licenses, manifest icons, and site-verification files even when they have no component imports.

## Maintaining requirements

Reference-derived suggestions remain proposals until accepted. Identify each adopted rule's canonical component/token or label it as a visual acceptance criterion. Keep accepted guidance, source-implemented behavior, browser-confirmed behavior, and pending checks distinct.

The IBM/Tesla/Runway/Cohere principles recorded in `docs/DESIGN.md` do not import those brands' fonts, palettes, spacing, geometry, or motion.

## Maintaining interaction documentation

Keep the interaction-state reference in `docs/DESIGN.md` aligned when controls change.

When removing a heading that owns a same-page navigation target, preserve the target ID on an appropriate focusable content wrapper and retain header scroll clearance. Update the jump link, accessible naming, and owning documentation together; removing visible text must not break navigation.

Document applicable default, hover, keyboard-focus, active, loading, and failure states against canonical source; distinguish native behavior and missing custom states from implemented feedback.

## Font changes

Font changes require approval.

Ask before changing fonts.
