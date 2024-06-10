import SockJS from 'sockjs-client'
import Stomp from 'webstomp-client'
import { ref } from 'vue'
import {createChatRoom, loadChat} from '@/api/chat.js'

const chatModule = () => {
  const stompClient = ref(null)
  const messages = ref([])
  const newMessage = ref('')
  const sessionId = ref(null)

  const accessToken = localStorage.getItem('accessToken')
  const refreshToken = localStorage.getItem('refreshToken')

  const createRoomID = async () => {
    try {
      const response = await createChatRoom();
      const chatRoomId =  response.data.resultData;

      return chatRoomId;

    } catch (error) {
      console.error('Failed to create chat room:', error)
    }
  }


  const initWebSocket = (chatRoomId) => {
    const socket = new SockJS('http://localhost:1541/api/ws')
    const headers = {
      'Authorization': `Bearer ${accessToken}`,
      'X-Session-Id': "sessionId"
    }
    stompClient.value = Stomp.over(socket)
    stompClient.value.connect(headers, () => {
      stompClient.value.subscribe(`/sub/chat/${chatRoomId}`, (message) => {
        const receivedMessage = JSON.parse(message.body)
        messages.value.push(receivedMessage)
      })
    })
  }

  const sendMessage = (chatRoomId) => {
    if (newMessage.value.trim()) {
      const message = { sender: 'User', content: newMessage.value }
      stompClient.value.send(`/pub/chat/${chatRoomId}`, JSON.stringify(message), {})
      newMessage.value = ''
    }
  }

  const loadChat = async (sessionId) => {
    try {
      const loadedChat = await loadChat(sessionId)
      // 로드된 채팅 데이터 처리
      console.log(loadedChat)
    } catch (error) {
      console.error('Failed to load chat:', error)
    }
  }

  return {
    stompClient,
    messages,
    newMessage,
    sessionId,
    createRoomID,
    initWebSocket,
    sendMessage
  }
}



export default chatModule