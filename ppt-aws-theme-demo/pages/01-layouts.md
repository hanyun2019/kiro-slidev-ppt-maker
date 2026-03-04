# Layouts Demo

This section demonstrates all available layouts.

---
layout: intro
---

# Intro Layout

## Subtitle Goes Here

This layout is perfect for introducing new topics or sections. It provides a clean, focused presentation of your content with proper hierarchy.

Use it when you need more text than a section slide but want to maintain visual impact.

---
layout: intro
class: bg-aws-dark-blue
---

# AWS Dark Blue Background

## A Professional Alternative

This slide uses `class: bg-aws-dark-blue` (#141e2c)

Perfect for a softer, more professional look than pure black while maintaining the dark theme aesthetic.

Great for corporate presentations or when you want a subtle background.

---
layout: default
---

# Default Layout

This is the standard content layout with:

- Clean, readable text
- Proper spacing
- AWS branding in footer
- Page numbers

Perfect for most content slides with text, lists, and code.

---

# Grid Layout (Two Columns)

<div grid="~ cols-2 gap-6">
<div>

## Left Column

- Point 1
- Point 2
- Point 3

This uses grid layout for two columns.

</div>
<div>

## Right Column

- Feature A
- Feature B
- Feature C

Perfect for comparisons or detailed content.

</div>
</div>

---

# Grid Layout (Left-Right Style)

<div grid="~ cols-2 gap-6">
<div>

## Left Column

Left column content:

- Feature A
- Feature B
- Feature C

Perfect for comparisons or side-by-side content.

</div>
<div>

## Right Column

Right column content:

- Benefit 1
- Benefit 2
- Benefit 3

Both columns are equal width.

</div>
</div>

---

# Image Right Layout

<div grid="~ cols-2 gap-6">
<div>

Content on the left, image on the right.

- Perfect for visual storytelling
- Supports any image size
- Maintains aspect ratio
- Great for architecture diagrams

</div>
<div>

![City Landscape](https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/solution-case-studies/approved/images/gcrp-case-study-images/City%20landscape.b396337462b85cb051f37f5799dfd81a91bfbf8e.jpeg)

</div>
</div>

---

# Inline Images

You can also use images inline within any layout:

![AWS City](https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/solution-case-studies/approved/images/gcrp-case-study-images/City%20landscape.b396337462b85cb051f37f5799dfd81a91bfbf8e.jpeg){width=600px}

Use `{width=XXXpx}` to control image size.

---

# Text Content

<div grid="~ cols-2 gap-6">
<div>

Combine text and images in columns:

- Cloud infrastructure
- Scalable solutions
- Global reach
- High availability

</div>
<div>

![City Infrastructure](https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/solution-case-studies/approved/images/gcrp-case-study-images/City%20landscape.b396337462b85cb051f37f5799dfd81a91bfbf8e.jpeg){width=100%}

</div>
</div>
