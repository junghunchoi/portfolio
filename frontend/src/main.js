import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {createApp} from 'vue';
import App from './App.vue';
import router from '@/router';
import 'bootstrap/dist/js/bootstrap.js';
import dayjs from "@/plugins/dayjs";
import {createPinia} from "pinia";

const pinia = createPinia();

createApp(App).use(router)
.use(pinia)
.use(dayjs)
.mount('#app');
