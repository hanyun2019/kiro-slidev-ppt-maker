# Changelog

All notable changes to this theme will be documented in this file.

## [1.1.0] — 2026-04-27

### Added

- **i18n support** — `setup/i18n.ts` exposes `useThemeI18n()` composable with
  `lang`, `showBrand`, and `t()` helpers. Drives font stack and brand visibility
  based on the `lang:` headmatter field
- **Chinese font stack** — `PingFang SC` → `HarmonyOS Sans SC` → `Noto Sans SC`
  → `Source Han Sans SC`. All open-source or native system fonts
- **CJK-aware Mermaid** — diagram labels switch font family based on
  `<html lang>`; both JS init and CSS overrides are in sync
- **`<StatCard>`** component — spotlight metrics (value, label, trend, color)
- **`<Timeline>` + `<TimelineItem>`** components — vertical timeline
- **`<ComparisonTable>`** component — side-by-side comparison with per-column
  accent colors (blue, orange, green, purple, red)
- **Mermaid architecture snippets** in `snippets/architectures/`:
  - `aws-basic-web.md`, `aws-serverless.md`, `aws-data-pipeline.md`
  - `aws-ai-agent-simple.md` (Strands + Bedrock)
  - `aws-ai-agent-production.md` (+ AgentCore + MCP + observability)

### Changed

- **Footer brand visibility** — the AWS logo and copyright text in every
  layout are now wrapped in `v-if="showBrand"`, which is `false` when
  `lang: zh`. Chinese slides show only the page number in the footer
- **Cover layout** — AWS logo and copyright conditional on `showBrand`; blank
  placeholder preserves footer height when hidden

### Documentation

- `README.md` — new "Internationalization & Fonts" section with licensing table
- `snippets/architectures/README.md` — usage guide and template index

## [1.0.0] — 2025-12-02

### Added
- Initial release of AWS Dark Theme
- Cover layout with background image
- Section layout with gradient background
- Quote layout with left border styling
- Default content layout
- Center layout with gradient background
- Two columns layout
- Image-right layout
- Intro layout
- End layout
- BigNumber component for statistics display
- GradientText component for text highlights
- AWSLogo component
- Global footer with AWS logo and copyright
- AWS brand colors and gradients
- Code syntax highlighting
- Responsive design
- Background images (cover, section)

### Features
- Dark mode optimized
- Professional AWS branding
- Multiple layout options
- Custom components
- Gradient backgrounds
- Footer with AWS logo on all slides
