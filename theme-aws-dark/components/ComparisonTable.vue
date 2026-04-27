<!--
  ComparisonTable - Side-by-side comparison (pros/cons, before/after, A vs B).

  Props:
    leftTitle   — heading above the left column
    rightTitle  — heading above the right column
    leftAccent  — 'blue' | 'orange' | 'green' | 'purple' | 'red' (default: 'blue')
    rightAccent — same as above (default: 'orange')

  Slots:
    #left       — left column body (lists, paragraphs, anything)
    #right      — right column body

  Usage:
    <ComparisonTable
      leftTitle="Self-service Trainium"
      rightTitle="Dedicated Trainium"
      leftAccent="red"
      rightAccent="green"
    >
      <template #left>

      - Alien Neuron SDK
      - Poor dev experience
      - Low adoption

      </template>
      <template #right>

      - Co-development with frontier labs
      - 1M+ Trainium2 at Anthropic
      - $10B+ run rate

      </template>
    </ComparisonTable>
-->
<template>
  <div class="comparison-table">
    <div :class="['comp-col', `accent-${leftAccent}`]">
      <div class="comp-header">{{ leftTitle }}</div>
      <div class="comp-body">
        <slot name="left" />
      </div>
    </div>
    <div :class="['comp-col', `accent-${rightAccent}`]">
      <div class="comp-header">{{ rightTitle }}</div>
      <div class="comp-body">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type Accent = 'blue' | 'orange' | 'green' | 'purple' | 'red'

withDefaults(
  defineProps<{
    leftTitle: string
    rightTitle: string
    leftAccent?: Accent
    rightAccent?: Accent
  }>(),
  {
    leftAccent: 'blue',
    rightAccent: 'orange',
  },
)
</script>

<style scoped>
.comparison-table {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  margin: 0.75rem 0;
}

.comp-col {
  background: rgba(255, 255, 255, 0.04);
  border-radius: 8px;
  border-top: 3px solid var(--accent-color, #00a1e0);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.accent-blue   { --accent-color: #00a1e0; }
.accent-orange { --accent-color: #ff9900; }
.accent-green  { --accent-color: #00d4aa; }
.accent-purple { --accent-color: #9d4edd; }
.accent-red    { --accent-color: #ff6b6b; }

.comp-header {
  padding: 0.75rem 1.25rem;
  background: rgba(255, 255, 255, 0.06);
  color: var(--accent-color);
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: 0.02em;
}

.comp-body {
  padding: 0.75rem 1.25rem 1rem;
  color: #ffffff;
  font-size: 0.95rem;
  line-height: 1.6;
}

/* Markdown styling inside the slot */
.comp-body :deep(ul),
.comp-body :deep(ol) {
  margin: 0.25rem 0;
  padding-left: 1.25rem;
}

.comp-body :deep(li) {
  margin-bottom: 0.35rem;
}

.comp-body :deep(p) {
  margin: 0.35rem 0;
}

.comp-body :deep(strong) {
  color: var(--accent-color);
  font-weight: 600;
}

.comp-body :deep(code) {
  background: rgba(0, 0, 0, 0.35);
  padding: 0.1rem 0.4rem;
  border-radius: 3px;
  font-size: 0.85em;
}
</style>
