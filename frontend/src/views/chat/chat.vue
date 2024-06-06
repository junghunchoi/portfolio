<template>
  <div id="main-content" class="container">
    <div class="row">
      <div class="col-md-6">
        <form class="form-inline">
          <div class="form-group">
            <label for="connect">WebSocket connection:</label>
            <button id="connect" class="btn btn-default" type="submit" @click.prevent="connect">Connect</button>
            <button id="disconnect" class="btn btn-default" type="submit" :disabled="!isConnected" @click.prevent="disconnect">Disconnect</button>
          </div>
        </form>
      </div>
      <div class="col-md-6">
        <form class="form-inline">
          <div class="form-group">
            <label for="name">What is your name?</label>
            <input type="text" id="name" class="form-control" placeholder="Your name here..." v-model="name">
          </div>
          <button id="send" class="btn btn-default" type="submit" @click.prevent="sendMessage">Send</button>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <table id="conversation" class="table table-striped">
          <thead>
          <tr>
            <th>Greetings</th>
          </tr>
          </thead>
          <tbody id="greetings">
          <tr v-for="greeting in greetings" :key="greeting.id">
            <td>{{ greeting.message }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import SockJS from 'sockjs-client';
import Stomp from '@stomp/stompjs';

const isConnected = ref(false);
const name = ref('');
const greetings = ref([]);
let stompClient = null;

const connect = () => {
  const socket = new SockJS('/gs-guide-websocket');
  stompClient = Stomp.over(socket);
  stompClient.connect({}, onConnected, onError);
};

const disconnect = () => {
  if (stompClient) {
    stompClient.disconnect();
  }
  isConnected.value = false;
  greetings.value = [];
};

const onConnected = () => {
  isConnected.value = true;
  stompClient.subscribe('/topic/greetings', onMessageReceived);
};

const onError = (error) => {
  console.log('Error:', error);
};

const onMessageReceived = (payload) => {
  const message = JSON.parse(payload.body);
  greetings.value.push(message);
};

const sendMessage = () => {
  if (stompClient && stompClient.connected && name.value) {
    const message = { name: name.value };
    stompClient.send('/app/hello', JSON.stringify(message), {});
  }
};

onMounted(() => {
  // WebSocket 연결 설정 등 초기화 작업
});

onUnmounted(() => {
  // WebSocket 연결 해제 등 정리 작업
});
</script>

<style scoped>

</style>