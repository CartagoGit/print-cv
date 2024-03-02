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
		</div>
	</div>
	<h3>Página 2 - Cursor y habilidades</h3>
	<div class="page">Página 2</div>
</template>

<script setup lang="ts">
import PersonalInfo from './sections/PersonalInfo.vue';
import ProfesionalExperience from './sections/ProfesionalExperience.vue';
</script>
<style>
@font-face {
	font-family: 'Myriad Pro Bold Condensed';
	src: url('@/assets/fonts/MyriadPro-BoldCond.ttf') format('truetype');
	font-weight: regular;
	font-style: normal;
}
:root {
	--primary: #3cb878;
	--secondary: #626c70;
	--tertiary: #80888c;
	--bold-font: 'Myriad Pro Bold Condensed';
	--normal-font: 'Myriad Pro';
}
.page {
	display: grid;
	padding: 10mm;
	font-family: var(--normal-font);
	color: var(--secondary);
	font-size: 16px;
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
}
</style>
<style scoped>
.content {
	width: 100%;
	height: 100%;
	border: 1px solid aqua;
	display: flex;
	flex-direction: column;
	gap: 26px;
}

article.with-date,
section {
	display: grid;
	grid-template-columns: 50mm 1fr;
	border: 1px solid purple;
	gap: 10mm;
}

article.with-date{
	grid-column: 1 / 3;
}

.personal {
	height: 50mm;
}
</style>
