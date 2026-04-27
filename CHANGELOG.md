# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] — 2026-04-27

Initial release derived from [yytdfc/kiro-slidev-ppt-maker](https://github.com/yytdfc/kiro-slidev-ppt-maker).

### Added

- **LICENSE** — MIT license with attribution to the original author
- **Bilingual README** (`README.md` + `README_CN.md`) with attribution section
- **`examples/` directory** — relocated three AI-generated sample presentations
  out of the root so they don't clutter the project structure
- **Multi-language theme support** (English + Chinese) driven by the `lang:`
  headmatter field
  - `theme-aws-dark/setup/i18n.ts` — `useThemeI18n()` composable exposing
    `lang`, `showBrand`, and `t()` for localized strings
  - CSS font stack auto-switches to CJK-friendly fonts when `lang: zh`
  - Mermaid diagrams use matching fonts per language
- **Open-source Chinese font stack** — `PingFang SC` → `HarmonyOS Sans SC` →
  `Noto Sans SC` → `Source Han Sans SC`; all fonts are either native system
  fonts or SIL OFL 1.1 licensed. `Microsoft YaHei` is intentionally excluded
  to avoid licensing ambiguity in PDF/PPTX exports
- **Custom Vue components** globally registered in the theme:
  - `<StatCard>` — spotlight a single metric (value + label + trend + color)
  - `<Timeline>` + `<TimelineItem>` — vertical timeline with highlight support
  - `<ComparisonTable>` — side-by-side comparison with per-column accent colors
- **Mermaid architecture snippets** in `theme-aws-dark/snippets/architectures/`:
  - `aws-basic-web.md` — classic 3-tier web architecture
  - `aws-serverless.md` — API Gateway + Lambda + DynamoDB
  - `aws-ai-agent-simple.md` — Strands Agents SDK + Bedrock
  - `aws-ai-agent-production.md` — + AgentCore + MCP + observability
  - `aws-data-pipeline.md` — S3 + Glue + Athena + QuickSight
- **Chinese reference template** `ppt-aws-theme-demo-cn/` — mirrors the English
  `ppt-aws-theme-demo/` so the AI agent has a Chinese example to learn from
- **AI steering rules** for the blog-to-PPT workflow:
  - Automatic language detection from source blog content
  - Component selection guidance (StatCard vs Timeline vs ComparisonTable)
  - Architecture snippet selection by scenario
  - AWS trademark compliance rules for Chinese presentations (no "AWS" word
    mark in `lang: zh` slides)

### Changed

- **Theme footer behavior** — AWS logo and copyright text are now conditional
  on `showBrand`, which defaults to `true` for English and `false` for
  Chinese. Chinese slides show only the page number in the footer
- **Cover slide** — AWS logo and copyright are hidden for `lang: zh`; a blank
  spacer keeps the layout height consistent
- **`package.json`** — updated author, repository, description, and keywords
- **`.kiro/steering/skill.md`** — expanded to cover i18n detection, trademark
  compliance, custom components, and architecture snippet selection

### Fixed

- Example presentations in `examples/` now use `theme: ../../theme-aws-dark`
  (two directory levels up) instead of the original `../theme-aws-dark`
