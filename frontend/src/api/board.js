import axios from '@/plugins/axios.js'
import { config } from '@/config/config.js';
const BASE_URL =  config.BOARD_API_URL// import.meta.env.VITE_APP_BOARD_API_URL;

export function getBoards(params) {
    return axios.get(`${BASE_URL}/boards`,{params:params});
}

export function getBoardBybno(bno) {
    return axios.get(`${BASE_URL}/boards/${bno}`,);
}

export function createBoard(data) {
    return axios.post(`${BASE_URL}/boards`, data);
}

export function updateBoard(data) {
    return axios.patch(`${BASE_URL}/boards`, data);
}

export function deleteBoard(bno) {
    return axios.delete(`${BASE_URL}/boards/${bno}`);
}


