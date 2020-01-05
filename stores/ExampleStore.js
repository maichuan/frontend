import { observable, action } from 'mobx'

class ExampleStore {
  @observable
  test = 0

  @action
  testFunc = () => {
    this.test += 1
    console.log('test')
  }
}

export const exampleStore = new ExampleStore()
