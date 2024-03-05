<template>
  <div class="row mt-3">
    <div class="col">
      <div class="card">
        <div class="card-header">Board Read</div>
        <div class="card-body">
          <div class="input-group mb-3" v-for="(value, key) in board" :key="key">
            <span class="input-group-text">{{ key }}</span>
            <input type="text" class="form-control" :value="value" readonly>
          </div>
          <div class="my-4">
            <div class="float-end">
              <button type="button" class="btn btn-primary" @click="goBoardPage">List</button>
              <button type="button" class="btn btn-secondary"  @click="modifyBoard">Modify</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {getBoardBybno} from "@/api/board";

const route = useRoute();
const router = useRouter();
const bno = ref(route.params.bno);

const board = ref({
  bno: '',
  title: '',
  category:'',
  content: '',
  writer: '',
  regDate: new Date(),
  modDate: new Date(),

});


const fetchData = async (bno) => {
  try{
    const {data} = await getBoardBybno(bno);
    board.value = data;
    console.log("board " + data.value);
  }catch (e) {
    console.error(e);
  }
};

fetchData(bno.value)

const goBoardPage = () => {
  router.push('/boards');
};

const modifyBoard = () => {
  router.push({ name: 'BoardModify', params: { bno: bno.value} }); // bno는 이동하려는 라우트의 경로에 정의된 파라미터입니다.
}

</script>

<style scoped>

</style>