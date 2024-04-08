import axios from 'axios';

export function getHelps(params) {
  return axios.get('http://localhost:1541/api/helps',{params:params},{headers:{
      Authorization:`${localStorage.getItem('accessToken')}`
    }});
}

export function getHelpByhno(hno) {
  return axios.get(`http://localhost:1541/api/helps/${hno}`);
}

export function createHelp(data) {
  return axios.post('http://localhost:1541/api/helps', data);
}

export function updateHelp(data) {
  return axios.put('http://localhost:1541/api/helps', data);
}

export function deleteHelp(hno) {
  return axios.delete(`http://localhost:1541/api/helps/${hno}`);
}
