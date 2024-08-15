import axios from '@/plugins/axios.js'
const BASE_URL = process.env.VITE_APP_URL;

export function getBoards(params) {
    return axios.get('/boards',{params:params});
}

export function getBoardBybno(bno) {
    return axios.get(`/boards/${bno}`,);
}

export function createBoard(data) {
    return axios.post(`${BASE_URL}/board/api/boards`, data);
}

export function updateBoard(data) {
    return axios.patch('/boards', data);
}

export function deleteBoard(bno) {
    return axios.delete(`/boards/${bno}`);
}


