import { observable, action } from 'mobx'

export class MenusStore {
  constructor(rootStore) {
    this.rootStore = rootStore
  }

  @observable
  menus = []

  @observable
  totalPrice = 0

  @action
  addMenu = menu => {
    this.totalPrice += menu.price * menu.quantity
    this.menus = [...this.menus, menu]
  }

  @action
  removeMenu = menu => {
    this.totalPrice -= menu.price * menu.quantity
    this.menus = this.menus.filter(m => m !== menu)
  }

  @action
  clear = () => {
    this.menus = []
    this.totalPrice = 0
  }
}
