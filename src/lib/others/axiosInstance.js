import axios from 'axios';
import Cookies from 'js-cookie';

export const baseURL = process.env.NEXT_PUBLIC_API_URL

export const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
    "Authorization": `bearer ${JSON.parse(Cookies.get("token")) ? JSON.parse(Cookies.get("token")): ""}`
  },
});
