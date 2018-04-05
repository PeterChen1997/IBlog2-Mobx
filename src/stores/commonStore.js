import { observable, action, reaction } from 'mobx'

class CommonStore {

  @observable appName = '好好学习'
  @observable title = 'Adventure Park'
  @observable slogan = 'Stay hungry. Stay foolish'
  @observable token = window.localStorage.getItem('jwt')
  @observable appLoaded = true
  @observable currentMenuIndex = ""

  constructor() {
    reaction(
      () => this.token,
      token => {
        if (token) {
          window.localStorage.setItem('jwt', token)
        } else {
          window.localStorage.removeItem('jwt')
        }
      }
    )
  }

  @action setMenuIndex(target) {
    this.currentMenuIndex = target
  }

  @action setToken(token) {
    this.token = token
  }

  @action setAppLoaded() {
    this.appLoaded = true
  }

}

export default new CommonStore()
