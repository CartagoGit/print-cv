<template>
  <div v-for="project of openProjects">
    <span class="font-bold mr5 title">{{ project.name }}</span>
    <span
      class="font-bold dependency"
      :class="{ 'new-line': (project.dependency?.length ?? 0) > 26 }"
      >{{ project.dependency }}</span
    >
    <div class="short-description">
      {{
        typeof project.shortDescription === "string"
          ? project.shortDescription
          : project.shortDescription.value
      }}
    </div>
  </div>
</template>
<script setup lang="ts">
import { OPEN_PROJECTS_DATA } from "../data/open-projects.data";
const openProjects = OPEN_PROJECTS_DATA;
</script>
<style scoped lang="scss">
.title {
  color: var(--primary);
}
.short-description {
  margin-top: 5px;
}
</style>
