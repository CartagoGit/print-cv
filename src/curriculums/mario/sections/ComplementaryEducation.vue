import { IFieldCourse } from '../../../shared/interfaces/fields-data';
<template>
	<h2 class="section-title">Formación complementaria</h2>
	<FieldCourses :fields="fields" />
</template>

<script setup lang="ts">
import type { IFieldCourse } from '@/shared/interfaces/index.interfaces';
import FieldCourses from '../components/FieldCourses.vue';

const places = {
	udemy: 'UDEMY, Inc.',
	loom: 'LOOM NETWORK',
	devtalles: 'DEVTALLES',
	google: 'GOOGLE ACTÍVATE',
	ezentis: 'EZENTIS',
	miriadax: 'MIRÍADAX',
	crystal: 'CRYSTAL E-LEARNING',
};

const fields: IFieldCourse[] = [
	{
		place: places.udemy,
		date: 'Jun 2023',
		description:
			'Angular Avanzado: Lleva tus bases al siguiente nivel - MEAN - Por Fernando Herrera',
		time: 32,
		isOnline: true,
	},
    {
        place: places.devtalles,
        date: 'Jun 2023',
        description: 'Docker - Guía práctica de uso para desarrolladores',
        time: 14,
        isOnline: true,
    }
];
</script>

<style scoped></style>
