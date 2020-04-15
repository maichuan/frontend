import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { observer, inject } from 'mobx-react'
import { compose } from 'recompose'

import { Container, ProcessType } from './styled'
import ProcessMenu from '../../components/process/ProcessMenu'
import { serverClient } from '../../api'

import { API_READY } from 'react-native-dotenv'
import { mock } from './mock'
import { Height } from '../../utils/utils'
import DynamicRefreshView from '../../components/common/DynamicRefreshView'

const Process = ({ navigation, authStore, spinnerStore }) => {
  const [data, setData] = useState({ orders: [] })
  const [contentSize, setContentSize] = useState(0)
  const [prevCancelOrder, setCancelOrder] = useState(0)

  const fetchOrder = async () => {
    if (API_READY === 'true') {
      const res = await serverClient.get('/order', {
        headers: { id: authStore.user.id },
      })
      setData(res.data)
    } else {
      setData(mock)
    }
  }

  useEffect(() => {
    spinnerStore.open()
    if (authStore.auth.uid) {
      fetchOrder()
    }
    spinnerStore.close()
  }, [])

  useEffect(() => {
    spinnerStore.open()
    if (authStore.auth.uid) {
      fetchOrder()
    }
    spinnerStore.close()
  }, [prevCancelOrder])

  return (
    <DynamicRefreshView
      onRefreshAction={fetchOrder}
      scrollEnabled={contentSize > Height * 0.65}
      onContentSizeChange={(_, contentHeight) => setContentSize(contentHeight)}
    >
      {data.orders.find(o => o.status === 1) && (
        <ProcessType>Cooking</ProcessType>
      )}
      {data.orders
        .filter(d => d.status === 1)
        .map((d, i) => (
          <ProcessMenu data={d} key={i} />
        ))}
      {data.orders.find(o => o.status === 0) && (
        <ProcessType>In queue</ProcessType>
      )}
      {data.orders
        .filter(d => d.status === 0)
        .map((d, i) => (
          <ProcessMenu onCancelComplete={setCancelOrder} data={d} key={i} />
        ))}
    </DynamicRefreshView>
  )
}

Process['navigationOptions'] = screenProps => ({
  headerTitle: 'Processing...',
})

Process.propTypes = {
  navigation: PropTypes.object,
  authStore: PropTypes.object,
  spinnerStore: PropTypes.object,
}

export default compose(
  inject(({ rootStore }) => ({
    authStore: rootStore.authStore,
    spinnerStore: rootStore.spinnerStore,
  })),
  observer,
)(Process)
