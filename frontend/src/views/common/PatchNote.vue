<template>
  <div class="patch-notes">
    <div class="patch-header">
      <i class="fas fa-info-circle"></i>
      <h1>패치노트</h1>
    </div>

    <div class="patch-content">
      <!-- 10월 섹션 -->
      <div class="month-section">
        <div class="month-header" @click="toggleMonth('october')">
          <i :class="['fas', 'fa-chevron-right', { 'rotate': openMonths.october }]"></i>
          <i class="fas fa-calendar"></i>
          <h2>2024년 10월</h2>
        </div>

        <div class="feature-section" v-show="openMonths.october">
          <h3>기능 추가</h3>
          <ul>
            <li v-for="(feature, index) in octoberFeatures"
                :key="index"
                @click="showDetail(feature)"
                :class="{ 'active': selectedFeature === feature }">
              <i class="fas fa-code-branch"></i>
              <span>{{ feature.title }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- 11월 섹션 -->
      <div class="month-section">
        <div class="month-header" @click="toggleMonth('november')">
          <i :class="['fas', 'fa-chevron-right', { 'rotate': openMonths.november }]"></i>
          <i class="fas fa-calendar"></i>
          <h2>2024년 11월</h2>
        </div>

        <div class="feature-section" v-show="openMonths.november">
          <h3>기능 추가</h3>
          <ul>
            <li v-for="(feature, index) in novemberFeatures"
                :key="index"
                @click="showDetail(feature)"
                :class="{ 'active': selectedFeature === feature }">
              <i class="fas fa-code-branch"></i>
              <span>{{ feature.title }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 상세 설명 모달 -->
    <transition name="fade">
      <div v-if="showModal" class="detail-modal" @click.self="closeModal">
        <div class="modal-content">
          <h3>{{ selectedFeature?.title }}</h3>
          <p>{{ selectedFeature?.description }}</p>
          <button @click="closeModal">닫기</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>

import {ref} from "vue";

const selectedFeature = ref(null)
const showModal = ref(false)
const openMonths = ref({
  october: true,
  // november: true
})

const octoberFeatures = ref([
  {
    title: '헤더에 패치노트 탭추가',
    description: '사용자들이 업데이트 내역을 쉽게 확인할 수 있도록 헤더에 패치노트 탭이 추가되었습니다.'
  },
  {
    title: '메인페이지 4개탭 조회가져오기',
    description: '메인 페이지의 사용성 개선을 위해 4개의 주요 탭 데이터를 효율적으로 조회하는 기능이 추가되었습니다.'
  },
  {
    title: '스트라바 무한 스크롤 및 조회추가',
    description: '스트라바 데이터를 더욱 쾌적하게 탐색할 수 있도록 무한 스크롤 기능이 도입되었습니다.'
  },
  {
    title: '소소한 디자인 수정',
    description: '전반적인 사용자 경험 개선을 위한 디자인 요소들이 수정되었습니다.'
  }
])

const novemberFeatures = ref([
  {
    title: '카카오톡 로그인 버튼 붙이기',
    description: '사용자 편의성 향상을 위해 카카오톡 소셜 로그인 기능이 추가되었습니다.'
  }
])

const showDetail = (feature) => {
  selectedFeature.value = feature
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  selectedFeature.value = null
}

const toggleMonth = (month) => {
  openMonths.value[month] = !openMonths.value[month];
}

</script>

<style scoped>
.patch-notes {
  max-width: 48rem;
  margin: 0 auto;
  padding: 1.5rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.patch-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.patch-header h1 {
  font-size: 1.5rem;
  font-weight: bold;
  color: #1a1a1a;
}

.patch-header i {
  color: #3b82f6;
  font-size: 1.5rem;
}

.month-section {
  border-left: 4px solid #3b82f6;
  padding-left: 1rem;
  margin-bottom: 2rem;
}

.month-section:nth-child(2) {
  border-left-color: #8b5cf6;
}

.month-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.month-header h2 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #374151;
}

.feature-section h3 {
  font-size: 1.125rem;
  font-weight: 500;
  color: #3b82f6;
  margin-bottom: 0.5rem;
}

.feature-section:nth-child(2) h3 {
  color: #8b5cf6;
}

.feature-section ul {
  list-style: none;
  padding: 0;
}

.feature-section li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s;
  border-radius: 0.25rem;
}

.feature-section li:hover {
  background-color: #f3f4f6;
}

.feature-section li.active {
  background-color: #e5e7eb;
}

.feature-section i {
  color: #10b981;
}

.detail-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  max-width: 500px;
  width: 90%;
}

.modal-content h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.modal-content button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.modal-content button:hover {
  background-color: #2563eb;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>