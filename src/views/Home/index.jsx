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

const Home = ({ authStore, navigation }) => {
  const [searchText, setSearchText] = useState('')
  const [data, setData] = useState({})

  const fetchWelcome = async () => {
    const { latitude, longitude } = authStore.curLocation
    if (latitude !== -1) {
      const res = await serverClient.get(
        `/welcome?lat=${latitude}&long=${longitude}`,
      )

      // console.log(res.data)

      setData(res.data)
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
            <WelcomeMessage>Hi, {authStore.auth.displayName}</WelcomeMessage>
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
                  <TrendRestaurant
                    onPress={() =>
                      navigation.navigate('Restaurant', {
                        name: 'sss',
                        table: 0,
                      })
                    }
                    key={i}
                  >
                    <Text>Wow{' ' + i}</Text>
                  </TrendRestaurant>
                ))}
            </HorizontalView>
            <Body>
              <NearByText>Near By restaurant</NearByText>
              {data.restaurants &&
                data.restaurants.map((d, i) => (
                  <RestaurantCard key={i} data={d} />
                ))}
            </Body>
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
