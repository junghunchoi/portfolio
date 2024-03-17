import {createRouter, createWebHistory} from 'vue-router';
import NotFoundView from '@/views/NotFoundView.vue';
import BoardList from '@/views/board/BoardList.vue';
import BoardRead from "@/views/board/BoardRead.vue";
import BoardRegister from '@/views/board/BoardRegister.vue';
import BoardModify from '@/views/board/BoardModify.vue';
import MemberRegister from '@/views/member/MemberRegister.vue';
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
    [board 라우터]
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
