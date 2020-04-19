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
  SubmitIcon,
} from './styled'
import { serverClient } from '../../api'
import { SafeView } from '../../components/common/styled'
import constants from '../../utils/constants'
import { mockPayment } from '../../utils/payment'

const Cart = ({ menusStore, spinnerStore, authStore, navigation }) => {
  const { restaurantId, table } = navigation.state.params

  const onSubmitClicked = async type => {
    // type 0 = eat in, type 1 = take-away
    if (authStore.auth.uid) {
      spinnerStore.open()

      const { data } = await mockPayment(menusStore.totalPrice)

      serverClient.post('/order', {
        userId: authStore.user.id,
        menus: menusStore.menus,
        restaurantId,
        totalPrice: menusStore.totalPrice,
        table,
        type,
        chargeId: data.chargeId,
        token: authStore.notificationToken,
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
          onPress={() => onSubmitClicked(1)}
        >
          <SubmitIcon name="shopping-bag" type="FontAwesome5" />
          <ConfirmText>Take-away</ConfirmText>
        </ConfirmButton>
        <ConfirmButton
          disabled={table < 1 || !(menusStore.menus.length > 0)}
          activeOpacity={0.8}
          onPress={() => onSubmitClicked(0)}
        >
          <SubmitIcon name="food" size={27} type="MaterialCommunityIcons" />
          <ConfirmText>Eat in</ConfirmText>
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
