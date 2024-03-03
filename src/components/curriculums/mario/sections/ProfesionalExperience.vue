<template>
	<h2 class="section-title">Experiencia profesional</h2>
	<article
		class="field-data"
		v-for="field of fields">
		<div class="info-place">
			<div class="company font-bold">{{ field.company }}</div>
			<div
				class="sub-company font-regular"
				v-if="field.subCompany">
				{{ field.subCompany }}
			</div>
			<div class="where-date">
				<span class="where font-bold">({{ field.where }})</span>
				<span class="date font-regular">
					{{ field.date.start }} - {{ field.date.end }}
				</span>
			</div>
		</div>
		<div class="description">
			<span class="font-bold mr5">
				{{ field.place }}
			</span>
			<span
				class="font-regular"
				v-id="field.description">
				{{ field.description }}
			</span>
		</div>
	</article>
</template>

<script setup lang="ts">
import type { IFieldsData } from '@/shared/interfaces/index.interfaces';

const fields: IFieldsData[] = [
	{
		company: 'BEATEAM S.L.',
		subCompany: '(AZUR GLOBAL BUSINESS S.L Group)',
		where: 'Sevilla',
		date: {
			start: 'Sept 2021',
			end: 'Oct 2022',
		},
		place: 'Desarrollador de software.',
		description:
			'Funciones: Desarrollo y mantenimiento de ERP para gestión de facturación, ventas y logística de recambios de automoción con Angular, Sass y Rxjs. Desarrollo y mantenimiento de aplicación móvil para Android con Ionic. Dockerización de entornos para contabilidad con WSL2. Soporte técnico y corrección de errores en aplicaciones web y móviles. Despliegue de aplicaciones en producción usando jobs de Gitlab. Mejoras en interfaz de usuario en aplicaciones Angular y Vue. Manejo de repositorios usando Git.',
	},
	{
		company: 'Profesional Independiente',
		where: 'Sevilla',
		date: {
			start: 'Sept 2021',
			end: 'Oct 2022',
		},
		place: 'Desarrollador de software.',
		description:
			'Funciones: Desarrollo en Solidity de smart contracts para la red BEP-20 de Binance Smart Chain (BSC) y para la red Ethereum (ERC-20) usando Ganache/Truffle con OpenZeppelin. Desarrollo web en React / JSX, Angular, Css/Sass / Javascript (ES6) / Typescript / jQuery, Redux. Desarrollo de aplicaciones de escritorio con Electron + React; Control de Repositorios Git + GitHub.',
	},
	{
		company: 'EXCELLENCE FIELD FACTORY, S.L.',
		subCompany: '(EZENTIS/ERICSSON/ABENTEL)',
		where: 'Sevilla',
		date: {
			start: 'Oct 2016',
			end: 'Feb 2019',
		},
		place: 'Técnico de Telecomunicaciones.',
		description:
			'Funciones: Técnico mantenimiento/instalación FTTH para la fibra óptica de Telefónica/Movistar.',
	},
	{
		company: 'HÍSPALIS INST. TELCOMUN., S.L.',
		subCompany: '(HISPATEL)',
		where: 'Sevilla',
		date: {
			start: 'May 2014',
			end: 'Sep 2016',
		},
		place: 'Técnico de Telecomunicaciones.',
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
		place: 'Soporte de hardware.',
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
		place: 'Desarrollador de software.',
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
		place: 'Desarrollador de software.',
		description:
			'Contrato de prácticas. Funciones: Apoyo en proyecto desarrollado en Java.',
	},
	{
		company: 'MUÑOZ Y DIEZMA, S.L.',
		subCompany: '(Publibici)',
		where: 'Sevilla',
		date: {
			start: 'Dic 2006',
			end: 'Mar 2007',
		},
		place: 'Repartidor de publicidad.',
		description:
			'Funciones: Exposición al público y reparto de publicidad.',
	},
];
</script>
<style scoped></style>
