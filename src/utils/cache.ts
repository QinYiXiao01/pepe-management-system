class LocalCache {
  // 用于本地缓存
  setCache(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value)) // 存入localSorage需要string类型
  }

  getCache(key: string) {
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  deleteCache(key: string) {
    window.localStorage.removeItem(key)
  }

  clearCache() {
    window.localStorage.clear()
  }
}

export default new LocalCache()
