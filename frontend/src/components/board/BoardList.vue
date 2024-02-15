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

  <div class="row mt-3">
    <div class="col">
      <div class="card">
        <div class="card-header"></div>
        <div class="card-body">
          <h5 class="card-title">게시물</h5>
<!--          <table class="table">-->
<!--            <thead>-->
<!--            <tr>-->
<!--              <th scope="col">카테고리</th>-->
<!--              <th scope="col">제목</th>-->
<!--              <th scope="col">작성자</th>-->
<!--              <th scope="col">조회수</th>-->
<!--              <th scope="col">등록일시</th>-->
<!--              <th scope="col">수정일시</th>-->
<!--            </tr>-->
<!--            </thead>-->
<!--            <tbody>-->
<!--            <tr v-for="dto in responseDTO.dtoList" :key="dto.bno">-->
<!--              <th scope="row">{{ dto.bno }}</th>-->
<!--              <td>{{ dto.category }}</td>-->
<!--              <td>-->
<!--                <a :href="`/board/read?bno=${dto.bno}&${pageRequestDTO.getLink()}`" style="color: black; text-decoration: none;">-->
<!--                  {{ dto.title }}-->
<!--                </a>-->
<!--                <span class="progress-bar-striped" style="background-color: gray">{{ dto.replyCount }}</span>-->
<!--              </td>-->
<!--              <td>{{ dto.writer }}</td>-->
<!--              <td>{{ dto.regDate }}</td>-->
<!--              <td>{{ dto.modDate }}</td>-->
<!--            </tr>-->
<!--            </tbody>-->
<!--          </table>-->
<!--          <ThePagination :responseDTO="responseDTO" @page-changed="changePage"/>-->
        </div>
      </div>
    </div>
  </div>

  <!-- Modal Component -->
  <Modal v-if="showModal" @close="showModal = false">
    <template #header>
      <h5 class="modal-title">팝업</h5>
    </template>
    <p>게시물이 등록되었습니다.</p>
    <template #footer>
      <button type="button" class="btn btn-secondary" @click="showModal = false">Close</button>
    </template>
  </Modal>
</template>
<script>
import axios from "axios";
// import {reactive} from "vue"

// import ThePagination from "@/components/common/ThePagination";
export default {
  name: "BoardList",
  components: {},
  // setup() {
  //   // const state = reactive({
  //   //
  //   // })
  //
  // }
  data() {
    return {
      responseDTO: null, // 데이터를 저장할 속성 초기화
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios.get('/api/board/list')
          .then(response => {
            // HTTP 요청 성공 시, responseDTO에 데이터 할당
            this.responseDTO = response.data;
            console.log(response)
          })
          .catch(error => {
            // 요청 실패 시 에러 처리
            console.error('There was an error!', error);
          });
    }
  }
}
console.log();
</script>

<style scoped>

</style>