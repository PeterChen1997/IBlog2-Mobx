import { observable, action } from 'mobx'

class CommonStore {

  @observable appName = '好好学习'
  @observable title = 'Adventure Park'
  @observable slogan = 'Stay hungry. Stay foolish'
  @observable currentMenuIndex = ""
  @observable isFirstLoad = true

  @action setLoadState() {
    this.isFirstLoad = false
  }

  @action setMenuIndex(target) {
    this.currentMenuIndex = target
  }
}

export default new CommonStore()
