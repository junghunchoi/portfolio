<template>
  <main class="form-signin w-100 m-auto">
      <form @submit.prevent>
        <div class="form-floating">
          <input v-model="username" type="text" class="form-control" placeholder="ID">
          <label for="floatingInput">ID</label>
        </div>
        <div class="form-floating">
          <input v-model="password" type="password" class="form-control" id="password"
                 placeholder="Password">
          <label for="floatingPassword">Password</label>
        </div>
        <button class="w-100 btn btn-lg btn-primary" variant="success" type="submit" @click="login">Sign in
        </button>
        <button class="w-100 btn btn-secondary" type="button" @click="goMemberRegister">
          회원가입
        </button>
      </form>
      <a href="/oauth2/authorization/kakao">KAKAO</a>
  </main>
</template>

<script setup>
import {ref} from 'vue';
import { useRouter } from 'vue-router';
import {useAuthStore} from '@/store/loginStore.js'

const router = useRouter();
const authStore = useAuthStore();


const username = ref('');
const password = ref('');
const error = ref(false);
const loginError  = ref(false);

const login = async () =>{
  try {
    await authStore.login(username.value, password.value);
    await router.push('/');

  } catch (err) {
    loginError.value = true;
    console.log(err);
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