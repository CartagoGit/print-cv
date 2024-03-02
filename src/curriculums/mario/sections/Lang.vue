<template>
	<h2 class="section-title section-title--lower-gap">Idiomas</h2>
	<FieldCourses :fields="fields" />
</template>

<script setup lang="ts">
import type { IFieldCourse } from '@/shared/interfaces/index.interfaces';
import FieldCourses from '../components/FieldCourses.vue';
const fields: IFieldCourse[] = [
	{
		place: 'BRITISH COUNCIL',
		date: 'Jul 2022',
		description: 'Inglés - B2 APTIS',
		subDescription:
			'del Common European Framework of Reference for Languages',
	},
    {
        description: 'Español - Competencia bilingüe/nativa'
    }
];
</script>

<style scoped></style>
