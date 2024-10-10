import BoardList from '@/views/free/BoardList.vue';
import BoardRead from "@/views/free/BoardRead.vue";
import BoardRegister from '@/views/free/BoardRegister.vue';
import BoardModify from '@/views/free/BoardModify.vue';

export default [
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
        props: route => ({bno: parseInt(route.params.bno)}),
    },
    {
        path: '/boards/modify/:bno',
        name: 'BoardModify',
        component: BoardModify,
    },
];
