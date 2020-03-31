import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import OrderedView from './OrderedView'
import constants from '../../utils/constants'

const Component = styled.View`
  padding: 15px 5px;
  margin: 5px;
  border-width: 2px;
  border-color: #e3e3e3;
  border-radius: 10px;
  /* background-color: #fff; */
  background-color: ${constants.weakColor};
`
const DateText = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: ${constants.strongColor};
  padding: 5px 10px;
`
const Hr = styled.View`
  border-bottom-color: #aaaaaa;
  border-bottom-color: ${constants.strongColor};
  border-bottom-width: 1px;
`
const ContentView = styled.View`
  padding-top: 10px;
`

const DateView = ({ data }) => {
  return (
    <Component>
      <DateText>{data.date}</DateText>
      <Hr />
      <ContentView>
        {data.ordered.map((o, i) => (
          <OrderedView key={i} data={o} />
        ))}
      </ContentView>
    </Component>
  )
}

DateView.propTypes = {
  data: PropTypes.object.isRequired,
}

export default DateView
