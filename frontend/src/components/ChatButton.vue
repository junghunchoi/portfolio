<template>
  <div class="chat-popup">
    <button class="open-chat-btn"  @click="showChatPopup = true">Open Chat</button>
    <ChatPopup v-if="showChatPopup" @close="showChatPopup = false" />
  </div>
</template>

<script setup>
import {ref} from 'vue';
import ChatPopup from '../views/chat/ChatPopup.vue'

const showChatPopup = ref(true)
</script>

<style scoped>
/*.chat-popup {*/
/*  display: none;*/
/*  position: fixed;*/
/*  bottom: 120px;*/
/*  right: 20px;*/
/*  width: 300px;*/
/*  background-color: #f1f1f1;*/
/*  border: 1px solid #ccc;*/
/*  border-radius: 5px;*/
/*  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);*/
/*}*/

/*.chat-popup.show {*/
/*  display: block;*/
/*}*/

/*.open-chat-btn {*/
/*  position: fixed;*/
/*  bottom: 20px;*/
/*  right: 20px;*/
/*  background-color: #007bff;*/
/*  color: #fff;*/
/*  border: none;*/
/*  padding: 10px 15px;*/
/*  border-radius: 50%;*/
/*  cursor: pointer;*/
/*  font-size: 16px;*/
/*  z-index: 9999;*/
/*}*/

/*.open-chat-btn::before {*/
/*  content: "🗨";*/
/*}*/
</style>