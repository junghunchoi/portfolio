import axios from '@/plugins/axios.js'

export function registerMember(member) {
  return axios.post('/members/register', member);
}

export function checkUserName(userName) {
  return axios.post('/members/check', {'userName': userName}, {
    headers: {
      'Content-Type':'application/json'
    }
  });
}

