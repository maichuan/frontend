import React, { useState, useCallback } from 'react'
import { RefreshControl } from 'react-native'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { observer, inject } from 'mobx-react'
import { compose } from 'recompose'
import { getAndSetLocation } from '../../utils/permission'

const ScrollBody = styled.ScrollView.attrs(props => ({
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
}))`
  flex: 1;
  /* margin-top: 20px; */
  align-self: stretch;
`

const RefreshView = ({ children, authStore }) => {
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = useCallback(async () => {
    setRefreshing(true)

    const location = await getAndSetLocation()
    authStore.setCurLoaciton({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    })

    setRefreshing(false)
  }, [refreshing])

  return (
    <ScrollBody
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {children}
    </ScrollBody>
  )
}

RefreshView.propTypes = {
  children: PropTypes.node,
  authStore: PropTypes.object,
}

export default compose(
  inject(({ rootStore }) => ({
    authStore: rootStore.authStore,
  })),
  observer,
)(RefreshView)
