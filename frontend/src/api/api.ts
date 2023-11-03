import axios from 'axios';

// Cria uma instância do axios com a URL base do backend (localhost:8080)
const api = axios.create({
  baseURL: 'http://localhost:3033/api',
});

export default api;