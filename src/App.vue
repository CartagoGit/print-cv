<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
	<aside>
		<header>
			<span
				@click="$router.push({ name: 'home' })"
				class="btn">
				Home
			</span>
		</header>
		<nav>
			<span
				@click="$router.push({ name: 'mario' })"
				class="link btn">
				Mario
			</span>
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
		justify-content: center;
		background-color: var(--gray-800);
	}
	nav {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
}
main {
	display: flex;
	padding: 20px;
	justify-content: center;
	overflow: scroll;

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
