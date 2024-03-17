<template>
  <main class="form-signin w-100 m-auto">
    <div v-if="loginError">
      <h5>
        <span class="badge text-bg-danger">
          아이디 비밀번호를 확인해주세요.
        </span>
      </h5>
      <form @submit.prevent="login()">
        <div class="form-floating">
          <input v-model="user" type="text" class="form-control" placeholder="ID">
          <label for="floatingInput">ID</label>
        </div>
        <div class="form-floating">
          <input v-model="password" type="password" class="form-control" id="password"
                 placeholder="Password">
          <label for="floatingPassword">Password</label>
        </div>
        <button class="w-100 btn btn-lg btn-primary" variant="success" type="submit">Sign in
        </button>
      </form>
    </div>
    <div v-else>
      <form @submit.prevent="login()">
        <div class="form-floating">
          <input v-model="user" type="text" class="form-control" placeholder="ID">
          <label for="floatingInput">ID</label>
        </div>
        <div class="form-floating">
          <input v-model="password" type="password" class="form-control" id="password"
                 placeholder="Password">
          <label for="floatingPassword">Password</label>
        </div>
        <button class="w-100 btn btn-lg btn-primary" variant="success" type="submit">Sign in
        </button>
        <button class="w-100 btn btn-secondary" type="button" @click="goMemberRegister">
          회원가입
        </button>
      </form>
      <a href="/oauth2/authorization/kakao">KAKAO</a>
    </div>
  </main>
</template>

<script setup>
import {ref} from 'vue';
import { useRouter } from 'vue-router';
import {useAuthStore} from '@/store/loginStore.js'

const router = useRouter();
const authStore = useAuthStore();


const loginSuccess = ref(false);
const loginError = ref(false);
const user = ref('');
const password = ref('');
const error = ref(false);

const login = async () =>{
  try {
    await authStore.login(user.value, password.value);

    await router.push({
      name: '/',
    });

  } catch (err) {
    this.loginError = true
    this.error = true
    throw new Error(err)
  }
}

const goMemberRegister = () => {
  router.push({
    name: 'MemberRegister',
  });
};


</script>

<style scoped>

</style>