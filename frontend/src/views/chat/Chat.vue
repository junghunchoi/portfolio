<template>
  <section>
    <div class="wrap">
      <div class="chat ch1">
        <div class="icon"><i class="fa-solid fa-user"></i></div>
        <div class="textbox">안녕하세요. 반갑습니다.</div>
      </div>
      <div class="chat ch2">
        <div class="icon"><i class="fa-solid fa-user"></i></div>
        <div class="textbox">안녕하세요. 친절한효자손입니다. 그동안 잘 지내셨어요?</div>
      </div>
      <div class="chat ch1">
        <div class="icon"><i class="fa-solid fa-user"></i></div>
        <div class="textbox">아유~ 너무요너무요! 요즘 어떻게 지내세요?</div>
      </div>
      <div class="chat ch2">
        <div class="icon"><i class="fa-solid fa-user"></i></div>
        <div class="textbox">뭐~ 늘 똑같은 하루 하루를 보내는 중이에요. 코로나가 다시 극성이어서 모이지도 못하구 있군요 ㅠㅠ 얼른 좀 잠잠해졌으면 좋겠습니다요!</div>
      </div>
    </div>
  </section>
  <div>
    <ul>
      <li v-for="message in messages" :key="message.id">
        {{ message.sender }}: {{ message.content }}
      </li>
    </ul>
    <input v-model="newMessage" @keyup.enter="sendMessage" placeholder="메시지 입력" />
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
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

.wrap {
  padding: 40px 0;
  background-color: #A8C0D6;
}

.wrap .chat {
  display: flex;
  align-items: flex-start;
  padding: 20px;
}

.wrap .chat .icon {
  position: relative;
  overflow: hidden;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #eee;
}

.wrap .chat .icon i {
  position: absolute;
  top: 10px;
  left: 50%;
  font-size: 2.5rem;
  color: #aaa;
  transform: translateX(-50%);
}

.wrap .chat .textbox {
  position: relative;
  display: inline-block;
  max-width: calc(100% - 70px);
  padding: 10px;
  margin-top: 7px;
  font-size: 13px;
  border-radius: 10px;
}

.wrap .chat .textbox::before {
  position: absolute;
  display: block;
  top: 0;
  font-size: 1.5rem;
}

.wrap .ch1 .textbox {
  margin-left: 20px;
  background-color: #ddd;
}

.wrap .ch1 .textbox::before {
  left: -15px;
  content: "◀";
  color: #ddd;
}

.wrap .ch2 {
  flex-direction: row-reverse;
}

.wrap .ch2 .textbox {
  margin-right: 20px;
  background-color: #F9EB54;
}

.wrap .ch2 .textbox::before {
  right: -15px;
  content: "▶";
  color: #F9EB54;
}
</style>