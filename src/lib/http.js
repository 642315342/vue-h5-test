import axios from 'axios'
import { Loading, Message } from 'element-ui'

axios.defaults.timeout = 10000
axios.defaults.headers.contentType = 'application/json;charset=UTF-8'
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.responseType = 'json'
// axios.defaults.baseURL = 'http://qniupin.com/api/'

let loading
axios.interceptors.request.use(
  (config) => {
    // 配置config
    // 请求loading
    loading = Loading.service({
      fullscreen: true,
      text: '拼命加载中',
      background: 'rgba(0, 0, 0, 0.8)',
    })
    // eslint-disable-next-line no-param-reassign
    config.headers.Accept = 'application/json'
    return config
  },
  err => Promise.reject(err),
)

axios.interceptors.response.use(
  (response) => {
    loading.close()
    const { status } = response
    console.log('response---', response)
    if (status === 200) {
      return Promise.resolve(response)
    }
    // 根据具体response结构修改
    Message(response.statusText)
    console.error('http-response', response)
    return Promise.reject(response)
  },
  (err) => {
    console.log('err---', err)
    loading.close()
    Message('服务异常')
    return Promise.reject(err)
  },
)
/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params,
      })
      .then((response) => {
        resolve(response.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, JSON.stringify(data)).then(
      (response) => {
        resolve(response.data)
      },
      (err) => {
        reject(err)
      },
    )
  })
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data).then(
      (response) => {
        resolve(response.data)
      },
      (err) => {
        reject(err)
      },
    )
  })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data).then(
      (response) => {
        resolve(response.data)
      },
      (err) => {
        reject(err)
      },
    )
  })
}
