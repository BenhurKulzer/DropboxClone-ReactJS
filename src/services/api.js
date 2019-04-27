import axios from 'axios';

const api = axios.create({
  baseURL: 'https://omnistack-bsk.herokuapp.com'
});

export default api;
