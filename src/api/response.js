import axios from 'axios';

export const axiosApi = axios.create({
  baseURL: 'https://react-blog-eight-kappa.vercel.app',
  timeout: 1000,
});
