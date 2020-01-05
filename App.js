import React from 'react'
import { Provider } from 'mobx-react'
import { exampleStore } from './stores/ExampleStore'
import Home from './views/Home'

export default function App() {
  return (
    <Provider exampleStore={exampleStore}>
      <Home />
    </Provider>
  )
}
