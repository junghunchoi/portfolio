<template>
  <div class="search-container">
    <div class="search-bar mb-3">
      <b-form-select
          v-model="searchCondition.type"
          :options="options"
          class="me-2 search-select"
      ></b-form-select>
      <b-form-input
          v-model="searchCondition.keyword"
          placeholder="검색어를 입력하세요"
          class="flex-grow-1 me-2 search-input"
      ></b-form-input>
      <b-button variant="primary" @click="$emit('search', searchCondition)" class="search-button">검색</b-button>
    </div>
    <div class="filter-bar">
      <b-form-select
          v-model="searchCondition.size"
          :options="sizeOptions"
          @input="$emit('update:size', Number($event))"
          class="me-2 filter-select"
      ></b-form-select>
      <b-form-select
          v-model="searchCondition.order"
          :options="orderOptions"
          @input="$emit('update:order', $event)"
          class="me-2 filter-select"
      ></b-form-select>
      <b-form-select
          v-model="searchCondition.sort"
          :options="sortOptions"
          @input="$emit('update:sort', $event)"
          class="filter-select"
      ></b-form-select>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch } from 'vue';

const props = defineProps({
  defaultType: { type: String, default: 't' },
  defaultKeyword: { type: String, default: '' },
  defaultSize: { type: Number, default: 10 },
  defaultOrder: { type: String, default: 'regDate' },
  defaultSort: { type: String, default: 'desc' },
});

const emit = defineEmits(["search", "update:size", "update:sort", "update:order"]);

const searchCondition = reactive({
  type: props.defaultType,
  keyword: props.defaultKeyword,
  size: props.defaultSize,
  order: props.defaultOrder,
  sort: props.defaultSort,
});

const options = ref([
  { value: 't', text: '제목' },
  { value: 'c', text: '내용' },
  { value: 'w', text: '작성자' },
  { value: 'tc', text: '제목+내용' },
  { value: 'tcw', text: '제목+내용+작성자' }
]);

const sizeOptions = [
  { value: 10, text: '10개씩' },
  { value: 25, text: '25개씩' },
  { value: 50, text: '50개씩' },
];

const orderOptions = [
  { value: 'regDate', text: '등록일시' },
  { value: 'title', text: '제목' },
  { value: 'viewCount', text: '조회수' },
];

const sortOptions = [
  { value: 'desc', text: '내림차순' },
  { value: 'asc', text: '오름차순' },
];

// Watch for changes in searchCondition and emit events
watch(() => searchCondition.size, (newSize) => emit('update:size', newSize));
watch(() => searchCondition.order, (newOrder) => emit('update:order', newOrder));
watch(() => searchCondition.sort, (newSort) => emit('update:sort', newSort));

</script>

<style scoped>
.search-container {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.search-bar {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.search-select {
  width: 120px;
  flex-shrink: 0;
}

.search-input {
  flex: 1;
  min-width: 200px;
}

.search-button {
  width: 80px;
  flex-shrink: 0;
}

.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.filter-select {
  width: 120px;
}

@media (max-width: 768px) {
  .search-bar {
    flex-direction: column;
  }

  .search-select,
  .search-input,
  .search-button {
    width: 100%;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .filter-bar {
    flex-wrap: wrap;
  }

  .filter-select {
    width: calc(50% - 0.25rem);
  }
}
</style>