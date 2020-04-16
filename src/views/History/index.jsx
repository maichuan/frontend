import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { observer, inject } from 'mobx-react'
import { compose } from 'recompose'

import { Height } from '../../utils/utils'
import { Container, HistoryView } from './styled'
import DateView from '../../components/history/DateView'
import { HistoryContext } from '../../utils/context'
import { serverClient } from '../../api'
import DynamicRefreshView from '../../components/common/DynamicRefreshView'

import { API_READY } from 'react-native-dotenv'
import { mock } from './mock'

const History = ({ navigation, authStore, spinnerStore }) => {
  const [data, setData] = useState([])
  const [contentSize, setContentSize] = useState(0)

  const fetchHistory = async () => {
    if (API_READY === 'true') {
      const res = await serverClient.get('/history', {
        headers: { id: authStore.user.id },
      })
      setData(res.data.data)
    } else {
      setData(mock.data)
    }
  }

  useEffect(() => {
    spinnerStore.open()
    if (authStore.auth.uid) {
      fetchHistory()
    }
    spinnerStore.close()
  }, [])

  return (
    <HistoryContext.Provider value={{ navigation }}>
      <DynamicRefreshView onRefreshAction={fetchHistory}>
        <HistoryView
          scrollEnabled={contentSize > Height * 0.9}
          onContentSizeChange={(_, contentHeight) =>
            setContentSize(contentHeight)
          }
        >
          {data.map((d, i) => (
            <DateView key={i} data={d} />
          ))}
        </HistoryView>
      </DynamicRefreshView>
    </HistoryContext.Provider>
  )
}

History.propTypes = {
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
)(History)
