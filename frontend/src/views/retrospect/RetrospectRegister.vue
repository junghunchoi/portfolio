<template>
  <div>
    <h2>공지글 등록</h2>
    <hr class="my-4"/>
    <form @submit.prevent>
      <div class="mb-3">
        <label for="title" class="form-label">작성자</label>
        <input
            v-model="retrospect.writer"
            type="text"
            class="form-control"
            id="writer"
            readonly
        >
      </div>
      <div class="mb-3">
        <label for="title" class="form-label">제목</label>
        <input
            v-model="retrospect.title"
            type="text"
            class="form-control"
            id="title"
        />
      </div>
      <div class="mb-3">
        <label  class="form-label">내용</label>
        <TheEditor
            :init-eeditor-data="retrospect.content"
            v-model:editorData="retrospect.content"
            :isDisabled="false"/>
      </div>
      <div class="mb-3">
        <label class="form-label">상단고정</label>
        <input type="checkbox"
               v-model="retrospect.isMain"
        />
      </div>
      <div class="pt-4">
        <button
            type="button"
            class="btn btn-outline-dark me-2"
            @click="goretrospectPage"
        >
          목록
        </button>
        <button class="btn btn-primary" @click="registerretrospectHandler">저장</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import TheModal from "@/components/TheModal.vue";
import {useAuthStore} from "@/store/loginStore";
import {storeToRefs} from "pinia";
import {inject, reactive, ref} from "vue";
import {useRouter} from "vue-router";
import TheEditor from "@/components/TheEditor.vue";
import {createRetrospect} from "@/api/retrospect";
const authStore = useAuthStore();
const {userName} = storeToRefs(authStore);


const show = ref(false);
const router = useRouter();

const retrospect = reactive({
  title: null,
  content: null,
  isMain: 0,
  writer: userName
});

const goretrospectPage = () => {
  router.push('/retrospects');
};

const registerretrospectHandler = async () => {
  retrospect.isMain = retrospect.isMain === true ? 1 : 0;
  const res = await createretrospect(retrospect)
  router.push('/retrospects');
}

const closeModal = () => {
  show.value = false;
}
</script>

<style scoped>

</style>