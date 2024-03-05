<template>
  <div class="row mt-3">
    <div class="col">
      <div class="card">
        <div class="card-header">
          Board Modify
        </div>
        <div class="card-body">
          <form @submit.prevent id="f1">

            <div class="input-group mb-3">
              <span class="input-group-text">Title</span>
              <input type="text" class="form-control" v-model="board.title">
            </div>
            <div class="mb-3">
              <label  class="form-label">카테고리</label>
              <select v-model="board.categoryObj.cno" class="form-control">
                <option value="1">java</option>
                <option value="2">javascript</option>
                <option value="3">sql</option>
              </select>
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text">Content</span>
              <textarea class="form-control col-sm-5" rows="5" v-model="board.content"></textarea>
            </div>

            <div class="input-group mb-3">
              <span class="input-group-text">Writer</span>
              <input type="text" class="form-control" v-model="board.writer" readonly>
            </div>

            <!-- 이미지 추가 및 기타 입력 필드 처리는 해당 비즈니스 로직에 따라 달라질 수 있습니다 -->

            <div class="input-group mb-3">
              <span class="input-group-text">RegDate</span>
              <input type="text" class="form-control" :value="board.regDate" readonly>
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text">ModDate</span>
              <input type="text" class="form-control" :value="board.modDate" readonly>
            </div>
<!--            <div class="input-group mb-3">-->
<!--              <span class="input-group-text">file</span>-->
<!--              <input type="text" class="form-control" :value="board.modDate" readonly>-->
<!--            </div>-->
<!--            <div class="input-group mb-3">-->
<!--              <span class="input-group-text">file</span>-->
<!--              <input type="text" class="form-control" :value="board.modDate" readonly>-->
<!--            </div>-->
<!--            <div class="input-group mb-3">-->
<!--              <span class="input-group-text">file</span>-->
<!--              <input type="text" class="form-control" :value="board.modDate" readonly>-->
<!--            </div>-->

            <div class="my-4">
              <div class="float-end">
                <button type="button" class="btn btn-primary" @click="goBoardPage">List</button>
                <button type="submit" class="btn btn-secondary" @click="openModal">Modify</button>
                <button type="button" class="btn btn-danger" @click="clickRemoveHandler">Remove</button>
              </div>
            </div>
          </form>
        </div><!--end card body-->
      </div><!--end card-->
    </div><!-- end col-->
  </div><!-- end row-->
  <div>
    <TheModal ref="modalRef" @confirm="onConfirm">
      <p>모달창입니다.</p>
    </TheModal>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {deleteBoard, getBoardBybno, updateBoard} from "@/api/board";
import TheModal from "@/components/common/TheModal.vue";

const route = useRoute();
const router = useRouter();

const bno = ref(route.params.bno);
const modalRef = ref(null);

function openModal() {
  modalRef.value.openModal();
}
function onConfirm() {
  updateDateAndGolist();
}

const board = ref({
  bno: '',
  title: '',
  cno:'',
  categoryObj:{
    cno:'',
    content:''
  },
  category:'',
  content: '',
  writer: '',
  modDate: new Date(),

});

const fetchData = async (bno) => {
  try {
    const {data} = await getBoardBybno(bno);
    board.value = data;
    console.log(data)
  } catch (e) {
    console.error(e);
  }
}

fetchData(bno.value)

const goBoardPage = () => {
  router.push('/boards');
};

async function updateDateAndGolist() {
  try{
    await updateBoard({
      ...board.value,
    })
    router.push({name: 'BoardRead', params:{bno : bno.value}});
  }catch (e) {
    console.log(e)
  }
}


const clickRemoveHandler = () =>{
  deleteAndGolist();
}

async function deleteAndGolist() {
  await deleteBoard(bno.value);
  router.push({ name: 'BoardList'}); // bno는 이동하려는 라우트의 경로에 정의된 파라미터입니다.
}
</script>