<script setup>
import { ref, computed, onMounted } from 'vue';

const posts = ref([
  {
    id: 1,
    title: '첫 번째 프로젝트: 포트폴리오 웹사이트 만들기',
    excerpt: '부트스트랩과 Vue.js를 활용하여 반응형 포트폴리오 사이트를 제작한 과정을 소개합니다.',
    image: '/api/placeholder/400/220',
    date: '2023-08-15',
    link: '/posts/1'
  },
  {
    id: 2,
    title: 'JavaScript ES6+ 주요 기능 정리',
    excerpt: 'ES6 이후 추가된 JavaScript의 주요 기능들을 정리하고 실무에서의 활용 방법을 설명합니다.',
    image: '/api/placeholder/400/220',
    date: '2023-09-01',
    link: '/posts/2'
  },
  {
    id: 3,
    title: 'Vue 3 Composition API 실전 가이드',
    excerpt: 'Vue 3의 Composition API를 활용한 효율적인 상태 관리와 로직 재사용 방법을 소개합니다.',
    image: '/api/placeholder/400/220',
    date: '2023-09-20',
    link: '/posts/3'
  },
  {
    id: 4,
    title: '첫 번째 프로젝트: 포트폴리오 웹사이트 만들기',
    excerpt: '부트스트랩과 Vue.js를 활용하여 반응형 포트폴리오 사이트를 제작한 과정을 소개합니다.',
    image: '/api/placeholder/400/220',
    date: '2023-08-15',
    link: '/posts/1'
  },
  {
    id: 5,
    title: 'JavaScript ES6+ 주요 기능 정리',
    excerpt: 'ES6 이후 추가된 JavaScript의 주요 기능들을 정리하고 실무에서의 활용 방법을 설명합니다.',
    image: '/api/placeholder/400/220',
    date: '2023-09-01',
    link: '/posts/2'
  },
  {
    id: 6,
    title: 'Vue 3 Composition API 실전 가이드',
    excerpt: 'Vue 3의 Composition API를 활용한 효율적인 상태 관리와 로직 재사용 방법을 소개합니다.',
    image: '/api/placeholder/400/220',
    date: '2023-09-20',
    link: '/posts/3'
  },
  {
    id: 7,
    title: '첫 번째 프로젝트: 포트폴리오 웹사이트 만들기',
    excerpt: '부트스트랩과 Vue.js를 활용하여 반응형 포트폴리오 사이트를 제작한 과정을 소개합니다.',
    image: '/api/placeholder/400/220',
    date: '2023-08-15',
    link: '/posts/1'
  },
  {
    id: 8,
    title: 'JavaScript ES6+ 주요 기능 정리',
    excerpt: 'ES6 이후 추가된 JavaScript의 주요 기능들을 정리하고 실무에서의 활용 방법을 설명합니다.',
    image: '/api/placeholder/400/220',
    date: '2023-09-01',
    link: '/posts/2'
  },
  {
    id: 9,
    title: 'Vue 3 Composition API 실전 가이드',
    excerpt: 'Vue 3의 Composition API를 활용한 효율적인 상태 관리와 로직 재사용 방법을 소개합니다.',
    image: '/api/placeholder/400/220',
    date: '2023-09-20',
    link: '/posts/3'
  },
  // 추가 포스트...
]);

const scrollContainer = ref(null);
const scrollPosition = ref(0);
const maxScroll = ref(0);

const displayedPosts = computed(() => {
  return posts.value.slice(0, 7); // 최대 7개의 포스트만 표시
});

const scrollLeft = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: -300, behavior: 'smooth' });
  }
};

const scrollRight = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: 300, behavior: 'smooth' });
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
  <div class="post-list-container my-5">
    <h1 class="text-center mb-4">내 글 목록</h1>
    <div class="post-list-wrapper">
      <button @click="scrollLeft" class="scroll-button left" :disabled="scrollPosition <= 0">&lt;</button>
      <div class="post-list-scroll" ref="scrollContainer">
        <div v-for="post in displayedPosts" :key="post.id" class="post-card">
          <div class="card h-100 shadow-sm">
            <img :src="post.image" class="card-img-top" :alt="post.title">
            <div class="card-body">
              <h5 class="card-title">{{ post.title }}</h5>
              <p class="card-text">{{ post.excerpt }}</p>
              <div class="d-flex justify-content-between align-items-center">
                <small class="text-muted">{{ post.date }}</small>
                <a :href="post.link" class="btn btn-sm btn-outline-primary">자세히 보기</a>
              </div>
            </div>
          </div>
        </div>
        <div v-if="posts.length > 7" class="post-card more-card">
          <div class="card h-100 shadow-sm d-flex justify-content-center align-items-center">
            <a href="/all-posts" class="btn btn-lg btn-primary">더보기</a>
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

.card-img-top {
  height: 200px;
  object-fit: cover;
}

.scroll-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  font-size: 18px;
  cursor: pointer;
  z-index: 10;
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