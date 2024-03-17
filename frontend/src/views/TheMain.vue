<template>
  <section>
    <div class="container">
      <div class="row">
        <BoardCard class="col"
                   :title="'공지사항'"
                   :items="Mock"
                   :destination="'/notices'"/>
        <BoardCard class="col" :title="'자유게시판'"
                   :items="Mock"
                   :destination="'/frees'"/>
      </div>
    </div>
    <div class="row">
      <BoardCard class="col"
                 :title="'갤러리'"
                 :items="Mock"
                 :destination="'/galleries'"/>
      <BoardCard class="col"
                 :title="'문의게시판'"
                 :items="Mock"
                 :destination="'/helps'"/>
    </div>

  </section>
</template>

<script setup>
import BoardCard from "@/views/free/BoardCard.vue";
import {ref} from "vue";

const Mock = ref([
  {
    num: 1,
    category: '카테고리',
    title: '제목',
    isNew: true,
    isLcok: false,
  }, {
    num: 1,
    category: '카테고리',
    title: '제목',
    isNew: true,
    isLcok: false,
  }
])

</script>

<style scoped>

</style>