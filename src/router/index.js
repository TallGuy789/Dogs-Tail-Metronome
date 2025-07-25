import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'main',
			component: MainView
		},
		{
			path: '/preferences',
			name: 'preferences',
			component: () => import('../views/PreferencesView.vue')
		},
		{
			path: '/about',
			name: 'about',
			component: () => import('../views/AboutView.vue')
		}
	]
})

export default router
