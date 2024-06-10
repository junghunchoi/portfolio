import axios from '@/plugins/axios.js'

export  function  createChatRoom() {
  return  axios.post('/chats/room')
}
export function getchatList() {
  return axios.get('/chats');
}

export function loadChat(Session_ID){
  return axios.get(`/chats/${Session_ID}`)
}