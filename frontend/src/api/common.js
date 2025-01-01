import axios from '@/plugins/axios.js'
const BASE_URL = import.meta.env.VITE_APP_BOARD_API_URL;

export function getMainData() {
  return axios.get('/common/main');
}

export function getCategoryList() {
  return axios.get(`${BASE_URL}/common/category`);
}