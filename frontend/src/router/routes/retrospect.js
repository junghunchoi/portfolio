import RetrospectList from '@/views/Retrospect/RetrospectList.vue';
import RetrospectRegister from '@/views/Retrospect/RetrospectRegister.vue';
import RetrospectModify from '@/views/Retrospect/RetrospectModify.vue';
import RetrospectRead from '@/views/Retrospect/RetrospectRead.vue';

export default [
    {
        path: '/retrospects',
        name: 'RetrospectList',
        component: RetrospectList,
    },
    {
        path: '/retrospects/register',
        name: 'RetrospectRegister',
        component: RetrospectRegister,
    },
    {
        path: '/retrospects/:id',
        name: 'RetrospectRead',
        component: RetrospectRead,
        props: route => ({id: parseInt(route.params.id)}),
    },
    {
        path: '/retrospects/modify/:nno',
        name: 'RetrospectModify',
        component: RetrospectModify,
    },
];