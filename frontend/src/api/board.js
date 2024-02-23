import axios from 'axios';

export function getBoards(params) {
    return axios.get('http://localhost:1541/api/boards',{params:params});
}

export function getBoardBybno(bno) {
    return axios.get(`http://localhost:1541/api/boards/${bno}`);
}

export function createBoard(data) {
    return axios.post('http://localhost:1541/api/boards', data);
}

export function updateBoard(bno, data) {
    return axios.put(`http://localhost:1541/api/boards/${bno}`, data);
}

export function deleteBoard(bno) {
    return axios.delete(`http://localhost:1541/api/boards/${bno}`);
}
