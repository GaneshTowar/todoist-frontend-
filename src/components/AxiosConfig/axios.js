import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`,
      }
});


export default API;