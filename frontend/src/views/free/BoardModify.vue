<template>
  <h2 class="mb-3">자유게시판 수정</h2>
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
      <TheCategorySelect
          v-if="board?.category?.cno !== undefined"
          :cno="board.category.cno"
          v-model:selectedCategory="board.category"
      />
    </div>
    <div class="mb-3">
      <label class="form-label">내용</label>
      <TheEditor
          v-if="isEditorReady"
          :init-editor-data="board.content"
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
import {ref, inject, onMounted, reactive, watch} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import TheModal from "@/components/TheModal.vue";
import TheFiles from "@/components/TheFiles.vue";
import TheEditor from "@/components/TheEditor.vue";
import {deleteBoard, getBoardBybno, updateBoard} from "@/api/board.js";
import {uploadFile} from "@/api/file.js";
import TheCategorySelect from "@/components/TheCategorySelect.vue";

const route = useRoute();
const router = useRouter();
const bno = ref(route.params.bno);
const board = reactive({});
const files = ref([]);
const formData = new FormData();
const isEditorReady = ref(false);
const categories = ref([]);

formData.set('bno', Number(bno.value));

onMounted(async () => {
  try {
    const res = await getBoardBybno(bno.value)
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
  await deleteBoard(bno.value)
  router.push({name: 'BoardList'});
}

async function updateDateAndGolist() {
  try {
    await updateBoard(board)
    await uploadFile(formData)
    router.push({name: 'BoardRead', params: {bno: bno.value}});
  } catch (e) {
    console.log(e)
  }
}

const handleFileData = (value) => {
  formData.append('files', value);
}

watch(() => board.content, (newContent) => {
  if (newContent) {
    isEditorReady.value = true;
  }
}, { immediate: true });

// 모달관리
const show = ref(false);

const openModal = () => {
  show.value = true;
};

const closeModal = () => {
  show.value = false;
}
</script>