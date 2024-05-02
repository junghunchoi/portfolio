import axios from 'axios';
import router from '@/router'
import refreshTokenInstance from "@/plugins/refreshToken.js";

  const axiosInstance = axios.create({
    baseURL: process.env.VITE_APP_API_URL,
  });

  let isRefreshingToken = false;
  let requestQueue = [];

  // 요청 인터셉터 설정
  axiosInstance.interceptors.request.use(
      config => {
        // 요청 전 처리 로직 추가
        config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
        return config;
      },
      error => {
        // 요청 에러 처리
        return Promise.reject(error);
      }
  );

  // 응답 인터셉터 설정
  axiosInstance.interceptors.response.use(
      response => {
        // 응답 데이터 가공 등의 작업 수행

        return response;
      },
      async error => {
        // refresh처리
        const originalRequest = error.config;
        if (error.response.data.msg === 'Expired Token' && !originalRequest._retry) {
          if (isRefreshingToken) {
            try {
              const queuedRequest = await new Promise((resolve, reject) => {
                requestQueue.push({ resolve, reject });
              });
              return queuedRequest;
            } catch (error) {
              return Promise.reject(error);
            }
          }

          originalRequest._retry = true;
          isRefreshingToken = true;

          try {
            const response = await refreshTokenInstance.post('/refreshToken', {
              accessToken: localStorage.getItem('accessToken'),
              refreshToken: localStorage.getItem('refreshToken'),
            });

            const newAccessToken = response.data.accessToken;
            localStorage.setItem('accessToken', newAccessToken);

            isRefreshingToken = false;
            requestQueue.forEach(queuedRequest => queuedRequest.resolve());
            requestQueue = [];

            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
            return axiosInstance(originalRequest);
          } catch (error) {
            isRefreshingToken = false;
            requestQueue.forEach(queuedRequest => queuedRequest.reject(error));
            requestQueue = [];
            return Promise.reject(error);
          }
        }


        if (error.response) {
          if (error.response.status === 404) {
            // 페이지 없음 처리
            console.error('API 요청 실패:', error);
            router.push({name: 'NotFound'});
          } else if (error.response.status === 403) {
            console.error('API 요청 실패:', error);
            // router.push({name: 'Login'});
          } else {
            // 기타 상태 코드 처리
            console.error('API 요청 실패:', error.response.status);
          }
        } else {
          // 네트워크 에러 등 처리
          console.error('API 요청 실패:', error.message);
        }
        return Promise.reject(error);
      }
  );
  export default axiosInstance;


