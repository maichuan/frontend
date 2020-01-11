import { ExampleStore } from './ExampleStore'
import { MenusStore } from './MenusStore'

class RootStore {
  constructor() {
    this.exampleStore = new ExampleStore(this)
    this.menusStore = new MenusStore(this)
  }
}

export const rootStore = new RootStore()
