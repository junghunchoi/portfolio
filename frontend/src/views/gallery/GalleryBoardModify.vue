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
      <div  class="mb-3">
        <label for="content" class="form-label">내용</label>
        <TheEditor
            v-if="gallery.title"
            :init-editor-data="gallery.content"
            v-model:editorData="gallery.content"
            :isDisabled="false"/>
      </div>
      <TheFiles :files-by-parent="files"
                @update:fileData="handleFileData"
      />
      <div class="pt-4">
        <button
            type="button"
            class="btn btn-outline-dark me-2"
            @click="goGalleryPage"
        >
          목록
        </button>
        <button class="btn btn-primary" @click="updateDataAndGolist">저장</button>
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
import TheModal from "@/components/TheModal.vue";
import {useAuthStore} from "@/store/loginStore";
import {storeToRefs} from "pinia";
import TheEditor from "@/components/TheEditor.vue";
import TheFiles from "@/components/TheFiles.vue";
import {getGalleryBybno, updateGallery} from "@/api/gallery.js";
import {uploadFile} from "@/api/file.js";

const authStore = useAuthStore();
const {userName} = storeToRefs(authStore);

const route = useRoute();
const router = useRouter();

const bno = ref(route.params.bno);
const gallery = reactive({
});

const files = ref([]);
const formData = new FormData();
formData.set('bno', Number(bno.value));

onMounted(async ()=>{
  try {
    const {data} = await getGalleryBybno(bno.value);
    await Object.assign(gallery, data);

    gallery.files.forEach((file, index) => {
      files.value.push({id: index, file: file})
    })
  } catch (e) {
    console.error(e);
  }
})

const goGalleryPage = () => {
  router.push({name: 'GalleryList'});
};

const updateDataAndGolist=  async () => {
  try {
    await updateGallery(gallery);
    await uploadFile(formData);
    router.push({name: 'GalleryRead', params: {bno: bno.value}});
  } catch (e) {
    console.log(e)
  }
}

const handleFileData = (value) => {
  formData.append('files', value);
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