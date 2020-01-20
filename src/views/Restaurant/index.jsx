import React, { useState } from 'react'
import { Content, Text, Button } from 'native-base'
import PropTypes from 'prop-types'
import Menu from '../../components/restaurant/Menu'

import { observer, inject } from 'mobx-react'
import { compose } from 'recompose'

import withSafeArea from '../../hocs/withSafeView'
import Cart from '../../components/restaurant/Cart'
import { RestaurantContext } from '../../utils/context'
import {
  HeadImage,
  TextImage,
  RestaurantName,
  TableNoView,
  TableNo,
} from './styled'
import SearchInput from '../../components/common/SearchInput'

import { mock } from './mock'

const Restaurant = ({ navigation, menusStore }) => {
  const { params } = navigation.state
  const restaurantId = params.id
  const table = params.table
  const [searchText, setSearchText] = useState('')

  return (
    <RestaurantContext.Provider value={{ navigation }}>
      <Content>
        <HeadImage source={require('../../../assets/mock_res.jpg')} />
        <TextImage>
          <RestaurantName>Jackkkkkkkkkkkkkkk</RestaurantName>
          <TableNoView>
            <RestaurantName>Table No.</RestaurantName>
            <TableNo>{table}</TableNo>
          </TableNoView>
        </TextImage>
        <Text>
          {restaurantId + ' ===> '} Sat on table: {table}
        </Text>
        <SearchInput
          placeholder="Find something to eat"
          text={searchText}
          setText={setSearchText}
        />
        {mock.map((m, i) => (
          <Menu key={i} data={m} />
        ))}
      </Content>
      <Button onPress={() => menusStore.clear()}>
        <Text>Clear</Text>
      </Button>
      <Cart />
    </RestaurantContext.Provider>
  )
}

Restaurant.propTypes = {
  navigation: PropTypes.object,
  menusStore: PropTypes.object,
}

export default compose(
  withSafeArea,
  inject(({ rootStore }) => ({
    menusStore: rootStore.menusStore,
  })),
  observer,
)(Restaurant)
