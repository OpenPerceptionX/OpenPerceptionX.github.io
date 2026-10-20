# Documentation provenance and compatibility

## Documentation replacement - 2026-10-20

The original `AGENTS.md` and `docs/` were copied from a different project. They described Archon Robotics, v202605/v202609 migrations, localized articles, a measured hero, a device-driven dark theme, a subscription preview, and components/routes absent from this repository.

At the user's request, those documents were replaced with an OpenDriveLab baseline derived from the current source and limited published-site inspection. This was a documentation change, not a UI migration. Earlier imported build results, visual approvals, TODOs, external reference approvals, and commit references are not OpenDriveLab evidence. The prior document text remains in Git history; do not restore it as current requirements.

The replacement preserves the useful document ownership model: concise configuration, design behavior, implementation constraints, verification, proposals, and SEO maintenance. `docs/GIST.md` remains a single table, now recording this project's responsive utility-based layout rather than the copied 600/840/1200/1600 size-class grid.

## Existing website history is not a deletion list

`public/` contains older project and event websites and their shared resources, including `ui2024`/`ui2025` material. Folder age, a lack of React imports, or a legacy naming pattern does not establish that a resource is unused. Research paper links and past events may depend on them.

`components/redirect.tsx` contains historical URL aliases, including project names, old event paths, document links, and external destinations. It is used by not-found handling. Preserve compatibility unless a specific replacement/deletion is requested and its consumers have been checked.

The root `README.md` is currently a placeholder. `public/README.md` contains older authoring guidance and an asset workflow; use it as context, checking source and current requirements. It does not prove every asset host or tool mentioned there is still the preferred workflow.

No numbered OpenDriveLab UI version, general legacy-route retirement, or project-wide design acceptance was established by this review. Future history entries should record actual OpenDriveLab decisions and superseded behavior, not append an assistant conversation log.
