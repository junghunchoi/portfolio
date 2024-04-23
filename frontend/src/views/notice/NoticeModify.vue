<template>
  <section>
    <b-form inline>
      <label class="sr-only" for="inline-form-input-name">제목</label>
      <b-form-input
          v-model="notice.title"
          id="inline-form-input-name"
          class="mb-2 mr-sm-2 mb-sm-0 mb-3"
          placeholder="제목을 입력해 주세요."

      ></b-form-input>
      <TheEditor
          v-if="notice.content"
          :init-eeditor-data="notice.content"
          v-model:editorData="notice.content"
          class="mt-3"/>
      <label>
      <input type="checkbox" class="mb-2 mr-sm-2 mb-sm-0 mt-2"
             :checked="true"
             v-model="notice.isMain"
      />
      상단고정</label>
    </b-form>
    <button class="btn btn-primary me-auto mt-2"
            @click="modifyNoticeHandler">저장
    </button>
  </section>
</template>

<script setup>
import {inject, reactive, watch} from 'vue'
import TheEditor from "@/components/common/TheEditor.vue";
import {useRouter} from "vue-router";

const router = useRouter();
const $axios = inject('$axios')
const notice = reactive({
  nno: history.state.nno,
  title: history.state.title,
  content: history.state.content,
  isMain: history.state.isMain === 1
});

const modifyNoticeHandler = async () => {
  notice.isMain = notice.isMain === true ? 1 : 0;

  console.log(notice)
  const res = await $axios.patch('/notices', notice)
  console.log(res)
  if (res.status === 200) {
    router.push({name: 'NoticeList'})
  } else {
  }
}
</script>
<style scoped>

</style>