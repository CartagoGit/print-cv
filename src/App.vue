<template>
	<aside>
		<header>
			<span
				@click="$router.push({ name: 'home' })"
				class="btn">
				Home
			</span>
			<span class="actions">
				<font-awesome-icon :icon="['fas', 'file-pdf']" />
			</span>
		</header>
		<nav>
			<h2>Curriculums</h2>
			<span
				v-for="route in routes"
				@click="$router.push({ name: route.nameRoute })"
				class="link btn">
				{{ route.text }}
			</span>
		</nav>
	</aside>
	<main>
		<RouterView v-if="$route.name === 'home'" />
		<div
			v-else
			class="curriculum">
			<RouterView />
		</div>
	</main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';

const routes = [{ text: 'Mario', nameRoute: 'mario' }];
</script>

<style>
#app {
	display: grid;
	grid-template-columns: 300px 1fr;
	background-color: var(--gray-200);
	width: 100%;
	height: 100%;
}
</style>
<style scoped>
aside {
	display: flex;
	background-color: var(--gray-700);
	color: var(--gray-100);
	flex-direction: column;
	align-items: center;
	gap: 20px;
	box-shadow: 0 0 10px 0 black;
	header {
		box-shadow: 0 0 2px 0 black;

		padding: 20px;
		width: 100%;
		display: flex;
		justify-content: space-between;
		background-color: var(--gray-800);

		.actions {
			display: flex;
			gap: 20px;
			font-size: 20px;
			color: var(--gray-100);
		}
	}
	nav {
		display: flex;
		flex-direction: column;
		width: 100%;
		align-items: center;
		gap: 20px;
		overflow-y: auto;
	}
}
main {
	display: flex;
	padding: 20px;
	justify-content: center;
	height: 100vh;
	overflow: auto;

	.curriculum {
		aspect-ratio: 1.414;
		/* Size A4 */
		width: 210mm;
		height: 297mm;
		background-color: white;
		box-shadow: 0 0 10px 0 black;
	}
}
</style>
