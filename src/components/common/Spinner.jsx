import React from 'react'
import styled from 'styled-components'
import { BallIndicator } from 'react-native-indicators'

import { Width, Height } from '../../utils/utils'

const Container = styled.View`
  width: ${Width};
  height: ${Height};
  position: absolute;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #000;
  opacity: 0.3;
  z-index: 999;
`

const Spinner = () => {
  return (
    <Container>
      <BallIndicator color="white" />
    </Container>
  )
}

export default Spinner
