<script setup>
import {ref, onMounted, onUnmounted, nextTick, reactive} from 'vue';
import 'leaflet/dist/leaflet.css';

const props = defineProps({
  list: {
    type: Object,
    required: true
  },
  domain: String
});
console.log(props)


const posts = ref([]);
const loading = ref(false);
const hasMore = ref(true);
const page = ref(1);
const maps = ref({});

const params = reactive({
  order: "regDate",
  sort: "desc",
  page: 1,
  size: 10,
  type: null,
  keyword: null
});

const formatDate = (date) => {
  return new Date(date).toLocaleDateString();
};

// const fetchPosts = async () => {
//   if (loading.value || !hasMore.value) return;
//
//   loading.value = true;
//   try {
//     const response = await props.api()
//     const newPosts = response.data.resultData;
//     posts.value = [...posts.value, ...newPosts];
//     page.value++;
//     hasMore.value = newPosts.length === 10;
//
//     nextTick(() => {
//       newPosts.forEach((post, index) => {
//         const mapElement = document.getElementById(`map-${posts.value.length - newPosts.length + index}`);
//         if (mapElement && !maps.value[index]) {
//           maps.value[index] = initializeMap(mapElement, post);
//         }
//       });
//     });
//   } catch (error) {
//     console.error('Failed to fetch posts:', error);
//   } finally {
//     loading.value = false;
//   }
// };

const handleScroll = () => {
  const scrollPosition = window.innerHeight + window.scrollY;
  const bodyHeight = document.body.offsetHeight;
  if (scrollPosition >= bodyHeight - 500) {
    fetchPosts();
  }
};

onMounted(() => {
  // fetchPosts();
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  console.log('Mounted list:', props)
});
</script>

<template>
  <div class="post-grid">
    <div v-for="(post, index) in props.list"
         :key="post.id"
         class="post-card">
      <div class="thumbnail">
<!--        <img v-if="post.thumbnailUrl"-->
<!--             :src="post.thumbnailUrl"-->
<!--             :alt="post.title">-->
        <div
             class="map-container"
             :id="`map-${index}`"></div>
      </div>
      <div class="post-card-content">
        <h2 class="title">{{ post.title }}</h2>
        <p class="content">{{ post.content }}</p>
        <div class="meta">
          <span class="date">{{ formatDate(post.regdate) }}</span>
          <div class="tags">
            <span v-for="tag in post.tags"
                  :key="tag"
                  class="tag">
              #{{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div v-if="loading" class="loading">
      Loading...
    </div>
  </div>
</template>

<style scoped>
.map-container {
  width: 100%;
  height: 300px;
  background: #f5f5f5;
}

.card {
  width: 300px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background: white;
  overflow: hidden;
  transition: transform 0.2s;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.thumbnail {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-content {
  padding: 16px;
}

.title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 8px;
  color: #333;
}

.content {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
}

.date {
  color: #888;
}

.tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tag {
  padding: 4px 8px;
  background-color: #f0f0f0;
  border-radius: 4px;
  color: #666;
}

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
  transform: translateY(0);

}

.post-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  transform: translateY(-5px); /* 마우스 오버시 5px 위로 이동 */
}

.post-card-content {
  padding: 1rem;
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