import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { observer, inject } from 'mobx-react'
import { compose } from 'recompose'

import { Container, ProcessType } from './styled'
import ProcessMenu from '../../components/process/ProcessMenu'
import { serverClient } from '../../api'

import { mock } from './mock'

const Process = ({ navigation, authStore }) => {
  const [data, setData] = useState({})

  const fetchOrder = async () => {
    const data = await serverClient.get('/orders')
    setData(data.data)
  }

  useEffect(() => {
    if (authStore.auth.uid) {
      // fetch
    }
  }, [])

  return (
    <Container>
      <ProcessType>Processing...</ProcessType>
      {mock.data
        .filter(d => d.status === 1)
        .map((d, i) => (
          <ProcessMenu data={d} key={i} />
        ))}
      <ProcessType>In queue</ProcessType>
      {mock.data
        .filter(d => d.status === 0)
        .map((d, i) => (
          <ProcessMenu data={d} key={i} />
        ))}
    </Container>
  )
}

Process['navigationOptions'] = screenProps => ({
  headerTitle: 'Jackk',
  headerShown: false,
})

Process.propTypes = {
  navigation: PropTypes.object,
  authStore: PropTypes.object,
}

export default compose(
  inject(({ rootStore }) => ({
    authStore: rootStore.authStore,
  })),
  observer,
)(Process)
