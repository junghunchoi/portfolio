import {defineStore} from 'pinia';
import axios from 'axios';
import {ref, computed} from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const loginSuccess = ref(null);
  const loginError = ref(null);
  const userName = ref(null);
  const password = ref('');
  const authoritiesRef = ref();

  async function login(inputUsername, inputPassword) {
    try {
      const result = await axios.post('http://localhost:1541/login', {
        username: inputUsername,
        password: inputPassword,
      });
      console.log(result)
      if (result.status === 200) {
        const [userInfo, tokenInfo] = result.data.split('}{');
        const {authorities, usernameRes} = JSON.parse(userInfo + '}');
        const {refreshToken, accessToken} = JSON.parse('{' + tokenInfo);
        authoritiesRef.value = authorities
        userName.value = usernameRes
        loginSuccess.value = true;
        userName.value = inputUsername;
        password.value = inputPassword;

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

    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  }

  const checkAccessToken = async () => {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      console.log("accessToken isn't exist");
    }

    const authHeader = {"Authorization": `Baearer ${accessToken}`}

    try {
      const res = 1// axsios

      return res.data
    } catch (err) {
      if (err.response.data.msg === 'Expired Token') {
        console.log("refresh your token");

        try {
          await callRefresh();
          console.log("new tokens saved");
          return checkAccessToken;
        } catch (refreshErr) {
          throw refreshErr.response.data.msg;
        }
      }
    }

    const callRefresh = async () => {
      const accessToken = localStorage.getItem("accessToken");
      const refreshToken = localStorage.getItem("refreshToken");

      const tokens = {accessToken, refreshToken}
      const res = await axios.post('http://localhost:1541/refreshToken', tokens)
      localStorage.setItem("accessToken", res.data.accessToken);
      localStorage.setItem("refreshToken", res.data.refreshToken);

    }
  };

  // Axios 요청 인터셉터 설정
  axios.interceptors.request.use(request => {
    const accessToken = localStorage.getItem('accessToken');
    request.headers.Authorization = `Bearer ${accessToken}`;
    return request;
  });

// Axios 응답 인터셉터 설정
  axios.interceptors.response.use(response => response, error => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      return axios.post('http://localhost:1541/login').then(
          newToken => {
            originalRequest.headers.Authorization = `Bearer ${newToken}`;
            return axios(originalRequest);
          });
    }
    return Promise.reject(error);
  });

  return {
    loginSuccess,
    loginError,
    userName,
    authoritiesRef,
    login,
    logout,
    isLoggedIn: computed(() => loginSuccess.value),
    hasLoginErrored: computed(() => loginError.value),
    getUserName: computed(() => userName.value),
    getAuthorities: computed(() => authoritiesRef.value.length >=2 ? 'ADMIN' : 'USER')
  };
});