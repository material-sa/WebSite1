export default ({ app }, inject) => {
  const localStorage = {
    set(key, value) {
      if (process.client) {
        window.localStorage.setItem(key, JSON.stringify(value))
      }
    },
    get(key) {
      if (process.client) {
        const value = window.localStorage.getItem(key)
        if (value) {
          return JSON.parse(value)
        }
      }
      return null
    },
    remove(key) {
      if (process.client) {
        window.localStorage.removeItem(key)
      }
    },
    clear() {
      if (process.client) {
        window.localStorage.clear()
      }
    }
  }

  inject('localStorage', localStorage)
}
