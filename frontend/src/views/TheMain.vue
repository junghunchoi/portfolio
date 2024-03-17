<template>
  <BoardCard :title ="'공지사항'"
              :items="Mock"/>
  <BoardCard :title ="'자유게시판'"
             :items="Mock"/>
  <BoardCard :title ="'갤러리'"
             :items="Mock"/>
  <BoardCard :title ="'문의게시판'"
             :items="Mock"/>

</template>

<script setup>
import BoardCard from "@/views/board/BoardCard.vue";
import {ref} from "vue";

const Mock = ref({
  num: 1,
  category: '카테고리',
  title: '제목',
  isNew: true,
  isLcok: false,
})

</script>

<style scoped>

</style>