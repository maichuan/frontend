import React from 'react'
import { Alert, Text } from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Status = ({ status, queue }) => {
  switch (status) {
    case 0:
      return (
        <Text>
          {queue} Queue{queue > 1 && 's'}
        </Text>
      )
    case 1:
      return <Text>Processing...</Text>
    case 2:
      return <Text>Done</Text>
    default:
      return <Text>Default</Text>
  }
}
Status.propTypes = {
  status: PropTypes.number,
  queue: PropTypes.number,
}

export default Status
