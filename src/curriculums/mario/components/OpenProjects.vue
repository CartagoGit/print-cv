<template>
	<div v-for="project of openProjects">
		<span class="font-bold mr5 title">{{ project.name }}</span>
		<span class="font-bold dependency">{{ project.dependency }}</span>
		<div class="short-description">{{ project.shortDescription }}</div>
	</div>
</template>
<script setup lang="ts">
import { OPEN_PROJECTS_DATA } from '../data/open-projects.data';
const openProjects = OPEN_PROJECTS_DATA;
</script>
<style scoped>
.title {
	color: var(--primary);
}
.short-description {
    margin-top: 5px;
}
</style>
