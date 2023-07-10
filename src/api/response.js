import axios from 'axios';

require('dotenv').config();
const { MODE } = process.env;

export const axiosApi = axios.create({
  baseURL: MODE === 'production' ? 'https://react-blog-eight-kappa.vercel.app' : 'http://localhost:4444',
  timeout: 1000,
});
