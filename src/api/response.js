import axios from 'axios';
const { PRODUCT_MODE } = process.env;

export const axiosApi = axios.create({
  // baseURL: 'https://react-blog-heesunae.vercel.app',
  // baseURL: BACK_URL,
  baseURL: PRODUCT_MODE === 'develop' ? 'http://localhost:4444' : 'https://react-blog-heesunae.vercel.app',
  timeout: 3000,
  withCredentials: true,
});
