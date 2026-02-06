<template>
  <span v-if="downloads" class="npm-stats" title="Downloads last month">
    <span class="icon">↓</span>
    {{ downloads }}/mo
  </span>
</template>

<script setup lang="ts">
import { useNpmDownloads } from '../composables/useNpmDownloads';

const props = defineProps<{
  packageName: string;
}>();

const { downloads } = useNpmDownloads(props.packageName);
</script>

<style scoped>
.npm-stats {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  margin-left: 8px;
  font-size: 0.8em;
  color: var(--gray-500);
  background: var(--gray-200);
  padding: 1px 6px;
  border-radius: 10px;
  vertical-align: middle;
}
.icon {
  font-weight: bold;
}
</style>
