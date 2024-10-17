<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import axios from 'axios';

const props = defineProps({
  apiEndpoint: {
    type: String,
    required: true
  }
});

const page = ref(0);
const loading = ref(false);
const hasMore = ref(true);
const posts = ref([
  {
    id: 1,
    title: "Vue.js로 시작하는 웹 개발",
    excerpt: "Vue.js는 사용자 인터페이스를 구축하기 위한 진보적인 프레임워크입니다. 다른 모놀리식 프레임워크와 달리 Vue는 점진적으로 채택할 수 있도록 설계되었습니다.",
    author: "김개발",
    date: "2023-05-15T09:00:00Z",
    likes: 120,
    tags: ["Vue", "JavaScript", "웹개발"],
    thumbnail: "https://picsum.photos/id/1/300/200"
  },
  {
    id: 2,
    title: "React vs Vue: 프론트엔드 프레임워크 비교",
    excerpt: "React와 Vue는 현대 웹 개발에서 가장 인기 있는 두 프레임워크입니다. 이 글에서는 두 프레임워크의 주요 특징과 차이점을 비교해 봅니다.",
    author: "이프론트",
    date: "2023-05-20T10:30:00Z",
    likes: 85,
    tags: ["React", "Vue", "프론트엔드"],
    thumbnail: "https://picsum.photos/id/2/300/200"
  },
  {
    id: 3,
    title: "JavaScript 비동기 프로그래밍 마스터하기",
    excerpt: "비동기 프로그래밍은 현대 JavaScript 개발의 핵심입니다. Promise, async/await를 활용한 효과적인 비동기 코드 작성법을 알아봅시다.",
    author: "박자바",
    date: "2023-05-25T14:15:00Z",
    likes: 150,
    tags: ["JavaScript", "비동기", "Promise"],
    thumbnail: "https://picsum.photos/id/3/300/200"
  },
  {
    id: 4,
    title: "CSS Grid로 반응형 레이아웃 구현하기",
    excerpt: "CSS Grid는 웹 페이지의 레이아웃을 쉽고 효과적으로 구현할 수 있게 해줍니다. 이 글에서는 Grid를 활용한 반응형 디자인 테크닉을 소개합니다.",
    author: "최디자인",
    date: "2023-05-30T11:45:00Z",
    likes: 95,
    tags: ["CSS", "Grid", "반응형웹"],
    thumbnail: "https://picsum.photos/id/4/300/200"
  },
  {
    id: 5,
    title: "TypeScript: JavaScript의 강력한 동료",
    excerpt: "TypeScript는 JavaScript에 정적 타입을 추가한 언어입니다. 큰 규모의 애플리케이션 개발에서 TypeScript가 어떤 이점을 제공하는지 알아봅시다.",
    author: "정타입",
    date: "2023-06-05T13:20:00Z",
    likes: 110,
    tags: ["TypeScript", "JavaScript", "정적타입"],
    thumbnail: "https://picsum.photos/id/5/300/200"
  }
]);

const fetchPosts = async () => {
  if (loading.value || !hasMore.value) return;

  loading.value = true;
  try {
    const response = await axios.get('/api/posts', {
      params: { page: page.value, size: 10 }
    });
    const newPosts = response.data;
    posts.value = [...posts.value, ...newPosts];
    page.value++;
    hasMore.value = newPosts.length === 10;
  } catch (error) {
    console.error('Failed to fetch posts:', error);
  } finally {
    loading.value = false;
  }
};

const handleScroll = () => {
  const scrollPosition = window.innerHeight + window.scrollY;
  const bodyHeight = document.body.offsetHeight;
  if (scrollPosition >= bodyHeight - 500) {
    fetchPosts();
  }
};

onMounted(() => {
  fetchPosts();
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="post-grid">
    <article v-for="post in posts" :key="post.id" class="post-card">
      <img v-if="post.thumbnail" :src="post.thumbnail" :alt="post.title" class="post-card-image">
      <div class="post-card-content">
        <h2 class="post-card-title">{{ post.title }}</h2>
        <p class="post-card-excerpt">{{ post.excerpt }}</p>
        <div class="post-card-meta">
          <span>{{ post.author }}</span>
          <span>{{ post.date }}</span>
          <span>❤️ {{ post.likes }}</span>
        </div>
        <div class="post-card-tags">
          <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
      </div>
    </article>
  </div>
</template>

<style scoped>
.post-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  padding: 2rem;

}

.post-card {
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: box-shadow 0.3s ease, transform 0.3s ease; /* transition 속성 수정 */
  transform: translateY(0); /* 초기 위치 설정 */
}

.post-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  transform: translateY(-5px); /* 마우스 오버시 5px 위로 이동 */
}

.post-card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.post-card-content {
  padding: 1rem;
}

.post-card-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0.5rem 0;
}

.post-card-excerpt {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
}

.post-card-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  color: #999;
  margin-bottom: 0.5rem;
}

.post-card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background: #f0f0f0;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  color: #666;
}

@media (min-width: 768px) {
  .post-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .post-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1440px) {
  .post-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>