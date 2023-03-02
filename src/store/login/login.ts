import { Module } from 'vuex'
import {
  accountingLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login/login'
import localCache from '@/utils/cache'
import router from '@/router'

import { ILoginState } from './types'
import { IRootState } from '../types'
import { IAccount } from '@/service/login/types'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus
    }
  },
  getters: {},
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // 登录请求
      const loginResult = await accountingLoginRequest(payload)
      const { id, token } = loginResult.data.data
      commit('changeToken', token)
      localCache.setCache('token', token)

      // 获取用户信息请求
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data.data
      commit('changeUserInfo', userInfo)
      localCache.setCache('userInfo', userInfo)

      // 获取菜单请求
      const userMenusResult = await requestUserMenusByRoleId(userInfo.id)
      const userMenus = userMenusResult.data.data
      commit('changeUserMenus', userMenus)
      localCache.setCache('userMenus', userMenus)
      router.push('./main')
    },

    loadLocalLogin({ commit }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenus = localCache.getCache('userMenus')
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    }
  }
}

export default loginModule
