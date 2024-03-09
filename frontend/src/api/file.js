import axios from 'axios';


export function uploadFile(data) {
  return axios.post('http://localhost:1541/api/files/upload', data);
}
