import axios from 'axios';

export const axiosApi = axios.create({
  baseURL: 'http://localhost:4444',
  timeout: 1000,
});
