import axios from 'axios';

process.env.VUE_APP_API_URL

export function getBoards(params) {
    return axios.get('http://localhost:1541/api/boards',{params:params},{headers:{
        Authorization:`${localStorage.getItem('accessToken')}`
        }});
}

export function getBoardBybno(bno) {
    return axios.get(`http://localhost:1541/api/boards/${bno}`,);
}

export function createBoard(data) {
    return axios.post('http://localhost:1541/api/boards', data);
}

export function updateBoard(data) {
    return axios.put('http://localhost:1541/api/boards', data);
}

export function deleteBoard(bno) {
    return axios.delete(`http://localhost:1541/api/boards/${bno}`);
}
