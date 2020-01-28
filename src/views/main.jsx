import React, { useState, useEffect } from 'react'
import { Root } from 'native-base'
import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions'

import { observer, inject } from 'mobx-react'
import { compose } from 'recompose'
import PropTypes from 'prop-types'

import AppNavigator from '../navigators/AppNavigator'
import Spinner from '../components/common/Spinner'

const Main = ({ spinnerStore }) => {
  const [location, setLocation] = useState({})

  const getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION)
    // if (status !== 'granted') {
    //   this.setState({
    //     errorMessage: 'Permission to access location was denied',
    //   });
    // }
    if (status === 'granted') {
      let l = await Location.getCurrentPositionAsync({})
      console.log(l)

      setLocation(location)
    }
  }

  useEffect(() => {
    getLocationAsync()
  }, [])

  return (
    <Root>
      {spinnerStore.display && <Spinner />}
      <AppNavigator />
    </Root>
  )
}

Main.propTypes = {
  spinnerStore: PropTypes.object,
}

export default compose(
  inject(({ rootStore }) => ({
    spinnerStore: rootStore.spinnerStore,
  })),
  observer,
)(Main)
