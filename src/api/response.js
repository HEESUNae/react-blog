import axios from 'axios';

export const axiosApi = axios.create({
  baseURL: 'https://react-blog-heesunae.vercel.app',
  // baseURL: 'http://localhost:4444',
  timeout: 3000,
  withCredentials: true,
});
