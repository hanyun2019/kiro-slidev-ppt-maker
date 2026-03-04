# Background Customization

This section demonstrates background customization options.

---

# Global Background Settings

## Content Slides (default, center, intro, etc.)

Default: **Pure black (#000000)**

Change globally with CSS variable:

```yaml
<style>
:root {
  --theme-background: #1a1a1a;  /* Dark gray */
}
</style>
```

## Special Slides (cover, section, end)

Default: **Gradient backgrounds**

Change globally with CSS variables:

```yaml
<style>
:root {
  --theme-gradient-cover: linear-gradient(...);
  --theme-gradient-section: linear-gradient(...);
  --theme-gradient-end: linear-gradient(...);
}
</style>
```

---

# Per-Slide Background Override

Use `class:` to override background for individual slides:

```yaml
---
layout: default
class: bg-ocean
---

# This slide uses Ocean gradient
```

```yaml
---
layout: center
class: bg-aws-dark-blue
---

# This slide uses AWS dark blue background
```

**Available classes:** `bg-ocean`, `bg-sunset`, `bg-forest`, `bg-night`, `bg-fire`, `bg-royal`, `bg-tech`, `bg-aws-blue`, `bg-aws-orange`, `bg-aws-green`, `bg-black`, `bg-dark-gray`, `bg-dark-blue`, `bg-aws-dark-blue`

---
layout: center
class: bg-ocean
---

# 🌊 Ocean Theme

**Professional • Calm • Trustworthy**

This slide uses `class: bg-ocean`

Perfect for corporate or technical presentations

---
layout: center
class: bg-sunset
---

# 🌅 Sunset Theme

**Warm • Energetic • Creative**

This slide uses `class: bg-sunset`

Great for marketing or creative presentations

---
layout: center
class: bg-forest
---

# 🌲 Forest Theme

**Natural • Growth • Sustainable**

This slide uses `class: bg-forest`

Ideal for environmental or growth-focused topics

---
layout: center
class: bg-royal
---

# 👑 Royal Theme

**Luxury • Creative • Premium**

This slide uses `class: bg-royal`

Perfect for premium products or creative showcases

---
layout: center
class: bg-fire
---

# 🔥 Fire Theme

**Bold • Passionate • Dynamic**

This slide uses `class: bg-fire`

Great for high-energy or action-oriented content

---
layout: center
class: bg-tech
---

# 💻 Tech Theme

**Modern • Technical • Innovative**

This slide uses `class: bg-tech`

Perfect for technology or innovation topics

---

# Predefined Gradient Presets

<div grid="~ cols-2 gap-6">
<div>

## AWS Gradients

- **awsDefault**: Blue to Purple
- **awsBlue**: Dark blue to light blue
- **awsOrange**: Dark to orange
- **awsGreen**: Dark to green
- **awsPurple**: Dark blue to purple

</div>
<div>

## Theme Gradients

- **ocean**: Blue gradient 🌊
- **sunset**: Orange to pink 🌅
- **forest**: Green gradient 🌲
- **night**: Dark blue 🌙
- **fire**: Red to orange 🔥
- **royal**: Purple gradient 👑
- **tech**: Cyan to blue 💻

</div>
</div>

---

# Using Gradient Presets

Copy gradient values from `theme-aws-dark/theme.config.js`:

```css
<style>
:root {
  /* Ocean theme - professional and calm */
  --theme-gradient-cover: linear-gradient(135deg, #0a4d68 0%, #088395 50%, #05bfdb 100%);
  --theme-gradient-section: linear-gradient(135deg, #0a4d68 0%, #088395 50%, #05bfdb 100%);
  --theme-gradient-end: linear-gradient(135deg, #0a4d68 0%, #088395 50%, #05bfdb 100%);
}
</style>
```

Or mix and match different gradients:

```css
<style>
:root {
  --theme-gradient-cover: linear-gradient(135deg, #232f3e 0%, #ff9900 100%);  /* Orange */
  --theme-gradient-section: linear-gradient(135deg, #232f3e 0%, #00a1e0 100%); /* Blue */
  --theme-gradient-end: linear-gradient(135deg, #232f3e 0%, #00d4aa 100%);    /* Green */
}
</style>
```

---

# Other Customization Options

You can also customize:

**Typography:**
- `--theme-font-size-h1`: Main title size (default: 3rem)
- `--theme-font-size-h2`: Section title size (default: 2rem)
- `--theme-font-size-p`: Paragraph text size (default: 1.125rem)

**Colors:**
- `--aws-blue`, `--aws-orange`, `--aws-green`: Brand colors
- `--theme-text`: Main text color (default: #ffffff)

**Spacing:**
- `--theme-padding`: Slide padding (default: 2.5rem 3rem 1.5rem 3rem)
- `--theme-gap`: Column gap (default: 3rem)

See `theme-aws-dark/CUSTOMIZATION.md` for complete guide.
