import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { Height } from '../../utils/utils'
import { Container, HistoryView } from './styled'
import DateView from '../../components/history/DateView'

const mock = {
  data: [
    {
      date: '21/2/2020',
      ordered: [
        { restaurantName: 'เบอร์เกอร์ท่านก้อง', price: 100, time: '12.00' },
        { restaurantName: 'เบอร์เกอร์ท่านก้อง', price: 100, time: '18.00' },
      ],
    },
    {
      date: '20/2/2020',
      ordered: [
        { restaurantName: 'เบอร์เกอร์ท่านก้อง', price: 522, time: '18.00' },
      ],
    },
  ],
}

const History = () => {
  const [data, setData] = useState([])
  const [contentSize, setContentSize] = useState(0)

  useEffect(() => {
    setData(mock.data)
  }, [])
  return (
    <Container>
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
    </Container>
  )
}

History.propTypes = {
  navigation: PropTypes.object,
}

export default History
