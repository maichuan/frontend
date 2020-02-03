import { ExampleStore } from './ExampleStore'
import { MenusStore } from './MenusStore'
import { SpinnerStore } from './SpinnerStore'
import { AuthStore } from './AuthStore'

class RootStore {
  constructor() {
    this.exampleStore = new ExampleStore(this)
    this.menusStore = new MenusStore(this)
    this.spinnerStore = new SpinnerStore(this)
    this.authStore = new AuthStore(this)
  }
}

export const rootStore = new RootStore()
