<template>
  <section>
    <div class="mb-3">
      <label class="form-label">첨부파일</label>
      <div>jpg, gif, png 파일만 1mb까지 업로드가 가능합니다.</div>
      <div>1번째 이미지는 썸네일로 활용됩니다.</div>
      <div v-for="(file, index) in props.filesByParent" :key="file.id" style="padding:30px;">
        <button class="btn btn-secondary" @click="openFileDialog">파일 선택</button>
        {{
          file.file.fileName
        }}
<!--        <input type="file" accept=".jpg,.gif,.png, .img" @change="handleFileUpload($event, index)"/>-->
        <button class="btn btn-light" @click="openModal(index)"><i class="bi bi-x"></i>
        </button>
      </div>
      <div style="padding:30px;">

      <button class="btn btn-secondary" @click="openFileDialog">파일 선택</button>
      파일을 추가해주세요
      <button class="btn btn-light" @click="removefiles(index)"><i class="bi bi-x"></i>
      </button>
      </div>
    </div>
  </section>
  <Teleport to="#modal">
    <TheModal
        v-model="show"
        :is-popup="show"
        :title="'확인'"
    >
      <template #default>
        삭제하시겠습니까? 취소시 다시 등록하셔야합니다.
      </template>
      <template #actions>
        <button class="btn btn-danger" @click="clickRemoveHandler">삭제</button>
        <button class="btn btn-light" @click="closeModal">닫기</button>
      </template>
    </TheModal>
  </Teleport>
</template>

<script setup>
import {inject, ref, watch} from 'vue';
import TheModal from "@/components/common/TheModal.vue";

// 컴포넌트로부터 받을 파일리스트
const props = defineProps({
  filesByParent: {
    type: Array,
    default: () => []
  },
});

const emit = defineEmits(["update:fileData"])


const clickFileIndex = ref(0);


const handleFileUpload = (event, index) => {
  const selectedFile = event.target.files[0];

  if (!isValidateFile(selectedFile)) {
    show.value = true;
    return;
  }

  props.filesByParent[index].file = selectedFile;
  formData.append('files', selectedFile);
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



const openFileDialog = () => {
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.style.display = 'none';
  fileInput.accept = ".jpg,.gif,.png,.img"
  fileInput.onchange = onFileChange;
  document.body.appendChild(fileInput);
  fileInput.click();
  document.body.removeChild(fileInput);
}

const onFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      const fileData = reader.result;
    };
    reader.readAsDataURL(file);
  }
  props.filesByParent.push({id:props.filesByParent.length, file:{fileName:file.name}})
  emit('update:fileData', file)

}

// 모달 로직
const show = ref(false);

const openModal = (index) => {
  show.value = true;
  clickFileIndex.value = index;
};

const closeModal = () => {
  show.value = false;
}

const clickRemoveHandler = async () =>{
  const fileName = props.filesByParent[clickFileIndex.value].file.uploadedFileName
  const res = await $axios.delete(`/files/remove/${fileName}`);
  props.filesByParent.splice(clickFileIndex.value, 1);
  show.value = false;
}
</script>

<style scoped>
img{
  width: 70px;
  height: 70px;
}
</style>