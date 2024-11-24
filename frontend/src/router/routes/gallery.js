import GalleryList from '@/views/gallery/GalleryBoardList.vue';
import GalleryRegister from '@/views/gallery/GalleryBoardRegister.vue';
import GalleryRead from '@/views/gallery/GalleryBoardRead.vue';
import GalleryModify from '@/views/gallery/GalleryBoardModify.vue';

export default [
    {
        path: '/galleries',
        name: 'GalleryList',
        component: GalleryList,
    },
    {
        path: '/galleries/register',
        name: 'GalleryRegister',
        component: GalleryRegister,
    },
    {
        path: '/galleries/:bno',
        name: 'GalleryRead',
        component: GalleryRead,
        props: route => ({bno: parseInt(route.params.bno)}),
    },
    {
        path: '/galleries/modify/:bno',
        name: 'GalleryModify',
        component: GalleryModify,
    },
];