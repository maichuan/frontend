import React from 'react'
import { View, Text } from 'native-base'
import PropTypes from 'prop-types'

import { Container } from './styled'
import ProcessMenu from '../../components/process/ProcessMenu'

const mock = {
  data: [
    {
      menuId: 1,
      name: 'Menu1',
      status: 0,
    },
    {
      menuId: 2,
      name: 'Menu2',
      status: 2,
    },
  ],
}

const Process = ({ navigation }) => {
  return (
    <Container>
      <Text>Your current order</Text>
      {mock.data.map((d, i) => (
        <ProcessMenu data={d} key={i} />
      ))}
    </Container>
  )
}

Process.propTypes = {
  navigation: PropTypes.object,
}

export default Process
