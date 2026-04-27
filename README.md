# Kiro Slidev PPT Maker

[中文文档](./README_CN.md) | English

> **AI-powered tool that turns blog posts into professional presentations in minutes**, powered by [Kiro IDE](https://kiro.dev) and [Slidev](https://sli.dev/).

Paste a blog URL into Kiro, and get a complete, presentation-ready slide deck with AWS-branded styling, multi-language support, and rich visual components — no manual layout work required.

## Features

- 🤖 **Blog-to-PPT in one prompt** — Paste any article URL, get a structured presentation
- 🌍 **Multi-language themes** — Built-in English and Chinese support with appropriate fonts
- 🎨 **AWS Dark Theme** — Professional dark theme with AWS branding
- 📊 **Custom chart components** — StatCard, Timeline, ComparisonTable, and Mermaid architecture templates
- 📝 **Markdown-based** — Easy to edit, diff, and version control
- 🚀 **Instant preview** — Live reload with Slidev
- 📤 **Multiple export formats** — PDF, PPTX, PNG, and static website

## Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/hanyun2019/kiro-slidev-ppt-maker
cd kiro-slidev-ppt-maker
```

### 2. Open in Kiro IDE

```bash
kiro kiro-slidev-ppt-maker
```

### 3. Generate a Presentation with AI

In Kiro's chat, try this prompt (real blog example):

```
Generate a presentation based on this blog: https://builder.aws.com/content/3CQFzc91nM9sGkfHRbpjo4eXojf/deploying-openclaw-on-aws-ec2-a-developers-perspective
```

Or describe what you want directly:

```
Create a PPT about AWS Lambda in Chinese
```

```
Make a technical presentation about microservices with 10 slides
```

Kiro will read the steering rules in `.kiro/steering/skill.md`, learn from
`ppt-aws-theme-demo/`, and produce a complete presentation in a new `ppt-{topic}/`
directory.

> 💡 The `examples/ppt-openclaw-aws-ec2/` directory in this repo is the actual
> output generated from the blog URL above — you can preview it right away with
> `npx slidev examples/ppt-openclaw-aws-ec2/slides.md`.

### 4. Preview the Result

```bash
npm install
npx slidev ppt-{your-topic}/slides.md
```

Open `http://localhost:3030/` to view the slides, presenter mode, overview,
or export panel.

## Project Structure

```
kiro-slidev-ppt-maker/
├── .kiro/
│   └── steering/
│       └── skill.md              # AI agent rules for blog-to-PPT workflow
├── theme-aws-dark/               # AWS dark theme (Vue components, layouts, styles)
│   ├── components/               # StatCard, Timeline, ComparisonTable, etc.
│   ├── layouts/                  # cover, default, section, end, etc.
│   ├── setup/i18n.ts             # i18n composable (lang + showBrand)
│   ├── snippets/architectures/   # Mermaid architecture templates
│   └── styles/
├── ppt-aws-theme-demo/           # English reference template (AI reads this)
├── ppt-aws-theme-demo-cn/        # Chinese reference template
├── examples/                     # Generated example presentations
│   ├── ppt-claude-agent-sdk-bedrock/
│   ├── ppt-chip-and-mortar/
│   └── ppt-openclaw-aws-ec2/
├── CHANGELOG.md
├── CONTRIBUTING.md
├── LICENSE
├── README.md
└── README_CN.md
```

## How It Works

```
┌──────────────────────────────────────────────────────────────┐
│                         Kiro IDE                             │
│  ┌────────────────────────────────────────────────────────┐  │
│  │         AI Agent reads steering rules                  │  │
│  │         (.kiro/steering/skill.md)                      │  │
│  │              ↓                                         │  │
│  │         Fetches blog content                           │  │
│  │              ↓                                         │  │
│  │         Learns syntax from ppt-aws-theme-demo/         │  │
│  │              ↓                                         │  │
│  │         Generates ppt-{topic}/slides.md                │  │
│  └────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────┘
                            ↓
                    ┌──────────────┐
                    │    Slidev    │
                    │  (preview &  │
                    │   export)    │
                    └──────────────┘
```

## Examples

Three generated presentations are included in `examples/`, all produced from real blog posts:

| Example | Source | Topic |
|---------|--------|-------|
| `ppt-claude-agent-sdk-bedrock/` | AWS Builder Center | Running Claude Agent SDK on Amazon Bedrock |
| `ppt-chip-and-mortar/` | AI Realist | AWS AI infrastructure strategy analysis |
| `ppt-openclaw-aws-ec2/` | AWS Builder Center | Deploying OpenClaw on AWS EC2 |

To preview any example:

```bash
npx slidev examples/ppt-openclaw-aws-ec2/slides.md
```

## Customization

### Switch Language

In your presentation's headmatter:

```yaml
---
theme: ../theme-aws-dark
lang: zh   # or 'en'
---
```

### Modify AI Behavior

Edit `.kiro/steering/skill.md` to customize:
- Content organization rules
- Animation preferences (default: no animations)
- Diagram complexity limits
- Icon usage guidelines
- Default theme and language

### Change Theme

```yaml
---
theme: ../theme-aws-dark   # default
# or
# theme: default
# theme: seriph
---
```

## Requirements

- [Kiro IDE](https://kiro.dev) — AI-powered development environment
- [Node.js](https://nodejs.org/) 18+ — for running Slidev
- npm (comes with Node.js)

## Credits

This project is based on and extends the original work by
[@yytdfc](https://github.com/yytdfc):
[kiro-slidev-ppt-maker](https://github.com/yytdfc/kiro-slidev-ppt-maker).

Additions and changes in this repository:
- 🌍 Multi-language theme support (English + Chinese)
- 📊 Custom chart components (StatCard, Timeline, ComparisonTable)
- 🏗️ Mermaid architecture template snippets (AWS-styled)
- 📝 Enhanced AI steering rules for blog-to-PPT workflow
- 📚 Expanded documentation and examples

Built with:
- [Slidev](https://sli.dev/) — Markdown-based slide maker
- [Kiro IDE](https://kiro.dev) — AI-powered development environment

## Contributing

Issues and pull requests are welcome. For larger changes, please open an issue
first to discuss what you would like to change.

## License

[MIT](./LICENSE) © 2026 Haowen Huang

Based on the MIT-licensed original work by [@yytdfc](https://github.com/yytdfc).
