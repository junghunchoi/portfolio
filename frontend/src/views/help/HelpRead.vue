<template>
  <section>
    <div class="titleArea d-flex  mt-5">
      <p class=" me-4 fw-bold text-start leftArea ps-2">제목</p>
      <div >{{help.title}}</div>
    </div>
    <hr/>
    <div class="contentArea d-flex ">
      <p class=" me-4 fw-bold text-start leftArea ps-2">내용</p>
      <TheEditor
          v-if="help.content"
          :init-eeditor-data="help.content"
          v-model:editorData="help.content"
          :isDisabled="true"/>
    </div>
    <hr/>
    <div class="answerArea d-flex">
      <p class=" me-4 fw-bold text-start leftArea ps-2">답변</p>
      <TheEditor
          v-if="help.content"
          :init-eeditor-data="help.answer"
          v-model:editorData="help.answer"
          :isDisabled="true"/>
    </div>
    <div class="float-end">
      <button type="button" class="btn btn-primary me-1" @click="goListPage">목록</button>
      <button v-if="help.writer === userName" type="button" class="btn btn-secondary" @click="modifyHelp">수정</button>
    </div>

  </section>
</template>

<script setup>
import {ref, onMounted, reactive,inject} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import {useAuthStore} from "@/store/loginStore.js";
import {storeToRefs} from 'pinia'
import TheEditor from "@/components/common/TheEditor.vue";

const AUTHORITY = useAuthStore().getAuthorities

const route = useRoute();
const router = useRouter();
const $axios = inject('$axios');
const hno = ref(Number(route.params.hno));
const authStore = useAuthStore();
const {userName} = storeToRefs(authStore);



const help = reactive({
  hno: '',
  title: '',
  content: '',
  writer: '',
  answer:''
});

onMounted(async ()=>{
  const res = await $axios.get(`/helps/${hno.value}`)
  console.log(res);
  Object.assign(help, res.data.resultData);
})

const goListPage = () => {
  router.push('/helps');
};

const modifyHelp = () => {
  router.push({name: 'HelpModify', params: {hno: hno.value}}); // bno는 이동하려는 라우트의 경로에 정의된 파라미터입니다.
}

</script>

<style scoped>
.leftArea{
  width: 15%;
}
.editor-container .ck.ck-editor__main > .ck-editor__editable {
  border: none;
}
</style>