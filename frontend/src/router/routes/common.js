import ErrorView from '@/views/common/ErrorView.vue';
import NotFoundView from '@/views/common/NotFoundView.vue';
import TheMain from '@/views/common/TheMain.vue';
import PatchNote from "@/views/common/PatchNote.vue";

export default [
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFoundView,
    },
    {
        path: '/error/:errorMsg',
        name: 'ErrorView',
        component: ErrorView,
    },
    {
        path: '/',
        name: 'TheMain',
        component: TheMain,
    },
    {
        path: '/patch-note',
        name: 'PatchNote',
        component: PatchNote,
    },
];