# Troubleshooting

Common issues when running this project and what to do about them.

## Setup Issues

### `npm install` fails with an engine error

Symptom:

```
npm WARN EBADENGINE Unsupported engine { package: 'vite@7.2.6',
  required: { node: '^20.19.0 || >=22.12.0' },
  current: { node: 'v20.12.2' } }
```

Fix: install **Node.js 20.19+ or 22.12+**. Using [nvm](https://github.com/nvm-sh/nvm):

```bash
nvm install 22
nvm use 22
rm -rf node_modules package-lock.json
npm install
```

### `npm audit` reports high-severity vulnerabilities

These come from Slidev's transitive dependencies (Vite, Rollup, lodash-es).
They only affect development mode (the dev server you open in a browser),
not the exported PDF/PPTX. For a personal authoring workflow on your own
laptop, the risk is low.

If you plan to host the dev server on a public network, run `npm audit fix`
or upgrade Slidev to the latest major version.

### `npx slidev` opens a blank page

Usually means a slide page has a syntax error — a layout name that doesn't
exist, an unclosed code fence, or a frontmatter key without a value.

Check the terminal where you ran `npx slidev` — errors are printed there, not
in the browser. Fix and save; Slidev hot-reloads.

## Blog-to-PPT Generation

### Kiro refuses to run or asks for confirmation on every step

This is **Supervised mode**. For the blog-to-PPT workflow you probably want
**Autopilot / Vibe mode** so the agent can create directories, write files,
and run the preview command without interruption.

In Kiro, switch to Autopilot mode before sending the generation prompt. You
can always switch back for sensitive operations.

### "Could not extract readable content" from a blog URL

The blog likely requires JavaScript to render its content. The steering rules
already tell Kiro to retry with `mode="rendered"` — if you see the agent give
up without retrying, nudge it:

> Try fetching again with rendered mode.

Sites known to require rendered mode:
- `builder.aws.com`
- Substack posts under `/p/`
- Notion public pages
- Cloudflare-protected blogs

If both modes fail, paste the article text directly into the chat. The agent
will generate from pasted content identically to generating from a URL.

### The generated PPT uses English even though my blog is in Chinese

Check the generated `slides.md` headmatter — it should include:

```yaml
lang: zh
fonts:
  sans: 'Noto Sans SC'
  local: 'PingFang SC, HarmonyOS Sans SC'
```

If `lang:` is missing or wrong, the agent's language detection failed. Edit
the file manually to set `lang: zh`, or regenerate with an explicit prompt:

> Regenerate this presentation in Chinese (use `lang: zh`).

### The generated PPT has AWS logos and copyright, but my audience is in mainland China

Ensure `lang: zh` is in the headmatter. When that flag is set, the theme
automatically hides the AWS logo and copyright footer — the page number
still shows, but there's no brand chrome.

If you see brand elements leaking in content slides (not theme chrome), open
an issue — the trademark compliance rules cover theme chrome and steering
guidance for content, but content is ultimately whatever the AI produces.

## Runtime Issues

### Chinese characters render in a serif / "weird" font on Windows or Linux

The CJK font stack looks for `PingFang SC` (macOS), `HarmonyOS Sans SC`
(Huawei), `Noto Sans SC`, and `Source Han Sans SC`. Windows 10/11 and most
Linux distros don't ship any of these by default.

Options:

1. **Install Noto Sans SC manually** from
   https://fonts.google.com/noto/specimen/Noto+Sans+SC (free, SIL OFL).
2. **Rely on Google Fonts** via the `fonts:` headmatter block shown in the
   Chinese reference template. Slidev will auto-inject a `<link>` to Google
   Fonts on page load.
3. **Use a local mirror of Google Fonts** if you're in mainland China and
   Google Fonts is slow. Add a custom `<link>` to a mirror
   (e.g., `fonts.font.im`, `jsdelivr`) at the top of your `slides.md` in
   a `<style>` or raw HTML block.

### Noto Sans SC fails to load (mainland China users)

Google Fonts is often slow or unreachable from mainland China. Remove the
`fonts:` block from your presentation's headmatter entirely — the theme will
fall back to system fonts:

```yaml
---
theme: ../theme-aws-dark
lang: zh
# No `fonts:` block — rely on system fonts only.
---
```

On macOS this is fine (PingFang SC is native). On Windows you'll see a
generic fallback; see the previous section for manual font installation.

### Mermaid diagram labels render in the wrong language's font

The theme switches Mermaid font based on `<html lang>`, which is set from
your headmatter's `lang:` field. If the font looks wrong:

- Confirm `lang: zh` or `lang: en` is explicitly set in the headmatter
- Hard-refresh the browser (Cmd+Shift+R / Ctrl+Shift+F5)
- Check the browser's DevTools → Elements panel, the `<html>` tag should
  have `lang="zh"` when you expect Chinese rendering

### Slidev dev server slow to start after `npm install`

Slidev's first launch pre-processes Mermaid, UnoCSS, and shiki. First launch
on a fresh clone can take 30–60 seconds. Subsequent launches are fast
(usually under 5 seconds).

## Export Issues

### Export to PDF fails with a Playwright error

Slidev uses Playwright's Chromium for PDF export. Install it once:

```bash
npx playwright install chromium
```

Then retry:

```bash
npx slidev export ppt-{your-topic}/slides.md
```

### Exported PDF has missing Chinese characters

This happens when the browser used for export doesn't have your Chinese
font installed. Two fixes:

1. **Use the `fonts:` headmatter block** so Noto Sans SC is loaded from
   Google Fonts and embedded in the PDF output. This is the default for the
   Chinese reference template.
2. **Install Noto Sans SC on your machine** if option 1 isn't an option.
   Playwright's Chromium will pick up the system-installed font.

## Kiro Workflow

### The agent doesn't read `ppt-aws-theme-demo/` before generating

This is a steering rule violation. Either the rule was changed, or Kiro
isn't loading the rules. To debug:

- Check that `.kiro/steering/skill.md` exists in the project root
- Check the file has front matter `inclusion: always` at the top
- Restart Kiro if you just added the file

### The agent keeps inventing new components that don't exist

The steering rules explicitly say "DO NOT invent new components". If the
agent is still doing it, the steering rules may not be loaded for your
session. See the previous item.

Known components — only these exist:

- `<StatCard>`
- `<Timeline>` + `<TimelineItem>`
- `<ComparisonTable>`
- `<GradientText>`
- `<AWSLogo>`

## Still Stuck?

Open an issue at
https://github.com/hanyun2019/kiro-slidev-ppt-maker/issues
with:

- Your OS and Node.js version
- The command you ran
- The full error message or screenshot
- The URL you were trying to generate from (if applicable)
