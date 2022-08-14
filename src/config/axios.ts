import axios from 'axios';

const api = axios.create({
    baseURL: 'https://ipope4-ki4qmfbt3q-uc.a.run.app/admin/v1/ipope/searches',
});

export default api;