import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import NestedView from '@/views/nested/NestedView.vue';
import NestedOneView from '@/views/nested/NestedOneView.vue';
import NestedTwoView from '@/views/nested/NestedTwoView.vue';
import NestedHomeView from '@/views/nested/NestedHomeView.vue';
import BoardList from '@/views/board/BoardList.vue';
import BoardRead from "@/views/board/BoardRead.vue";
import BoardRegister from '@/views/board/BoardRegister.vue';
import BoardModify from '@/views/board/BoardModify.vue';
const routes = [
	{
		path: '/',
		name: 'Home',
		component: HomeView,
	},
	{
		path: '/about',
		name: 'About',
		component: AboutView,
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: NotFoundView,
	},
	{
		path: '/nested',
		name: 'Nested',
		component: NestedView,
		children: [
			{
				path: '',
				name: 'NestedHome',
				component: NestedHomeView,
			},
			{
				path: 'one',
				name: 'NestedOne',
				component: NestedOneView,
			},
			{
				path: 'two',
				name: 'NestedTwo',
				component: NestedTwoView,
			},
		],
	},

	// board router 시작
	{
		path: '/boards',
		name: 'BoardList',
		component: BoardList,
	},
	{
		path: '/boards/register',
		name: 'BoardRegister',
		component: BoardRegister,
	},
	{
		path: '/boards/:bno',
		name: 'BoardRead',
		component: BoardRead,
		props: route => ({ bno: parseInt(route.params.bno) }),
	},
	{
	    path: '/boards/modify/:bno',
	    name: 'BoardModify',
	    component: BoardModify,
	},
];
const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
