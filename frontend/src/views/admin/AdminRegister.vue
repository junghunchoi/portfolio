<script setup>
import { reactive, ref} from 'vue';
import {useRouter} from 'vue-router';
import {useAuthStore} from "@/store/loginStore.js";
import {storeToRefs} from 'pinia'
import TheEditor from "@/components/TheEditor.vue";
import {createBoard} from "@/api/board.js";
import {uploadFile} from "@/api/file.js";

const record = reactive({
  category: null,
  amount: null,
})
</script>

<template>
  <h2>기록저장</h2>
  <form @submit.prevent>
    <select>
      <option value="cycle">cycle</option>
      <option value="training">training</option>
      <option value="running">running</option>
      <option value="studying">studying</option>
    </select>
    <input type="text" id="record">
  </form>
  <hr/>
  <h2>게시글 작성</h2>
  <div class="mb-3">
    <label for="title" class="form-label">제목</label>
    <input
        v-model="board.title"
        type="text"
        class="form-control"
        id="title"
    />
  </div>
  <label class="form-label">내용</label>
  <TheEditor
      :init-eeditor-data="board.content"
      v-model:editorData="board.content"
      :isDisabled="false"/>
  <div style="padding:30px;">
    <input type="file" @change="handleFileUpload($event, 0)"/>
  </div>
  <div style="padding:30px;">
    <input type="file" @change="handleFileUpload($event, 1)"/>
  </div>
  <div style="padding:30px;">
    <input type="file" @change="handleFileUpload($event, 2)"/>
  </div>
</template>

<style scoped>

</style>