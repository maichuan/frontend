import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { Height } from '../../utils/utils'
import { Container, HistoryView } from './styled'
import DateView from '../../components/history/DateView'
import { HistoryContext } from '../../utils/context'

import { mock } from './mock'

const History = ({ navigation }) => {
  const [data, setData] = useState([])
  const [contentSize, setContentSize] = useState(0)

  useEffect(() => {
    setData(mock.data)
  }, [])
  return (
    <HistoryContext.Provider value={{ navigation }}>
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
    </HistoryContext.Provider>
  )
}

History.propTypes = {
  navigation: PropTypes.object,
}

export default History
