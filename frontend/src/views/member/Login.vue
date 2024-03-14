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
      <h1 class="h3 mb-3 fw-normal">
        <span class="badge text-bg-primary">
          로그인해주세요
        </span>
      </h1>
      <h5>로그인 하지 않았습니다.</h5>
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
      <a href="/oauth2/authorization/kakao">KAKAO</a>
    </div>
  </main>
  <!--  -->
  <!--  <div class="container-fluid d-flex justify-content-center" style="height: 100vh">-->
  <!--    <div class="card align-self-center">-->
  <!--      <div class="card-header">-->
  <!--        LOGIN Page-->
  <!--      </div>-->
  <!--      <div class="card-body">-->
  <!--        <th:block th:if="${param.logout != null}">-->
  <!--          <h1>Logout........</h1>-->
  <!--        </th:block>-->

  <!--        <form id="registerForm" method="post">-->
  <!--          <div class="input-group mb-3">-->
  <!--            <span class="input-group-text">아이디</span>-->
  <!--            <input type="text" name="username" class="form-control" placeholder="USER ID">-->
  <!--          </div>-->
  <!--          <div class="input-group mb-3">-->
  <!--            <span class="input-group-text">패스워드</span>-->
  <!--            <input type="text" name="password" class="form-control" placeholder="PASSWORD">-->
  <!--          </div>-->
  <!--          <div class="my-4">-->
  <!--            <div class="float-end">-->
  <!--              <button type="submit" class="btn btn-primary submitBtn">LOGIN</button>-->
  <!--            </div>-->
  <!--          </div>-->
  <!--        </form>-->
  <!--        <a href="/oauth2/authorization/kakao">KAKAO</a>-->
  <!--      </div>&lt;!&ndash;end card body&ndash;&gt;-->
  <!--    </div>&lt;!&ndash;end card&ndash;&gt;-->
  <!--  </div>-->
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

</script>

<style scoped>

</style>