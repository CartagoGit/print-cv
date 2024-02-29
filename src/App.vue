<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
	<div class="app">
		<aside>
			<span @click="$router.push({ name: 'home' })">Home</span>
			<span @click="$router.push({ name: 'cv' })">Curriculum</span>

			<nav>
				<span @click="$router.push({ name: 'mario' })">Mario</span>
			</nav>
		</aside>
		<main>
			<RouterView />
		</main>
	</div>
</template>
<style>
#app {
	display: flex;
	background-color: var(--pink-500);
	width: 100%;
	height: 100%;
}
</style>
<style scoped>
aside {
	background-color: blue;
}
</style>
