import axios, { AxiosError, AxiosResponse } from 'axios';

const http = axios.create({
  baseURL: 'https://front-exercise.z1.digital',
  timeout: 3000,
});

http.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  (error: AxiosError) => {
    if (error.response) {
      console.error('Error', error.response.data);
      console.error(error.response.status);
      console.error(error.response.headers);
    } else if (error.request) {
      console.error('Error', error.request);
    } else {
      console.error('Error', error.message);
    }
    throw error;
  },
);

export default http;
