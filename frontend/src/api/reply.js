import axios from 'axios';

export function getReplies(bno) {
  return axios.get(`http://localhost:1541/api/replies/${bno}`);
}

export function registerReply(data) {
  return axios.post('http://localhost:1541/api/replies', data);
}

export function deleteReply(rno) {
  return axios.delete(`http://localhost:1541/api/replies/${rno}`);
}
