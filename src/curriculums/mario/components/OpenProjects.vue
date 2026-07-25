<template>
  <article v-for="(project, index) of openProjects" :key="index">
    <h3 class="font-bold mr5 title inline">{{ project.name }}</h3>
    <span
      class="font-bold dependency"
      :class="{ 'new-line': (project.dependency?.length ?? 0) > 26 }"
      >{{ project.dependency }}</span
    >
    <NpmStats
      v-if="project.npm && project.dependency && !project.dependency.includes('docker')"
      :package-name="project.dependency"
    />
    <div class="short-description" :class="{ 'highlighted-description': project.highlight }">
      {{ project.highlight ? project.description.value : project.shortDescription.value }}
    </div>
  </article>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import cvData from '../data/cv-data.json';
import { tOpenProjects, type IOpenProjects } from '../helpers/traductor.helper';
import NpmStats from '@/shared/components/NpmStats.vue';
import type { CvData } from '../data/cv-schema';

const typedCvData = cvData as unknown as CvData;

const openProjects = computed(() =>
  typedCvData.openProjects.map((p) => ({
    ...p,
    description: tOpenProjects({ project: p.kind as IOpenProjects, key: 'DESCRIPTION' }),
    shortDescription: tOpenProjects({ project: p.kind as IOpenProjects, key: 'SHORT_DESCRIPTION' }),
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
