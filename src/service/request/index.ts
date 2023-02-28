import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import type { AxiosInstance } from 'axios'
import type { PepeRequestConfig } from './type'

// 封装的佩佩请求类
class PepeRequest {
  instance: AxiosInstance

  constructor(config: PepeRequestConfig) {
    this.instance = axios.create(config)

    // 最外层：添加全局请求拦截器
    this.instance?.interceptors.request.use(
      (config) => {
        //对config添加loading、token、配置
        console.log('全局请求成功的拦截')
        return config
      },
      (err) => {
        console.log('全局请求失败的拦截')
      }
    )
    // 最外层：添加全局响应拦截器
    this.instance?.interceptors.response.use(
      (config) => {
        console.log('全局响应成功的拦截')
        return config
      },
      (err) => {
        console.log('全局响应失败的拦截')
      }
    )

    // 中间层：添加实例的拦截器
    if (config && config.interceptors) {
      this.instance.interceptors.request.use(
        // 强制转换
        config?.interceptors.requestInterceptor as (
          value: InternalAxiosRequestConfig<any>
        ) =>
          | InternalAxiosRequestConfig<any>
          | Promise<InternalAxiosRequestConfig<any>>,
        config?.interceptors.requestInterceptorCatch
      )

      this.instance.interceptors.response.use(
        config?.interceptors.responseInterceptor,
        config?.interceptors.responseInterceptorCatch
      )
    }
  }

  // 最内层：为request等方法添加拦截器
  request(config: PepeRequestConfig): Promise<AxiosResponse<any>> {
    // 我写的
    if (config?.interceptors && config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config)
    }
    // this.instance.request(config).then((res) => {
    //   if (config?.interceptors && config?.interceptors.responseInterceptor) {
    //     res = config?.interceptors.responseInterceptor(res)
    //   }
    //   console.log(res)
    // })
    return this.instance.request(config)
  }
}

export default PepeRequest
