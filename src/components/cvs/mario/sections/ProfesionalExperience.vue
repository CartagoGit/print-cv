<template>
	<h2 class="section-title">Experiencia profesional</h2>
	<article
		class="with-date"
		v-for="field of fields">
		<div class="info"></div>
		<div class="description">{{ field.job }}</div>
	</article>
</template>

<script setup lang="ts">
import type { IProfesionalExperiencie } from '@/shared/interfaces/index.interfaces';

const fields: IProfesionalExperiencie[] = [
	{
		company: 'BEATEAM S.L. (AZUR GLOBAL BUSINESS S.L Group)',
		where: 'Sevilla',
		date: {
			start: 'Sept 2021',
			end: 'Oct 2022',
		},
		job: 'Desarrollador de software.',
		description:
			'Funciones: Lenguaje de Etiquetas - HTML 5 + CSS / Sass. Desarrollo en Solidity de smart contracts para la red BEP-20 de Binance Smart Chain (BSC) y para la red Ethereum (ERC-20) usando Ganache/Truffle con OpenZeppelin. Desarrollo web en React / JSX, Angular / Javascript (ES6) / jQuery, Redux. Desarrollo de aplicaciones de escritorio con Electron + React; C# Windows Form y WCF; y en Unity C#. Control de Repositorios Git + GitHub. Desarrollo en MongoDB (No-SQL) usando Node.js/Mongoose; y SQL en Bases de Datos relacionales. Gestión de proyectos con Notion para llevar un control de proyectos.',
	},
	{
		company: 'Profesional Independiente',
		where: 'Sevilla',
		date: {
			start: 'Sept 2021',
			end: 'Oct 2022',
		},
		job: 'Desarrollador de software.',
		description:
			'Funciones: Lenguaje de Etiquetas - HTML 5 + CSS / Sass. Desarrollo en Solidity de smart contracts para la red BEP-20 de Binance Smart Chain (BSC) y para la red Ethereum (ERC-20) usando Ganache/Truffle con OpenZeppelin. Desarrollo web en React / JSX, Angular / Javascript (ES6) / jQuery, Redux. Desarrollo de aplicaciones de escritorio con Electron + React; C# Windows Form y WCF; y en Unity C#. Control de Repositorios Git + GitHub. Desarrollo en MongoDB (No-SQL) usando Node.js/Mongoose; y SQL en Bases de Datos relacionales. Gestión de proyectos con Notion para llevar un control de proyectos.',
	},
	{
		company: 'EXCELLENCE FIELD FACTORY, S.L. (EZENTIS/ERICSSON/ABENTEL)',
		where: 'Sevilla',
		date: {
			start: 'Oct 2016',
			end: 'Feb 2019',
		},
		job: 'Técnico de Telecomunicaciones.',
		description:
			'Funciones: Técnico mantenimiento/instalación FTTH para la fibra óptica de Telefónica/Movistar.',
	},
	{
		company: 'HÍSPALIS INST. TELCOMUN., S.L. (HISPATEL)',
		where: 'Sevilla',
		date: {
			start: 'May 2014',
			end: 'Sep 2016',
		},
		job: 'Técnico de Telecomunicaciones.',
		description:
			'Funciones: Técnico mantenimiento/instalación FTTH para la fibra óptica de Telefónica/Movistar.',
	},
	{
		company: 'Profesional independiente',
		where: 'Sevilla',
		date: {
			start: '2006',
			end: '2014',
		},
		job: 'Soporte de hardware.',
		description:
			'Funciones: Mantenimiento de computadoras informáticas y consolas, así como de otros dispositivos electrónicos para particulares. ',
	},
	{
		company: 'S.A.C.E. EVERTEL, S.L.',
		where: 'Sevilla',
		date: {
			start: 'Abr 2013',
			end: 'Jun 2013',
		},
		job: 'Desarrollador de software.',
		description:
			'Contrato de prácticas. Funciones: Desarrollo web en intranet empleando SharePoint.',
	},
	{
		company: 'GUADALTEL, S.A.',
		where: 'Sevilla',
		date: {
			start: 'Nov 2012',
			end: 'Dic 2012',
		},
		job: 'Desarrollador de software.',
		description:
			'Contrato de prácticas. Funciones: Apoyo en proyecto desarrollado en Java.',
	},
	{
		company: 'MUÑOZ Y DIEZMA, S.L. (Publibici)',
		where: 'Sevilla',
		date: {
			start: 'Dic 2006',
			end: 'Mar 2007',
		},
		job: 'Repartidor de publicidad.',
		description:
			'Funciones: Exposición al público y reparto de publicidad.',
	},
];
</script>
<style scoped>

</style>
