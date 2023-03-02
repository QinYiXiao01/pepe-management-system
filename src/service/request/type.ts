import type { AxiosRequestConfig, AxiosResponse } from 'axios'

// 定义拦截器/hook
interface PepeRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any

  responseInterceptor?: (res: any) => any // AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

// 定义PepeConfig配置,继承自AxiosRequestConfig,新增interceptors属性
export interface PepeRequestConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: PepeRequestInterceptors<T> | null
}
