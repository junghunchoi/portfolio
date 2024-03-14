<template>
  <div class="row mt-3">
    <div class="col">
      <div class="card">
        <div class="card-header">
          JOIN
        </div>
        <div class="card-body">
          <form @submit.prevent="submitForm">
            <div class="input-group mb-3">
              <span class="input-group-text">아이디</span>
              <input v-model="form.mid" type="text" name="mid" class="form-control">
            </div>

            <div class="input-group mb-3">
              <span class="input-group-text">비밀번호</span>
              <input v-model="form.mpw" type="password" name="mpw" class="form-control">
            </div>

            <div class="input-group mb-3">
              <span class="input-group-text">EMAIL</span>
              <input v-model="form.email" type="email" name="email" class="form-control">
            </div>

            <div class="my-4">
              <div class="float-end">
                <button type="submit" class="btn btn-primary">Submit</button>
                <button type="reset" class="btn btn-secondary" @click="resetForm">Reset</button>
              </div>
            </div>
          </form>
        </div><!--end card body-->
      </div><!--end card-->
    </div><!-- end col-->
  </div><!-- end row-->
</template>

<script setup>
import {ref} from 'vue';

const form = ref({
  mid: '',
  mpw: '',
  email: '',
});

const submitForm = () => {
  // 폼 제출 로직을 여기에 작성하세요. 예를 들어, API 호출 등
  console.log(form.value);
};


const resetForm = () => {
  form.value = {
    mid: '',
    mpw: '',
    email: '',
  };
};

</script>

<style scoped>

</style>