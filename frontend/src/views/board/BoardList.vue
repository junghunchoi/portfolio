<template>
  <div class="row mt-3">
    <form @submit.prevent="submitForm">
      <div class="col">
<!--        <input type="hidden" name="size" :value="pageRequestDTO.size">-->
        <div class="input-group">
          <div class="input-group-prepend">
<!--            <select class="form-select" v-model="pageRequestDTO.type">-->
<!--              <option value="">-&#45;&#45;</option>-->
<!--              <option value="t">제목</option>-->
<!--              <option value="c">내용</option>-->
<!--              <option value="w">작성자</option>-->
<!--              <option value="tc">제목+내용</option>-->
<!--              <option value="tcw">제목+내용+작성자</option>-->
<!--            </select>-->
          </div>
<!--          <input type="text" class="form-control" v-model="pageRequestDTO.keyword">-->
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="submit">Search</button>
            <button class="btn btn-outline-secondary" @click="clearSearch">Clear</button>
          </div>
        </div>
      </div>
    </form>
  </div>
  <button class="btn btn-primary" @click="goRegisterPage">게시글 등록</button>
  <div class="row mt-3">
    <div class="col">
      <div class="card">
        <div class="card-header"></div>
        <div class="card-body">
          <h5 class="card-title">게시물</h5>
          <table class="table">
            <thead>
            <tr>
              <th scope="col">카테고리</th>
              <th scope="col">제목</th>
              <th scope="col">작성자</th>
              <th scope="col">조회수</th>
              <th scope="col">등록일시</th>
              <th scope="col">수정일시</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="dto in responseDTO.dtoList" :key="dto.bno">
              <td>{{ dto.category }}</td>
              <td>
                <router-link :to="{ name: 'BoardRead', params: { id: dto.bno }}">{{ dto.title }}</router-link>
                <span class="progress-bar-striped" style="background-color: gray">{{ dto.replyCount }}</span>
              </td>
              <td>{{ dto.writer }}</td>
              <td>{{ dto.regDate }}</td>
              <td>{{ dto.modDate }}</td>
            </tr>
            </tbody>
          </table>
          <ThePagination :responseDTO="responseDTO" @page-changed="changePage"/>
        </div>
      </div>
    </div>
  </div>


</template>

<script setup>
import { ref, onMounted } from 'vue';
import BoardRead from '@/views/board/BoardRead.vue';
import {}
import axios from "axios";
import { useRouter } from 'vue-router';

// import ThePagination from "@/components/common/ThePagination";

const router = useRouter();
const responseDTO = ref({
  dtoList: []
});

// 페이지 이동 함수는 그대로 유지됩니다.
const goRegisterPage = () => {
  router.push('/boards/register');
};

// fetchData 함수를 Composition API 스타일로 정의합니다.
const fetchData = () => {
  axios.get('/api/board/list')
      .then(response => {
        responseDTO.value = response.data;
        console.log(responseDTO.value);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
};

// onMounted 훅을 사용하여 컴포넌트가 마운트 되었을 때 fetchData 함수를 호출합니다.
onMounted(() => {
  fetchData();
});
</script>

<style scoped>

</style>