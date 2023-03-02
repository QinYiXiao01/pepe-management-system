let BASE_URL = ''
const TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api' // 开发环境中，先配置为'/api'，然后通过配置devServer进行映射到http://152.136.185.210:5000
}

export { BASE_URL, TIME_OUT }
