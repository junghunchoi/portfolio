import axios from '@/plugins/axios.js'
import { config } from '@/config/config.js';
const BASE_URL =  config.BOARD_API_URL// import.meta.env.VITE_APP_BOARD_API_URL;

export function getGalleries(params) {
  return axios.get(`${BASE_URL}/galleries`,{params:params});
}

export function getGalleryBybno(bno) {
  return axios.get(`/galleries/${bno}`);
}

export function createGallery(data) {
  return axios.post(`${BASE_URL}/galleries`, data);
}

export function updateGallery(data) {
  return axios.patch('/galleries', data);
}

export function deleteGallery(bno) {
  return axios.delete(`/galleries/${bno}`);
}
