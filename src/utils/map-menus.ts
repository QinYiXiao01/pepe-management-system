/* eslint @typescript-eslint/no-var-requires: "off" */
import { RouteRecordRaw } from 'vue-router'

/**
 * 先加载默认所有的routes
 * 再根据菜单获取需要添加的routes
 * @param userMenus
 * @returns 类型为RouteRecordRaw类型的数组
 */
export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = [] // 先定义：类型为RouteRecordRaw的数组赋给routes变量，起始值为空数组
  const allRoutes: RouteRecordRaw[] = []

  const routeFile = require.context('../router/main', true, /\.ts$/)
  routeFile.keys().forEach((key) => {
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default) // 找到了所有routes(.ts)
  })

  // 对于每一个菜单，在找到属于他的route
  const _recursiveGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) routes.push(route)
      } else {
        _recursiveGetRoute(menu.children)
      }
    }
  }
  // 别忘了调用
  _recursiveGetRoute(userMenus)

  console.log(userMenus)
  console.log(allRoutes)
  console.log(routes)
  return routes
}
