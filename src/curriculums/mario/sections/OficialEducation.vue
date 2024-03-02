<template>
	<h2 class="section-title">Formación reglada</h2>
	<FieldData :fields="fields" />
</template>

<script setup lang="ts">
import type { IFieldsData } from '@/shared/interfaces/index.interfaces';
import FieldData from '../components/FieldData.vue';

const fields: IFieldsData[] = [
	{
		company: 'I.E.S. VELÁZQUEZ',
		where: 'Sevilla',
		date: {
			start: '2010',
			end: '2013',
		},
		place: 'Grado Superior : Técnico Superior en Desarrollo  de Aplicaciones Informáticas.',
	},
	{
		company: 'Universidad de Sevilla',
		where: 'Sevilla',
		date: {
			start: '2006',
			end: '2009',
		},
		place: 'Cursado parcial: Ingeniería Técnica en Informática de Sistemas.',
		description:
			'No finalizado por cambio en la orientación de los estudios.',
	},
	{
		company: 'I.E.S. SAN PABLO',
		where: 'Sevilla',
		date: {
			start: '2004',
			end: '2006',
		},
		place: 'Bachillerato Tecnológico.',
	},
];
</script>

<style scoped></style>
