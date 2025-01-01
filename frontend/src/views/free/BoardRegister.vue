<template>
  <section>
    <h2>게시글 등록</h2>
    <hr class="my-4"/>
    <form @submit.prevent>
      <div class="mb-3">
        <label for="title" class="form-label">작성자</label>
        <input
            v-model="board.writer"
            type="text"
            class="form-control"
            id="writer"
        >
      </div>
      <div class="mb-3">
        <label for="title" class="form-label">제목</label>
        <input
            v-model="board.title"
            type="text"
            class="form-control"
            id="title"
        />
      </div>
      <div class="mb-3">
        <label for="title" class="form-label">카테고리</label>
        <TheCategorySelect
            v-if="board?.category?.cno !== undefined"
            :cno="board.category.cno"
            v-model:selectedCategory="board.category"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">내용</label>
        <TheEditor
            :init-editor-data="board.content"
            v-model:editorData="board.content"
            @imageUploaded="handleThumbNailUpload"
            :isDisabled="false"/>
      </div>
      <div class="mb-3">
        <label class="form-label">첨부파일</label>
        <div style="padding:30px;">
          <input type="file" @change="handleFileUpload($event, 0)"/>
        </div>
        <div style="padding:30px;">
          <input type="file" @change="handleFileUpload($event, 1)"/>
        </div>
        <div style="padding:30px;">
          <input type="file" @change="handleFileUpload($event, 2)"/>

        </div>
      </div>
      <div class="pt-4">
        <button
            type="button"
            class="btn btn-outline-dark me-2"
            @click="goBoardPage"
        >
          목록
        </button>
        <button class="btn btn-primary" @click="save">저장</button>
      </div>
    </form>
  </section>
</template>

<script setup>
import {onMounted, reactive, ref} from 'vue';
import {useRouter} from 'vue-router';
import {useAuthStore} from "@/store/loginStore.js";
import {storeToRefs} from 'pinia'
import TheEditor from "@/components/TheEditor.vue";
import {createBoard} from "@/api/board.js";
import {uploadFile} from "@/api/file.js";
import TheCategorySelect from "@/components/TheCategorySelect.vue";
import {getCategoryList} from "@/api/common";

const BASE_URL = process.env.VITE_APP_URL;
const authStore = useAuthStore();
const {userName} = storeToRefs(authStore);

const router = useRouter();

// 변수
const board = reactive({
  title: null,
  category: {cno: null, content: null},
  content: null,
  writer: userName,
  boardType: 1,
  thumbnailPath: null,
});
const files = ref([null, null, null]);
const formData = new FormData();
const categories = ref([]);


const save = async () => {
  try {
    const res = await createBoard(board)

    formData.append('bno', res.data.resultData);
    if (formData)
      await uploadFile(formData)
    router.push({name: 'BoardList'});
  } catch (e) {
    console.error(e)
  }
};

const goBoardPage = () => {
  router.push('/boards');
};

const handleFileUpload = (event, index) => {
  const selectedFile = event.target.files[0];

  if (selectedFile) {
    files.value[index] = selectedFile;
  }
  formData.append('files', files.value[index]);
};

const handleThumbNailUpload = (event) => {
  if (board.thumbnailPath === null) {
    board.thumbnailPath = event;
  }
};
</script>

<style scoped>

</style>