import type {
  AxiosHeaders,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios'

// 定义拦截器/hook
interface PepeRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any

  responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

// 定义PepeConfig配置,继承自AxiosRequestConfig,新增interceptors属性
export interface PepeRequestConfig extends AxiosRequestConfig {
  interceptors?: PepeRequestInterceptors | null
  // headers?: AxiosHeaders
}
