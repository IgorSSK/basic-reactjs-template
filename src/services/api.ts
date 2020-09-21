import axios from 'axios';

const apiPath = 'https://jsonplaceholder.typicode.com';

const api = axios.create({ baseURL: apiPath });

export default api;
