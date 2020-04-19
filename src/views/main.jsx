import React, { useState, useEffect } from 'react'
import { Vibration } from 'react-native'
import { Root } from 'native-base'
import { Notifications } from 'expo'
import {
  getAndSetLocation,
  getAndSetNotificationToken,
} from '../utils/permission'

import { observer, inject } from 'mobx-react'
import { compose } from 'recompose'
import PropTypes from 'prop-types'

import AppNavigator from '../navigators/AppNavigator'
import Spinner from '../components/common/Spinner'
import { firebaseApp } from '../utils/firebase'
import { serverClient } from '../api'

const Main = ({ spinnerStore, authStore }) => {
  const getLocationAsync = async () => {
    const location = await getAndSetLocation()

    authStore.setCurLoaciton({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    })
  }

  const getNotification = async () => {
    // const token = await getAndSetNotificationToken()
    // console.log('Token: ', token)

    // authStore.setNotificationToken(token)
    authStore.setNotificationToken(await getAndSetNotificationToken())
  }

  const fetchUser = async user => {
    const { data } = await serverClient.get(`user/${user.uid}`)
    if (data.user) {
      authStore.setUser(data.user)
    }
  }

  useEffect(() => {
    getLocationAsync()
    getNotification()
    // spinnerStore.open()
    firebaseApp.auth().onAuthStateChanged(user => {
      if (user) {
        authStore.setAuth(user)
        fetchUser(user)
      }
    })
    // spinnerStore.close()
  }, [])

  return (
    <Root>
      <AppNavigator />
      {spinnerStore.display && <Spinner />}
    </Root>
  )
}

Main._notificationSubscription = Notifications.addListener(() =>
  Vibration.vibrate(),
)

Main.propTypes = {
  spinnerStore: PropTypes.object,
  authStore: PropTypes.object,
}

export default compose(
  inject(({ rootStore }) => ({
    spinnerStore: rootStore.spinnerStore,
    authStore: rootStore.authStore,
  })),
  observer,
)(Main)
