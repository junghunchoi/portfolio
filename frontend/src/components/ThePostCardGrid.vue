<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import { usePolyline } from '@/composables/usePolyline';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const props = defineProps({
  api: {
    type: Function,
    required: true
  }
});

// Polyline 유틸리티 함수 가져오기
const { decodePolyline, getPolylineFromStrava } = usePolyline();


const page = ref(0);
const loading = ref(false);
const hasMore = ref(true);
const posts = ref([])

const maps = ref({});

const initializeMap = (element, post) => {
  const polyline = getPolylineFromStrava(post);
  const coordinates = decodePolyline(polyline);

  if (coordinates.length === 0) return;

  const map = L.map(element).setView(coordinates[0], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  const routePolyline = L.polyline(coordinates, { color: 'red' }).addTo(map);
  map.fitBounds(routePolyline.getBounds());

  // 시작점과 끝점 마커
  L.marker(coordinates[0]).addTo(map).bindPopup('Start');
  L.marker(coordinates[coordinates.length - 1]).addTo(map).bindPopup('End');

  return map;
};

const fetchPosts = async () => {
  if (loading.value || !hasMore.value) return;

  loading.value = true;
  try {

    const response = await props.api()
    const newPosts = response.data.resultData;
    posts.value = newPosts;
    page.value++;
    hasMore.value = newPosts.length === 10;

    nextTick(() => {
      newPosts.forEach((post, index) => {
        const mapElement = document.getElementById(`map-${posts.value.length - newPosts.length + index}`);
        if (mapElement && !maps.value[index]) {
          maps.value[index] = initializeMap(mapElement, post);
        }
      });
    });
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
  Object.values(maps.value).forEach(map => map.remove());
});
</script>

<template>
  <div class="post-grid">
    <article v-for="(post, index) in posts" :key="index" class="post-card">
      <div class="post-card-map">
        <!-- 지도를 표시할 div에 고유 ID 부여 -->
        <div :id="'map-' + index" class="map-container"></div>
      </div>
      <div class="post-card-content">
        <h2 class="post-card-title">Distance: {{ (post.distance / 1000).toFixed(2) }}km</h2>
        <div class="post-card-meta">
          <span>{{ $dayjs(post.regDate).format('YYYY.MM.DD') }}</span>
          <span v-if="post.start_date_local">시작일: {{ $dayjs(board.start_date_local).format('YYYY.MM.DD') }}</span>
        </div>
      </div>
    </article>
  </div>
</template>

<style scoped>
.map-container {
  width: 100%;
  height: 300px;
  background: #f5f5f5;
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