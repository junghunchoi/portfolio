import axios from '@/plugins/axios.js'


export function uploadFile(data) {
  return axios.post('/files/upload', data);
}

export function downloadFile(data){
  return axios.post('/files/download', data,{
    responseType: "blob"
  });
}
