<template>
	<aside>
		<header>
			<section class="logo">
				<HomeIcon
					class="icon icon--header icon--logo"
					@click="$router.push({ name: 'home' })" />
			</section>
			<section>
				<span class="group-icons">
					<LangIcon
						class="icon icon--header"
						@click="changeLang" />
					<span class="float">
						{{ $t('GENERAL.LANG') }}
					</span>
				</span>
			</section>
			<section>
				<span
					class="group-icons"
					:class="{ disabled: !curriculum }">
					<ZoomOutIcon
						class="icon icon--header"
						@click="zoomOut" />
					<ZoomInIcon
						class="icon icon--header"
						@click="zoomIn" />
					<span class="float">{{ scale }}%</span>
				</span>
			</section>
			<section>
				<span
					class="group-icons"
					:class="{ disabled: !curriculum }">
					<PdfIcon
						class="icon icon--header"
						@click="callGeneratePDF()" />
				</span>
			</section>
		</header>
		<nav>
			<h3>Cvs Vitae</h3>
			<span
				v-for="route in routesData"
				@click="$router.push({ name: route.nameRoute })"
				class="link btn">
				{{ route.text }}
			</span>
		</nav>
	</aside>
	<main :key="reRender">
		<RouterView
			v-if="$route.name === 'home'"
			class="home" />
		<div
			ref="curriculum"
			v-else
			:style="{
				transform: `scale(${Math.round(scale) / 100})`,
			}"
			id="curriculum">
			<h1 v-if="actualRoute">
				{{
					$t(`${actualRoute.nameRoute.toUpperCase()}.CV.TITLE`, {
						name: actualRoute.text,
					})
				}}
			</h1>
			<RouterView />
		</div>
	</main>
	<div
		class="is-loading"
		v-if="isLoading">
		Cargando
	</div>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { RouterView, useRoute } from 'vue-router';
import {
	HomeIcon,
	PdfIcon,
	ZoomInIcon,
	ZoomOutIcon,
	LangIcon,
} from '@/assets/icons/header/header.icons.ts';
import { ref } from 'vue';
import { generatePDF } from './shared/helpers/file.helper';
import { CURRICULUMS_ROUTES_DATA } from './shared/data/curriculums.data';
import { useI18n } from 'vue-i18n';
import router from './router/index.routes';
const { locale: lang, t } = useI18n();

const route = useRoute();

const curriculum = ref<HTMLElement | null>(null);
const scale = ref(100);
const isLoading = ref(false);
const reRender = ref(0);
const routesData = CURRICULUMS_ROUTES_DATA;
const actualRoute = ref(
	routesData.find((routeData) => routeData.nameRoute === route.name)!
);
router.beforeEach((_to, _from, next) => {
	scale.value = 100;
	next();
});

watch(route, () => {
	actualRoute.value = routesData.find(
		(routeData) => routeData.nameRoute === route.name
	)!;
});

const zoomIn = () => {
	if (scale.value >= 260 || !curriculum?.value) return;
	scale.value += 20;
	scale.value = Math.round(scale.value);
	reRender.value++;
};
const zoomOut = () => {
	if (scale.value <= 20 || !curriculum?.value) return;
	scale.value -= 20;
	scale.value = Math.round(scale.value);
	reRender.value++;
};
const callGeneratePDF = async () => generatePDF({
	curriculum,
	isLoading,
	scale,
	actualRoute,
});



const changeLang = () => (lang.value = lang.value === 'es' ? 'en' : 'es');
</script>

<style>
@media screen and (max-width: 768px) {
	#app {
		grid-template-columns: 1fr;
	}
	aside {
		display: none;
	}
}
@media screen and (min-width: 769px) {
	#app {
		display: grid;
		grid-template-columns: 300px 1fr;
		background-color: var(--gray-200);
		height: 100vh;
		width: 100%;
		overflow: hidden;
	}
	aside {
		display: flex;
	}
}
</style>
<style scoped>
main,
aside {
	width: 100%;
	height: 100%;
	overflow: auto;
}

aside {
	background-color: var(--gray-700);
	color: var(--gray-100);
	flex-direction: column;
	align-items: center;
	box-shadow: 0 0 10px 0 black;
	header {
		box-shadow: 0 0 2px 0 black;
		gap: 20px;
		padding: 20px;
		width: 100%;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		background-color: var(--gray-800);

		section {
			display: flex;
			justify-content: center;
			&.logo {
				grid-column: 1 / 4;
			}
		}
		.group-icons {
			position: relative;
			border-radius: 30px;
			background-color: var(--gray-900);
			border: 1px solid var(--gray-600);
			padding: 10px 15px;
			display: flex;
			align-items: center;
			gap: 10px;
			.float {
				position: absolute;
				bottom: -18px;
				left: 50%;
				transform: translateX(-50%);
				font-size: 12px;
				color: var(--gray-400);
			}
		}
	}
	nav {
		padding: 20px;
		display: flex;
		overflow-y: auto;
		flex-direction: column;
		width: 100%;
		align-items: center;
		gap: 20px;
	}
}
main {
	justify-content: center;
	color: var(--gray-700);
	h1 {
		text-align: center;
		margin-bottom: 20px;
	}

	.home,
	#curriculum {
		overflow-y: auto;
		padding: 20px;
		display: flex;
		flex-direction: column;
		width: 100%;
		align-items: center;
		transform-origin: top left;
	}
}

.is-loading {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 2em;
	color: var(--gray-100);
	transition: 300ms ease all;
}
</style>
