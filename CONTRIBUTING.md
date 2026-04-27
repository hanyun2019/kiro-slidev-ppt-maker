# Contributing

Thanks for considering a contribution. This project values small, focused
changes over sweeping rewrites.

## Development Setup

```bash
git clone https://github.com/hanyun2019/kiro-slidev-ppt-maker
cd kiro-slidev-ppt-maker
npm install

# Preview the English reference template
npx slidev ppt-aws-theme-demo/slides.md

# Or the Chinese one
npx slidev ppt-aws-theme-demo-cn/slides.md
```

## Project Layout

| Path | Purpose |
|------|---------|
| `theme-aws-dark/` | The Slidev theme — Vue layouts, components, i18n, Mermaid snippets |
| `theme-aws-dark/components/` | Globally registered Vue components |
| `theme-aws-dark/setup/i18n.ts` | Language detection and brand visibility |
| `theme-aws-dark/snippets/architectures/` | Mermaid architecture templates |
| `ppt-aws-theme-demo/` | English reference template (AI reads this) |
| `ppt-aws-theme-demo-cn/` | Chinese reference template |
| `.kiro/steering/skill.md` | AI agent rules for generating presentations |
| `examples/` | Pre-generated sample presentations |

**Do not edit `ppt-aws-theme-demo/` or `ppt-aws-theme-demo-cn/` lightly** —
they are the source of truth the AI agent learns from. Changes here affect
every generated presentation.

## Types of Contributions

### 1. Bug Fixes

- Open an issue first describing the bug and reproduction steps
- Fix in a feature branch
- Verify with both `npx slidev ppt-aws-theme-demo/slides.md` and the Chinese
  equivalent — some bugs only manifest in one language

### 2. New Layouts or Components

- Check `theme-aws-dark/layouts/` and `theme-aws-dark/components/` for existing
  patterns; match the style (padding, footer handling, prop naming)
- Components must honor `useThemeI18n()` if they render brand chrome
- Add a demo slide showing the new component to both reference templates
- Update `theme-aws-dark/CHANGELOG.md`

### 3. New Mermaid Architecture Snippets

- Add to `theme-aws-dark/snippets/architectures/`
- Keep under 7 nodes per diagram and set a `{scale}` that fits on one slide
- Include at least one simple variant and one grouped variant
- Update the snippet index in `snippets/architectures/README.md`

### 4. Improving AI Behavior

- Edit `.kiro/steering/skill.md` for rule changes
- Test with a real prompt — generate a presentation and check whether the
  rule takes effect
- Be specific about _when_ a rule fires ("if the user's prompt is in
  Chinese...") rather than vague ("prefer short titles")

## Code Style

- Vue SFCs: `<script setup lang="ts">`, `defineProps` with types, `<style scoped>`
- Components: one component per file, filename matches component name
- No import of external UI libraries — the theme should stay self-contained
- Markdown: wrap prose at roughly 100 columns in source
- Commit messages: use `type(scope): short description`, e.g.
  `feat(theme): add Callout component`

## AWS Trademark Compliance

When editing anything that renders in a `lang: zh` slide (layouts, components,
or Chinese reference template):

- The "AWS" word mark must not appear in visible content
- The AWS logo must be wrapped in `v-if="showBrand"`
- Service names (`Amazon Bedrock`, `Amazon EC2`, etc.) are fine; "Amazon Web
  Services" (full form) is fine
- See `.kiro/steering/skill.md` → "AWS Trademark Compliance for Chinese
  Presentations" for the full replacement table

## Pull Request Checklist

- [ ] Preview works in English (`ppt-aws-theme-demo/slides.md`)
- [ ] Preview works in Chinese (`ppt-aws-theme-demo-cn/slides.md`)
- [ ] No AWS word mark leaked into Chinese slides
- [ ] `CHANGELOG.md` (project and/or theme) updated
- [ ] README updated if user-visible behavior changed
- [ ] `npm audit` does not show new high-severity issues

## Questions

Open a [GitHub discussion](https://github.com/hanyun2019/kiro-slidev-ppt-maker/discussions)
or file an issue with the `question` label.
