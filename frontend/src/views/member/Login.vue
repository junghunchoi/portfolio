<template>
  <main class="form-signin w-100 m-auto">
      <form @submit.prevent>
        <div class="form-floating">
          <input v-model="username" type="text" class="form-control" placeholder="ID">
          <label >ID</label>
        </div>
        <div class="form-floating mt-3">
          <input v-model="password" type="password" class="form-control" id="password"
                 placeholder="Password">
          <label >Password</label>
        </div>
        <button class="w-100 btn btn-lg btn-primary mt-3" variant="success" type="submit" @click="login">로그인
        </button>
      </form>
  </main>
  <Teleport to="#modal">
    <TheModal
        v-model="show"
        :isPopup="show"
        :title="'확인'"
    >
      <template #default>
        비밀번호 또는 아이디를 확인해주세요
      </template>
      <template #actions>
        <button class="btn btn-light" @click="closeModal">닫기</button>
      </template>
    </TheModal>
  </Teleport>
</template>

<script setup>
import {ref} from 'vue';
import { useRouter } from 'vue-router';
import {useAuthStore} from '@/store/loginStore.js'
import TheModal from "@/components/TheModal.vue";

const router = useRouter();
const authStore = useAuthStore();


const username = ref('');
const password = ref('');
const error = ref(false);
const loginError  = ref(false);

const login = async () =>{
  try {
    await authStore.login(username.value, password.value);
    router.go(-1);
  } catch (err) {
    loginError.value = true;
    show.value=true
    console.log(err);
  }
}

// 모달 로직
const show = ref(false);

const closeModal = () => {
  show.value = false;
}


</script>

<style scoped>

</style>