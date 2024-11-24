import axios from '@/plugins/axios.js'

export function createBoard(data) {
  return axios.post('/admin', data);
}