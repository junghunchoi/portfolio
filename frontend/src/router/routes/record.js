import RecordList from '@/views/record/RecordList.vue';
import RecordRead from "@/views/record/RecordRead.vue";
import RecordRegister from '@/views/record/RecordRegister.vue';
import RecordModify from '@/views/record/RecordModify.vue';

export default [
    {
        path: '/records',
        name: 'RecordList',
        component: RecordList,
    },
    {
        path: '/records/register',
        name: 'RecordRegister',
        component: RecordRegister,
    },
    {
        path: '/records/:bno',
        name: 'RecordRead',
        component: RecordRead,
        props: route => ({bno: parseInt(route.params.bno)}),
    },
    {
        path: '/records/modify/:bno',
        name: 'RecordModify',
        component: RecordModify,
    },
];
