<template>
  <section>
    <b-form inline>
      <label class="sr-only" for="inline-form-input-name">제목</label>
      <b-form-input
          v-model="notice.title"
          id="inline-form-input-name"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="제목을 입력해 주세요."

      ></b-form-input>
      <TheEditor
          :init-eeditor-data="notice.content"
          v-model:editorData="notice.content"/>

      <input type="checkbox" class="mb-2 mr-sm-2 mb-sm-0 mt-2"
                       :checked="notice.isMain"
                       v-model="notice.isMain"/>
<label>상단고정</label>
      <button class="btn btn-primary me-auto mt-2"

              @click="modifyNoticeHandler">저장
      </button>
    </b-form>
  </section>
</template>

<script setup>
import {inject, reactive} from 'vue'
import TheEditor from "@/components/common/TheEditor.vue";
import {useRouter, useRoute} from "vue-router";

const route = useRoute();
const router = useRouter();
const $axios = inject('$axios')
const notice = reactive({
  nno: history.state.nno,
  title: history.state.title,
  content: history.state.content,
  isMain: history.state.isMain
});

const modifyNoticeHandler = async () => {
  notice.isMain = notice.isMain = 1;

  console.log(notice)
  const res = await $axios.patch('/notices', notice)
  console.log(res)
  if (res.status === 200) {
    router.push({name: 'NoticeList'})
  } else {
    console.log(res.data)
  }
}

console.log(notice)
</script>
<style scoped>

</style>