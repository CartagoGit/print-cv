<script setup lang="ts"></script>

<template>
	<h3>Página 1 - Información</h3>
	<div class="page">
		<div class="content">
			<section class="personal">
				<article class="cv-photo">
					<div class="wrapper-img">
						<img
							src="@/assets/img/mario.png"
							alt="Photo" />
					</div>
				</article>
				<article></article>
			</section>
		</div>
	</div>
	<h3>Página 2 - Cursor y habilidades</h3>
	<div class="page">Página 2</div>
</template>

<style>
@font-face {
	font-family: 'Myriad Pro Bold Condensed';
	src: url('../assets/fonts/MyriadPro-BoldCond.ttf') format('truetype');
	font-weight: bold;
	font-style: normal;
}

:root {
	--primary: #3cb878;
	--secondary: #626c70;
	--tertiary: #80888c;
}
</style>
<style scoped>
.page {
	display: grid;
	padding: 10mm;
	font-family: 'Myriad Pro Bold Condensed';
}

.content {
	width: 100%;
	height: 100%;
	border: 1px solid aqua;
	gap: 10mm;
}

section {
	display: grid;
	grid-template-columns: 50mm 1fr;
	border: 1px solid purple;
}

.personal {
	height: 50mm;
	.cv-photo {
		position: relative;
		.wrapper-img {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 56mm;
			height: 56mm;
			border-radius: 100%;
			border: solid 3mm var(--primary);
			box-sizing: content-box;
			img {
				position: absolute;
				/* top: 50%;
				left: 50%;
				transform: translate(-50%, -50%); */
				object-position: 50% 50%;
				width: 100%;
				/* border-radius: 100%; */
				aspect-ratio: 1/1;
				clip-path: circle(50%);
			}
		}
	}
}
</style>
