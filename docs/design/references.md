<!-- Hallmark · pre-emit critique: Philosophy 4, Hierarchy 4, Execution 4, Specificity 5, Restraint 5, Variety 4. Documentation review, not a browser acceptance score. -->
# Review evidence and improvement proposals

This document keeps evidence and future options separate from the [current design baseline](../DESIGN.md). The user requested project-specific guidelines on 2026-10-20, not a website redesign. Nothing in the proposal table authorizes an implementation, new font/dependency, or deployment.

## Review evidence

The source checkout at `9e2d0590` is the implementation reference. The published [homepage](https://opendrivelab.com/), [publication directory](https://opendrivelab.com/publications), [team page](https://opendrivelab.com/team), and [P2P-T project](https://opendrivelab.com/P2P-T/) were sampled on 2026-10-20 for composition. Live content can differ from the checkout; screenshots were not a complete responsive test.

Source anchors for future work:

| Design question | Inspect |
|---|---|
| How does the main directory look? | `app/globals.css`, homepage, publications, team and events pages |
| How is narrow-screen navigation handled? | `components/header.tsx`, `components/app-sidebar.tsx`, `components/ui/sidebar.tsx`, `hooks/use-mobile.ts` |
| How do features reach the homepage? | `data/publications.tsx`, `data/alpasim2026.ts`, `app/(default)/(home)/landing.tsx` |
| How are technical stories different from directories? | React `ReSim`, `kai0`, `BiTacMan`, `FreeTacMan`; static `public/P2P-T/index.html` and `public/NativeMEM/index.html` |
| What local conventions predate these docs? | `public/README.md` records spacing, max widths, links, media and authoring notes; verify each against current code |

Hallmark was used as a review lens for hierarchy, content specificity, varied page structure, and restraint. No Hallmark theme, font, palette, layout ban, or motion recipe was adopted. The other project's IBM/Tesla/Runway/Cohere/Anthropic/B&O studies are not evidence of OpenDriveLab approval.

## Prioritized improvement candidates

Priorities are suggested sequencing, not committed work. First repair broken paths and feedback, then improve maintainability and presentation.

| Priority | Candidate | Why / evidence | Completion criterion |
|---|---|---|---|
| P1 | Establish reliable validation | Lint currently prompts for setup; local dev/build share `.next` | Approved lint setup; real build/lint results; explicit safe preview/build workflow |
| P1 | Resolve incomplete navigation/content | `/datasets` has missing sections; event contents omit 2026 | Agreed dataset destination/content; all contents links resolve to rendered targets |
| P1 | Improve subscription feedback | Failed requests currently disappear silently | Labeled field, visible/announced success/error, retry and preserved input on failure |
| P1 | Repair shared keyboard/accessibility gaps | Nested interactive logo wrapper, non-button QR triggers, unnamed icon control, unfiltered shortcut | Semantic controls and verified keyboard/focus behavior on desktop and mobile |
| P2 | Define discoverability and URL policy | Shared canonical/social setup absent; client fallback and template/deprecated routes need decisions | Agreed policy implemented and checked against real host behavior; [SEO](../SEO.md) |
| P2 | Make feature selection explicit | Carousel selection mixes paper URL matches and numeric indices | Stable typed selections; adding/reordering data cannot silently lose or move intended features |
| P2 | Improve motion and media resilience | Autoplay and initial hidden content need fallback checks; media handling varies | Agreed pause/reduced-motion/no-JS behavior and usable loading/failure paths |
| P2 | Stabilize section links and reading density | Hover icons enter layout; many large gaps coexist with dense scientific records | No heading shift; spacing/type refinements demonstrated on catalogue, research, and mobile layouts |
| P2 | Consolidate only proven duplication | Project-local UI copies, CSS globals, resource renderers and citations differ | Shared ownership mapped first; targeted extraction preserves each consumer's behavior |
| P3 | Improve research discovery | Catalogue grows through categories and chronology | User research/content needs justify search/filter/navigation changes; no arbitrary new controls |
| P3 | Consider a fuller design-token system | Spacing/type/layout patterns are mostly utility classes | Explicitly chosen values and migration scope; no forced import of another project's grid |

These candidates deliberately do not include a font replacement, mandatory dark mode, wholesale project migration, deletion of old event sites, or generic marketing sections. Each would need its own rationale and scope.

## Future reference studies

Record the source URL/date, observed quality, proposed OpenDriveLab use, affected canonical file, and approval state. Distinguish a lesson about readability or evidence from an instruction to copy another site's geometry. Never invent publication metrics, affiliations, testimonials, awards, or usage numbers.

The [imported card-animation note](../design-references/card-border-animation.md) is retained only as a provenance marker. It is not an active OpenDriveLab component or an accepted future requirement.
