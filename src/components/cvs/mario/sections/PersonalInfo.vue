<script lang="ts"></script>

<template>
	<article class="cv-photo">
		<div class="wrapper-img">
			<img
				src="@/assets/img/mario.png"
				alt="Photo" />
		</div>
	</article>
	<article class="info">
		<h1>Mario Cabrero Volarich</h1>
	</article>
</template>

<style>
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
			object-position: 50% 50%;
			width: 100%;
			aspect-ratio: 1/1;
			clip-path: circle(50%);
		}
	}
}
.info {
	display: grid;
	grid-template-columns: 45mm 1fr;

	h1 {
		grid-column: 1 / 3;
	}
}
</style>
