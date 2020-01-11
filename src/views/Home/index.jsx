import React from 'react'
import { Button, Content, Text } from 'native-base'
import PropTypes from 'prop-types'

import { observer, inject } from 'mobx-react'
import { compose } from 'recompose'

import { Containers, BottomTab, OpenQrButton } from './styled'
import RestaurantCard from '../../components/home/restaurant_card'
import { HomeContext } from '../../utils/context'
import { SafeView } from '../../components/common/styled'

const Home = ({ exampleStore, navigation }) => {
  return (
    <HomeContext.Provider value={{ navigation }}>
      <SafeView>
        <Containers>
          <Content>
            <Text>Hello! Mr. Kong</Text>
            <Text>What would you like to eat today</Text>
            <Text>{exampleStore.test || '555'}</Text>
            <Button rounded success onPress={() => exampleStore.testFunc()}>
              <Text>Press Me</Text>
            </Button>
            <RestaurantCard />
          </Content>
          <BottomTab>
            <OpenQrButton onPress={() => navigation.navigate('Camera')}>
              <Text>Qr code</Text>
            </OpenQrButton>
          </BottomTab>
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
