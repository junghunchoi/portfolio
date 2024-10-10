import AdminList from '@/views/admin/AdminList.vue';
import AdminModify from '@/views/admin/AdminModify.vue';
import AdminRead from '@/views/admin/AdminRead.vue';
import AdminRegister from '@/views/admin/AdminRegister.vue';

export default [
    {
        path: '/admin/list',
        name: 'AdminList',
        component: AdminList,
    },
    {
        path: '/admin/register',
        name: 'AdminRegister',
        component: AdminRegister,
    },
    {
        path: '/admin/:bno',
        name: 'AdminRead',
        component: AdminRead,
        props: route => ({id: parseInt(route.params.id)}),
    },
    {
        path: '/admin/modify/:bno',
        name: 'AdminModify',
        component: AdminModify,
    },
];