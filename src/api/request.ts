/**
 * 封装统一的 HTTP 请求接口
 * 提供 GET，POST，DELETE，PUT 接口
*/
import axios from 'axios'

const service = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
})

// 请求处理
service.interceptors.request.use(
  config => {
    console.log('当前配置文件', config)
    return config
  },
  error => Promise.reject(error),
)

// 响应拦截处理
service.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    return Promise.reject(error)
  },
)

export default service
