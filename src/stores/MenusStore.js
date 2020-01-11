import { observable, action } from 'mobx'

export class MenusStore {
  constructor(rootStore) {
    this.rootStore = rootStore
  }

  @observable
  menus = []

  @action
  addMenu = menu => {
    this.menus = [...this.menus, menu]
  }

  @action
  removeMenu = menu => {
    this.menus = this.menus.filter(m => m !== menu)
  }

  @action
  clear = () => {
    this.menus = []
  }
}
