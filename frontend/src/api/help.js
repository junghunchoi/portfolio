import axios from '@/plugins/axios.js'

export function getHelps(params) {
  return axios.get('/helps',{params:params});
}

export function getHelpByhno(hno) {
  return axios.get(`/helps/${hno}`);
}

export function createHelp(data) {
  return axios.post('/helps', data);
}

export function updateHelp(data) {
  return axios.patch('/helps', data);
}

export function deleteHelp(hno) {
  return axios.delete(`/helps/${hno}`);
}
