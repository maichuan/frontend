import React, { useContext } from 'react'
import { Text, Button, View, Icon } from 'native-base'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { observer, inject } from 'mobx-react'
import { compose } from 'recompose'

import { RestaurantContext } from '../../utils/context'

const InlineView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 60px;
`
const TotalPrice = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const CartIcon = styled(Icon)`
  margin: auto 10px;
`
const Price = styled.Text`
  font-size: 20px;
  margin: auto 10px;
  font-weight: bold;
`

const Cart = ({ menusStore }) => {
  const { navigation } = useContext(RestaurantContext)

  return (
    <InlineView>
      <TotalPrice>
        <CartIcon ios="ios-cart" android="md-cart" />
        <Price>Total Price: {menusStore.totalPrice}</Price>
      </TotalPrice>
      <Button success onPress={() => navigation.navigate('Cart')}>
        <Text>Continue</Text>
      </Button>
    </InlineView>
  )
}

Cart.propTypes = {
  data: PropTypes.object,
  menusStore: PropTypes.object,
}

export default compose(
  inject(({ rootStore }) => ({
    menusStore: rootStore.menusStore,
  })),
  observer,
)(Cart)
