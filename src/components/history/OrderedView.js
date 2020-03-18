import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { HistoryContext } from '../../utils/context'

const Component = styled.TouchableOpacity`
  border-width: 1px;
  border-color: #000;
  margin: 3px;
  padding: 5px;
`
const RestaurantName = styled.Text`
  font-size: 25px;
  font-weight: 500;
`
const TotalPrice = styled.Text`
  font-size: 20px;
`

const OrderedView = ({ data }) => {
  const { navigation } = useContext(HistoryContext)

  const handlePageChange = () => {
    navigation.navigate('OrderedHistory')
  }

  return (
    <Component activeOpacity={0.8} onPress={handlePageChange}>
      <RestaurantName>{data.restaurantName}</RestaurantName>
      <TotalPrice>{data.price + ' .-'}</TotalPrice>
      <TotalPrice>{data.time}</TotalPrice>
    </Component>
  )
}

OrderedView.propTypes = {
  data: PropTypes.object.isRequired,
}

export default OrderedView
