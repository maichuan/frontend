import React, { useState, useEffect } from 'react'
import { LayoutAnimation } from 'react-native'
import PropTypes from 'prop-types'

import { observer, inject } from 'mobx-react'
import { compose } from 'recompose'

import {
  Container,
  Header,
  RestaurantName,
  TransactionId,
  Menus,
  ShowMore,
  ShowMoreText,
  FreeView,
  SummaryView,
  IncreasePriceView,
  IncreaseText,
  TotalPriceView,
  TotalPrice,
  IncreaseView,
} from './styled'
import Ordered from '../../components/orderedHistory/Ordered'
import AnimationHeight from '../../components/common/AnimationHeight'
import { getIncresingPrice } from '../../utils/utils'
import { serverClient } from '../../api'

import { API_READY } from 'react-native-dotenv'
import { mock } from './mock'

const OrderedHistory = ({ navigation, authStore, spinnerStore }) => {
  const orderedData = navigation.state.params.data
  const [data, setData] = useState({})
  // const [contentSize, setContentSize] = useState(0)
  const [isShowMore, setIsShowMore] = useState(false)
  const [menuLength, setMenuLength] = useState(5)
  const [prices, setPrices] = useState({})

  const fetchOrdered = async () => {
    if (API_READY === 'true') {
      const res = await serverClient.get(
        `/ordered/${orderedData.transactionId}`,
      )
      setData(res.data)
    } else {
      setData(mock)
    }
  }

  useEffect(() => {
    spinnerStore.open()
    if (authStore.auth.uid) {
      fetchOrdered()
    }
    spinnerStore.close()
  }, [])

  useEffect(() => {
    setPrices(
      getIncresingPrice({
        totalPrice: data.totalPrice,
        vat: data.vat,
        serviceCharge: data.serviceCharge,
      }),
    )
  }, [data])

  const handleShowMenu = () => {
    LayoutAnimation.spring()
    isShowMore ? setMenuLength(5) : setMenuLength(data.menus.length)
    setIsShowMore(!isShowMore)
  }

  return (
    <Container
      scrollEnabled={data.menus ? data.menus.length > 4 : false}
      // onContentSizeChange={(_, contentHeight) => setContentSize(contentHeight)}
    >
      <Header>
        <RestaurantName>{data.restaurantName}</RestaurantName>
        <TransactionId>{'Transaction ID: ' + data.transactionId}</TransactionId>
      </Header>
      {data.menus && (
        <AnimationHeight>
          <Menus>
            {data.menus &&
              data.menus
                .slice(0, menuLength)
                .map((menu, i) => <Ordered key={i} data={menu} />)}
            {data.menus.length > 5 && (
              <ShowMore activeOpacity={0.9} onPress={handleShowMenu}>
                <ShowMoreText>
                  {isShowMore ? 'Show less' : 'Show more'}
                </ShowMoreText>
              </ShowMore>
            )}
          </Menus>
        </AnimationHeight>
      )}
      <SummaryView>
        <IncreaseView>
          <IncreasePriceView>
            <IncreaseText>Net:</IncreaseText>
            <IncreaseText>{prices.net}</IncreaseText>
          </IncreasePriceView>
          <IncreasePriceView>
            <IncreaseText>
              Service Charge(
              {data.serviceCharge ? data.serviceCharge + '%' : '-'}):
            </IncreaseText>
            <IncreaseText>{prices.serviceChargePrice}</IncreaseText>
          </IncreasePriceView>
          <IncreasePriceView>
            <IncreaseText>Vat({data.vat ? data.vat + '%' : '-'}):</IncreaseText>
            <IncreaseText>{prices.vatPrice}</IncreaseText>
          </IncreasePriceView>
        </IncreaseView>
        <TotalPriceView>
          <TotalPrice>Total:</TotalPrice>
          <TotalPrice>{data.totalPrice}</TotalPrice>
        </TotalPriceView>
      </SummaryView>
      <FreeView />
    </Container>
  )
}

OrderedHistory.propTypes = {
  navigation: PropTypes.object,
  authStore: PropTypes.object,
  spinnerStore: PropTypes.object,
}

OrderedHistory.navigationOptions = props => {
  const { data } = props.navigation.state.params
  return {
    headerTitle: data.restaurantName + ' ' + data.time,
  }
}

export default compose(
  inject(({ rootStore }) => ({
    authStore: rootStore.authStore,
    spinnerStore: rootStore.spinnerStore,
  })),
  observer,
)(OrderedHistory)
