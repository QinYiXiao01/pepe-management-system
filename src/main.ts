import { createApp } from 'vue'
import 'normalize.css'
import './assets/css/index.less'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'

import router from './router'
import store from './store'
import { AxiosResponse } from 'axios'
import pepeRequest from './service'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')

interface DataType {
  data: any
  returnCode: string
  success: boolean
}

pepeRequest
  .request({
    url: 'http://123.207.32.32:8000/home/multidata',
    method: 'GET'
  })
  .then((res: AxiosResponse<any>) => {
    console.log('结果的data' + res.data)
  })
  .catch((error: any) => {
    console.log(error)
  })

// pepeRequest
//   .request({
//     url: 'http://123.207.32.32:8000/home/multidata',
//     method: 'GET'
//   })
//   .then((res: { data: any; returnCode: any }) => {
//     console.log(res.data)
//     console.log(res.returnCode)
//   })
