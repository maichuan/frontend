import React, { useState, useEffect } from 'react'
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
  NearByText,
  SearchContainer,
  FreeView,
} from './styled'
import RestaurantCard from '../../components/home/RestaurantCard'
import TrendRestaurantCard from '../../components/home/TrendRestaurantCard'
import { HomeContext } from '../../utils/context'
import SearchInput from '../../components/common/SearchInput'
import { SafeView } from '../../components/common/styled'
import RefreshView from '../../components/common/RefreshView'
import Constant from '../../utils/constants'
import { serverClient } from '../../api'

import { API_READY } from 'react-native-dotenv'

import { mock } from './mock'

const Home = ({ authStore, navigation }) => {
  const [searchText, setSearchText] = useState('')
  const [data, setData] = useState({})

  const fetchWelcome = async () => {
    const { latitude, longitude } = authStore.curLocation
    if (API_READY === 'true' && latitude !== -1) {
      console.log('API Mode', API_READY)
      const res = await serverClient.get(
        `/welcome?lat=${latitude}&long=${longitude}`,
      )
      setData(res.data)
    } else {
      console.log('Mock Mode')
      setData(mock)
    }
  }

  useEffect(() => {
    fetchWelcome()
  }, [authStore.curLocation.latitude])

  return (
    <HomeContext.Provider value={{ navigation }}>
      <SafeView color={Constant.tabColor}>
        <Containers>
          <WelcomeView>
            <WelcomeMessage>
              Hi,{' '}
              {authStore.auth.displayName
                ? authStore.auth.displayName
                : 'Guest'}
            </WelcomeMessage>
            <SearchContainer>
              <SearchInput
                placeholder="Search for your restaurant"
                text={searchText}
                setText={setSearchText}
              />
            </SearchContainer>
          </WelcomeView>
          <RefreshView>
            <Body>
              <NearByText>Trend restaurant</NearByText>
              <HorizontalView horizontal>
                {data.trends &&
                  data.trends.map((d, i) => (
                    <TrendRestaurantCard key={i} data={d} />
                  ))}
              </HorizontalView>
              <NearByText>Near By restaurant</NearByText>
              {data.restaurants &&
                data.restaurants.map((d, i) => (
                  <RestaurantCard key={i} data={d} />
                ))}
            </Body>
            <FreeView />
          </RefreshView>
        </Containers>
      </SafeView>
    </HomeContext.Provider>
  )
}

Home.propTypes = {
  authStore: PropTypes.object,
  navigation: PropTypes.object,
}

export default compose(
  inject(({ rootStore }) => ({
    authStore: rootStore.authStore,
  })),
  observer,
)(Home)
