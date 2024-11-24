import {createRouter, createWebHistory} from 'vue-router';
import commonRoutes from './routes/common';
import boardRoutes from './routes/board';
import galleryRoutes from './routes/gallery';
import helpRoutes from './routes/help';
import retrospectRoutes from './routes/retrospect';
import memberRoutes from './routes/member';
import chatRoutes from './routes/chat';
import adminRoutes from './routes/admin';
import recordRoutes from './routes/record';

const routes = [
    ...commonRoutes,
    ...boardRoutes,
    ...galleryRoutes,
    ...helpRoutes,
    ...retrospectRoutes,
    ...memberRoutes,
    ...chatRoutes,
    ...adminRoutes,
    ...recordRoutes
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;