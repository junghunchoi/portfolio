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
            <div class="input-group mb-3">
              <span class="input-group-text">카테고리</span>
              <select v-model="board.category.cno" class="form-control">
                <option value="1">java</option>
                <option value="2">javascript</option>
                <option value="3">sql</option>
              </select>
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text">Content</span>
              <textarea class="form-control " v-model="board.content"></textarea>
            </div>

            <div class="input-group mb-3">
              <span class="input-group-text">Writer</span>
              <input type="text" class="form-control" v-model="board.writer" readonly>
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text">RegDate</span>
              <input type="text" class="" :value="board.regDate" readonly>
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text">ModDate</span>
              <input type="text" class="" :value="board.modDate" readonly>
            </div>
            <div class="my-4">
              <div class="float-end">
                <button type="button" class="btn btn-primary" @click="goBoardPage">목록</button>
                <button type="submit" class="btn btn-secondary" @click="openModal">
                  수정
                </button>
                <button type="button" class="btn btn-danger" @click="clickRemoveHandler">삭제
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <Teleport to="#modal">
    <TheModal
        :isPopup="show"
        :title="'확인'"
    >
      <template #default>
        정말로 수정하시겠습니까?
      </template>
      <template #actions>
        <button class="btn btn-secondary" @click="updateDateAndGolist">수정</button>
        <button class="btn btn-light" @click="closeModal">닫기</button>
      </template>
    </TheModal>
  </Teleport>
</template>

<script setup>
import {ref} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import {deleteBoard, getBoardBybno, updateBoard} from "@/api/board";
import TheModal from "@/components/common/TheModal.vue";

const route = useRoute();
const router = useRouter();

const bno = ref(route.params.bno);

const board = ref({
  bno: '',
  title: '',
  cno: '',
  category: {
    cno: '',
    content: ''
  },
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
  try {
    await updateBoard({
      ...board.value,
    })
    router.push({name: 'BoardRead', params: {bno: bno.value}});
  } catch (e) {
    console.log(e)
  }
}

const clickRemoveHandler = () => {
  deleteAndGolist();
}

async function deleteAndGolist() {
  await deleteBoard(bno.value);
  router.push({name: 'BoardList'}); // bno는 이동하려는 라우트의 경로에 정의된 파라미터입니다.
}

// modal
const show = ref(false);

const openModal = () => {
  show.value = true;
};

const closeModal = () => {
  show.value = false;
}
</script>