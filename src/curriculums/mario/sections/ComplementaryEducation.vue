import { IFieldCourse } from '../../../shared/interfaces/fields-data';
<template>
	<h2 class="section-title section-title--lower-gap">Formación complementaria</h2>
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
	ericsson: 'ERICSSON',
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
	},
	{
		place: places.udemy,
		date: 'Ene 2023',
		description: 'Principios SOLID y Clean Code',
		time: 6.5,
		isOnline: true,
	},
	{
		place: places.udemy,
		date: 'Oct 2023',
		description: ' ReactiveX - RxJs - De cero hasta los detalles',
		time: 9.5,
		isOnline: true,
	},
	{
		place: places.udemy,
		date: 'Sep 2023',
		description: ' Angular de 0 a Experto',
		time: 44,
		isOnline: true,
	},
	{
		place: places.loom,
		date: 'May 2022',
		description:
			'Aprende a Programar Etherum DApps construyendo tu propio juego',
		isOnline: true,
	},
	{
		place: places.udemy,
		date: 'Feb 2022',
		description:
			'Arte para Videojuegos: Unity, Photoshop, Adobe Illustrator: de Cero a Avanzado',
		time: 18,
		isOnline: true,
	},
	{
		place: places.udemy,
		date: 'Feb 2022',
		description: 'Bootstrap 5: El Curso Completo, Práctico y Desde Cero',
		time: 34,
		isOnline: true,
	},
	{
		place: places.udemy,
		date: 'Ene 2022',
		description: 'Aprende todo sobre Notion: 3 cursos en 1',
		time: 5,
		isOnline: true,
	},
	{
		place: places.udemy,
		date: 'Ene 2022',
		description: 'JavaScript Moderno: Guía para dominar el lenguaje',
		time: 17,
		isOnline: true,
	},
	{
		place: places.udemy,
		date: 'Dic 2021',
		description: 'React: De cero a experto ( Hooks y MERN )',
		time: 49,
		isOnline: true,
	},
	{
		place: places.udemy,
		date: 'Nov 2021',
		description: 'Curso Completo de Blockchain de cero a experto',
		time: 12,
		isOnline: true,
	},
	{
		place: places.udemy,
		date: 'Nov 2021',
		description: 'Smart Contracts y Blockchain con Solidity de la A a la Z',
		time: 27,
		isOnline: true,
	},
	{
		place: places.udemy,
		date: 'Oct 2021',
		description:
			'GIT+GitHub: Todo un sistema de control de versiones de cero',
		time: 12,
		isOnline: true,
	},
	{
		place: places.google,
		date: 'Jun 2021',
		description: 'Desarrollo de Apps Móviles',
		time: 40,
		isOnline: true,
	},
	{
		place: places.udemy,
		date: 'Jun 2020',
		description:
			'Master en CSS: Responsive, SASS, Flexbox, Grid y Bootstrap',
		time: 20,
		isOnline: true,
	},
	{
		place: places.google,
		date: 'May 2020',
		description: 'Introducción al Desarrollo Web II',
		time: 40,
		isOnline: true,
	},
	{
		place: places.google,
		date: 'May 2020',
		description: 'Introducción al Desarrollo Web I',
		time: 40,
		isOnline: true,
	},
	{
		place: places.ezentis,
		date: 'Ene 2019',
		description: 'Curso configurador Movistar VPN empresas',
	},
	{
		place: places.ericsson,
		date: 'Ene 2018',
		description:
			'Técnico de Prevención de Nivel Básico (Recurso Preventivo)',
		time: 60,
	},
	{
		place: places.miriadax,
		date: 'May 2017',
		description: 'Cobre fiel amigo de la comunicación',
		time: 30,
	},
	{
		place: places.miriadax,
		date: 'May 2017',
		description: 'Conectando el futuro con Fibra Óptica (4º Edición)',
		time: 30,
	},
	{
		place: places.crystal,
		date: 'Ene 2013',
		description: 'Desarrollo de aplicaciones Flash en Android e iOS',
		isOnline: true,
	},
];
</script>
