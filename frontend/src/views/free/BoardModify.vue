<template>
  <div class="row mt-3">
    <div class="col">
      <div class="card">
        <div class="card-header">
          게시물 수정
        </div>
        <div class="card-body">
          <form @submit.prevent id="f1">

            <div class="input-group mb-3">
              <span class="input-group-text">제목</span>
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
              <span class="input-group-text">내용</span>
              <textarea class="form-control" v-model="board.content"></textarea>
            </div>

            <div class="input-group mb-3">
              <span class="input-group-text">작성자</span>
              <input type="text" class="form-control" v-model="board.writer" readonly>
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text">등록일</span>
              <div class="form-control">{{ $dayjs(board.regDate).format('YYYY.MM.DD') }}</div>
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text">수정일</span>
              <div class="form-control">{{ $dayjs(board.modDate).format('YYYY.MM.DD') }}</div>
            </div>
            <div class="my-4">
              <div class="float-end">
                <button type="button" class="btn btn-primary me-1" @click="goBoardPage">목록</button>
                <button type="submit" class="btn btn-secondary me-1" @click="openModal">수정</button>
                <button type="button" class="btn btn-danger me-1" @click="clickRemoveHandler">삭제
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
import {ref, inject} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import {getBoardBybno} from "@/api/board";
import TheModal from "@/components/common/TheModal.vue";

const $axios = inject('$axios')
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
  boardType: 1,
  content: '',
  writer: '',
  modDate: new Date(),

});

const fetchData = async (bno) => {
  try {
    const {data} = await getBoardBybno(bno);
    board.value = data;
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
    const res = await $axios.patch('/boards',board.value)
    console.log(res)
    router.push({name: 'BoardRead', params: {bno: bno.value}});
  } catch (e) {
    console.log(e)
  }
}

const clickRemoveHandler = async () => {
  await $axios.delete('/boards', bno.value);
  router.push({name: 'BoardList'});
}

// 모달관리
const show = ref(false);

const openModal = () => {
  show.value = true;
};

const closeModal = () => {
  show.value = false;
}
</script>