import {createRouter, createWebHistory} from 'vue-router';
import NotFoundView from '@/views/NotFoundView.vue';
import BoardList from '@/views/free/BoardList.vue';
import BoardRead from "@/views/free/BoardRead.vue";
import BoardRegister from '@/views/free/BoardRegister.vue';
import BoardModify from '@/views/free/BoardModify.vue';
import MemberRegister from '@/views/member/MemberRegister.vue';
import GalleryList from '@/views/gallery/GalleryBoardList.vue'
import GalleryRegister from '@/views/gallery/GalleryBoardRegister.vue'
import GalleryRead from '@/views/gallery/GalleryBoardRead.vue'
import GalleryModify from '@/views/gallery/GalleryBoardModify.vue'
import Login from '@/views/member/Login.vue';
import TheMain from '@/views/TheMain.vue'
import {useAuthStore} from '@/store/loginStore.js'

const routes = [
  /*
  [공통 라우터]
   */
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundView,
  },

  /*
    [freeBoard router ]
  */
  {
    path: '/',
    name: 'TheMain',
    component: TheMain,
  },
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
  /*
  [noticeBoard router ]
*/

  /*
  [galleryBoard router ]
*/
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
  /*
  [helpBoard router ]
*/

  /*
  [member 및 로그인 라우터]
   */
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

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//     if (!useAuthStore.isLoggedIn) {
//       next({
//         path: '/login'
//       })
//     } else {
//       next()
//     }
// })

export default router;
