<template>
	<aside>
		<header>
			<section>
				<HomeIcon
					class="icon icon--logo"
					@click="$router.push({ name: 'home' })" />
			</section>
			<section>
				<span class="group-icons disabled">
					<ZoomOutIcon class="icon" />
					<ZoomInIcon class="icon" />
				</span>
			</section>
			<section>
				<span class="group-icons disabled">
					<PdfIcon class="icon" />
				</span>
			</section>
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
			<h1>Currículum vitae de: 
				{{
					routes.find((route) => route.nameRoute === $route.name)
						?.text ?? 'Error getting route'
				}}
			</h1>
			<RouterView />
		</div>
	</main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import {
	HomeIcon,
	PdfIcon,
	ZoomInIcon,
	ZoomOutIcon,
} from '@/assets/icons/header/header.icons.ts';

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
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		background-color: var(--gray-800);
		section {
			display: flex;
			justify-content: center;
		}
		.group-icons {
			border-radius: 30px;
			background-color: var(--gray-900);
			border: 1px solid var(--gray-600);
			padding: 10px 15px;
			display: flex;
			align-items: center;
			gap: 10px;
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
}
</style>
