<template>
  <div class="chat-popup">
    <div class="chat-header">
      <h3>Chat Room</h3>
      <button class="close-btn" @click="$emit('close')">&#10005;</button>
    </div>
    <div class="chat-body">
      <!-- 채팅 메시지 렌더링 -->
    </div>
    <div class="chat-input">
      <input type="text" placeholder="Type your message..." v-model="newMessage" @keyup.enter="sendMessage" />
      <button class="send-btn" @click="sendMessage">Send</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import SockJS from 'sockjs-client'
import Stomp from 'webstomp-client'

const stompClient = ref(null)
const messages = ref([])
const newMessage = ref('')
const sessionId = ref(null)

const accessToken = localStorage.getItem('accessToken')
const refreshToken = localStorage.getItem('refreshToken')



const initWebSocket = () => {
  const socket = new SockJS('http://localhost:1541/api/ws')
  const headers = {
    'Authorization': `Bearer ${accessToken}`,
    'X-Session-Id': "sessionId"
  }
  stompClient.value = Stomp.over(socket)
  stompClient.value.connect(headers, () => {
    stompClient.value.subscribe('/sub/messages', (message) => {
      const receivedMessage = JSON.parse(message.body)
      messages.value.push(receivedMessage)
    })
  })
}

const sendMessage = () => {
  if (newMessage.value.trim()) {
    const message = { sender: 'User', content: newMessage.value }
    stompClient.value.send('/pub/sendMessage', JSON.stringify(message), {})
    newMessage.value = ''
  }
}

onMounted(() => {
  initWebSocket()
})

onUnmounted(() => {
  if (stompClient.value) {
    stompClient.value.disconnect()
  }
})


</script>

<style scoped>

</style>