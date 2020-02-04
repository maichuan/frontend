import React, { useState, useEffect } from 'react'
import { Root } from 'native-base'
import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions'

import { observer, inject } from 'mobx-react'
import { compose } from 'recompose'
import PropTypes from 'prop-types'

import AppNavigator from '../navigators/AppNavigator'
import Spinner from '../components/common/Spinner'
import { firebaseApp } from '../utils/firebase'

const Main = ({ spinnerStore, authStore }) => {
  const getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION)
    // if (status !== 'granted') {
    //   this.setState({
    //     errorMessage: 'Permission to access location was denied',
    //   });
    // }
    if (status === 'granted') {
      let l = await Location.getCurrentPositionAsync({})

      authStore.setCurLoaciton({
        latitude: l.coords.latitude,
        longitude: l.coords.longitude,
      })
    }
  }

  useEffect(() => {
    getLocationAsync()

    firebaseApp.auth().onAuthStateChanged(user => {
      if (user) {
        authStore.setAuth(user)
      }
    })
  }, [])

  return (
    <Root>
      <AppNavigator />
      {spinnerStore.display && <Spinner />}
    </Root>
  )
}

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
