import {createRouter, createWebHistory} from 'vue-router';
import ErrorView from '@/views/common/ErrorView.vue';
import NotFoundView from '@/views/common/NotFoundView.vue';
import BoardList from '@/views/free/BoardList.vue';
import BoardRead from "@/views/free/BoardRead.vue";
import BoardRegister from '@/views/free/BoardRegister.vue';
import BoardModify from '@/views/free/BoardModify.vue';
import MemberRegister from '@/views/member/MemberRegister.vue';
import GalleryList from '@/views/gallery/GalleryBoardList.vue'
import GalleryRegister from '@/views/gallery/GalleryBoardRegister.vue'
import GalleryRead from '@/views/gallery/GalleryBoardRead.vue'
import GalleryModify from '@/views/gallery/GalleryBoardModify.vue'
import HelpList from '@/views/help/HelpList.vue'
import HelpRead from '@/views/help/HelpRead.vue'
import HelpRegister from '@/views/help/HelpRegister.vue'
import HelpModify from '@/views/help/HelpModify.vue'
import NoticeList from '@/views/notice/NoticeList.vue'
import NoticeRegister from '@/views/notice/NoticeRegister.vue'
import NoticeModify from '@/views/notice/NoticeModify.vue'
import NoticeRead from '@/views/notice/NoticeRead.vue'
import Chat from '@/views/chat/Chat.vue'
import Login from '@/views/member/Login.vue';
import TheMain from '@/views/common/TheMain.vue'

const routes = [
  /*
  [공통 라우터]
   */
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundView,
  },
  { path: '/error/:errorMsg',
    name: 'ErrorView',
    component: ErrorView,
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
  {
    path: '/notices',
    name: 'NoticeList',
    component: NoticeList,
  },
  {
    path: '/notices/register',
    name: 'NoticeRegister',
    component: NoticeRegister,
  },
  {
    path: '/notices/:nno',
    name: 'NoticeRead',
    component: NoticeRead,
    props: route => ({nno: parseInt(route.params.nno)}),
  },
  {
    path: '/notices/modify/:nno',
    name: 'NoticeModify',
    component: NoticeModify,
  },
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
  [help router ]
*/
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
    /*
    [Chat 라우터]
    */
  {
    path: '/chat',
    name: 'Chat',
    component: Chat,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
