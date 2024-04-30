<template>
  <section>
    <div class="row">
      <div class="col-12 mb-3">
        <h2>{{ help.title }}</h2>
        <p class="text-muted">작성자: {{ help.writer }} | 조회수: {{ help.viewCount }}</p>
      </div>
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
          :isDisabled="true"
          />
    </div>
    <div class="float-end">
      <button type="button" class="btn btn-primary me-1" @click="goListPage">목록</button>
      <button v-if="help.writer === userName || AUTHORITY === 'ADMIN'" type="button" class="btn btn-secondary me-1" @click="modifyHelpHandler">수정</button>
      <button v-if="help.writer === userName" type="button" class="btn btn-danger" @click="deleteHelpHandler">삭제</button>
    </div>

  </section>
</template>

<script setup>
import {ref, onMounted, reactive,inject} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import {useAuthStore} from "@/store/loginStore.js";
import {storeToRefs} from 'pinia'
import TheEditor from "@/components/common/TheEditor.vue";
import {deleteHelp, getHelpByhno} from "@/api/help.js";


const route = useRoute();
const router = useRouter();

const hno = ref(Number(route.params.hno));
const authStore = useAuthStore();
const AUTHORITY = useAuthStore().getAuthorities
const {userName} = storeToRefs(authStore);

const help = reactive({}
);

onMounted(async ()=>{
  const res = await getHelpByhno(hno.value)
  Object.assign(help, res.data.resultData);
})

const goListPage = () => {
  router.push('/helps');
};

const modifyHelpHandler = () => {
  router.push({name: 'HelpModify', params: {hno: hno.value}}); // bno는 이동하려는 라우트의 경로에 정의된 파라미터입니다.
}

const deleteHelpHandler = async () =>{
  await deleteHelp(hno.value)
  router.push({name: 'HelpList'});
}

</script>

<style scoped>
.container * {
  border: none !important;
}
.leftArea{
  width: 15%;
}
/*.editor-container .ck.ck-editor__main > .ck-editor__editable {*/
/*  border: none;*/
/*}*/
</style>