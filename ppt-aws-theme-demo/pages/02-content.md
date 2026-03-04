# Content Features

This section demonstrates content features like code, tables, diagrams, and more.

---

# Code Highlighting

Slidev supports beautiful code highlighting:

```typescript
interface User {
  id: number
  name: string
  email: string
}

async function fetchUser(id: number): Promise<User> {
  const response = await fetch(`/api/users/${id}`)
  return response.json()
}
```

Supports many languages with syntax highlighting.

---
layout: center
---

# <GradientText color="blue-purple">Center Layout</GradientText>

Perfect for <GradientText color="blue-green">section breaks</GradientText> or <GradientText color="orange-pink">important announcements</GradientText>

Content is centered both horizontally and vertically

Use GradientText component to <GradientText color="blue-purple">emphasize key words</GradientText>

---

# Tables

Tables are fully supported:

| Feature | AWS Theme | Default Theme |
|---------|-----------|---------------|
| Dark Mode | ✅ | ❌ |
| Gradients | ✅ | ❌ |
| AWS Branding | ✅ | ❌ |
| Code Highlighting | ✅ | ✅ |
| Diagrams | ✅ | ✅ |

---

# Diagrams with Mermaid

```mermaid {scale: 0.8}
graph LR
    A[User] --> B[API Gateway]
    B --> C[Lambda]
    C --> D[DynamoDB]
    C --> E[S3]
```

Mermaid diagrams are styled with white lines for dark backgrounds.

Use `{scale: 0.8}` to adjust size.

---

# Math Equations

Inline math: $E = mc^2$

Block math:

$$
\frac{d}{dx}\left( \int_{0}^{x} f(u)\,du\right)=f(x)
$$

LaTeX support for mathematical expressions.

---

# Icons

Use Iconify icons easily:

<carbon:arrow-right /> Arrow right

<carbon:checkmark /> Checkmark

Or use emoji: 🚀 ✅ ❌ 💡 📊 🔧

---

# UnoCSS Utilities

Slidev includes UnoCSS for styling:

<div grid="~ cols-2 gap-4">
<div class="bg-[#1a1a2e] border-l-3 border-[#FF9900] p-4">

**Orange Border Box**

Use border-l-3 with custom colors

</div>
<div class="bg-[#1a1a2e] border-l-3 border-[#5dade2] p-4">

**Blue Border Box**

Perfect for highlighting content

</div>
</div>

<div class="mt-4 text-center text-3xl font-bold">
  Large Centered Text
</div>

---
layout: center
---

# Additional Resources

[AWS Documentation](https://aws.amazon.com/documentation/)

[Slidev Documentation](https://sli.dev)

[Theme Repository](#)
