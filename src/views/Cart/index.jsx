import React from 'react'
import { FlatList } from 'react-native'
import PropTypes from 'prop-types'

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

const Cart = ({ menusStore, spinnerStore, navigation }) => {
  const onSubmitClicked = async () => {
    spinnerStore.open()
    await new Promise(r => setTimeout(r, 1000))
    spinnerStore.close()

    navigation.popToTop()
    navigation.navigate('Process')
  }

  return (
    <>
      <Container>
        <SummayText>Order Summary</SummayText>
        {menusStore.menus.map((m, i) => (
          <MenuCart key={i} data={m} />
        ))}
        {/* <FlatList
          data={menusStore.menus}
          renderItem={({ item }) => <MenuCart data={item} />}
          keyExtractor={item => item.name}
        /> */}
      </Container>
      <TotalPriceView>
        <TotalText>Total </TotalText>
        <PriceText>{menusStore.totalPrice + ' ฿'}</PriceText>
      </TotalPriceView>
      <TotalPriceView>
        <ConfirmButton activeOpacity={0.8} onPress={() => onSubmitClicked()}>
          <ConfirmText>Submit Order</ConfirmText>
        </ConfirmButton>
      </TotalPriceView>
    </>
  )
}

Cart.propTypes = {
  menusStore: PropTypes.object,
  spinnerStore: PropTypes.object,
  navigation: PropTypes.object,
}

export default compose(
  withSafeArea,
  inject(({ rootStore }) => ({
    menusStore: rootStore.menusStore,
    spinnerStore: rootStore.spinnerStore,
  })),
  observer,
)(Cart)
