import { observable, action } from 'mobx'

export class AuthStore {
  constructor(rootStore) {
    this.rootStore = rootStore
  }

  @observable
  auth = {}

  @observable
  curLocation = { latitude: -1, longitude: -1 }

  @action
  setAuth = auth => {
    this.auth = auth
  }

  @action
  removeAuth = () => {
    this.auth = {}
  }

  @action
  setCurLoaciton = location => {
    this.curLocation = location
  }
}
