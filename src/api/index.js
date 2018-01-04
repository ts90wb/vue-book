import axios from 'axios';
export function getSliders() {
    return axios.get('/api/slider');
}
export function getHot() {
    return axios.get('/api/hot');
}
export function getBook() {
    return axios.get('/api/book');
}
export function addBook(data) {
    return axios.post('/api/book', data);
}