import axios from 'axios';
import { getToken } from "../services/auth";
const api = axios.create({
    baseURL : 'http://localhost:8081/',
    //baseURL : 'https://servicodados.ibge.gov.br/api/v1/localidades/',
});



api.interceptors.request.use(async config => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = token;
    }
    //config.headers.ContentType = 'application/json'  ;
    return config;
  });

  

export default api;