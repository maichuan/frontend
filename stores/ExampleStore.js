import { observable, action } from 'mobx'

class RootStore {
  @observable
  user

  @action
  init() {
    this.data = new Document()
  }
}

export const rootStore = new RootStore()
