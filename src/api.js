import axios from 'axios';

const API = axios.create({ baseURL: import.meta.env.VITE_URL })

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });

  export const register = (values) => API.post('/user/register', values);
export const login  = (values) => API.post('/user/login', values);
export const activate = (activationCode)=> API.patch('/user/activate', activationCode)