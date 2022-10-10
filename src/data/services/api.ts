import axios from 'axios';

const apiPath = '';

const api = axios.create({ baseURL: apiPath });

export default api;
