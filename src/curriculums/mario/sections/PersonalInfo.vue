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
		<span
			v-for="field of fields"
			class="field">
			<component
				:is="field.icon"
				class="icon icon--info" />
			<span class="font-bold">
				{{ field.value }}
			</span>
		</span>
	</article>
</template>
<script setup lang="ts">
import { infoContact } from '../constants/info-contact.constant';

const fields = infoContact;
</script>

<style>
.cv-photo {
	position: relative;
	.wrapper-img {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 52mm;
		height: 52mm;
		border-radius: 100%;
		border: solid 6px var(--primary);
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
	grid-template-columns: 55mm 1fr;

	h1 {
		grid-column: 1 / 3;
	}

	.field {
		display: flex;
		gap: 10px;
		align-items: center;
	}
}
</style>
../constants/info-contact.constant
