<template>
  <h2 class="mb-3">자유게시판 수정</h2>
  <div class="float-end">
    <p class=" fs-6">작성자 : {{
        board.writer
      }} | 등록일 : {{
        $dayjs(board.regDate).format('YYYY.MM.DD')
      }} | 마지막 수정일: {{
        $dayjs(board.modDate).format('YYYY.MM.DD')
      }}</p>
  </div>
  <form @submit.prevent id="f1">
    <div class="mb-3 mt-5">
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
      <select v-if="board.category && board.category.cno" v-model="board.category.cno"
              class="form-control">
        <option value="1">java</option>
        <option value="2">javascript</option>
        <option value="3">sql</option>
      </select>
    </div>
    <div class="mb-3">
      <label class="form-label">내용</label>
      <TheEditor
          :init-eeditor-data="board.content"
          v-model:editorData="board.content"
          :isDisabled="false"/>
    </div>
    <TheFiles :files-by-parent="files"
              @update:fileData="handleFileData"
    />
    <div class="float-end">
      <button type="button" class="btn btn-primary me-1" @click="goBoardPage">목록</button>
      <button type="submit" class="btn btn-secondary me-1" @click="openModal">수정</button>
      <button type="button" class="btn btn-danger me-1" @click="clickRemoveHandler">삭제
      </button>
    </div>
  </form>

  <Teleport to="#modal">
    <TheModal
        v-model="show"
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
import {ref, inject, onMounted, reactive} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import TheModal from "@/components/common/TheModal.vue";
import TheFiles from "@/components/common/TheFiles.vue";
import TheEditor from "@/components/common/TheEditor.vue";

const $axios = inject('$axios')
const route = useRoute();
const router = useRouter();

const bno = ref(route.params.bno);

const board = reactive({});

const files = ref([]);
const formData = new FormData();
formData.set('bno', Number(bno.value));

onMounted(async () => {
  try {
    const res = await $axios.get(`/boards/${bno.value}`);
    Object.assign(board, res.data.resultData);
    board.files.forEach((file, index) => {
      files.value.push({id: index, file: file})
    })
  } catch (e) {
    console.error(e);
  }
})

const goBoardPage = () => {
  router.push('/boards');
};

const clickRemoveHandler = async () => {
  await $axios.delete(`/boards/${bno.value}`);
  router.push({name: 'BoardList'});
}

async function updateDateAndGolist() {
  try {
    console.log(formData.get("files"));
    await $axios.patch('/boards', board);
    await $axios.post('/files/upload', formData);
    router.push({name: 'BoardRead', params: {bno: bno.value}});
  } catch (e) {
    console.log(e)
  }
}

const handleFileData = (value) => {
  formData.append('files', value);
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