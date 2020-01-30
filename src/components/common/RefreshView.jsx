import React, { useState, useCallback } from 'react'
import { RefreshControl } from 'react-native'

import styled from 'styled-components'
import PropTypes from 'prop-types'

const ScrollBody = styled.ScrollView.attrs(props => ({
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
}))`
  flex: 1;
  margin-top: 20px;
  align-self: stretch;
`

const RefreshView = ({ children }) => {
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = useCallback(() => {
    setRefreshing(true)

    new Promise(resolve => {
      setTimeout(resolve, 2000)
    }).then(() => setRefreshing(false))
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
}

export default RefreshView
