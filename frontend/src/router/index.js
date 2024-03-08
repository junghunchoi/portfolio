import { createRouter, createWebHistory } from 'vue-router';
import NotFoundView from '@/views/NotFoundView.vue';
import BoardList from '@/views/board/BoardList.vue';
import BoardRead from "@/views/board/BoardRead.vue";
import BoardRegister from '@/views/board/BoardRegister.vue';
import BoardModify from '@/views/board/BoardModify.vue';
const routes = [
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: NotFoundView,
	},

	// board router 시작
	{
		path: '/',
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
