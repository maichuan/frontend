import React, { useState } from 'react'
import { Content, Text, Icon } from 'native-base'
import PropTypes from 'prop-types'
import Menu from '../../components/restaurant/Menu'
import PopularMenu from '../../components/restaurant/PopularMenu'

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
  SearchView,
  FilterButton,
  PopularText,
  HorizontalView,
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
          <TableNoView>
            <RestaurantName>Jackkkkkkkkkkkkkkk</RestaurantName>
            <RestaurantName>{restaurantId}</RestaurantName>
          </TableNoView>

          <TableNoView>
            <RestaurantName>Table No.</RestaurantName>
            <TableNo>{table}</TableNo>
          </TableNoView>
        </TextImage>
        <SearchView>
          <SearchInput
            placeholder="Find something to eat"
            text={searchText}
            setText={setSearchText}
            width={225}
          />
          <FilterButton>
            <Icon name="sort-variant" type="MaterialCommunityIcons" />
          </FilterButton>
        </SearchView>
        <PopularText>Most Popular</PopularText>
        <HorizontalView horizontal>
          {mock.map((m, i) => (
            <PopularMenu key={i} data={m} />
          ))}
        </HorizontalView>
        <PopularText>All Menu</PopularText>
        {mock.map((m, i) => (
          <Menu key={i} data={m} />
        ))}
      </Content>
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
