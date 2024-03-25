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
              <input v-model="form.userName" type="text" name="mid" class="form-control">
              <button class="btn btn-check btn-danger" @click="checkValidateId">중복확인</button>
            </div>

            <div class="input-group mb-3">
              <span class="input-group-text">비밀번호</span>
              <input v-model="form.password" type="password" name="mpw" class="form-control">
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text">비밀번호확인</span>
              <input id="checkPassword" type="password" name="mpw" class="form-control">
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text">이름</span>
              <input v-model="form.userRealName" type="password" name="mpw" class="form-control">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref,reactive} from 'vue';
import axios from "axios";

const form = reactive({
  userId: '',
  password: '',
  userName: '',
  userRealName:'',
  email: '',
});

const submitForm = () => {
  // 폼 제출 로직을 여기에 작성하세요. 예를 들어, API 호출 등
  const checkPassword = validatePassword();

  if(checkPassword !== '') {
    return checkPassword;
  }
};


const resetForm = () => {
  form.value = {
    mid: '',
    mpw: '',
    email: '',
  };
};

const checkValidateId = async (userName) =>{
  const res = await  axios.post(`http://localhost:1541/api/members/check`, userName);

  if (res.status !== 200) {
    return '중복된 아이디입니다.';
  }
}


function validatePassword(password) {
  // 4자리 이상, 12자리 미만 확인
  if (password.length < 4 || password.length >= 12) {
    return '4자리 이상, 12자리 미만여야 합니다.';
  }

  // 영어 알파벳과 숫자를 반드시 포함하는지 확인
  if (!/[A-Za-z]/.test(password) || !/\d/.test(password)) {
    return '영어 알파벳과 숫자를 반드시 포함해야합니다.';
  }

  // !, @, #, $를 제외한 특수문자가 포함되었는지 확인
  if (/[^A-Za-z0-9!@#$]/.test(password)) {
    return '!, @, #, $를 제외한 특수문자는 사용할 수 없습니다';
  }

  if(form.password !== document.querySelector('#checkPassword')){
    return '비밀번호가 다릅니다. 확인해주세요.';
  }

}

</script>

<style scoped>

</style>