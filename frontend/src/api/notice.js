import axios from '@/plugins/axios.js'

export function getNotices(params) {
  return axios.get('/notices',{params:params});
}

export function getNoticeBynno(nno) {
  return axios.get(`/notices/${nno}`);
}

export function createNotice(data) {
  return axios.post('/notices', data);
}

export function updateNotice(data) {
  return axios.patch('/notices', data);
}

export function deleteNotice(nno) {
  return axios.delete(`/notices/${nno}`);
}
