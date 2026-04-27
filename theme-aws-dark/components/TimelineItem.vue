<!--
  TimelineItem - A single event on a <Timeline>.

  Props:
    date       — left-side label (e.g., "2015", "Q1 2026", "Jan 28")
    title      — the event headline
    highlight  — boolean, renders the node in AWS orange instead of blue
                 (use to mark the most important event)

  Slot:
    default    — event description / notes (Markdown works inside)
-->
<template>
  <div :class="['timeline-item', { 'is-highlight': highlight }]">
    <span class="timeline-node" aria-hidden="true" />
    <div class="timeline-content">
      <div class="timeline-header">
        <span class="timeline-date">{{ date }}</span>
        <span class="timeline-title">{{ title }}</span>
      </div>
      <div v-if="$slots.default" class="timeline-body">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    date: string
    title: string
    highlight?: boolean
  }>(),
  {
    highlight: false,
  },
)
</script>

<style scoped>
.timeline-item {
  position: relative;
  padding-bottom: 1.25rem;
}

.timeline-item:last-child {
  padding-bottom: 0;
}

.timeline-node {
  position: absolute;
  left: -1.45rem;
  top: 0.4rem;
  width: 0.85rem;
  height: 0.85rem;
  border-radius: 50%;
  background: #00a1e0;
  border: 2px solid rgba(0, 161, 224, 0.35);
  box-shadow: 0 0 0 3px rgba(20, 30, 44, 1);
}

.is-highlight .timeline-node {
  background: #ff9900;
  border-color: rgba(255, 153, 0, 0.35);
}

.timeline-header {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.timeline-date {
  font-size: 0.8rem;
  font-weight: 600;
  color: #00a1e0;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-variant-numeric: tabular-nums;
}

.is-highlight .timeline-date {
  color: #ff9900;
}

.timeline-title {
  font-size: 1.05rem;
  font-weight: 600;
  color: #ffffff;
}

.timeline-body {
  margin-top: 0.3rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
}

/* Slidev markdown inside the slot */
.timeline-body :deep(p) {
  margin: 0.2rem 0;
  font-size: 0.9rem;
  line-height: 1.5;
}

.timeline-body :deep(strong) {
  color: #00a1e0;
}
</style>
