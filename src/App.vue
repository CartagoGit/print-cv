<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
	<aside>
		<span @click="$router.push({ name: 'home' })">Pepon</span>

		<nav>
			<span @click="$router.push({ name: 'mario' })">Mario</span>
		</nav>
	</aside>
	<main>
		<RouterView />
	</main>
</template>

<style scoped></style>
