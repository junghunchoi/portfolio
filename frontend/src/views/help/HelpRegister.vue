<template>
  <section>
    <h2>문의글 작성</h2>
    <hr class="my-4"/>
    <form @submit.prevent>
      <div class="mb-3">
        <label for="title" class="form-label">제목*</label>
        <input
            v-model="help.title"
            type="text"
            class="form-control"
            id="title"
        />
      </div>
      <div class="mb-3">
        <label for="content" class="form-label">내용*</label>
        <TheEditor
            :init-editor-data="help.content"
            v-model:editorData="help.content"
            :isDisabled="false"/>
      </div>
      <div class="pt-2">
        <label class="form-label">비밀글</label>
        <input type="checkbox" v-model="help.isSecret" />
      </div>
      <button class="btn btn-primary" @click="save">저장</button>
    </form>
  </section>
</template>

<script setup>
import {inject, reactive} from 'vue';
import {useRouter} from 'vue-router';
import {useAuthStore} from "@/store/loginStore.js";
import {storeToRefs} from 'pinia'
import TheEditor from "@/components/TheEditor.vue";
import {createHelp} from "@/api/help.js";


const authStore = useAuthStore();
const {userName} = storeToRefs(authStore);

const router = useRouter();

const help = reactive({
  hno: '',
  title: '',
  content: '',
  writer: userName,
  isSecret:0,
  regDate: new Date(),
  modDate: new Date(),
});

const save = async () => {
  help.isSecret = help.isSecret === true ? 1 : 0;
  await createHelp(help)
  await router.push({name: 'HelpList'});
  };

</script>

<style scoped>

</style>