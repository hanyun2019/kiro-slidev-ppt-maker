<!--
  StatCard - Spotlight a single data point.

  Props:
    value   — the big number/text (e.g., "30K", "$82", "4x", "99.9%")
    label   — short description below the value
    trend   — 'up' | 'down' | 'neutral' (optional, renders an arrow glyph)
    color   — 'blue' | 'orange' | 'green' | 'purple' (default: 'blue')

  Slot:
    default — optional extra note/annotation rendered below the label

  Usage:
    <StatCard value="$200B" label="2026 capex" trend="up" color="orange" />

    <StatCard value="30,000" label="Layoffs" color="green">
      Largest in Amazon history
    </StatCard>
-->
<template>
  <div :class="['stat-card', `stat-${color}`]">
    <div class="stat-value">
      {{ value }}
      <span v-if="trend" :class="['stat-trend', `trend-${trend}`]">
        {{ trendGlyph }}
      </span>
    </div>
    <div class="stat-label">{{ label }}</div>
    <div v-if="$slots.default" class="stat-note">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type Trend = 'up' | 'down' | 'neutral'
type StatColor = 'blue' | 'orange' | 'green' | 'purple'

const props = withDefaults(
  defineProps<{
    value: string | number
    label: string
    trend?: Trend
    color?: StatColor
  }>(),
  {
    color: 'blue',
  },
)

const trendGlyph = computed(() => {
  switch (props.trend) {
    case 'up':
      return '▲'
    case 'down':
      return '▼'
    case 'neutral':
      return '▶'
    default:
      return ''
  }
})
</script>

<style scoped>
.stat-card {
  display: inline-flex;
  flex-direction: column;
  padding: 1.25rem 1.5rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.04);
  border-left: 4px solid var(--stat-color, #00a1e0);
  min-width: 10rem;
}

.stat-blue {
  --stat-color: #00a1e0;
}
.stat-orange {
  --stat-color: #ff9900;
}
.stat-green {
  --stat-color: #00d4aa;
}
.stat-purple {
  --stat-color: #9d4edd;
}

.stat-value {
  font-size: 2.75rem;
  font-weight: 700;
  color: var(--stat-color);
  line-height: 1.1;
  display: flex;
  align-items: baseline;
  gap: 0.4rem;
}

.stat-trend {
  font-size: 1rem;
  font-weight: 600;
}

.trend-up {
  color: #00d4aa;
}
.trend-down {
  color: #ff6b6b;
}
.trend-neutral {
  color: #e0e0e0;
}

.stat-label {
  font-size: 0.95rem;
  font-weight: 500;
  color: #ffffff;
  margin-top: 0.35rem;
  line-height: 1.3;
}

.stat-note {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.65);
  margin-top: 0.5rem;
  line-height: 1.4;
}
</style>
