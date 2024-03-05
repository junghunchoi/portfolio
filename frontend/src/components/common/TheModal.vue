<template>
  <div class="modal-overlay" v-if="isVisible" @click="close">
    <div class="modal-content" @click.stop>
      <slot></slot>
      <button @click="closeModal(true)">예</button>
      <button @click="closeModal(false)">아니오</button>
    </div>
  </div>
</template>

<script setup>
import {ref, defineEmits} from 'vue';

const isVisible = ref(false);
const emits = defineEmits(['update:modelValue', 'confirm']);

function openModal() {
  isVisible.value = true;
}

function closeModal(confirmed) {
  isVisible.value = false;
  if (confirmed) {
    emits('confirm');
  } else {
    emits('update:modelValue', false);
  }
}

defineExpose({openModal, closeModal});
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 5px;
}
</style>