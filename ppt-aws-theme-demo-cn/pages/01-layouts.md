# 布局展示

本章演示所有可用的布局类型。

---
layout: intro
---

# Intro 布局

## 副标题写在这里

这个布局适合用来引入新章节或介绍性内容。它提供了清晰、聚焦的层次结构。

当你需要比 section slide 更多的正文文本，但又想保持视觉冲击力时，用它最合适。

---
layout: default
---

# 默认布局

这是标准的内容布局：

- 清晰、易读的文字
- 合理的行距
- 页脚简洁留白
- 右下角显示页码

适合大多数以文字、列表、代码为主的内容页。

---

# 网格布局（两列）

<div grid="~ cols-2 gap-6">
<div>

## 左列

- 要点一
- 要点二
- 要点三

两列布局用来做对比或并排展示。

</div>
<div>

## 右列

- 特性 A
- 特性 B
- 特性 C

两列等宽，适合并列内容。

</div>
</div>

---

# 图文右布局

<div grid="~ cols-2 gap-6">
<div>

左边文字，右边图片。

- 适合视觉化叙事
- 图片自动适配
- 保持原始宽高比
- 特别适合架构图

</div>
<div>

![城市景观](https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/solution-case-studies/approved/images/gcrp-case-study-images/City%20landscape.b396337462b85cb051f37f5799dfd81a91bfbf8e.jpeg)

</div>
</div>

---

# 内联图片

图片也可以直接嵌入在任意布局中：

![城市景观](https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/solution-case-studies/approved/images/gcrp-case-study-images/City%20landscape.b396337462b85cb051f37f5799dfd81a91bfbf8e.jpeg){width=600px}

用 `{width=XXXpx}` 控制图片尺寸。
