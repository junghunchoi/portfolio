<template>
  <div class="d-flex justify-content-between">
    <div class="d-flex" style="width: 90%">
      <b-form-select class="form-select w-25 me-2"
                     v-model="searchCondition.type"
                     :options="options"></b-form-select>
      <input
          v-model="searchCondition.keyword"
          type="text"
          class="form-control"
      />
    </div>
    <div>
      <button class="btn btn-light" @click="$emit('search', searchCondition);">검색</button>
    </div>
  </div>
  <div class="d-flex justify-content-between gy-3 mt-2">
    <div class="col-md-3">
      <select class="form-select" @input="$emit('update:size', $event.target.value)">
        <option selected value="10">10개씩 보기</option>
        <option value="25">25개씩 보기</option>
        <option value="50">50개씩 보기</option>
      </select>
    </div>

    <div class="d-flex ">
      <div class="">
        <select
            class="form-select"
            @input="$emit('update:order', $event.target.value)"
        >
          <option selected value="regDate">등록일시</option>
          <option value="title">제목</option>
          <option value="viewCount">조회수</option>
        </select>
      </div>
      <div class="">
        <select
            class="form-select"
            @input="$emit('update:sort', $event.target.value)"
        >
          <option selected value="desc">내림차순</option>
          <option value="asc">오름차순</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, reactive} from 'vue';

const props = defineProps({
  keyword: String,

})

defineEmits(["search", "update:size", "update:sort", "update:order"]);

const searchCondition = reactive({
  type: 't',
  keyword: '',
  size: 10,
  sort: '',
  order: '',
})

const options = ref([
  {value: 't', text: '제목'},
  {value: 'c', text: '내용'},
  {value: 'w', text: '작성자'},
  {value: 'tc', text: '제목+내용'},
  {value: 'tcw', text: '제목+내용+작성자'}
])
</script>

<style scoped>

</style>