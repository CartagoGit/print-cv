<template>
	<h3 class="num-pagina">Página 1 - Información</h3>
	<div class="page">
		<div class="content">
			<section class="personal">
				<PersonalInfo />
			</section>
		</div>
	</div>
	<h3>Página 2 - Cursor y habilidades</h3>
	<div class="page">Página 2</div>
</template>

<script setup lang="ts">
import PersonalInfo from './sections/PersonalInfo.vue';
</script>
<style>
:root {
	--primary: #3cb878;
	--secondary: #626c70;
	--tertiary: #80888c;
}
.page {
	display: grid;
	padding: 10mm;
	font-family: 'Myriad Pro';
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		color: var(--primary);
		font-weight: bold;
	}
	h1 {
		font-size: 30pt;
	}

	.icon {
		fill: var(--primary);
	}
}
</style>
<style scoped>
@font-face {
	font-family: 'Myriad Pro Bold Condensed';
	src: url('../assets/fonts/MyriadPro-BoldCond.ttf') format('truetype');
	font-weight: bold;
	font-style: normal;
}

.content {
	width: 100%;
	height: 100%;
	border: 1px solid aqua;
}

section {
	display: grid;
	grid-template-columns: 50mm 1fr;
	border: 1px solid purple;
	gap: 10mm;
}

.personal {
	height: 50mm;
}
</style>
