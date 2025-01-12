import axios from '@/plugins/axios.js'
import { config } from '@/config/config.js';
const BASE_URL =  config.BOARD_API_URL// import.meta.env.VITE_APP_BOARD_API_URL;
export function getRetrospects(params) {
  return axios.get(`${BASE_URL}/retrospects`,{params:params});
}

export function getRetrospectById(nno) {
  return axios.get(`${BASE_URL}/retrospects/${nno}`);
}

export function createRetrospect(data) {
  return axios.post(`${BASE_URL}/retrospects`, data);
}

export function updateRetrospect(data) {
  return axios.patch(`${BASE_URL}/retrospects`, data);
}

export function deleteRetrospect(nno) {
  return axios.delete(`${BASE_URL}/retrospects/${nno}`);
}
