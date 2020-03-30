import React, { useState, useEffect } from 'react'
import { Root } from 'native-base'

import { getAndSetLocation } from '../utils/utils'

import { observer, inject } from 'mobx-react'
import { compose } from 'recompose'
import PropTypes from 'prop-types'

import AppNavigator from '../navigators/AppNavigator'
import Spinner from '../components/common/Spinner'
import { firebaseApp } from '../utils/firebase'

const Main = ({ spinnerStore, authStore }) => {
  const getLocationAsync = async () => {
    await getAndSetLocation(authStore)
  }

  useEffect(() => {
    getLocationAsync()

    // spinnerStore.open()
    firebaseApp.auth().onAuthStateChanged(user => {
      if (user) {
        authStore.setAuth(user)
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
