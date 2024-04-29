import axios from '@/plugins/axios.js'

export function registerMember(member) {
  return axios.post('/auth/members/register', member);
}

export function checkUserName(userName) {
  return axios.post('/auth/members/check', {'userName': userName}, {
    headers: {
      'Content-Type':'application/json'
    }
  });
}

