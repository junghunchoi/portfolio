import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {createApp} from 'vue';
import App from './App.vue';
import router from '@/router';
import 'bootstrap/dist/js/bootstrap.js';
import dayjs from "@/plugins/dayjs";
import {createPinia} from "pinia";
import {createPersistedState} from 'pinia-plugin-persistedstate'
import axios from '@/plugins/axios'


const pinia = createPinia()
pinia.use(createPersistedState({
  storage: localStorage,
  auto: true,
}))

const app = createApp(App)
.use(router)
.use(pinia)
.use(dayjs)

app.provide('$axios', axios);
app.mount('#app');