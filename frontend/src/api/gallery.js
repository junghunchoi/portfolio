import axios from 'axios';

export function getGalleries(params) {
  return axios.get('http://localhost:1541/api/galleries',{params:params},{headers:{
      Authorization:`${localStorage.getItem('accessToken')}`
    }});
}

export function getGalleryBybno(bno) {
  return axios.get(`http://localhost:1541/api/galleries/${bno}`);
}

export function createGallery(data) {
  return axios.post('http://localhost:1541/api/galleries', data);
}

export function updateGallery(data) {
  return axios.put('http://localhost:1541/api/galleries', data);
}

export function deleteGallery(bno) {
  return axios.delete(`http://localhost:1541/api/galleries/${bno}`);
}
