// service统一出口
import { InternalAxiosRequestConfig } from 'axios'
import PepeRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const pepeRequest = new PepeRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      const internalConfig = config //as InternalAxiosRequestConfig
      console.log('请求成功拦截')
      return internalConfig
    },
    requestInterceptorCatch: (error) => {
      console.log('请求失败拦截')
      return error
    },
    responseInterceptor: (res) => {
      console.log('响应成功拦截')
      return res
    },
    responseInterceptorCatch: (error) => {
      console.log('相应失败拦截')
      return error
    }
  }
})

export default pepeRequest
