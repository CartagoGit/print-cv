<template>
  <div v-for="(project, index) of openProjects" :key="index">
    <span class="font-bold mr5 title">{{ project.name }}</span>
    <span
      class="font-bold dependency"
      :class="{ 'new-line': (project.dependency?.length ?? 0) > 26 }"
      >{{ project.dependency }}</span
    >
    <div class="short-description" :class="{ 'highlighted-description': project.highlight }">
      {{ project.highlight ? project.description : project.shortDescription }}
    </div>
  </div>
</template>
<script setup lang="ts">
import cvData from '../data/cv-data.json';
const openProjects = cvData.openProjects;
</script>
<style scoped lang="scss">
.title {
  color: var(--primary);
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
