<script setup>
import {ref, computed, onMounted, defineProps} from 'vue';
import TheStrava from "@/components/TheStrava.vue";

const props = defineProps({
  stravaList: Object,
})


const posts = ref([]);


const scrollContainer = ref(null);
const scrollPosition = ref(0);
const maxScroll = ref(0);

const displayedPosts = computed(() => {
  return posts.value.slice(0, 7); // 최대 7개의 포스트만 표시
});

const scrollLeft = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({left: -300, behavior: 'smooth'});
  }
};

const scrollRight = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({left: 300, behavior: 'smooth'});
  }
};

const updateScrollPosition = () => {
  if (scrollContainer.value) {
    scrollPosition.value = scrollContainer.value.scrollLeft;
    maxScroll.value = scrollContainer.value.scrollWidth - scrollContainer.value.clientWidth;
  }
};

onMounted(() => {
  if (scrollContainer.value) {
    scrollContainer.value.addEventListener('scroll', updateScrollPosition);
    updateScrollPosition();
  }
});

</script>

<template>
  <h2>자전거 주행기록</h2>
  <div class="post-list-container my-5">
    <div class="post-list-wrapper">
      <button @click="scrollLeft" class="scroll-button left" :disabled="scrollPosition <= 0">&lt;</button>
      <div class="post-list-scroll" ref="scrollContainer">
        <TheStrava
            v-for="strava in props.stravaList"
            :key="strava.regDate"
            :strava="strava"
        />
        <div v-if="posts.length > 7" class="post-card more-card">
          <div class="card h-100 shadow-sm d-flex justify-content-center align-items-center">
            <a href="/records" class="btn btn-lg btn-primary">더보기</a>
          </div>
        </div>
      </div>
      <button @click="scrollRight" class="scroll-button right" :disabled="scrollPosition >= maxScroll">&gt;</button>
    </div>
  </div>
</template>

<style scoped>
.post-list-container {
  max-width: 100%;
  overflow-x: hidden;
}

.post-list-wrapper {
  position: relative;
}

.post-list-scroll {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding: 20px 0;
  scroll-behavior: smooth;
}

.post-list-scroll::-webkit-scrollbar {
  display: none;
}

.post-card {
  flex: 0 0 auto;
  width: 300px;
  margin-right: 20px;
  scroll-snap-align: start;
}

.more-card {
  background-color: #f8f9fa;
}

.scroll-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
  z-index: 1000;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
}

.scroll-button:hover {
  background-color: rgba(0, 0, 0, 0.9);
}

.scroll-button.left {
  left: 10px;
}

.scroll-button.right {
  right: 10px;
}

.scroll-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .post-card {
    width: 85%;
  }

  .scroll-button {
    display: none; /* 모바일에서는 버튼 숨김 */
  }
}
</style>