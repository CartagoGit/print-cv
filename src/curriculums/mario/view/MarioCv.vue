<template>
	<h3 class="num-pagina">{{ $t('MARIO.CV.PAGE1')}}</h3>
	<div class="page">
		<div class="content">
			<section class="personal">
				<PersonalInfo />
			</section>
			<section class="professional-experience">
				<ProfessionalExperience />
			</section>
			<section class="oficial-education">
				<OficialEducation />
			</section>
		</div>
		<span class="cv-expedition">{{ cvDate }}</span>
	</div>
	<h3>{{ $t('MARIO.CV.PAGE2') }}</h3>
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
import PersonalInfo from '../sections/PersonalInfo.vue';
import ProfessionalExperience from '../sections/ProfessionalExperience.vue';
import OficialEducation from '../sections/OficialEducation.vue';
import ComplementaryEducation from '../sections/ComplementaryEducation.vue';
import Lang from '../sections/Lang.vue';
import OtherData from '../sections/OtherData.vue';
import '../styles/global.mario.scss';
import { CURRICULUM_DATE } from '../data/curriculum.data';

const cvDate = CURRICULUM_DATE;
</script>

<style scoped>
.content {
	width: 100%;
	height: 100%;
	/* outline: 1px solid aqua; */
	display: flex;
	flex-direction: column;
	gap: 26px;
}

section {
	display: grid;
	grid-template-columns: 220px 1fr;
	row-gap: 15px;
	column-gap: 10px;
	/* outline: 1px solid purple; */
}

.lower-gap {
	row-gap: 6px;
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
}
</style>../sections/ProfessionalExperience.vue
