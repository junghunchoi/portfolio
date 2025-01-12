import axios from '@/plugins/axios.js'
import { config } from '@/config/config.js';
const BASE_URL =  config.BOARD_API_URL// import.meta.env.VITE_APP_BOARD_API_URL;

export function getMainRecords() {
    return axios.get(`${BASE_URL}/main/records`);
}