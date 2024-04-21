<template>
  <section>
    <div class="row">
      <div class="col-12 mb-3">
        <h2>{{
            notice.title
          }}</h2>
        <p class="text-muted">작성자: {{
            notice.writer
          }} | 조회수: {{
            notice.viewCount
          }}</p>
        <hr>
      </div>
    </div>

  </section>
  <section>
    <TheEditor
        v-if="notice.content"
        :init-eeditor-data="notice.content"
        v-model:editorData="notice.content"
        :isDisabled="true"/>
    <div class="float-end m-1">
      <button class="btn btn-primary" @click="goNoticeBoardList">목록</button>
      <button v-if="AUTHORITY === 'ADMIN'"
              class="btn btn-secondary ms-1"
              @click="modifyNoticeHandler">수정
      </button>
      <button v-if="AUTHORITY === 'ADMIN'"
              class="btn btn-danger ms-1"
              @click="show=true">
        삭제
      </button>
    </div>
  </section>
  <Teleport to="#modal">
    <TheModal
        v-model="show"
        :isPopup="show"
        :title="'확인'"
    >
      <template #default>
        정말로 삭제하시겠습니까?
      </template>
      <template #actions>
        <button class="btn btn-danger" @click="deleteNoticeHandler">삭제</button>
        <button class="btn btn-light" @click="closeModal">닫기</button>
      </template>
    </TheModal>
  </Teleport>
</template>

<script setup>
import {inject, onMounted, reactive, ref} from 'vue';
import {useRoute, useRouter} from "vue-router";
import {useAuthStore} from "@/store/loginStore.js";
import TheEditor from "@/components/common/TheEditor.vue";
import TheModal from "@/components/common/TheModal.vue";

const AUTHORITY = useAuthStore().getAuthorities
const route = useRoute();
const router = useRouter();
const $axios = inject('$axios');
const nno = ref(route.params.nno);

const notice = reactive({
  title: '',
  content: '',
  writer: '',
  isMain: 0,
  viewCount: 0,
});

const goNoticeBoardList = () => {
  router.push('/notices');
};

const modifyNoticeHandler = () => {
  router.push({name: 'NoticeModify', state: {...notice}});
}

const deleteNoticeHandler = async () =>{
  await $axios.delete(`/notices/${nno.value}`)
}

onMounted(async () => {
  const res = await $axios.get(`notices/${nno.value}`)
  Object.assign(notice, res.data.resultData);
  console.log(notice);
});

// 모달 로직
const show = ref(false);

const openModal = (index) => {
  show.value = true;
};

const closeModal = () => {
  show.value = false;
}

</script>

<style scoped>
.editor-container .ck.ck-editor__main > .ck-editor__editable {
  border: none;
}
</style>