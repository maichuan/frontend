import { observable, action } from 'mobx'

export class NavigationStore {
  constructor(rootStore) {
    this.rootStore = rootStore
  }

  @observable
  navigation

  @action
  setNavigation = navigation => {
    this.navigation = navigation
  }
}
