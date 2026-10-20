# OpenDriveLab discoverability and distribution

This is a source audit and maintenance plan, reviewed on 2026-10-20. It does not claim SEO changes have been implemented or production indexing has been accepted. Use [verification](design/verification.md) for validation status and [implementation](design/implementation.md#navigation-and-routing) for routing constraints.

## Current baseline

| Area | Observed state |
|---|---|
| Site identity | `CNAME` contains `opendrivelab.com`; the published homepage is available at `https://opendrivelab.com/` |
| Homepage title | `OpenDriveLab \| Embodied AI and Autonomous Driving at HKU`, in `app/(default)/(home)/page.tsx` |
| Root metadata | Favicon in `app/layout.tsx`; no shared title template, `metadataBase`, canonical, or complete social defaults there |
| Directory metadata | Page-local title, description and keywords; several pages repeat the broad lab description |
| Selected social metadata | AlpaSim defines an Open Graph object; there is no complete shared strategy across App Router pages |
| Known incorrect project metadata | BiTacMan layout description/keywords refer to FreeTacMan |
| Sitemap / robots | No root `app/sitemap.*`, `app/robots.*`, `public/sitemap.xml`, or `public/robots.txt` found in this checkout; project-local files can exist |
| Structured data | No JSON-LD found in the reviewed App Router sources; standalone sites need separate inspection |
| Missing URLs | Not-found invokes client-side alias routing and ultimately `/`; `/missing` separately renders a 404-style screen |
| Potentially unintended public content | `/datasets` stub, `/template`, `/challenge2026_`, `/DEPRECATEDAP0001`, and `/missing` need explicit publication/indexing decisions |
| Static project metadata | Independent `<head>` elements; cannot inherit Next root metadata |
| Analytics | Existing Google Analytics integration in `app/layout.tsx`; its production operation was not tested |

The host name and actual canonical redirect policy still need deployment checks; CNAME and one successful page fetch do not establish all www/non-www, case, slash, or alias responses. Legitimate Archon partner links and asset hosts may remain; the primary site's identity is OpenDriveLab.

## Improvement plan - not yet implemented

1. Decide which existing routes should be indexed, completed, redirected, or kept unlisted. A route's name or absence from navigation does not enforce noindex. Preserve external research links and old event URLs.
2. Define consistent titles, relevant page descriptions, canonicals, and Open Graph/Twitter images for core directories and projects. Use real assets and accurate content; correct stale project metadata first. Do not invent organization relationships or legal names from the imported project.
3. Add a sitemap/robots approach compatible with the actual deployment. Include intended public pages across React and static HTML surfaces, using canonical URL forms. Do not invent modification dates or add old/internal routes indiscriminately.
4. Review HTTP status and alias behavior at the real host. A client-side redirect from a missing page is not equivalent to a verified server redirect or a useful HTTP 404. Plan changes around existing inbound links.
5. Consider structured data only where the site's visible content supports it. Research titles, authors, dates, affiliations, publications, datasets, and events need accurate relationships. A shared lab description is not a substitute for per-page evidence.
6. Check readable initial HTML, essential no-JavaScript content, image descriptions, internal resource links, and performance. The shared FadeIn wrapper initially hides its content; do not import the other project's claim that a no-JavaScript stylesheet already fixes it.

Search/distribution work should improve existing content and metadata without adding invented visible claims, hidden keyword lists, company pages, or navigation entries. Any content or information-architecture expansion needs its own scope.

## Maintenance

- Keep page titles, project names, descriptions, images, resource links, and any future canonical/sitemap entries aligned when content changes.
- Preserve authorship, award wording, venue/date accuracy, and citation destinations. Never infer a paper's publication date from a Git commit date.
- Metadata for static projects belongs in their own HTML. Updating `app/layout.tsx` alone cannot cover them.
- Current React pages generally include the site name in their own titles. If a shared title template is later introduced, update consumers to avoid doubled suffixes.
- The site has no locale router or reciprocal translation system. Do not add hreflang automatically for pages that are not translations.
- Keep analytics and submission endpoints unchanged unless that change is requested. No Search Console access, sitemap submission, or form submission happened in this review.

## User checks after an authorized deployment

Verify rendered title/description/canonical/social tags, real preview image URLs, intended robots/sitemap output if implemented, aliases and unknown-URL status, and static project availability. Check both direct requests and browser navigation. Search-console ownership, submission, crawl results, and search-engine snippets remain owner-side follow-up; no ranking or indexing result is asserted here.
