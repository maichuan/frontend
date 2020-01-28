import React from 'react'
import { Root } from 'native-base'

import { observer, inject } from 'mobx-react'
import { compose } from 'recompose'
import PropTypes from 'prop-types'

import AppNavigator from '../navigators/AppNavigator'
import Spinner from '../components/common/Spinner'

const Main = ({ spinnerStore }) => {
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
