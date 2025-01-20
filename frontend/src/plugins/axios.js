import axios from 'axios';
import refreshTokenInstance from "@/plugins/refreshToken.js";
import { config } from '@/config/config.js';

const BASE_URL =  config.BOARD_API_URL
const axiosInstance = axios.create({
    baseURL: BASE_URL
});

let isRefreshingToken = false;
let requestQueue = [];

axiosInstance.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
    return config;
}, error => {
    return Promise.reject(error);
});

axiosInstance.interceptors.response.use(response => {
    return response;
}, async error => {
    const originalRequest = error.config;

    // Expired Token 체크를 더 안전하게
    if (error.response?.data?.msg === 'Expired Token' && !originalRequest._retry) {
        if (isRefreshingToken) {
            return new Promise((resolve, reject) => {
                requestQueue.push({
                    resolve: () => {
                        originalRequest.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
                        resolve(axiosInstance(originalRequest));
                    },
                    reject
                });
            });
        }

        originalRequest._retry = true;
        isRefreshingToken = true;

        try {
            const response = await refreshTokenInstance.post('/refreshToken', {
                accessToken: localStorage.getItem('accessToken'),
                refreshToken: localStorage.getItem('refreshToken')
            });

            const newAccessToken = response.data.accessToken;
            localStorage.setItem('accessToken', newAccessToken);

            // 대기 중인 요청 처리
            requestQueue.forEach(request => request.resolve());
            requestQueue = [];
            isRefreshingToken = false;

            // 현재 요청 재시도
            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
            return axiosInstance(originalRequest);
        } catch (refreshError) {
            requestQueue.forEach(request => request.reject(refreshError));
            requestQueue = [];
            isRefreshingToken = false;
            return Promise.reject(refreshError);
        }
    }

    return Promise.reject(error);
});

export default axiosInstance;