import axios from 'axios';

import Cookies from 'js-cookie';

export const baseURL = process.env.NEXT_PUBLIC_API_URL

//   "Authorization": Cookies.get("token") ? `Bearer ${JSON.parse(Cookies.get("token"))}` : ''
export const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});
