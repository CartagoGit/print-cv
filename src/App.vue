<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
	<aside>
		<span @click="$router.push({ name: 'home' })">Home</span>
		<span @click="$router.push({ name: 'cv' })">Curriculum</span>

		<nav>
			<span @click="$router.push({ name: 'mario' })">Mario</span>
		</nav>
	</aside>
	<main>
		<div class="curriculum">
			<RouterView />
		</div>
	</main>
</template>
<style>
#app {
	display: grid;
	grid-template-columns: 300px 1fr;

	width: 100%;
	height: 100%;
}
</style>
<style scoped>
aside {
	background-color: aqua;
	padding: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
}
main {
	background-color: burlywood;
	display: flex;
	padding: 10px;
	justify-content: center;

	.curriculum{
		aspect-ratio: 1.414;
		width: 210mm;
		height: 297mm;
		background-color: white;
		box-shadow: 0 0 10px 0 black;
		
	}
}
</style>
