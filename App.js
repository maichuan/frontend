import React, { useEffect, useState } from 'react'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'
import Omise from 'omise-react-native'

import { Provider } from 'mobx-react'
import { rootStore } from './src/stores/RootStore'

import Main from './src/views/main.jsx'
import { OMISE_TOKEN } from 'react-native-dotenv'

Omise.config(OMISE_TOKEN, '2019-05-29')

const App = () => {
  const [isReady, setIsReady] = useState(false)

  const loadFont = async () => {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    })
    setIsReady(true)
  }

  useEffect(() => {
    loadFont()
  }, [])

  return isReady ? (
    <Provider rootStore={rootStore}>
      <Main />
    </Provider>
  ) : (
    <AppLoading />
  )
}

export default App
