<script setup lang="ts">
defineProps<{ name: string }>()
</script>

<template>
  <svg
    class="icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.6"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <!-- Web / browser -->
    <template v-if="name === 'browser'">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18" />
      <path d="M7 6.5h.01M10 6.5h.01" />
    </template>

    <!-- No-code / blocks -->
    <template v-else-if="name === 'blocks'">
      <rect x="3" y="3" width="8" height="8" rx="1.5" />
      <rect x="13" y="3" width="8" height="8" rx="1.5" />
      <rect x="3" y="13" width="8" height="8" rx="1.5" />
      <path d="M17 13v8M13 17h8" />
    </template>

    <!-- Automation / flow -->
    <template v-else-if="name === 'flow'">
      <circle cx="5.5" cy="6" r="2.5" />
      <circle cx="18.5" cy="6" r="2.5" />
      <circle cx="12" cy="18" r="2.5" />
      <path d="M5.5 8.5v3a2 2 0 0 0 2 2h2M18.5 8.5v3a2 2 0 0 1-2 2h-2" />
    </template>

    <!-- Data / chart -->
    <template v-else-if="name === 'chart'">
      <path d="M4 4v16h16" />
      <path d="M8 15l3-4 3 2 4-6" />
    </template>

    <!-- QA / shield check -->
    <template v-else-if="name === 'shield'">
      <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </template>

    <!-- fallback -->
    <template v-else>
      <circle cx="12" cy="12" r="9" />
    </template>
  </svg>
</template>

<style scoped>
.icon {
  width: 100%;
  height: 100%;
}
</style>
