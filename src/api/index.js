import axios from 'axios';
export function getSliders() {
    return axios.get('/api/slider');
}
export function getHot() {
    return axios.get('/api/hot');
}