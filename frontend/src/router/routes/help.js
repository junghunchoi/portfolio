import HelpList from '@/views/help/HelpList.vue';
import HelpRead from '@/views/help/HelpRead.vue';
import HelpRegister from '@/views/help/HelpRegister.vue';
import HelpModify from '@/views/help/HelpModify.vue';

export default [
    {
        path: '/helps',
        name: 'HelpList',
        component: HelpList,
    },
    {
        path: '/helps/register',
        name: 'HelpRegister',
        component: HelpRegister,
    },
    {
        path: '/helps/:hno',
        name: 'HelpRead',
        component: HelpRead,
        props: route => ({hno: parseInt(route.params.hno)}),
    },
    {
        path: '/helps/modify/:hno',
        name: 'HelpModify',
        component: HelpModify,
    },
];