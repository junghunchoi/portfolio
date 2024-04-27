import axios from '@/plugins/axios.js'

export function getMainData() {
  return axios.get('/common/main');
}