import { observable, action } from 'mobx'

export class AuthStore {
  constructor(rootStore) {
    this.rootStore = rootStore
  }

  @observable
  auth = {}

  @observable
  user = { username: 'guest' }

  @observable
  curLocation = { latitude: -1, longitude: -1 }

  @action
  setAuth = auth => {
    this.auth = auth
  }

  @action
  setUser = user => {
    this.user = user
  }

  @action
  removeAuth = () => {
    this.auth = {}
    this.user = { username: 'guest' }
  }

  @action
  setCurLoaciton = location => {
    this.curLocation = location
  }
}
