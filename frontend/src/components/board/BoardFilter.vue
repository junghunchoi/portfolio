<template>
  <div class="row g-3">
    <div class="input-group-prepend">
      <select class="form-select" v-model="searchCondition.type" >
        <option value="t">제목</option>
        <option value="c">내용</option>
        <option value="w">작성자</option>
        <option value="tc">제목+내용</option>
        <option value="tcw">제목+내용+작성자</option>
      </select>
    </div>
    <div class="col">
      <input
          v-model="searchCondition.keyword"
          type="text"
          class="form-control"
      />
    </div>
    <button @click="onSearchClick">검색</button>
  </div>
</template>

<script setup>
import {ref, reactive} from 'vue';

const emit = defineEmits(['search']);

const searchCondition = reactive({
  type: '',
  keyword: ''
})

const onSearchClick = () => {
  emit('search', searchCondition);
}

</script>

<style scoped>

</style>