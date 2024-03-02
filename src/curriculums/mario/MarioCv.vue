<template>
	<h3 class="num-pagina">Página 1 - Información</h3>
	<div class="page">
		<div class="content">
			<section class="personal">
				<PersonalInfo />
			</section>
			<section class="profesional-experience">
				<ProfesionalExperience />
			</section>
			<section class="oficial-education">
				<OficialEducation />
			</section>
		</div>
		<span class="cv-expedition">{{ cvDate }}</span>
	</div>
	<h3>Página 2 - Cursor y habilidades</h3>
	<div class="page">
		Página 2
		<span class="cv-expedition">{{ cvDate }}</span>
	</div>
</template>

<script setup lang="ts">
import PersonalInfo from './sections/PersonalInfo.vue';
import ProfesionalExperience from './sections/ProfesionalExperience.vue';
import OficialEducation from './sections/OficialEducation.vue';

const cvDate = 'Feb 2024';
</script>
<style>
@font-face {
	font-family: 'Myriad Pro Bold Condensed';
	src: url('@/assets/fonts/MyriadPro-BoldCond.ttf') format('truetype');
	font-weight: regular;
	font-style: normal;
}
@font-face {
	font-family: 'Myriad Pro';
	src: url('@/assets/fonts/MyriadPro-Regular.ttf') format('truetype');
	font-weight: regular;
	font-style: normal;
}
:root {
	--primary: #3cb878;
	--secondary: #626c70;
	--tertiary: #80888c;
	--bold-font: 'Myriad Pro Bold Condensed';
	--regular-font: 'Myriad Pro';
}
.page {
	display: grid;
	position: relative;
	/* padding: 10mm; */
	padding: 36px;
	font-family: var(--regular-font);
	color: var(--secondary);
	font-size: 14px;
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		color: var(--primary);
		font-family: var(--bold-font);
		font-weight: bold;
	}
	h1 {
		font-size: 48px;
	}

	.icon {
		fill: var(--primary);
	}

	.font-regular {
		font-family: var(--normal-font);
	}

	.font-bold {
		font-family: var(--bold-font);
		font-size: 16px;
	}
	article.field-data {
		grid-column: 1 / 3;
		outline: 1px solid green;
		display: grid;
		grid-template-columns: 220px 1fr;
		row-gap: 15px;
		column-gap: 10px;
	}

	h2.section-title {
		grid-column: 2 / 3;
		line-height: 22px;
	}
}
</style>
<style scoped>
/* TODO comentar los colores de los bordes */
.content {
	width: 100%;
	height: 100%;
	outline: 1px solid aqua;
	display: flex;
	flex-direction: column;
	gap: 26px;
}

section {
	display: grid;
	grid-template-columns: 220px 1fr;
	row-gap: 15px;
	column-gap: 10px;
	outline: 1px solid purple;
}

.personal {
	height: 50mm;
}

.cv-expedition{
	position: absolute;
	bottom: 36px;
	right: 36px;
	font-size: 12px;
}
</style>
