import React from 'react'
import { Text, Content, Button } from 'native-base'
import PropTypes from 'prop-types'

import { observer, inject } from 'mobx-react'
import { compose } from 'recompose'

import { SafeView } from '../../components/common/styled'
import MenuCart from '../../components/cart/menu_cart'

const Cart = ({ menusStore }) => {
  console.log(menusStore.menus)

  return (
    <SafeView>
      <Content>
        <Text>Hello! Mr. Kong</Text>
        <Text>This is your restaurant</Text>
        {menusStore.menus.map((m, i) => (
          <MenuCart key={i} data={m} />
        ))}
      </Content>
      <Button onPress={() => alert('Confirm!!')}>
        <Text>Submit Order</Text>
      </Button>
    </SafeView>
  )
}

Cart.propTypes = {
  menusStore: PropTypes.object,
}

export default compose(
  inject(({ rootStore }) => ({
    menusStore: rootStore.menusStore,
  })),
  observer,
)(Cart)
