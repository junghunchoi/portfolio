import axios from '@/plugins/axios.js'

export function getReplies(bno) {
  return axios.get(`/replies/${bno}`);
}

export function registerReply(data) {
  return axios.post('/replies', data);
}

export function deleteReply(rno) {
  return axios.delete(`/replies/${rno}`);
}
