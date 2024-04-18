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
      <button class="btn btn-light" @click="goNoticeBoardList">목록</button>
      <button v-if="AUTHORITY === 'ADMIN'" class="btn btn-danger ms-1" @click="modifyNoticeHandler">
        수정
      </button>
    </div>
  </section>
</template>

<script setup>
import {inject, onMounted, reactive, ref} from 'vue';
import {useRoute, useRouter} from "vue-router";
import {useAuthStore} from "@/store/loginStore.js";
import TheEditor from "@/components/common/TheEditor.vue";

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

onMounted(async () => {
  const res = await $axios.get(`notices/${nno.value}`)
  Object.assign(notice, res.data.resultData);
  console.log(notice);
});

</script>

<style scoped>
.editor-container .ck.ck-editor__main > .ck-editor__editable {
  border: none;
}
</style>