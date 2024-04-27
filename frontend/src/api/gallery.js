import axios from '@/plugins/axios.js'

export function getGalleries(params) {
  return axios.get('/galleries',{params:params});
}

export function getGalleryBybno(bno) {
  return axios.get(`/galleries/${bno}`);
}

export function createGallery(data) {
  return axios.post('/galleries', data);
}

export function updateGallery(data) {
  return axios.patch('/galleries', data);
}

export function deleteGallery(bno) {
  return axios.delete(`/galleries/${bno}`);
}
