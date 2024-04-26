<template>
  <div>
    <h2>게시글 등록</h2>
    <hr class="my-4"/>
    <form @submit.prevent>
      <div class="mb-3">
        <label for="title" class="form-label">작성자</label>
        <input
            v-model="form.writer"
            type="text"
            class="form-control"
            id="writer"
            readonly
        >
      </div>
      <div class="mb-3">
        <label for="title" class="form-label">제목</label>
        <input
            v-model="form.title"
            type="text"
            class="form-control"
            id="title"
        />
      </div>
      <div class="mb-3">
        <label for="content" class="form-label">내용</label>
        <TheEditor
            :init-eeditor-data="form.content"
            v-model:editorData="form.content"
            :isDisabled="false"/>
      </div>
      <div class="mb-3">
        <label class="form-label">첨부파일</label>
        <div>jpg, gif, png 파일만 1mb까지 업로드가 가능합니다.</div>
        <div>1번째 이미지는 썸네일로 활용됩니다.</div>
        <div v-for="(input, index) in files" :key="input.id" style="padding:30px;">
          <input type="file" @change="handleFileUpload($event, index)"/>
          <button class="btn btn-light" @click="removefiles(index)"><i class="bi bi-x"></i>
          </button>
        </div>
      </div>
      <div class="pt-4">
        <button
            type="button"
            class="btn btn-outline-dark me-2"
            @click="goGalleryPage"
        >
          목록
        </button>
        <button class="btn btn-primary" @click="registerGalleryHandler">저장</button>
      </div>
    </form>
  </div>
  <TheModal :is-popup="show"
            :title="'확인'"
  >
    <template #default>
      jpg, gif, png 파일만 1mb까지 업로드가 가능합니다.
    </template>
    <template #actions>
      <button class="btn btn-light" @click="closeModal">닫기</button>
    </template>

  </TheModal>
</template>

<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import {createGallery} from '@/api/gallery.js';
import {useAuthStore} from "@/store/loginStore.js";
import {storeToRefs} from 'pinia'
import TheModal from "@/components/common/TheModal.vue";
import TheEditor from "@/components/common/TheEditor.vue";
const authStore = useAuthStore();
const {userName} = storeToRefs(authStore);

const show = ref(false);
const router = useRouter();
const form = ref({
  title: null,
  category: {cno: null, content: null},
  content: null,
  cno: null,
  writer: userName
});
const files = ref([{id: 0}]);
const formData = new FormData();

const registerGalleryHandler = () => {
  createGallery({
    ...form.value,
  })
  .then(res => {
    formData.append('bno', Number(res.data.resultData));
    await $axios.post('/files/upload',formData);
    .then(() => {
      router.push({name: 'GalleryList'});
    })
    .catch(error => {
      console.error(error);
    });
  })
  .catch(error => {
    console.error(error);
  });
};

const goGalleryPage = () => {
  router.push('/galleries');
};

const handleFileUpload = (event, index) => {
  const selectedFile = event.target.files[0];

  if (!isValidateFile(selectedFile)) {
    show.value = true;
    return;
  }

  files.value[index].file = selectedFile;
  formData.append('files', selectedFile);

  if (index + 1 === files.value.length) {
    const newInputId = files.value.length; // 새 입력 필드의 고유 ID 생성
    files.value.push({id: newInputId}); // 배열에 새 입력 필드 정보 추가
  }
};

const removefiles = (index) => {
  files.value.splice(index, 1);
}

const isValidateFile = (file) => {
  if (file.size > 1048576) { // 1mb까지 업로드가능
    return false;
  }
  if (!(file.type === "image/gif" || file.type === "image/jpeg" || file.type === "image/png")) {
    return false;
  }
  return true;
}

const closeModal = () => {
  show.value = false;
}

</script>

<style scoped>

</style>