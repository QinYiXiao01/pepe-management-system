import { createStore, Store, useStore as useVuexStore } from 'vuex'
import { IRootState, ISroteType } from './types'
import login from './login/login'

const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'changxinzai',
      age: 18
    }
  },
  mutations: {
    changeName(state) {
      console.log(state)
    }
  },
  getters: {},
  actions: {},
  modules: {
    login
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export function useStore(): Store<ISroteType> {
  return useVuexStore()
}

export default store
