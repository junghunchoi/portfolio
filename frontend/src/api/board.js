import axios from 'axios';

export function getPosts() {
    return axios.get('http://localhost:1541/boards');
}

export function getBoardBybno(bno) {
    return axios.get(`http://localhost:1541/boards/${bno}`);
}

export function createBoard(data) {
    return axios.post('http://localhost:1541/boards', data);
}

export function updateBoard(bno, data) {
    return axios.put(`http://localhost:1541/boards/${bno}`, data);
}

export function deleteBoard(bno) {
    return axios.delete(`http://localhost:1541/boards/${bno}`);
}
