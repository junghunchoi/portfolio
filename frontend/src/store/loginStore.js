import {defineStore} from 'pinia';
import axios from 'axios';
import {ref, computed} from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const loginSuccess = ref(false);
  const loginError = ref(false);
  const userName = ref(null);
  const password = ref(null);

  async function login(username, password) {
    try {
      const result = await axios.post('http://localhost:1541/api/login', {

        username: username,
        password: password,

      });

      if (result.status === 200) {
        loginSuccess.value = true;
        userName.value = username;
        password.value = password;
      }
    } catch (err) {
      loginError.value = true;
      userName.value = username;
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