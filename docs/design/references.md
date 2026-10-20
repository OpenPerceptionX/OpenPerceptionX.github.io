# Design references and proposals

This document retains source provenance, accepted review principles, and proposals without turning proposals into implementation requirements. Current design rules live in [DESIGN.md](../DESIGN.md); browser acceptance is tracked in [verification](verification.md). Reference styles never override [GIST.md](../GIST.md) or Archon's accepted design.

## Reference influences and decision status

The 2026-10-18 [CodePen border-stroke example by alphardex](https://codepen.io/alphardex/pen/pooYKVa) informed the user-approved border-only hover treatment. Archon adapts its edge tracing to start at top-left and meet at bottom-right, using the existing primary token and 300ms total timing. The reference text animation and palette are not adopted. Current behavior lives under [arrow controls](../DESIGN.md#arrow-controls); browser acceptance remains pending.

The 2026-10-18 [UMA](https://uma.bot/) disclosure reference is scoped to the user-requested plus/minus motion. Public HTML/CSS inspection confirmed two overlapping strokes, a stationary horizontal stroke, and the other rotating from 90 to 180 degrees with a 200ms ease-in-out transform transition. Archon adopts the clockwise quarter-turn and reverse collapse, using 300ms ease-out to align with existing control feedback. This does not adopt UMA's wider visual system or establish runtime/browser acceptance. The owning requirement is [Motion, interaction, and selection](../DESIGN.md#motion-interaction-and-selection).

The [design consensus](../DESIGN.md#hierarchy-and-content-density) consolidates the accepted lessons from these sources. The local reference documents are prior analyses, not fresh verification of those live websites:

| Reference | Adopted principle | Archon reference |
|---|---|---|
| [IBM](../../awesome-design-md/design-md/ibm/DESIGN.md) | Explicit hierarchy, surface roles, and interaction-state documentation | `globals.css` and shared controls |
| [Tesla](../../awesome-design-md/design-md/tesla/DESIGN.md) | One dominant message per section | Homepage section composition |
| [Runway](../../awesome-design-md/design-md/runwayml/DESIGN.md) | Media quality and framing carry the visual impact | Hero and article media |
| [Cohere](../../awesome-design-md/design-md/cohere/DESIGN.md) | Information density follows the content's purpose | Homepage, blog index, and article references |
| [Aesop](https://www.aesop.com/) | Evaluate media and text together; group related information; let content determine composition | `home-hero.tsx` media/panel acceptance criterion; `home.tsx` Mission/Featured Research, founders, and investors |
| [Anthropic economic scenarios](https://www.anthropic.com/institute/econ-scenarios) | Explain one step at a time; keep repeated visual meanings consistent; support sequential reading and direct access | `article.tsx`, `foundation-model-stack.tsx`, and shared article contents; editorial/visual review criteria |
| [Bang & Olufsen company story](https://www.bang-olufsen.com/en/cn/story/about-bang-and-olufsen) | Connect company identity to people and concrete work; provide concise introductions with supporting detail | Homepage demonstrations, Mission/Featured Research, and `data/founders.ts` biographies; shared editorial review principle in DESIGN.md |

The Aesop principles were accepted on 2026-10-11 from five user-supplied desktop screenshots, with the opening hero as the primary reference. Exact source fonts/colors, motion, mobile behavior, and the full footer were not verified. The separate 2026-10-11 [Cohere German homepage study](https://cohere.com/de) inspected HTML and linked CSS.

Its varied product, industry, and evidence sections reinforce the existing content-dependent composition principle. Perceived rhythm and runtime behavior were not verified. Connecting statements to inspectable support is now part of the shared editorial review principle in DESIGN.md.

Specific changes to claim/evidence placement, task explanations, or evidence-role presentation remain **implementation proposals**; the review principle does not authorize rewriting copy, adding claims, or reordering the homepage. The 2026-10-11 Anthropic economic-scenarios study inspected HTML and linked CSS. It extends the existing consensus with explanatory steps, consistent visual meanings, and support for different reading paths.

Source inspection established declared structure and styling, not perceived rhythm, chart legibility, keyboard usability, or mobile/runtime acceptance. These lessons do not adopt the source's serif fonts, ivory/chart palette, smaller mobile prose, sticky stages, or animation timing. The 2026-10-11 Bang & Olufsen company-story study inspected HTML, embedded CSS, and a linked stylesheet.

Its introduction, founders, working principles, and products inform the shared editorial review principle, together with Aesop's composition, Cohere's relationship between offerings and evidence, and Anthropic's explanatory sequence. Declared structure and styling were verified; perceived rhythm, footage quality, playback-control behavior, and mobile acceptance were not. Preserve Archon's complete landscape task context on narrow screens; do not adopt B&O's portrait video framing, typography, luxury language, or a new history section.

Playback control remains the existing proposal under usability review, not a newly accepted implementation. **Article proposal, not an accepted implementation requirement:** explain the concept, show the evidence, then offer deeper exploration where it helps readers answer a question. Consider this for future research figures and interactive demonstrations; it does not require rewriting the current article, adding interactive controls, or changing its layout/order.

Any implementation requires a separately accepted scope and the existing validation workflow. Resolve differences through Archon's existing system: retain Outfit/Noto Sans SC, the device-aware blue palette, square content geometry with documented control exceptions, and current spacing/motion rules. Aesop's ivory/serif treatment, Cohere's green/rounded product panels, and other references' viewport-height or dark-dominant compositions are source-specific choices, not shared requirements.

Study scope does not authorize adopting retail navigation, carousels, sales funnels, or quotation sections. Preserve the homepage sequence of brand/video and demonstrations, Mission/Featured Research, Team, then Investors. These references do not adopt another brand's fonts, palette, spacing scale, radii, or motion system.

Future reference-derived suggestions remain proposals until accepted. For each adopted rule, identify the canonical component or token, or label it as an acceptance criterion when it requires visual judgment. Distinguish accepted guidance, source-implemented behavior, browser-confirmed behavior, and pending checks; documentation and build/lint results alone cannot establish browser acceptance.

Resolve conflicting reference styles through Archon's existing fonts, semantic palette, geometry, spacing, and interaction rules. [Reference influences and decision status](#reference-influences-and-decision-status) distinguishes local analyses, the Aesop desktop screenshots, and the Cohere/Anthropic/B&O HTML/CSS studies. The relationship between statements and supporting evidence is an accepted editorial review principle; specific claim/evidence placement and task-explanation changes remain implementation proposals. The Anthropic-inspired article sequence of concept, evidence, then useful deeper exploration also remains a proposal for future figures/demonstrations, not a requirement to rewrite the current article or add controls.

Preserve Archon's complete landscape task context on narrow screens rather than adopting B&O's portrait framing; playback control remains the existing proposal. These proposals do not authorize copy, claim, layout, or order changes; implementation needs a separately accepted scope. Consolidated guidance does not establish UI changes or browser acceptance; existing checks remain pending.

## Usability references and review lessons

Recorded on 2026-09-24 after reviewing both articles and the current source: [Jakob Nielsen / Nielsen Norman Group: 10 Usability Heuristics for User Interface Design](https://www.nngroup.com/articles/ten-usability-heuristics/) is the primary framework. [UX Pilot: 10 Usability Heuristics for UX Design](https://uxpilot.ai/blogs/usability-heuristics) explains the same framework through examples and a review process; it is not a separate set of principles.

The ten review lenses are system feedback, familiar language, user control, consistency, error prevention, recognition over recall, efficient interaction, relevant content, error recovery, and contextual help. Apply them to concrete visitor tasks: understand Archon, inspect a demonstration, navigate research, cite an article, contact the company, and find careers. Heuristics guide inspection; they do not establish observed user difficulty or replace usability testing.

Lessons to revisit in future reviews: Feedback should make both the current state and the next useful action understandable. A loading indicator alone does not provide recovery after failure.

Moving demonstrations need discoverable user control. Reduced scroll animation and reduced video playback are separate decisions. Responsive layouts should preserve access to useful actions, even when their presentation changes.

Familiar wording and visible destinations help visitors understand what the company does and what a control will do. Minimalism means prioritizing the visitor's task. Assess secondary technical content by when it is needed, rather than removing it solely to simplify appearance.

Evaluate complete interactions, including keyboard use, slow loading, failed requests, and recovery. Record the trigger, source evidence, user consequence, and proposed remedy; distinguish an implementation fact from a usability hypothesis. Existing source patterns worth retaining include reserved media geometry and loading feedback (`loading-image.tsx`, `loading-video.tsx`), Copy confirmation and manual-copy recovery (`cite-this.tsx`), QR failure/retry (`qr-popover.tsx`), keyboard focus and skip navigation, and demo shortcuts (`video-player.tsx`).

These are source observations, not new browser acceptance results.

## Improvement candidates - proposed, not approved for implementation

The narrower-screen article contents proposal was subsequently accepted and implemented after the four opening videos, with a separator, shared section links, and translated labels. See the [interaction-state reference](../DESIGN.md#interaction-state-reference); browser confirmation remains pending. The remaining candidates below are not adopted UI changes.

Priority reflects the review's judgment, not measured severity. Re-read the cited components before acting because these observations can become stale.

| Priority | Source observation at review | Proposed improvement | Canonical source / scope |
|---|---|---|---|
| High | Homepage hero videos autoplay and loop without playback controls; reduced motion changes hero geometry but leaves playback running. | Add an accessible Pause / Play control. Separately consider poster-first playback for reduced-motion users. | `app/[locale]/(default)/home-hero.tsx`; homepage hero videos |
| Medium | Contact links use `mailto:` without a visible address as an alternative when no mail application is configured. | Expose a selectable company email address in the footer; optionally add Copy with feedback. | `data/header-v202609.ts`, `data/footer-v202609.ts`, `components/layout/footer-v202609.tsx` |
| Medium | The homepage opens with the brand, abstract slogan, and footage; the concrete company explanation appears later. | Test a short, plain-language explanation near the opening. Wording and placement require acceptance. | `data/home.ts`, `app/[locale]/(default)/home-hero.tsx`; content hypothesis |
| Superseded proposal | The former opening BibTeX panel prompted an expandable Cite this article proposal. | The user selected an always-visible, full-body-width panel at the article end with a Cite jump link beside Share and no separate heading. Expansion remains unapproved. | Current requirements: [Articles and metadata](../DESIGN.md#articles-and-metadata); browser checks: [verification](verification.md#browser-verification-checklist) |

Visible media recovery has been accepted and implemented as specified in [DESIGN.md](../DESIGN.md#media-and-demo-players); browser failure/retry confirmation remains pending. The remaining high-priority proposal is homepage playback control. Preserve existing typography, palette, structural borders, media geometry, and documented motion boundaries unless a specific change is accepted.

When a proposal is accepted, record its final requirement in DESIGN.md (or AGENTS.md for workflow), update its decision status here, and retain outstanding acceptance checks in verification.md. Do not duplicate the specification across files. The initial review made no UI changes; the accepted compact contents section now uses an always-visible list and a floating sidebar after scrolling past it. Neither source review nor implementation establishes browser acceptance.

For accepted implementations, run the required build/lint checks and leave desktop/tablet/mobile, light/dark, EN/CN where applicable, keyboard, reduced-motion, and failure/retry browser confirmation to the user under the existing workflow.

## Future card animation

The border-morph/arrow-nudge animation is reserved for future cards, not active on the homepage. Its complete markup, CSS, fallback behavior, and original commit are preserved in [card-border-animation.md](../design-references/card-border-animation.md). Adapt and visually verify it before future use; do not apply it globally.
