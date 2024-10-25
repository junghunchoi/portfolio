import axios from '@/plugins/axios.js'
const BASE_URL = import.meta.env.VITE_APP_BOARD_API_URL;

export function getMainRecords() {
    return axios.get(`${BASE_URL}/main/records`);
}