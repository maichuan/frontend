import React from 'react'
import { Button, Content, Text } from 'native-base'
import PropTypes from 'prop-types'

import { observer, inject } from 'mobx-react'
import { compose } from 'recompose'

import { Containers, BottomTab, OpenQrButton, QrCodeIcon } from './styled'
import RestaurantCard from '../../components/home/RestaurantCard'
import { HomeContext } from '../../utils/context'
import withSafeView from '../../hocs/withSafeView'

const Home = ({ exampleStore, navigation }) => {
  return (
    <HomeContext.Provider value={{ navigation }}>
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
        {/* <BottomTab>
          <OpenQrButton onPress={() => navigation.navigate('Camera')}>
            <QrCodeIcon type="AntDesign" name="qrcode" />
          </OpenQrButton>
        </BottomTab> */}
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
