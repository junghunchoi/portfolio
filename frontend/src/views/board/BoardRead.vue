<template>
  <div class="row mt-3">
    <div class="col">
      <div class="card">
        <div class="card-header">Board Read</div>
        <div class="card-body">
          <div class="input-group mb-3" >
            <span class="input-group-text">제목</span>
            <input type="text" class="form-control" :value="board.bno" readonly>
          </div>
          <div class="input-group mb-3" >
            <span class="input-group-text">내용</span>
            <input type="text" class="form-control" :value="board.content" readonly>
          </div>
          <div class="input-group mb-3" >
            <span class="input-group-text">작성자</span>
            <input type="text" class="form-control" :value="board.writer" readonly>
          </div>
          <div class="input-group mb-3" >
            <span class="input-group-text">카테고리</span>
            <input type="text" class="form-control" :value="board.category.content" readonly>
          </div>
          <div class="input-group mb-3" >
            <span class="input-group-text">등록일</span>
            <input type="text" class="form-control" :value="board.regDate" readonly>
          </div>
          <div class="input-group mb-3" >
            <span class="input-group-text">수정일</span>
            <input type="text" class="form-control" :value="board.modDate" readonly>
          </div>
          <div class="input-group mb-3" >
            <span class="input-group-text">파일명</span>
            <input type="text" class="form-control"  readonly>
          </div>

          <div class="my-4">
            <div class="float-end">
              <button type="button" class="btn btn-primary" @click="goBoardPage">List</button>
              <button type="button" class="btn btn-secondary"  @click="modifyBoard">Modify</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ReplyArea/>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {getBoardBybno} from "@/api/board";
import ReplyArea from "@/components/reply/ReplyArea.vue";

const route = useRoute();
const router = useRouter();
const bno = ref(route.params.bno);

const board = ref({
  bno: '',
  title: '',
  category: {cno:null, content:null},
  content: '',
  writer: '',
  regDate: new Date(),
  modDate: new Date(),

});


const fetchData = async (bno) => {
  try{
    const {data} = await getBoardBybno(bno);
    board.value = data;
  }catch (e) {
    console.error(e);
  }
};

fetchData(bno.value)

const goBoardPage = () => {
  router.push('/boards');
};

const modifyBoard = () => {
  router.push({ name: 'BoardModify', params: { bno: bno.value} }); // bno는 이동하려는 라우트의 경로에 정의된 파라미터입니다.
}

</script>

<style scoped>

</style>