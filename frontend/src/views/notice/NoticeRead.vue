<template>
  <section>
    <div class="row">
      <div class="col-12 mb-3">
        <h2>{{ notice.title }}</h2>
        <p class="text-muted">작성자: {{ notice.writer }} | 조회수: {{ notice.viewCount }}</p>
      </div>
    </div>
  </section>
  <section>
    <div class="row mt-3">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <div class="input-group mb-3">
              <span class="input-group-text">제목</span>
              <input type="text" class="form-control" :value="notice.title" readonly>
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text">내용</span>
              <input type="text" class="form-control" :value="notice.content" readonly>
            </div>
            <div class="my-4">
              <div class="float-end">
                <button class="btn btn-light" @click="goNoticeBoardList">목록</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {inject, onMounted, reactive, ref} from 'vue';
import {useRoute, useRouter} from "vue-router";
import {useAuthStore} from "@/store/loginStore.js";

const AUTHORITY = useAuthStore().getAuthorities
const route = useRoute();
const router = useRouter();
const $axios = inject('$axios');
const nno = ref(route.params.nno);

const notice = reactive({
  title: '',
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
  const res = await $axios.get(`notices/${nno.value}`)
  console.log(res)
  Object.assign(notice, res.data.resultData);
});

</script>

<style scoped>

</style>