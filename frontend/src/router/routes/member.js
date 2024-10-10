import MemberRegister from '@/views/member/MemberRegister.vue';
import Login from '@/views/member/Login.vue';

export default [
    {
        path: '/member/register',
        name: 'MemberRegister',
        component: MemberRegister,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
];
