import axios from 'axios';
import router from '@/router'

  const axiosInstance = axios.create({
    baseURL: 'http://localhost:1541/api',
    // 기타 공통 설정 옵션
  });


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
      error => {
        if (error.response) {
          // 응답 상태 코드가 200이 아닌 경우 처리
          if (error.response.status === 401) {
            // 인증 실패 처리
          } else if (error.response.status === 404) {
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


