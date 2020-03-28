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

const mock = {
  restaurantName: 'burger tan kong',
  transactionId: 1,
  menus: [
    {
      name: 'french fried',
      quantity: 1,
      totalPrice: 99,
      special: '',
    },
    {
      name: 'brend285',
      quantity: 1,
      totalPrice: 285,
      special: '',
    },
    {
      name: 'เล้ง',
      quantity: 1,
      totalPrice: 60,
      special: 'ไม่เผ็ด',
    },
    {
      name: 'หมูย่าง',
      quantity: 1,
      totalPrice: 3000,
      special: 'สุกๆ',
    },
    {
      name: 'ไก่ย่าง',
      quantity: 1,
      totalPrice: 50,
      special: 'ไหม้ไหม้',
    },
    {
      name: 'เนื้อย่าง',
      quantity: 1,
      totalPrice: 30,
      special: 'ไม่ไหม้',
    },
    {
      name: 'หมูทอด',
      quantity: 1,
      totalPrice: 30,
      special: '',
    },
    {
      name: 'หมูแดดเดียว',
      quantity: 1,
      totalPrice: 30,
      special: '',
    },
    {
      name: 'เนื้อย่าง',
      quantity: 1,
      totalPrice: 30,
      special: 'ไม่ไหม้',
    },
    {
      name: 'หมูทอด',
      quantity: 1,
      totalPrice: 30,
      special: '',
    },
    {
      name: 'หมูแดดเดียว',
      quantity: 1,
      totalPrice: 30,
      special: '',
    },
  ],
  serviceCharge: 10,
  tax: 7,
  totalPrice: 117.7,
}

const OrderedHistory = ({ navigation }) => {
  const { transactionId } = navigation.state.params
  const [data, setData] = useState({})
  const [contentSize, setContentSize] = useState(0)
  const [isShowMore, setIsShowMore] = useState(false)
  const [menuLength, setMenuLength] = useState(5)
  const [prices, setPrices] = useState({})

  useEffect(() => {
    setData(mock)
    console.log(`http://localhost:3000/ordered/${transactionId}`)
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
      scrollEnabled={contentSize > Height * 0.9}
      onContentSizeChange={(_, contentHeight) => setContentSize(contentHeight)}
    >
      <Header>
        <RestaurantName>{data.restaurantName}</RestaurantName>
        <TransactionId>{'Transaction ID: ' + data.transactionId}</TransactionId>
      </Header>
      <AnimationHeight>
        <Menus>
          {data.menus &&
            data.menus
              .slice(0, menuLength)
              .map((menu, i) => <Ordered key={i} data={menu} />)}
          <ShowMore activeOpacity={0.9} onPress={handleShowMenu}>
            <ShowMoreText>
              {isShowMore ? 'Show less' : 'Show more'}
            </ShowMoreText>
          </ShowMore>
        </Menus>
      </AnimationHeight>
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

export default OrderedHistory
