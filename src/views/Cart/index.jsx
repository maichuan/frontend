import React from 'react'
import { Platform } from 'react-native'
import PropTypes from 'prop-types'
import { SwipeListView } from 'react-native-swipe-list-view'

import { observer, inject } from 'mobx-react'
import { compose } from 'recompose'

import MenuCart from '../../components/cart/MenuCart'
import {
  Container,
  TotalPriceView,
  TotalText,
  PriceText,
  ConfirmButton,
  ConfirmText,
} from './styled'
import { serverClient } from '../../api'
import { SafeView } from '../../components/common/styled'
import constants from '../../utils/constants'

const Cart = ({ menusStore, spinnerStore, authStore, navigation }) => {
  const { restaurantId } = navigation.state.params

  const onSubmitClicked = async () => {
    if (authStore.auth.uid) {
      spinnerStore.open()
      await new Promise(r => setTimeout(r, 1000))
      serverClient.post('/order', {
        userId: authStore.user.id,
        menus: menusStore.menus,
        restaurantId,
        totalPrice: menusStore.totalPrice,
        answers: menusStore.answers,
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
      {Platform.OS === 'ios' && <SafeView bottom color={constants.weakColor} />}
    </>
  )
}

Cart.propTypes = {
  menusStore: PropTypes.object,
  spinnerStore: PropTypes.object,
  authStore: PropTypes.object,
  navigation: PropTypes.object,
}

Cart.navigationOptions = {
  headerTitle: 'Order Summary',
}

export default compose(
  // withSafeArea,
  inject(({ rootStore }) => ({
    menusStore: rootStore.menusStore,
    authStore: rootStore.authStore,
    spinnerStore: rootStore.spinnerStore,
  })),
  observer,
)(Cart)
