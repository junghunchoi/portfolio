import axios from '@/plugins/axios.js'

export function getBoards(params) {
    return axios.get('/boards',{params:params});
}

export function getBoardBybno(bno) {
    return axios.get(`/boards/${bno}`,);
}

export function createBoard(data) {
    return axios.post('/boards', data);
}

export function updateBoard(data) {
    return axios.patch('/boards', data);
}

export function deleteBoard(bno) {
    return axios.delete(`/boards/${bno}`);
}
