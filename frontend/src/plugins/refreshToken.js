import axios from 'axios';

const refreshTokenInstance = axios.create({
  baseURL: process.env.VITE_APP_API_URL,
});

refreshTokenInstance.interceptors.request.use(
    config => {
      // 요청 전 처리 로직 추가
      config.data = {
        accessToken: localStorage.getItem('accessToken'),
        refreshToken: localStorage.getItem('refreshToken')
      };
      return config;
    },
    error => {
      // 요청 에러 처리
      return Promise.reject(error);
    }
);

export default refreshTokenInstance