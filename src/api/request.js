import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.itubang.com',
  timeout: 5000
});

// 请求拦截的作用
instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    console.log(err);
  }
);

// 响应拦截
instance.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    console.log(err);
  }
);

export default instance;
