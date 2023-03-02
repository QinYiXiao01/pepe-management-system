import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router' // 导入类型
import localCache from '@/utils/cache'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    component: () => import('@/views/login/LoginPage.vue')
  },
  {
    path: '/main',
    component: () => import('@/views/main/MainPage.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach((to) => {
  if (to.path !== '/login') {
    // 判断要到的路径是否是登录页
    const token = localCache.getCache('token')
    if (!token) {
      // 没有登陆的话就跳到登录页
      return '/login'
    }
  }
})

export default router
