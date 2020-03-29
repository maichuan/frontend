import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { Container, ProcessType } from './styled'
import ProcessMenu from '../../components/process/ProcessMenu'
import { serverClient } from '../../api'

const mock = {
  data: [
    {
      menuId: 1,
      name: 'Menu1',
      status: 0,
      queue: 2,
    },
    {
      menuId: 2,
      name: 'Menu2',
      status: 1,
      queue: 0,
    },
    ,
    {
      menuId: 3,
      name: 'Menu3',
      status: 1,
      queue: 0,
    },
  ],
}

const Process = ({ navigation }) => {
  const [data, setData] = useState({})

  const fetchOrder = async () => {
    const data = await serverClient.get('/orders')
    setData(data.data)
  }

  useEffect(() => {}, [])
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

Process.propTypes = {
  navigation: PropTypes.object,
}

export default Process
