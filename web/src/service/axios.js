import axios from "axios";
// axios配置
// 自动识别接口使用开发环境地址（开发环境地址做了 proxyTable 代理，故设置为空）或线上地址
axios.defaults.baseURL = process.env.VUE_APP_API_URL || "/web/api";
//未完成的请求数
let reqNum = 0;
axios.interceptors.request.use(
  config => {
    reqNum++;
    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  res => {
    reqNum--;
    const apiRes = res.data;
    return apiRes;
  },
  async error => {
    console.dir(error);
    return Promise.reject(error);
  }
);

export default axios;
