import React from 'react'
import { StackActions, NavigationActions } from 'react-navigation'
import { Text, Content, Button } from 'native-base'
import PropTypes from 'prop-types'

import { observer, inject } from 'mobx-react'
import { compose } from 'recompose'

import withSafeArea from '../../hocs/withSafeView'
import MenuCart from '../../components/cart/MenuCart'

const Cart = ({ menusStore, navigation }) => {
  const onSubmitClicked = () => {
    navigation.popToTop()
    navigation.navigate('Process')
  }

  return (
    <>
      <Content>
        <Text>Hello! Mr. Kong</Text>
        <Text>This is your restaurant</Text>
        {menusStore.menus.map((m, i) => (
          <MenuCart key={i} data={m} />
        ))}
      </Content>
      <Text>{'Total Price: ' + menusStore.totalPrice}</Text>
      <Button onPress={() => onSubmitClicked()}>
        <Text>Submit Order</Text>
      </Button>
    </>
  )
}

Cart.propTypes = {
  menusStore: PropTypes.object,
  navigation: PropTypes.object,
}

export default compose(
  withSafeArea,
  inject(({ rootStore }) => ({
    menusStore: rootStore.menusStore,
  })),
  observer,
)(Cart)
