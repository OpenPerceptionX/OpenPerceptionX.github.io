# Search visibility and distribution

Audit date: October 15, 2026 (Asia/Shanghai). Scope: repository, production HTTP responses, search-result sampling, and generated production HTML. This is not a completed Search Console investigation, browser accessibility audit, Core Web Vitals measurement, or security assessment. No deployment, search-engine submission, or hosting configuration change was made.

## Findings and implementation

| Priority | Finding and evidence | Resolution / status |
| --- | --- | --- |
| High | Production serves the site at `https://www.archon.tech`, but HTML canonicals, article sharing, and the sitemap pointed at `https://archon.tech`. The web fetch followed the apex to `www`; a direct apex curl timed out from this audit environment. | Code now uses `https://www.archon.tech` through `data/site-metadata.ts`. Hosting redirects and regional reliability still need checking; the timeout alone does not establish a public outage. |
| High | None of the five requested legal names appeared in the site. Brand metadata was English-only; there was no Organization or WebSite structured data. | The existing homepage is the target. Bilingual title/description and brand structured data improve its identity signals without adding pages or visible copy. The five exact legal names are retained only in homepage keyword metadata; Google ignores that tag, so reliable discovery for those names remains unestablished. No ownership relations or legal-name aliases are asserted. Homepage Organization/WebSite data identifies Archon Robotics, Archon, 源策未来, and 源策, using the existing social profiles. |
| High | The four-entry sitemap omitted PingpongDuo. `robots.txt` did not advertise the sitemap. Every build gave every URL a new modification timestamp. | Sitemap now includes home, blog, both WBI articles, and PingpongDuo. Research entries derive from `data/blog-navigation.ts`. Robots advertises it. Omitted unsupported modification dates, change frequencies, and priorities. |
| Medium | Production HTTP `Link` headers described the Chinese article as English and its identical `/zh` copy as a Chinese translation, conflicting with the correct HTML language pair. | Disabled automatic next-intl alternate links. EN/CN WBI slugs retain reciprocal language alternates in HTML and sitemap. Site-locale copies retain the unprefixed canonical; locale routing and detection behavior are preserved. |
| Medium | Chinese article share controls linked to the English article. WBI articles had no article structured data. | Share destinations now follow the article language. Added server-rendered BlogPosting data with existing title, description, author, and publication date. BibTeX keeps citing the English original at its canonical URL. |
| Medium | PingpongDuo had no canonical, OG URL/image, or Twitter preview metadata. Its SVG favicon depended on JavaScript. | Added canonical and complete share metadata using the existing hero artwork, plus direct favicon URLs. The clean URL and `index.html` share the same canonical. |
| Medium | Shared FadeIn content rendered with opacity zero; logos and portraits waited for JavaScript before becoming visible. | Added a no-JavaScript stylesheet for these text and image wrappers. Existing hydrated animations/loading states remain. This does not solve arbitrary JavaScript failures when scripting is enabled. |
| High follow-up | The opening `landing.mov` response advertises 73,509,072 bytes (about 73.5 MB), `video/quicktime`, and byte ranges. This is a transfer risk for mobile and constrained connections, not a measured Core Web Vitals failure. | Prepare and visually approve smaller web video renditions with fast-start metadata, then update the CDN assets and code together. Preserve the complete task context and existing posters. No CDN media was changed in this task. |

## Search terms and destinations

Use meaningful visible content, descriptive titles, links, and accurate identity data. Do not hide keyword lists, create doorway pages, label WBI as a company alias, or add unsupported claims.

| Topic | Destination |
| --- | --- |
| Archon Robotics, Archon, 源策未来, 源策 | Homepage metadata and identity structured data |
| WBI, Whole-Body Intelligence, 全身智能 | Homepage metadata, existing homepage research, and EN/CN WBI articles |
| 上海源策未来智能科技有限公司 | Homepage keyword metadata only; not a Google ranking signal |
| 北京源策星辰智能科技有限公司 | Homepage keyword metadata only; not a Google ranking signal |
| 上海源策立弘智能科技合伙企业（有限合伙） | Homepage keyword metadata only; not a Google ranking signal |
| 上海源策立扬智能科技合伙企业（有限合伙） | Homepage keyword metadata only; not a Google ranking signal |
| 上海源策立羽智能科技合伙企业（有限合伙） | Homepage keyword metadata only; not a Google ranking signal |
| Humanoid foundation models, HFM, 人形基础模型, embodied AI, 具身智能 | Homepage metadata and existing mission/research |
| Whole-body control, BFM, VLA, agents, world models | Existing WBI articles linked from the homepage |
| PingpongDuo, humanoid table tennis doubles, 人形机器人乒乓球双打 | Existing research page and blog |

“Archon” and “WBI” are ambiguous searches. Accurate content and crawl signals cannot guarantee indexing, ranking, a knowledge panel, or first-page placement. Google explicitly ignores the keywords meta tag. The requested names are retained there for metadata completeness only, not as a promised SEO benefit. With visible homepage copy unchanged, legal-name ranking cannot be established by metadata alone. Do not add a new page, visible keyword list, or unsupported JSON-LD to work around this scope.

## After the user deploys

1. Confirm HTTPS `www` is the production host. Check apex/HTTP redirects preserve paths and query strings and reach the canonical host without a loop. Check from mainland China and an international connection. If the hosting canonical changes, update the shared origin, static robots file, and standalone PingpongDuo metadata together.
2. Confirm `/robots.txt` and `/sitemap.xml` return 200 with their new contents. Confirm the five sitemap URLs return 200 without a login page, challenge, or `noindex`. Check Cloudflare/Vercel logs and security rules for legitimate Googlebot, Bingbot, and Baiduspider access; a successful normal-user request does not prove crawler access. Preserve real 404 responses.
3. Verify ownership in [Google Search Console](https://search.google.com/search-console), [Bing Webmaster Tools](https://www.bing.com/webmasters/), and [Baidu Search Resource Platform](https://zy.baidu.com/). Prefer domain/DNS verification where offered; otherwise use each service's exact supplied verification file or tag. No account ownership has been verified by this task.
4. Submit `https://www.archon.tech/sitemap.xml` in Google and Bing. In Baidu, use the link-submission options enabled for the verified site; availability and quotas depend on the account. Submit the five canonical URLs and review crawl/index diagnostics. Do not assume sitemap publication alone constitutes submission.
5. In Google URL Inspection, test the homepage, both articles, and PingpongDuo, then request indexing. Validate Organization/Article data with [Rich Results Test](https://search.google.com/test/rich-results) and inspect the selected canonical. Review equivalent URL diagnostics in Bing and Baidu. Investigate exclusions, security issues, and manual actions before assuming a keyword issue.
6. Check real X/LinkedIn previews, including the Chinese article's destination and PingpongDuo's image. Both preview image URLs returned 200 during this audit (logo: 49,041 bytes; PingpongDuo hero: 68,616 bytes); this does not confirm platform crops or cached-card refreshes. Test WeChat sharing separately; OG tags do not guarantee its preview behavior.
7. Review the existing homepage on desktop, tablet, and mobile in both themes. Check no-JavaScript text/image visibility, normal animations, keyboard navigation, and article sharing. No server or browser automation was started for this task.
8. Track impressions, clicks, indexed URLs, and queries after recrawling. Update official social profiles, research/paper links, and relevant partner listings to use the canonical website when their owners authorize changes. Do not buy links or manufacture reviews. No external messages or profile edits were sent.

## Validation and remaining audit work

- `npm run build` and `npm run lint` passed after the implementation changes. No new dependency was installed. `git diff --check` passed.
- Inspected generated homepage and both article HTML files under both site locales: one matching canonical, descriptions, OG/Twitter images, valid JSON-LD, correct article language pairs, and localized share URLs. The five exact legal names are present in homepage keyword metadata only; no company page or footer link is added.
- Generated sitemap has five unique canonical URLs, reciprocal EN/CN WBI alternates, no demo/locale-duplicate entries, and no invented modification timestamps. Generated robots advertises that sitemap. Standalone PingpongDuo source has matching canonical/OG URLs and preview images.
- Live checks before deployment: homepage, robots, sitemap, PingpongDuo, and Chinese WBI article returned 200; a deliberately nonexistent URL returned 404 with `noindex`. No public-wide robots block or homepage noindex was observed. The search service returned homepage and Chinese article results, which does not establish coverage or rankings across Google, Bing, and Baidu.
- `/demo` remains intentionally unlisted/noindex; individual demo-player behavior is preserved. Do not bulk-index those routes as part of this work.
- Full browser/keyboard/reduced-motion checks, real-world LCP/INP/CLS, slow-network playback, crawler-specific access logs, regional DNS/TLS/connectivity, and authenticated search reports remain pending. Keep the existing homepage pause/play proposal in [design references](design/references.md#improvement-candidates---proposed-not-approved-for-implementation) and demo-poster follow-up in [verification](design/verification.md#browser-verification-checklist); do not mark them resolved by this SEO work.

## Maintenance

- Shared production identity, URLs, and homepage search terms: `data/site-metadata.ts`. Preserve all five supplied legal names exactly.
- New research entries belong in `data/blog-navigation.ts` so public navigation and sitemap stay aligned. Standalone HTML must maintain its own metadata because it bypasses the Next layout.
- Structured data belongs in server HTML and must describe actual visible content. `StructuredData` escapes `<` before writing JSON-LD. Do not invent legal relationships, dates, authors, metrics, ratings, or social accounts.
- If recording `lastModified` in the future, use real substantial editorial updates, not build time or automatic daily timestamps.

## Official references

- [Google canonical URLs](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls): align redirects, canonical links, internal URLs, and sitemaps.
- [Google sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap): canonical URLs, truthful modification dates, and discovery/submission.
- [Organization markup](https://developers.google.com/search/docs/appearance/structured-data/organization), [site names](https://developers.google.com/search/docs/appearance/site-names), and [Article markup](https://developers.google.com/search/docs/appearance/structured-data/article): identify real organizations, websites, and research articles.
- [Google supported meta tags](https://developers.google.com/search/docs/crawling-indexing/special-tags): keywords meta tags do not affect Google indexing or ranking.
- [Request Google recrawling](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl), [Bing sitemap submission](https://www2.bing.com/webmasters/help/sitemaps-3b5cf6ed), and [Baidu Search Resource Platform](https://zy.baidu.com/): owner-side follow-up.
- [next-intl alternate links](https://next-intl.dev/docs/routing/configuration#alternatelinks-hreflang) and [Next JSON-LD](https://nextjs.org/docs/app/guides/json-ld): framework implementation guidance.
