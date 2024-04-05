<template>
  <div class="d-flex justify-content-between">
    <div class="d-flex w-75">
    <select class="form-select w-25" v-model="searchCondition.type">
      <option selected value="t">제목</option>
      <option value="c">내용</option>
      <option value="w">작성자</option>
      <option value="tc">제목+내용</option>
      <option value="tcw">제목+내용+작성자</option>
    </select>
    <input
        v-model="searchCondition.keyword"
        type="text"
        class="form-control w-75"
    />
    </div>
    <div>
    <button class="btn btn-light" @click="$emit('search', searchCondition);">검색</button>
    </div>
  </div>
  <div class="d-flex justify-content-between gy-3">
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
import {  reactive} from 'vue';

const props = defineProps({
  keyword: String,

})

defineEmits(["search","update:size","update:sort","update:order"]);

const searchCondition = reactive({
  type: '',
  keyword: '',
  size:10,
  sort:'',
  order:'',
})

</script>

<style scoped>

</style>