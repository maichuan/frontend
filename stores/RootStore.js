import { ExampleStore } from './ExampleStore'
import { NavigationStore } from './NavigationStore'

class RootStore {
  constructor() {
    this.exampleStore = new ExampleStore(this)
    this.navigationStore = new NavigationStore(this)
  }
}

export const rootStore = new RootStore()
