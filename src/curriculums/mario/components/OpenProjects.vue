<template>
  <article v-for="(project, index) of openProjects" :key="index">
    <h3 class="font-bold mr5 title inline">{{ project.name }}</h3>
    <span
      class="font-bold dependency"
      :class="{ 'new-line': (project.dependency?.length ?? 0) > 26 }"
      >{{ project.dependency }}</span
    >
    <div class="short-description" :class="{ 'highlighted-description': project.highlight }">
      {{ project.highlight ? project.description.value : project.shortDescription.value }}
    </div>
  </article>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import cvData from '../data/cv-data.json';
import { tOpenProjects } from '../helpers/traductor.helper';

const openProjects = computed(() =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (cvData.openProjects as any[]).map((p) => ({
    ...p,
    description: tOpenProjects({ project: p.kind, key: 'DESCRIPTION' }),
    shortDescription: tOpenProjects({ project: p.kind, key: 'SHORT_DESCRIPTION' }),
  })),
);
</script>
<style scoped lang="scss">
.title {
  color: var(--primary);
}
.inline {
  display: inline;
  font-size: inherit;
}
.short-description {
  margin-top: 5px;
}
.highlighted-description {
  color: var(--gray-600);
  font-style: italic;
  margin-bottom: 10px;
}
</style>
