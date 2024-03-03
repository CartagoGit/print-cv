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
	<h3>Página 2 - Cursos y habilidades</h3>
	<div class="page">
		<div class="content">
			<section class="complementary-education lower-gap">
				<ComplementaryEducation />
			</section>
			<section class="lang lower-gap">
				<Lang />
			</section>
			<section class="other-data">
				<OtherData />
			</section>
		</div>
		<span class="cv-expedition">{{ cvDate }}</span>
	</div>
</template>

<script setup lang="ts">
import PersonalInfo from './sections/PersonalInfo.vue';
import ProfesionalExperience from './sections/ProfesionalExperience.vue';
import OficialEducation from './sections/OficialEducation.vue';
import ComplementaryEducation from './sections/ComplementaryEducation.vue';
import Lang from './sections/Lang.vue';
import OtherData from './sections/OtherData.vue';
import './styles/global.mario.scss';

const cvDate = 'Feb 2024';
</script>

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

.lower-gap {
	row-gap: 5px;
}
.personal {
	height: 50mm;
}

.cv-expedition {
	position: absolute;
	bottom: var(--page-padding);
	right: var(--page-padding);
	font-size: 10px;
}
.other-data {
	position: relative;
	height: 100%;
	grid-template-rows: 1fr auto;
}
</style>
