import axios from 'axios';


const token =`${JSON.parse(localStorage.getItem('token'))}`
const API = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        authorization: `bearer ${token}`,
      }
});


export default API;