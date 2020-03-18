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
} from './styled'
import Ordered from '../../components/orderedHistory/Ordered'
import AnimationHeight from '../../components/common/AnimationHeight'

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
      totalPrice: 30,
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
  ],
  serviceCharge: 10,
  tax: 7,
  totalPrice: 116.5,
}

const OrderedHistory = () => {
  const [data, setData] = useState({})
  const [contentSize, setContentSize] = useState(0)
  const [isShowMore, setIsShowMore] = useState(false)
  const [menuLength, setMenuLength] = useState(5)

  useEffect(() => {
    setData(mock)
  }, [])

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
    </Container>
  )
}

OrderedHistory.propTypes = {
  navigation: PropTypes.object,
}

export default OrderedHistory
