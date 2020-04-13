import React, { useContext } from 'react'
import { Text, Button, View, Icon } from 'native-base'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { observer, inject } from 'mobx-react'
import { compose } from 'recompose'

import { RestaurantContext } from '../../utils/context'
import constants from '../../utils/constants'

const InlineView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 60px;
  background-color: ${constants.weakColor};
`
const TotalPrice = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const CartIcon = styled(Icon)`
  margin: auto 10px;
  color: ${constants.strongColor};
`
const Price = styled.Text`
  font-size: 20px;
  margin: auto 10px;
  font-weight: bold;
  color: ${constants.strongColor};
`
const Continue = styled.TouchableOpacity`
  background-color: ${({ disabled }) =>
    disabled ? '#fff9ed' : constants.tabColor};

  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  border-radius: 5px;
`
const ContinueText = styled.Text`
  font-size: 20px;
  color: ${constants.strongColor};
  font-weight: 700;
`

const Cart = ({ menusStore, restaurantId, table }) => {
  const { navigation } = useContext(RestaurantContext)

  return (
    <InlineView>
      <TotalPrice>
        <CartIcon ios="ios-cart" android="md-cart" />
        <Price>Total Price: {menusStore.totalPrice}</Price>
      </TotalPrice>
      <Continue
        disabled={!(menusStore.menus.length > 0)}
        onPress={() => navigation.navigate('Cart', { restaurantId, table })}
      >
        <ContinueText>Continue</ContinueText>
      </Continue>
    </InlineView>
  )
}

Cart.propTypes = {
  menusStore: PropTypes.object,
  restaurantId: PropTypes.number,
  table: PropTypes.number,
}

export default compose(
  inject(({ rootStore }) => ({
    menusStore: rootStore.menusStore,
  })),
  observer,
)(Cart)
