<template>
  <section>
    <div class="row mt-3">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <div class="input-group mb-3">
              <span class="input-group-text">제목</span>
              <input type="text" class="form-control" v-model="help.title">
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text">내용</span>
              <input type="text" class="form-control" v-model="help.content">
            </div>
            <div class="my-4">
              <div class="float-end">
                <button type="button" class="btn btn-primary" @click="goListPage">목록</button>
                <button type="button" class="btn btn-secondary" @click="modifyHelpHandler">저장
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {ref, onMounted, reactive, inject} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import {useAuthStore} from "@/store/loginStore.js";
import {storeToRefs} from 'pinia'

const AUTHORITY = useAuthStore().getAuthorities

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
  answer: ''
});

onMounted(async () => {
  const res = await $axios.get(`/helps/${hno.value}`)
  console.log(res);
  Object.assign(help, res.data);
})

const goListPage = () => {
  router.push('/helps');
};

const modifyHelpHandler = () => {
  $axios.put('/helps', {
    ...help,
  })
  .then(res => router.push({name: 'HelpList'}))
}
</script>

<style scoped>

</style>