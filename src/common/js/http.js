import axios from 'axios';

//版本
const VERSION = 'v4.6.4';
//接口地址
const HOST = 'https://app2.huibo.com/';

//实例化axios对象
const httpService = axios.create({
  baseURL: HOST,
  params: {
    mobilesys: 'weixin',
    ver: VERSION,
  },
  timeout: 1000,
});

httpService.interceptors.request.use(
  (config) => {
    // Do something before request is sent

    return config;
  },
  (error) => {
    // Do something with request error
    Promise.reject(error);
  }
);

/*
 *  get请求
 *  url:请求地址
 *  params:参数
 * */

export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    httpService({
      method: 'get',
      url: url,
      params: params,
    })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export default {
  get,
};
