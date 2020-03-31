import React, { useState, useEffect } from 'react'
import { LayoutAnimation } from 'react-native'
import PropTypes from 'prop-types'

import { Height } from '../../utils/utils'
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

import { mock } from './mock'

const OrderedHistory = ({ navigation }) => {
  const orderedData = navigation.state.params.data
  const [data, setData] = useState({})
  // const [contentSize, setContentSize] = useState(0)
  const [isShowMore, setIsShowMore] = useState(false)
  const [menuLength, setMenuLength] = useState(5)
  const [prices, setPrices] = useState({})

  useEffect(() => {
    setData(mock)
    console.log(`http://localhost:3000/ordered/${orderedData.transactionId}`)
  }, [])

  useEffect(() => {
    setPrices(
      getIncresingPrice({
        totalPrice: data.totalPrice,
        tax: data.tax,
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
            <IncreaseText>Service Charge({data.serviceCharge}%):</IncreaseText>
            <IncreaseText>{prices.serviceChargePrice}</IncreaseText>
          </IncreasePriceView>
          <IncreasePriceView>
            <IncreaseText>Tax({data.tax}%):</IncreaseText>
            <IncreaseText>{prices.taxPrice}</IncreaseText>
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
}

OrderedHistory.navigationOptions = props => {
  const { data } = props.navigation.state.params
  return {
    headerTitle: data.restaurantName + ' ' + data.time,
  }
}

export default OrderedHistory
