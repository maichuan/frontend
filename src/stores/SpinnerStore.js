import { observable, action } from 'mobx'

export class SpinnerStore {
  constructor(rootStore) {
    this.rootStore = rootStore
  }

  @observable
  display = false

  @action
  open = () => {
    this.display = true
  }

  @action
  close = () => {
    this.display = false
  }
}
