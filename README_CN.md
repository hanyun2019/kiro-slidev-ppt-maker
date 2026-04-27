# Kiro Slidev PPT Maker

中文 | [English](./README.md)

> **用 AI 把博客文章一键生成专业演示文稿**，由 [Kiro IDE](https://kiro.dev) 和 [Slidev](https://sli.dev/) 驱动。

在 Kiro 里贴一个博客链接，就能得到一份结构完整、AWS 风格设计、支持中英双语、带丰富可视化组件的 PPT——不用手动排版。

## 功能特性

- 🤖 **一个 prompt 把博客变 PPT** — 粘贴任意文章 URL，生成结构化演示
- 🌍 **多语言主题** — 内置中英文支持，自动匹配合适的字体
- 🎨 **AWS 深色主题** — 专业的深色设计，带 AWS 品牌风格
- 📊 **自定义图表组件** — StatCard、Timeline、ComparisonTable 以及 Mermaid 架构模板
- 📝 **基于 Markdown** — 便于编辑、diff 和版本控制
- 🚀 **即时预览** — Slidev 热重载
- 📤 **多种导出格式** — PDF、PPTX、PNG、静态网站

## 快速开始

### 1. 克隆仓库

```bash
git clone https://github.com/hanyun2019/kiro-slidev-ppt-maker
cd kiro-slidev-ppt-maker
```

### 2. 在 Kiro IDE 中打开

```bash
kiro kiro-slidev-ppt-maker
```

### 3. 用 AI 生成演示文稿

在 Kiro 的对话框里，试试这个 prompt（真实博客示例）：

```
根据这篇博客生成一份 PPT：https://builder.aws.com/content/3CQFzc91nM9sGkfHRbpjo4eXojf/deploying-openclaw-on-aws-ec2-a-developers-perspective
```

或者直接描述你想要什么：

```
做一份关于 AWS Lambda 的中文 PPT
```

```
做一份 10 页的微服务技术分享
```

Kiro 会读取 `.kiro/steering/skill.md` 里的规则，参考 `ppt-aws-theme-demo/` 学习
语法，然后在新目录 `ppt-{主题}/` 下生成一份完整的演示文稿。

> 💡 仓库里的 `examples/ppt-openclaw-aws-ec2/` 就是从上面那个博客 URL 真实生成的
> 结果——可以直接用 `npx slidev examples/ppt-openclaw-aws-ec2/slides.md` 预览。

### 4. 预览效果

```bash
npm install
npx slidev ppt-{你的主题}/slides.md
```

打开 `http://localhost:3030/` 查看幻灯片、演讲者模式、概览或导出面板。

## 项目结构

```
kiro-slidev-ppt-maker/
├── .kiro/
│   └── steering/
│       └── skill.md              # 博客转 PPT 的 AI agent 规则
├── theme-aws-dark/               # 深色主题 (Vue 组件、布局、样式)
│   ├── components/               # StatCard / Timeline / ComparisonTable 等
│   ├── layouts/                  # cover / default / section / end 等
│   ├── setup/i18n.ts             # 多语言组合函数（lang + showBrand）
│   ├── snippets/architectures/   # Mermaid 架构模板
│   └── styles/
├── ppt-aws-theme-demo/           # 英文参考模板 — AI 会读它来学语法
├── ppt-aws-theme-demo-cn/        # 中文参考模板
├── examples/                     # 已生成的示例演示
│   ├── ppt-claude-agent-sdk-bedrock/
│   ├── ppt-chip-and-mortar/
│   └── ppt-openclaw-aws-ec2/
├── CHANGELOG.md
├── CONTRIBUTING.md
├── LICENSE
├── README.md
└── README_CN.md
```

## 工作原理

```
┌──────────────────────────────────────────────────────────────┐
│                         Kiro IDE                             │
│  ┌────────────────────────────────────────────────────────┐  │
│  │         AI Agent 读取规则                              │  │
│  │         (.kiro/steering/skill.md)                      │  │
│  │              ↓                                         │  │
│  │         抓取博客内容                                   │  │
│  │              ↓                                         │  │
│  │         从 ppt-aws-theme-demo/ 学语法                  │  │
│  │              ↓                                         │  │
│  │         生成 ppt-{主题}/slides.md                      │  │
│  └────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────┘
                            ↓
                    ┌──────────────┐
                    │    Slidev    │
                    │  (预览和导出) │
                    └──────────────┘
```

## 示例

`examples/` 目录下有三份基于真实博客生成的演示文稿：

| 示例 | 来源 | 主题 |
|------|------|------|
| `ppt-claude-agent-sdk-bedrock/` | AWS Builder Center | 在 Amazon Bedrock 上运行 Claude Agent SDK |
| `ppt-chip-and-mortar/` | AI Realist | AWS AI 基础设施策略分析 |
| `ppt-openclaw-aws-ec2/` | AWS Builder Center | 在 AWS EC2 上部署 OpenClaw |

预览任意示例：

```bash
npx slidev examples/ppt-openclaw-aws-ec2/slides.md
```

## 自定义

### 切换语言

在演示文稿的 headmatter 里：

```yaml
---
theme: ../theme-aws-dark
lang: zh   # 或 'en'
---
```

### 修改 AI 行为

编辑 `.kiro/steering/skill.md` 可以自定义：
- 内容组织规则
- 动画偏好（默认：不使用动画）
- 图表复杂度限制
- 图标使用规范
- 默认主题和语言

### 更换主题

```yaml
---
theme: ../theme-aws-dark   # 默认
# 或
# theme: default
# theme: seriph
---
```

## 环境要求

- [Kiro IDE](https://kiro.dev) — AI 驱动的开发环境
- [Node.js](https://nodejs.org/) 18+ — 运行 Slidev
- npm (随 Node.js 一起安装)

> 跑起来遇到问题？看 [docs/TROUBLESHOOTING.md](./docs/TROUBLESHOOTING.md)
> —— 涵盖最常见的坑：Node 版本不匹配、博客 URL 抓不到内容（需要 JS
> 渲染）、中国大陆用户中文字体加载慢等。

## 致谢

本项目基于 [@yytdfc](https://github.com/yytdfc) 的原作品扩展：
[kiro-slidev-ppt-maker](https://github.com/yytdfc/kiro-slidev-ppt-maker)。

本仓库新增和改进的内容：
- 🌍 多语言主题支持（英文 + 中文）
- 📊 自定义图表组件（StatCard、Timeline、ComparisonTable）
- 🏗️ Mermaid 架构模板片段（AWS 风格）
- 📝 针对博客转 PPT 场景强化的 AI steering 规则
- 📚 扩展的文档和示例

基于：
- [Slidev](https://sli.dev/) — 基于 Markdown 的幻灯片工具
- [Kiro IDE](https://kiro.dev) — AI 驱动的开发环境

## 贡献

欢迎 Issue 和 Pull Request。较大的改动请先开 Issue 讨论。

## 许可证

[MIT](./LICENSE) © 2026 Haowen Huang

基于 [@yytdfc](https://github.com/yytdfc) 的 MIT 许可原作品。
