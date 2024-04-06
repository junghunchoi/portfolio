<template>
  <div>
    <h2>게시글 등록</h2>
    <hr class="my-4"/>
    <form @submit.prevent>
      <div class="mb-3">
        <label for="title" class="form-label">작성자</label>
        <input
            v-model="form.writer"
            type="text"
            class="form-control"
            id="writer"
            readonly
        >
      </div>
      <div class="mb-3">
        <label for="title" class="form-label">제목</label>
        <input
            v-model="form.title"
            type="text"
            class="form-control"
            id="title"
        />
      </div>
      <div class="mb-3">
        <label for="content" class="form-label">내용</label>
        <textarea
            v-model="form.content"
            class="form-control"
            id="content"
            rows="3"
        ></textarea>
      </div>
      <div class="mb-3">
        <label class="form-label">첨부파일</label>
        <div>jpg, gif, png 파일만 1mb까지 업로드가 가능합니다.</div>
        <div>1번째 이미지는 썸네일로 활용됩니다.</div>
        <div v-for="(input, index) in fileInputs" :key="index" style="padding:30px;">
          <input type="file" @change="handleFileUpload($event, index)"/>
          <button class="btn btn-light" ><i class="bi bi-x"></i></button>
        </div>

      </div>
      <div class="pt-4">
        <button
            type="button"
            class="btn btn-outline-dark me-2"
            @click="goGalleryPage"
        >
          목록
        </button>
        <button class="btn btn-primary" @click="save">저장</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import {ref} from 'vue';
</script>

<style scoped>

</style>