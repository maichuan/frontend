import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import OrderedView from './OrderedView'

const Component = styled.View`
  padding: 15px 5px;
  border-bottom-width: 1px;
  border-bottom-color: #a5a5a5;
`
const DateText = styled.Text`
  font-size: 25px;
  font-weight: 600;
  color: #858585;
`

const DateView = ({ data }) => {
  return (
    <Component>
      <DateText>{data.date}</DateText>
      {data.ordered.map((o, i) => (
        <OrderedView key={i} data={o} />
      ))}
    </Component>
  )
}

DateView.propTypes = {
  data: PropTypes.object.isRequired,
}

export default DateView
