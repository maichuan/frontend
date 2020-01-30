import React, { useState, useEffect } from 'react'
import { Text } from 'native-base'
import PropTypes from 'prop-types'

import { observer, inject } from 'mobx-react'
import { compose } from 'recompose'

import {
  Containers,
  WelcomeView,
  WelcomeMessage,
  HorizontalView,
  Body,
  ScrollBody,
  TrendRestaurant,
  NearByText,
} from './styled'
import RestaurantCard from '../../components/home/RestaurantCard'
import { HomeContext } from '../../utils/context'
import SearchInput from '../../components/common/SearchInput'
import { SafeView } from '../../components/common/styled'
import RefreshView from '../../components/common/RefreshView'

import Constant from '../../utils/constants'
import { serverClient } from '../../api'

const Home = ({ exampleStore, navigation }) => {
  const [searchText, setSearchText] = useState('')
  const [data, setData] = useState({})

  const fetchWelcome = async () => {
    const res = await serverClient.get('/welcome')
    setData(res.data)
  }

  useEffect(() => {
    fetchWelcome()
  }, [])

  return (
    <HomeContext.Provider value={{ navigation }}>
      <SafeView color={Constant.tabColor}>
        <Containers>
          <WelcomeView>
            <WelcomeMessage>Hello, Kong</WelcomeMessage>
          </WelcomeView>
          <SearchInput
            placeholder="Search for your restaurant"
            text={searchText}
            setText={setSearchText}
          />
          <RefreshView>
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
          </RefreshView>
        </Containers>
      </SafeView>
    </HomeContext.Provider>
  )
}

Home.propTypes = {
  exampleStore: PropTypes.object,
  navigation: PropTypes.object,
}

export default compose(
  inject(({ rootStore }) => ({
    exampleStore: rootStore.exampleStore,
  })),
  observer,
)(Home)
