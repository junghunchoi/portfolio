<template>
  <div>
    <h2>갤러리 수정</h2>
    <hr class="my-4"/>
    <form @submit.prevent>
      <div class="mb-3">
        <label for="title" class="form-label">작성자</label>
        <input
            v-model="gallery.writer"
            type="text"
            class="form-control"
            id="writer"
            readonly
        >
      </div>
      <div class="mb-3">
        <label for="title" class="form-label">제목</label>
        <input
            v-model="gallery.title"
            type="text"
            class="form-control"
            id="title"
        />
      </div>
      <div class="mb-3">
        <label for="content" class="form-label">내용</label>
        <TheEditor
            :init-eeditor-data="gallery.content"
            v-model:editorData="gallery.content"
            :isDisabled="false"/>
      </div>
      <div class="mb-3">
        <label class="form-label">첨부파일</label>
        <div>jpg, gif, png 파일만 1mb까지 업로드가 가능합니다.</div>
        <div>1번째 이미지는 썸네일로 활용됩니다.</div>
        <div v-for="(input, index) in gallery.files" :key="index" style="padding:30px;">
          <input type="file" @change="handleFileUpload($event, index)"/>
          <button class="btn btn-light"><i class="bi bi-x"></i></button>
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
        <button class="btn btn-secondary" @click="updateDataAndGolist">수정</button>
        <button class="btn btn-light" @click="closeModal">닫기</button>
      </template>
    </TheModal>
  </Teleport>
</template>

<script setup>
import {inject, onMounted, reactive, ref} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import TheModal from "@/components/common/TheModal.vue";
import {useAuthStore} from "@/store/loginStore";
import {storeToRefs} from "pinia";
import TheEditor from "@/components/common/TheEditor.vue";

const authStore = useAuthStore();
const {userName} = storeToRefs(authStore);

const route = useRoute();
const router = useRouter();
const $axios = inject('$axios');
const bno = ref(route.params.bno);
const gallery = reactive({
  bno: '',
  title: '',
  content: '',
  writer: userName,
  files: [],
  modDate: new Date(),
});

onMounted(async ()=>{
  try {
    const {data} = await $axios.get(`/galleries/${bno.value}`)
    Object.assign(gallery, data);
    console.log(data)
  } catch (e) {
    console.error(e);
  }
})

const goGalleryPage = () => {
  router.push({name: 'GalleryList'});
};

async function updateDataAndGolist() {
  try {
    await $axios.put(`/galleries`, {...gallery})
    router.push({name: 'GalleryRead', params: {bno: bno.value}});
  } catch (e) {
    console.log(e)
  }
}

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

const isValidateFile = (file) => {
  if (file.size > 1048576) { // 1mb까지 업로드가능
    return false;
  }
  if (!(file.type === "image/gif" || file.type === "image/jpeg" || file.type === "image/png")) {
    return false;
  }
  return true;
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

<style scoped>

</style>