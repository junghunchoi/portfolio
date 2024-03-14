import { defineStore } from 'pinia';
import axios from 'axios';
import { useStorage } from '@vueuse/core';
import {computed} from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const loginSuccess = useStorage('loginSuccess', false);
  const loginError = useStorage('loginError', false);
  const userName = useStorage('userName', null);
  const password = useStorage('password', null);

  async function login(user, password) {
    try {
      const result = await axios.get('/api/login', {
        auth: {
          username: user,
          password: password,
        },
      });
      if (result.status === 200) {
        loginSuccess.value = true;
        userName.value = user;
        password.value = password;
      }
    } catch (err) {
      loginError.value = true;
      userName.value = user;
      password.value = password;
      throw new Error(err);
    }
  }

  function logout() {
    loginSuccess.value = false;
    loginError.value = false;
    userName.value = null;
    password.value = null;
  }

  return {
    loginSuccess,
    loginError,
    userName,
    password,
    login,
    logout,
    isLoggedIn: computed(() => loginSuccess.value),
    hasLoginErrored: computed(() => loginError.value),
    getUserName: computed(() => userName.value),
    getUserPass: computed(() => password.value),
  };
});