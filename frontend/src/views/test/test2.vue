<template>
  <hr/>
  <div>test2</div>
  <div>name : {{name}}</div>
  <div>count : {{count}}</div>
  <button @click="eventHandler">클릭</button>
</template>

<script setup>
import {ref} from 'vue';
import {piniaStore} from "@/store/piniaStore.js";
import { storeToRefs } from 'pinia'

const store = piniaStore();
const {name,count, doubleCount,increment } = storeToRefs(store);


setTimeout(() => {
  store.increment()
}, 1000)

const eventHandler = () =>{
  store.increment();
}

</script>

<style scoped>

</style>