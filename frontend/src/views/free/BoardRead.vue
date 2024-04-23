<template>
  <section>
    <div class="row">
      <div class="col-12 mb-3">

        <h3><b>[{{ board.category.content }}]</b> {{ board.title }}</h3>
        <p class="text-muted">작성자: {{ board.writer }} | 조회수: {{ board.viewCount }} | {{
            $dayjs(board.regDate).format('YYYY.MM.DD HH:mm:ss') }}</p>
      </div>
    </div>
  </section>
  <section>
    <div class="mainArea d-flex flex-column">
      <TheEditor
          v-if="board.content"
          :init-eeditor-data="board.content"
          v-model:editorData="board.content"
          :isDisabled="true"/>
      <div class="d-flex flex-column mt-5">
        <hr/>
        <span class="mb-3"
              v-if="board.files.length >0"
              v-for="file in board.files"
              @click="downloadFileHandler(file)">
             <i class="fas fa-file-download"></i> {{
            file.fileName
          }}
            </span>
      </div>

    </div>
  </section>
  <section>
    <ReplyArea class="mt-5" :bno="bno" :reply-list="replies.list" v-model="replyText"
               @update:replyText="loadReplyDate" @replyDelete="loadReplyDate"/>
  </section>
  <div class="float-end mt-3">
    <button type="button" class="btn btn-primary me-1" @click="goBoardPage">목록</button>
    <button v-if="board.writer === userName" type="button" class="btn btn-secondary"
            @click="modifyBoard">수정
    </button>
  </div>
</template>

<script setup>
import {ref, watch, onMounted, reactive, inject} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import ReplyArea from "@/views/reply/ReplyArea.vue";
import {downloadFile} from "@/api/file.js"
import {useAuthStore} from "@/store/loginStore.js";
import {storeToRefs} from 'pinia'
import TheEditor from "@/components/common/TheEditor.vue";

const $axios = inject('$axios');
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
  files: [],
  regDate: new Date(),
  modDate: new Date(),
});

const replies = reactive({list: []});

const loadBoardData = async () => {
  const res = await $axios.get(`/boards/${bno.value}`)
  Object.assign(board, res.data.resultData); // board 객체에 데이터 할당
};

const loadReplyDate = async () => {
  const response = await $axios.get(`/replies/${bno.value}`)
  const replyList = response.data.resultData.items.map(reply => ({
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

const downloadFileHandler = async (file) => {
  const fileInform = {
    bno: bno.value,
    fileName: file.fileName
  }
  const res = await downloadFile(fileInform);
  console.log(res)
  const name = file.fileName
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
.mainArea {
  min-height: 150px;
  height: auto;
}
</style>