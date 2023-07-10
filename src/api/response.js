import axios from 'axios';

const { HOST } = process.env;

export const axiosApi = axios.create({
  baseURL: 'https://react-blog-eight-kappa.vercel.app',
  timeout: 1000,
});
