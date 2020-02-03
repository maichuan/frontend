import { observable, action } from 'mobx'

export class AuthStore {
  constructor(rootStore) {
    this.rootStore = rootStore
  }

  @observable
  auth = {}

  @action
  setAuth = auth => {
    this.auth = auth
  }

  @action
  removeAuth = () => {
    this.auth = {}
  }
}
