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
              <button type="button" class="btn btn-primary" @click="goToList">List</button>
              <button type="button" class="btn btn-secondary" v-if="isOwner" @click="modifyBoard">Modify</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue';
import { useRouter,useRoute } from 'vue-router';
import {getBoardBybno} from "@/api/board";

// const router = useRouter();
// const route = useRoute();
// const board = ref({});
// const bno = ref(route);
//
//
// watch(() => route.params.bno, (newBno) => {
//   bno.value = newBno;
// });


// console.log("bno: " + bno);

// const fetchData = async () => {
//   try{
//     const {data} = await getBoardBybno(bno);
//     board.value = data;
//     console.log(data);
//   }catch (e) {
//     console.error(e);
//   }
// };
//
// fetchData();
</script>

<style scoped>

</style>