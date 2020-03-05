import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { Container, Test } from './styled'

const mock = {
  data: [
    {
      date: '21/2/2020',
      ordered: { restaurantName: 'เบอร์เกอร์ท่านก้อง', price: 100 },
    },
    {
      date: '20/2/2020',
      ordered: { restaurantName: 'เบอร์เกอร์ท่านก้อง', price: 522 },
    },
  ],
}

const History = () => {
  const [data, setData] = useState({})

  useEffect(() => {}, [])
  return (
    <Container>
      <Test>jack</Test>
    </Container>
  )
}

History.propTypes = {
  navigation: PropTypes.object,
}

export default History
