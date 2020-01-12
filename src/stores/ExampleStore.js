import { observable, action } from 'mobx'

export class ExampleStore {
  constructor(rootStore) {
    this.rootStore = rootStore
  }

  @observable
  test = 0

  @action
  testFunc = () => {
    this.test += 1
  }
}
