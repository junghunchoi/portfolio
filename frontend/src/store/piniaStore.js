import { defineStore } from 'pinia';
import axios from 'axios';
import { useStorage } from '@vueuse/core';
import {ref, computed} from 'vue';

export const piniaStore = defineStore('piniaStore',()=>{
  const count = ref(0)
  const name = ref('Eduardo')
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, name, doubleCount, increment }
})