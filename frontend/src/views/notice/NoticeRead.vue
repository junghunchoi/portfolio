<template>
  <section>
    <div class="header">
      <p class="h3 p-4 text-start">공지사항</p>
    </div>
    <div class="information">
      <span>{{board.category}}</span>
      <span>{{board.title}}</span>
      <span>{{board.regDate}}</span>
      <span>{{board.writer}}</span>
      <span>{{board.viewCount}}</span>
    </div>
    <div class = "main">
      <div>
        {{board.content}}
      </div>
    </div>

    <button @click="goNoticeBoardList">목록</button>

  </section>
</template>

<script setup>
import {onMounted, reactive, ref} from 'vue';
import {useRoute, useRouter} from "vue-router";
import {getBoardBybno} from "@/api/board";
import {getReplies} from "@/api/reply";

const route = useRoute();
const router = useRouter();

const board = reactive({
  title: '',
  category: {cno: null, content: null},
  content: '',
  writer: '',
  viewCount: 0,
  regDate: new Date(),
  modDate: new Date(),
});

const loadBoardData = async () => {
  try {
    const {data} = await getBoardBybno(bno.value);
    Object.assign(board, data); // board 객체에 데이터 할당
  } catch (e) {
    console.error(e);
  }
};

const goNoticeBoardList = () => {
  router.push('/notices');
};


onMounted(async () => {
  await loadBoardData();
  const response = await getReplies(bno.value); // getReplies 호출 시 bno 값 전달 수정
});

</script>

<style scoped>

</style>