import React, { useState, useEffect } from 'react'
import { Platform } from 'react-native'
import { Icon } from 'native-base'
import PropTypes from 'prop-types'
import Menu from '../../components/restaurant/Menu'
import PopularMenu from '../../components/restaurant/PopularMenu'

import { observer, inject } from 'mobx-react'
import { compose } from 'recompose'

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
  Container,
} from './styled'
import SearchInput from '../../components/common/SearchInput'
import { SafeView } from '../../components/common/styled'
import { Width } from '../../utils/utils'
import { serverClient } from '../../api'

import { mock } from './mock'

const Restaurant = ({ navigation, menusStore }) => {
  // const { id, imgURL, name, table } = navigation.state.params
  const { id, table } = navigation.state.params
  const [searchText, setSearchText] = useState('')
  const [restaurant, setResturant] = useState(null)

  const fetchMenu = async () => {
    // const res = await serverClient.get(`/restaurants/${id}`)
    const res = { data: { name: 'Test', id: 5 } } // TODO: Remove after complete question test
    setResturant(res.data)
  }

  useEffect(() => {
    fetchMenu()
  }, [])

  return (
    restaurant && (
      <RestaurantContext.Provider value={{ navigation }}>
        <Container>
          <HeadImage
            source={
              restaurant.imgURL
                ? { uri: restaurant.imgURL }
                : require('../../../assets/mock_res.jpg')
            }
          />
          <TextImage>
            <TableNoView>
              <RestaurantName>{restaurant.name}</RestaurantName>
              <RestaurantName>{restaurant.id}</RestaurantName>
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
              width={Width / 1.6}
            />
            <FilterButton>
              <Icon name="sort-variant" type="MaterialCommunityIcons" />
            </FilterButton>
          </SearchView>
          <PopularText>Most Popular</PopularText>
          <HorizontalView horizontal>
            {restaurant.menus &&
              restaurant.menus.map((m, i) => <PopularMenu key={i} data={m} />)}
          </HorizontalView>
          <PopularText>All Menu</PopularText>
          {restaurant.menus
            ? restaurant.menus.map((d, i) => <Menu key={i} data={d} />)
            : mock.map((m, i) => <Menu key={i} data={m} />)}
        </Container>
        <Cart />
        {Platform.OS === 'ios' && <SafeView bottom />}
      </RestaurantContext.Provider>
    )
  )
}

Restaurant.propTypes = {
  navigation: PropTypes.object,
  menusStore: PropTypes.object,
}

export default compose(
  inject(({ rootStore }) => ({
    menusStore: rootStore.menusStore,
  })),
  observer,
)(Restaurant)
