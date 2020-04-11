import React, { useState, useCallback } from 'react'
import { RefreshControl } from 'react-native'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { observer, inject } from 'mobx-react'
import { compose } from 'recompose'
import constants from '../../utils/constants'

const ScrollBody = styled.ScrollView`
  flex: 1;
  background-color: ${constants.veryWeakColor};
`

const DynamicRefreshView = ({ children, authStore, onRefreshAction }) => {
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = useCallback(async () => {
    setRefreshing(true)
    if (authStore.auth.uid) {
      await onRefreshAction()
    }
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

DynamicRefreshView.propTypes = {
  children: PropTypes.node.isRequired,
  authStore: PropTypes.object,
  onRefreshAction: PropTypes.func.isRequired,
}

export default compose(
  inject(({ rootStore }) => ({
    authStore: rootStore.authStore,
  })),
  observer,
)(DynamicRefreshView)
