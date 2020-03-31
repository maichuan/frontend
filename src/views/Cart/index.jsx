import React from 'react'
import PropTypes from 'prop-types'
import { SwipeListView } from 'react-native-swipe-list-view'

import { observer, inject } from 'mobx-react'
import { compose } from 'recompose'

import withSafeArea from '../../hocs/withSafeView'
import MenuCart from '../../components/cart/MenuCart'
import {
  Container,
  SummayText,
  TotalPriceView,
  TotalText,
  PriceText,
  ConfirmButton,
  ConfirmText,
} from './styled'
import { serverClient } from '../../api'
import constants from '../../utils/constants'

const Cart = ({ menusStore, spinnerStore, authStore, navigation }) => {
  const onSubmitClicked = async () => {
    if (authStore.auth.uid) {
      spinnerStore.open()
      await new Promise(r => setTimeout(r, 1000))
      serverClient.post('/order', {
        userId: 1,
        menus: menusStore.menus,
        restaurantId: 1,
        totalPrice: 1,
      })
      menusStore.clear()
      spinnerStore.close()

      navigation.popToTop()
      navigation.navigate('Process')
    } else {
      navigation.navigate('Info')
    }
  }

  return (
    <>
      <Container>
        <SummayText>Order Summary</SummayText>
        <SwipeListView
          closeOnScroll
          closeOnRowOpen
          previewRowKey="0"
          data={menusStore.menus}
          renderItem={data => <MenuCart data={data.item} />}
          keyExtractor={(_, index) => index}
        />
      </Container>
      <TotalPriceView>
        <TotalText>Playment </TotalText>
        <TotalText>Cash </TotalText>
      </TotalPriceView>
      <TotalPriceView>
        <TotalText>Total </TotalText>
        <PriceText>{menusStore.totalPrice + ' ฿'}</PriceText>
      </TotalPriceView>
      <TotalPriceView>
        <ConfirmButton
          disabled={!(menusStore.menus.length > 0)}
          activeOpacity={0.8}
          onPress={() => onSubmitClicked()}
        >
          <ConfirmText>Submit Order</ConfirmText>
        </ConfirmButton>
      </TotalPriceView>
    </>
  )
}

Cart.propTypes = {
  menusStore: PropTypes.object,
  spinnerStore: PropTypes.object,
  authStore: PropTypes.object,
  navigation: PropTypes.object,
}
// Cart.navigationOptions = {
//   headerMode: 'float',
//   headerShown: true,
//   title: 'Hello',
//   headerTitle: 'Wow',
// }

export default compose(
  withSafeArea,
  inject(({ rootStore }) => ({
    menusStore: rootStore.menusStore,
    authStore: rootStore.authStore,
    spinnerStore: rootStore.spinnerStore,
  })),
  observer,
)(Cart)
