import React, { useState } from 'react'
import { Text } from 'native-base'
import PropTypes from 'prop-types'

import { observer, inject } from 'mobx-react'
import { compose } from 'recompose'

import {
  Containers,
  WelcomeView,
  WelcomeMessage,
  SearchInput,
  SearchBox,
  SearchIcon,
  HorizontalView,
  Body,
  ScrollBody,
  TrendRestaurant,
  NearByText,
} from './styled'
import RestaurantCard from '../../components/home/RestaurantCard'
import { HomeContext } from '../../utils/context'
import withSafeView from '../../hocs/withSafeView'
import { SearchContainer } from './styled'

const Home = ({ exampleStore, navigation }) => {
  const [searchText, setSearchText] = useState('')
  return (
    <HomeContext.Provider value={{ navigation }}>
      <Containers>
        <WelcomeView>
          <WelcomeMessage>Hello, Kong</WelcomeMessage>
        </WelcomeView>
        <ScrollBody>
          <SearchContainer>
            <SearchBox>
              <SearchIcon name="ios-search" size={20} color="#000" />
              <SearchInput
                value={searchText}
                placeholder="Search for your restaurant"
                onChangeText={searchString => {
                  setSearchText(searchString)
                }}
              />
            </SearchBox>
          </SearchContainer>
          <HorizontalView horizontal>
            {Array(5)
              .fill()
              .map((_, i) => (
                <TrendRestaurant key={i}>
                  <Text>Wow{' ' + i}</Text>
                </TrendRestaurant>
              ))}
          </HorizontalView>
          <Body>
            <NearByText>Near By restaurant</NearByText>
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
          </Body>
        </ScrollBody>
      </Containers>
    </HomeContext.Provider>
  )
}

Home.propTypes = {
  exampleStore: PropTypes.object,
  navigation: PropTypes.object,
}

export default compose(
  withSafeView,
  inject(({ rootStore }) => ({
    exampleStore: rootStore.exampleStore,
  })),
  observer,
)(Home)
