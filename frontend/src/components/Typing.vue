<script setup>
import {ref, onMounted, watch} from 'vue';

// props 정의
const props = defineProps({
  text: {
    type: String,
    required: true
  },
  typingSpeed: {
    type: Number,
    default: 80
  }
});

const blinkText = ref('');
const showCursor = ref(true);

const typing = () => {
  let counter = 0;
  const typingInterval = setInterval(() => {
    if (props.text.length === counter) {
      showCursor.value = true;
      clearInterval(typingInterval);
      return;
    }
    blinkText.value += props.text[counter];
    counter++;
  }, props.typingSpeed);
};

// text prop이 변경될 때마다 typing 효과 재시작
watch(() => props.text, () => {
  blinkText.value = '';
  typing();
});

onMounted(() => {
  typing();
});
</script>

<template>
  <section class="wrapper">
    <article class="banner">
      <div>
        <div class="container">
          <h2 class="blinking__txt">{{ blinkText }}
            <span class="cursor" :class="{ 'blink_animate': showCursor }">|</span>
          </h2>

        </div>
      </div>
    </article>
  </section>
</template>

<style scoped>
/* 이전 스타일 유지 */
.blink_animate {
  animation: blink 0.7s infinite;
}

.blinking__txt {
  white-space: pre-line;
}

@keyframes blink {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>