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
import SearchInput from '../../components/common/FakeSearchInput'
import { SafeView } from '../../components/common/styled'
import RefreshView from '../../components/common/RefreshView'
import Constant from '../../utils/constants'
import { serverClient } from '../../api'

import { API_READY } from 'react-native-dotenv'

import { mock } from './mock'

const Home = ({ authStore, navigation, spinnerStore }) => {
  const [data, setData] = useState({ restaurants: [], trends: [] })

  const fetchWelcome = async () => {
    spinnerStore.open()
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
    spinnerStore.close()
  }

  useEffect(() => {
    fetchWelcome()
  }, [authStore.curLocation.latitude])

  const searchPage = () => {
    navigation.navigate('Search')
  }

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
            <SearchContainer activeOpacity={0.8} onPress={searchPage}>
              <SearchInput
                onPress={searchPage}
                placeholder="Search for your restaurant"
              />
            </SearchContainer>
          </WelcomeView>
          <RefreshView>
            <Body>
              {data.trends.length > 0 && (
                <>
                  <NearByText>Trend restaurant</NearByText>
                  <HorizontalView horizontal>
                    {data.trends.map((d, i) => (
                      <TrendRestaurantCard key={i} data={d} />
                    ))}
                  </HorizontalView>
                </>
              )}
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
  spinnerStore: PropTypes.object,
}

Home.navigationOptions = {
  headerShown: false,
}

export default compose(
  inject(({ rootStore }) => ({
    authStore: rootStore.authStore,
    spinnerStore: rootStore.spinnerStore,
  })),
  observer,
)(Home)
