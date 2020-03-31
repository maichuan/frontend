import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import constants from '../../utils/constants'

const Queue = styled.Text`
  font-size: 15px;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  font-weight: 600;
  color: ${constants.strongColor};
`
const NumberQueue = styled.Text`
  font-size: 25px;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  font-weight: 600;
  color: ${constants.strongColor};
`

const Status = ({ status, queue }) => {
  switch (status) {
    case 0:
      return (
        <>
          <NumberQueue>{queue}</NumberQueue>
          <Queue>Queue{queue > 1 && 's'}</Queue>
        </>
      )
    case 1:
      return <Queue>Processing...</Queue>
    case 2:
      return <Queue>Done</Queue>
    default:
      return <Queue>Default</Queue>
  }
}
Status.propTypes = {
  status: PropTypes.number,
  queue: PropTypes.number,
}

export default Status
