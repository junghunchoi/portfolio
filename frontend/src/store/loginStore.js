import {defineStore} from 'pinia';
import axios from 'axios';
import {ref, computed} from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const loginSuccess = ref(null);
  const loginError = ref(null);
  const userId = ref('');
  const userName = ref(null);
  const password = ref('');
  const authorities = ref('USERS');

  async function login(inputUsername, inputPassword) {
    try {
      const result = await axios.post('http://localhost:1541/generateToken', {
        username: inputUsername,
        password: inputPassword,
      });

      if (result.status === 200) {
        loginSuccess.value = true;
        userName.value = inputUsername;
        password.value = inputPassword;

        const accessToken = res.data.accessToken;
        const refreshToken = res.data.refreshToken

        localStorage.setItem("accessToken", accessToken)
        localStorage.setItem("refreshToken", refreshToken)
      }
    } catch (err) {
      loginError.value = true;
      userName.value = inputUsername;
      password.value = inputPassword;
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