<script setup>
import {ref, onMounted, onUnmounted, nextTick} from 'vue';
import {usePolyline} from '@/composables/usePolyline';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const props = defineProps({
  data: {
    type: Function,
    required: true
  }
});

</script>

<template>
  <div class="post-grid">
    <article v-for="(post, index) in props.data" :key="index" class="post-card">
      <div class="post-card-content">
        <!-- 썸네일 이미지 -->
        <div class="post-card-thumbnail">
          <img :src="post.thumbnail || '/default-thumbnail.png'"
               :alt="post.title"
               class="thumbnail-img">
        </div>

        <!-- 제목 -->
        <h3 class="post-card-title">{{ post.title }}</h3>

        <!-- 간략 내용 -->
        <p class="post-card-excerpt">
          {{ post.thumbTitle }}
        </p>

        <!-- 메타 정보 (작성일 등) -->
        <div class="post-card-meta">
          <div class="post-date">
            {{ new Date(post.regDate).toLocaleDateString() }}
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<style scoped>
/* 기존 스타일 유지 */

.post-card-thumbnail {
  margin: -1rem -1rem 1rem -1rem;
  position: relative;
  overflow: hidden;
}

.thumbnail-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.post-card:hover .thumbnail-img {
  transform: scale(1.05);
}

.post-card-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0.5rem 0;
  color: #333;
}

.post-card-excerpt {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.post-card-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid #eee;
}

.post-date {
  font-size: 0.85rem;
  color: #888;
}

.post-stats {
  display: flex;
  gap: 1rem;
  font-size: 0.85rem;
  color: #666;
}

.distance, .duration {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

@media (max-width: 768px) {
  .post-card-content {
    padding: 0.75rem;
  }

  .post-card-title {
    font-size: 1.1rem;
  }

  .thumbnail-img {
    height: 160px;
  }

  .post-card-excerpt {
    -webkit-line-clamp: 2;
  }
}
</style>