<template>
  <section>
    <div class="row">
      <div class="col-12 mb-3">
        <h2>{{
            retrospect.title
          }}</h2>
        <p class="text-muted">작성자: {{
            retrospect.writer
          }} | 조회수: {{
            retrospect.viewCount
          }}</p>
        <hr>
      </div>
    </div>
  </section>
  <section>
    <TheEditor
        v-if="retrospect.content"
        :init-editor-data="retrospect.content"
        v-model:editorData="retrospect.content"
        :isDisabled="true"/>
    <div class="float-end m-1">
      <button class="btn btn-primary" @click="goretrospectBoardList">목록</button>
      <button v-if="AUTHORITY === 'ADMIN'"
              class="btn btn-secondary ms-1"
              @click="modifyretrospectHandler">수정
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
        <button class="btn btn-danger" @click="deleteretrospectHandler">삭제</button>
        <button class="btn btn-light" @click="closeModal">닫기</button>
      </template>
    </TheModal>
  </Teleport>
</template>

<script setup>
import {inject, onMounted, reactive, ref} from 'vue';
import {useRoute, useRouter} from "vue-router";
import {useAuthStore} from "@/store/loginStore.js";
import TheEditor from "@/components/TheEditor.vue";
import TheModal from "@/components/TheModal.vue";
import {deleteRetrospect, getRetrospectById} from "@/api/retrospect.js";

const AUTHORITY = useAuthStore().getAuthorities
const route = useRoute();
const router = useRouter();
const id = ref(route.params.id);

const retrospect = reactive({
  title: '',
  content: '',
  writer: '',
  isMain: 0,
  viewCount: 0,
});

const goretrospectBoardList = () => {
  router.push('/retrospects');
};

const modifyretrospectHandler = () => {
  router.push({name: 'retrospectModify', state: {...retrospect}});
}

const deleteretrospectHandler = async () =>{
  await deleteretrospect(id.value)
  router.push({name: 'retrospectList'})
}

onMounted(async () => {
  const res = await getRetrospectById(id.value)
  Object.assign(retrospect, res.data.resultData);
});

// 모달 로직
const show = ref(false);

const openModal = () => {
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