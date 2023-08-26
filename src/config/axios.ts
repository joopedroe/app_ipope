import axios from 'axios';

const api = axios.create({
    baseURL: 'https://ipope-api.onrender.com/admin/v1/ipope/searches',
});

export default api;