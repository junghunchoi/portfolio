<template>
  <div>
    <h2>게시글 등록</h2>
    <hr class="my-4"/>
    <form @submit.prevent="save">
      <div class="mb-3">
        <label for="title" class="form-label">작성자</label>
        <input
            v-model="form.writer"
            type="text"
            class="form-control"
            id="writer"
        />
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
        <label for="title" class="form-label">카테고리</label>
        <select v-model="form.cno" class="form-control">
          <option value="1">java</option>
          <option value="2">javascript</option>
          <option value="3">sql</option>
        </select>
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
      <div class="pt-4">
        <button
            type="button"
            class="btn btn-outline-dark me-2"
            @click="goBoardPage"
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
import {useRouter} from 'vue-router';
import {createBoard} from '@/api/board';

const router = useRouter();
const form = ref({
  title: null,
  content: null,
  cno: null,
  writer: null
});

const save = async () => {
  try {
    await createBoard({
      ...form.value,
    });
    router.push({name: 'BoardList'});
  } catch (error) {
    console.error(error);
  }
};


const goBoardPage = () => {
  router.push('/boards');
};

</script>

<style scoped>

</style>