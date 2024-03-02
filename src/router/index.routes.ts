import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/cv',
			name: 'cv',
			children: [
				{
					path: 'mario',
					name: 'mario',
					component: () => import('../components/cvs/mario/MarioCv.vue'),
				},
			],
		},
	],
});

export default router;
