<template>
  <section>
    <div class="row">
      <div class="col-12 mb-3">
        <h2>{{ board.title }}</h2>
        <p class="text-muted">작성자: {{ board.writer }} | 조회수: {{ board.viewCount }}</p>
      </div>
    </div>
  </section>
  <section>
  <div class="row mt-3">
    <div class="col">
      <div class="card">
        <div class="card-body">
          <div class="input-group mb-3">
            <span class="input-group-text">제목</span>
            <input type="text" class="form-control" :value="board.title" readonly>
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text">내용</span>
            <input type="text" class="form-control" :value="board.content" readonly>
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text">카테고리</span>
            <input type="text" class="form-control" :value="board.category.content" readonly>
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text">등록일</span>
            <input type="text" class="form-control"
                   :value="$dayjs(board.regDate).format('YYYY.MM.DD HH:mm:ss')" readonly>
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text">수정일</span>
            <input type="text" class="form-control"
                   :value="$dayjs(board.modDate).format('YYYY.MM.DD HH:mm:ss')" readonly>
          </div>

          <div>
            <i class="fas fa-paperclip m-2"></i>
            <span  v-for="file in board.files" @click="downloadFileHandler(file)" >
              {{file}}
            </span>
          </div>

          <div class="my-4">
            <div class="float-end">
              <button type="button" class="btn btn-primary" @click="goBoardPage">List</button>
              <button v-if="board.writer === userName" type="button" class="btn btn-secondary" @click="modifyBoard">Modify</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
  <section>
  <ReplyArea :bno="bno" :reply-list="replies.list" v-model="replyText"
             @update:replyText="loadReplyDate" @replyDelete="loadReplyDate"/>
  </section>
</template>

<script setup>
import {ref, watch, onMounted, reactive} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import {getBoardBybno} from "@/api/board";
import ReplyArea from "@/views/reply/ReplyArea.vue";
import {downloadFile} from "@/api/file"
import {getReplies, registerReply} from "@/api/reply";
import {useAuthStore} from "@/store/loginStore.js";
import {storeToRefs} from 'pinia'

const authStore = useAuthStore();
const {userName} = storeToRefs(authStore);

const route = useRoute();
const router = useRouter();
const bno = ref(Number(route.params.bno));
const replyText = ref('');

const board = reactive({
  bno: '',
  title: '',
  category: {cno: null, content: null},
  content: '',
  writer: '',
  files:[],
  regDate: new Date(),
  modDate: new Date(),
});

const replies = reactive({list: []});

const loadBoardData = async () => {
  try {
    const {data} = await getBoardBybno(bno.value);
    Object.assign(board, data); // board 객체에 데이터 할당
    console.log(data)
  } catch (e) {
    console.error(e);
  }
};

const loadReplyDate = async () => {
  const response = await getReplies(bno.value); // getReplies 호출 시 bno 값 전달 수정
  const replyList = response.data.items.map(reply => ({
    ...reply,
    bno: bno.value
  }));
  replies.list = replyList;
}

onMounted(async () => {
  await loadBoardData();
  await loadReplyDate();
});

// router

const goBoardPage = () => {
  router.push('/boards');
};

const modifyBoard = () => {
  router.push({name: 'BoardModify', params: {bno: bno.value}}); // bno는 이동하려는 라우트의 경로에 정의된 파라미터입니다.
}

const downloadFileHandler = async (file) =>{
  const fileInform = {
    bno: bno.value,
    fileName: file
  }
  const res = await downloadFile(fileInform);
  console.log(res)
  const name = file
  const url = window.URL.createObjectURL(new Blob([res.data]));
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", name);
  link.style.cssText = "display:none";
  document.body.appendChild(link);
  link.click();
  link.remove();
}

</script>

<style scoped>

</style>