<template>
<div>name : {{name}}</div>
<div>count : {{count}}</div>
  <button @click="eventHandler">클릭</button>
  <button @click="resetHandler">초기화</button>
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

const resetHandler = () =>{
  store.$patch({
    count: count.value + 1,
    age: 120,
    name: 'DIO',
  })
}

</script>

<style scoped>

</style>