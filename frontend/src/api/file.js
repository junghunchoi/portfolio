import axios from 'axios';


export function uploadFile(data) {
  return axios.post('http://localhost:1541/api/files/upload', data);
}

export function downloadFile(data){
  return axios.post('http://localhost:1541/api/files/download', data,{
    responseType: "blob"
  });
}
