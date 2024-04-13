<template>
  <div>
    <h2>공지글 등록</h2>
    <hr class="my-4"/>
    <form @submit.prevent>
      <div class="mb-3">
        <label for="title" class="form-label">작성자</label>
        <input
            v-model="notice.writer"
            type="text"
            class="form-control"
            id="writer"
            readonly
        >
      </div>
      <div class="mb-3">
        <label for="title" class="form-label">제목</label>
        <input
            v-model="notice.title"
            type="text"
            class="form-control"
            id="title"
        />
      </div>
      <div class="mb-3">
        <label  class="form-label">내용</label>
        <textarea
            v-model="notice.content"
            class="form-control"
            id="content"
            rows="3"
        ></textarea>
      </div>
      <div class="mb-3">
        <label class="form-label">상단고정</label>
        <input type="checkbox"
               v-model="notice.isMain"
        />
      </div>
      <div class="pt-4">
        <button
            type="button"
            class="btn btn-outline-dark me-2"
            @click="goNoticePage"
        >
          목록
        </button>
        <button class="btn btn-primary" @click="registerNoticeHandler">저장</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import TheModal from "@/components/common/TheModal.vue";
import {useAuthStore} from "@/store/loginStore";
import {storeToRefs} from "pinia";
import {inject, reactive, ref} from "vue";
import {useRouter} from "vue-router";

const authStore = useAuthStore();
const {userName} = storeToRefs(authStore);
const $axios = inject('$axios');

const show = ref(false);
const router = useRouter();

const notice = reactive({
  title: null,
  content: null,
  isMain: 0,
  writer: userName
});

const goNoticePage = () => {
  router.push('/notices');
};

const registerNoticeHandler = async () => {
  notice.isMain = notice.isMain === true ? 1 : 0;
  const res = $axios.post('/notices', {...notice})
  router.push('/notices');
}

const closeModal = () => {
  show.value = false;
}
</script>

<style scoped>

</style>