<!--
  Timeline - Vertical timeline container.

  Usage:
    <Timeline>
      <TimelineItem date="2015" title="Acquired Annapurna Labs">
        Bought an Israeli chip design firm for ~$350M.
      </TimelineItem>
      <TimelineItem date="2022" title="Trainium Launched" highlight>
        First-gen AI training chip.
      </TimelineItem>
      <TimelineItem date="2026" title="Project Rainier">
        500k Trainium2 chips for Anthropic.
      </TimelineItem>
    </Timeline>

  The parent just renders a vertical rail; each <TimelineItem> is a row.
-->
<template>
  <div class="timeline">
    <slot />
  </div>
</template>

<style scoped>
.timeline {
  position: relative;
  padding-left: 1.75rem;
  margin: 0.5rem 0;
}

/* The vertical rail drawn behind all items */
.timeline::before {
  content: '';
  position: absolute;
  left: 0.55rem;
  top: 0.5rem;
  bottom: 0.5rem;
  width: 2px;
  background: linear-gradient(
    180deg,
    rgba(0, 161, 224, 0.2) 0%,
    #00a1e0 50%,
    rgba(0, 161, 224, 0.2) 100%
  );
}
</style>
