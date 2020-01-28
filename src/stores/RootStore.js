import { ExampleStore } from './ExampleStore'
import { MenusStore } from './MenusStore'
import { SpinnerStore } from './SpinnerStore'

class RootStore {
  constructor() {
    this.exampleStore = new ExampleStore(this)
    this.menusStore = new MenusStore(this)
    this.spinnerStore = new SpinnerStore(this)
  }
}

export const rootStore = new RootStore()
