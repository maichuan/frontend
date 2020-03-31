import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { HistoryContext } from '../../utils/context'
import constants from '../../utils/constants'

const Component = styled.TouchableOpacity`
  margin: 3px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  background-color: ${constants.veryWeakColor};
`
const TimeView = styled.View`
  background-color: ${constants.tabColor};
  border-radius: 10px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  border-width: 1.5px;
  border-color: #aaaaaa;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
`
const Time = styled.Text`
  font-size: 18px;
  font-weight: 900;
  color: #fff;
  color: ${constants.strongColor};
`
const Detail = styled.View`
  width: 70%;
  border-radius: 10px;
  border-width: 1.5px;
  border-left-width: 0;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-color: #aaaaaa;
`
const RestaurantName = styled.Text`
  font-size: 18px;
  font-weight: 500;
  padding: 10px;
  text-align: center;
  color: ${constants.strongColor};
`
const TotalPrice = styled.Text`
  font-size: 15px;
  padding: 5px 10px;
  text-align: right;
  color: ${constants.strongColor};
`

const OrderedView = ({ data }) => {
  const { navigation } = useContext(HistoryContext)

  const handlePageChange = () => {
    navigation.navigate('OrderedHistory', {
      data,
    })
  }

  return (
    <Component activeOpacity={0.8} onPress={handlePageChange}>
      <TimeView>
        <Time>{data.time}</Time>
      </TimeView>
      <Detail>
        <RestaurantName>{data.restaurantName}</RestaurantName>
        <TotalPrice>{data.price + ' .-'}</TotalPrice>
      </Detail>
    </Component>
  )
}

OrderedView.propTypes = {
  data: PropTypes.object.isRequired,
}

export default OrderedView
