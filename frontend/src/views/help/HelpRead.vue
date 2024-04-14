<template>
  <section>
    <div class="row">
      <div class="col-12 mb-3">
        <h2>{{ help.title }}</h2>
        <p class="text-muted">작성자: {{ help.writer }} </p>
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
              <input type="text" class="form-control" :value="help.title" readonly>
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text">내용</span>
              <input type="text" class="form-control" :value="help.content" readonly>
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text">답변</span>
              <input type="text" class="form-control" :value="help.answer" readonly>
            </div>


            <div class="my-4">
              <div class="float-end">
                <button type="button" class="btn btn-primary" @click="goListPage">목록</button>
                <button v-if="help.writer === userName" type="button" class="btn btn-secondary" @click="modifyHelp">수정</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {ref, watch, onMounted, reactive,inject} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import {useAuthStore} from "@/store/loginStore.js";
import {storeToRefs} from 'pinia'

const route = useRoute();
const router = useRouter();
const $axios = inject('$axios');
const hno = ref(Number(route.params.hno));
const authStore = useAuthStore();
const {userName} = storeToRefs(authStore);


const help = reactive({
  hno: '',
  title: '',
  content: '',
  writer: '',
  answer:''
});

onMounted(async ()=>{
  const res = await $axios.get(`/helps/${hno.value}`)
  console.log(res);
  Object.assign(help, res.data);
})

const goListPage = () => {
  router.push('/helps');
};

const modifyHelp = () => {
  router.push({name: 'HelpModify', params: {hno: hno.value}}); // bno는 이동하려는 라우트의 경로에 정의된 파라미터입니다.
}

</script>

<style scoped>

</style>