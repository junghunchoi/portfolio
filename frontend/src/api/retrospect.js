import axios from '@/plugins/axios.js'
const BASE_URL = import.meta.env.VITE_APP_BOARD_API_URL;
export function getRetrospects(params) {
  return axios.get(`${BASE_URL}/retrospects`,{params:params});
}

export function getRetrospectById(nno) {
  return axios.get(`/retrospects/${nno}`);
}

export function createRetrospect(data) {
  return axios.post('/retrospects', data);
}

export function updateRetrospect(data) {
  return axios.patch('/retrospects', data);
}

export function deleteRetrospect(nno) {
  return axios.delete(`/retrospects/${nno}`);
}
