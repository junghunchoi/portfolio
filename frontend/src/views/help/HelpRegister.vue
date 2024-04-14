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
        <textarea
            v-model="help.content"
            class="form-control"
            id="content"
            rows="3"
        ></textarea>
      </div>
      <div class="pt-4">
        <label class="form-label">비밀글</label>
        <input type="checkbox" v-model="help.isSecret" />
      </div>
      <button class="btn btn-primary" @click="save">저장</button>
    </form>
  </section>
</template>

<script setup>
import {reactive, ref} from 'vue';
import {useRouter} from 'vue-router';
import {createHelp} from '@/api/help';
import {useAuthStore} from "@/store/loginStore.js";
import {storeToRefs} from 'pinia'

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

const save = () => {
  console.log(help)
  help.isSecret = help.isSecret === true ? 1 : 0;
  createHelp({
    ...help,
  }).then(() => {
      router.push({name: 'HelpList'});
    })
  };

const goHelpPage = () => {
  router.push({name: 'HelpList'});
};


</script>

<style scoped>

</style>