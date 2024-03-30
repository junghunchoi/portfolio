import axios from 'axios';

export function registerMember(member) {
  return axios.post('http://localhost:1541/api/members/register', member);
}

export function checkUserName(userName) {
  return axios.post('http://localhost:1541/api/members/check', userName, {
    headers: {
      'Content-Type': 'text/plain'
    }
  });
}

