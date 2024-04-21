<template>
  <section>
    <div class="titleArea d-flex  mt-5">
      <p class=" me-4 fw-bold text-start leftArea ps-2 w-25">제목</p>
      <div >{{help.title}}</div>
    </div>
    <hr/>
    <div class="contentArea d-flex ">
      <p class=" me-4 fw-bold text-start leftArea ps-2">내용</p>
      <TheEditor
          v-if="help.content"
          :init-eeditor-data="help.content"
          v-model:editorData="help.content"
          :isDisabled="false"/>
    </div>
    <hr/>
    <div v-if="AUTHORITY==='ADMIN'" class="answerArea d-flex">
      <p class=" me-4 fw-bold text-start leftArea ps-2">답변</p>
      <TheEditor
          :init-eeditor-data="help.answer"
          v-model:editorData="help.answer"
          :isDisabled="false"/>
    </div>
    <div class="float-end">
      <button type="button" class="btn btn-primary me-1" @click="goListPage">목록</button>
      <button type="button" class="btn btn-secondary" @click="modifyHelpHandler">저장
      </button>
    </div>
  </section>
</template>

<script setup>
import {ref, onMounted, reactive, inject} from 'vue';
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
  answer: ''
});

onMounted(async () => {
  const res = await $axios.get(`/helps/${hno.value}`)
  Object.assign(help, res.data.resultData);
})

const goListPage = () => {
  router.push('/helps');
};

const modifyHelpHandler = () => {
  console.log(help);
  $axios.patch('/helps', help)
  .then(res => router.push({name: 'HelpList'}))
}
</script>

<style scoped>
p{
  width: 10%;
}
</style>