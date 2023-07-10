import axios from 'axios';

const { HOST } = process.env;

export const axiosApi = axios.create({
  baseURL: HOST,
  timeout: 1000,
});
