<template>
  <div class="patch-notes">
    <div class="patch-header">
      <i class="fas fa-info-circle"></i>
      <h1>패치노트</h1>
    </div>

    <div class="patch-content">
      <div v-for="section in visiblePatchNotes"
           :key="`${section.year}-${section.month}`"
           class="month-section">
        <div class="month-header" @click="toggleMonth(`${section.year}-${section.month}`)">
          <i :class="['fas', 'fa-chevron-right', { 'rotate': openMonths[`${section.year}-${section.month}`] }]"></i>
          <i class="fas fa-calendar"></i>
          <h2>{{ formatDate(section.year, section.month) }}</h2>
        </div>

        <div class="feature-section" v-show="openMonths[`${section.year}-${section.month}`]">
          <h3>기능 추가</h3>
          <ul>
            <li v-for="(feature, index) in section.features"
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

    <!-- 모달은 동일하게 유지 -->
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
import {patchData} from "@/common/patchData";

const selectedFeature = ref(null)
const showModal = ref(false)
const openMonths = ref({})

// 현재 날짜 정보
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1;

// 보여질 패치노트 필터링
const visiblePatchNotes = computed(() => {
  return patchData.filter(patch => {
    // 현재 년도의 데이터만 표시
    return patch.year <= currentYear &&
        // 현재 월 이전의 데이터만 표시
        (patch.year < currentYear || patch.month <= currentMonth);
  }).sort((a, b) => {
    // 최신 순으로 정렬
    if (a.year !== b.year) return b.year - a.year;
    return b.month - a.month;
  });
});

// 날짜 포맷팅 함수
const formatDate = (year, month) => {
  return `${year}년 ${month}월`;
};


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