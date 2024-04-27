import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {createApp} from 'vue';
import App from './App.vue';
import router from '@/router';
import 'bootstrap/dist/js/bootstrap.js';
import dayjs from "@/plugins/dayjs.js";
import {createPinia} from "pinia";
import {createPersistedState} from 'pinia-plugin-persistedstate'
import BootstrapVue3 from 'bootstrap-vue-3';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import CKEditor from '@ckeditor/ckeditor5-vue';

const pinia = createPinia()
pinia.use(createPersistedState({
  storage: localStorage,
  auto: true,
}))

const app = createApp(App)
.use(router)
.use(pinia)
.use(dayjs)
.use(BootstrapVue3)
.use(CKEditor)


app.mount('#app');