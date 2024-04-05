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
        <textarea
            v-model="form.content"
            class="form-control"
            id="content"
            rows="3"
        ></textarea>
      </div>
      <div class="mb-3">
        <label class="form-label">첨부파일</label>
        <div>jpg, gif, png 파일만 1mb까지 업로드가 가능합니다.</div>
        <div>1번째 이미지는 썸네일로 활용됩니다.</div>
        <div v-for="(input, index) in fileInputs" :key="index" style="padding:30px;">
          <input type="file" @change="handleFileUpload($event, index)"/>
          <button class="btn btn-light" ><i class="bi bi-x"></i></button>
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
        <button class="btn btn-primary" @click="save">저장</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import {createGallery} from '@/api/gallery';
import {uploadFile} from "@/api/file";
import {useAuthStore} from "@/store/loginStore.js";
import {storeToRefs} from 'pinia'

const authStore = useAuthStore();
const {userName} = storeToRefs(authStore);

const router = useRouter();
const form = ref({
  title: null,
  category:{cno: null, content: null},
  content: null,
  cno: null,
  writer: userName
});
const files = ref([null, null, null]);
const fileInputs = ref([{ id: 0 }]);
const formData = new FormData();

const save = () => {
  createGallery({
    ...form.value,
  })
  .then(res => {
    formData.append('bno', Number(res.data.resultData));

    uploadFile(formData)
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
  // const selectedFile = event.target.fileInputs[0];
  // if (selectedFile) {
  //   fileInputs.value[index] = selectedFile;
  // }
  // formData.append('files', files.value[index]);

  const newInputId = fileInputs.value.length; // 새 입력 필드의 고유 ID 생성
  fileInputs.value.push({ id: newInputId }); // 배열에 새 입력 필드 정보 추가
};
</script>

<style scoped>

</style>