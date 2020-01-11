import React from 'react'
import { Button, Content, Text } from 'native-base'
import PropTypes from 'prop-types'

import { observer, inject } from 'mobx-react'
import { compose } from 'recompose'

import { Containers, BottomTab, OpenQrButton } from './styled'

const Home = ({ exampleStore, navigation }) => {
  return (
    <Containers>
      <Content>
        <Text>Hello! Mr. Kong</Text>
        <Text>What would you like to eat today</Text>
        <Text>{exampleStore.test || '555'}</Text>
        <Button rounded success onPress={() => exampleStore.testFunc()}>
          <Text>Press Me</Text>
        </Button>
      </Content>
      <BottomTab>
        <OpenQrButton onPress={() => navigation.navigate('Camera')}>
          <Text>Qr code</Text>
        </OpenQrButton>
      </BottomTab>
    </Containers>
  )
}

Home.propTypes = {
  exampleStore: PropTypes.object,
  navigation: PropTypes.object,
}

export default compose(
  // inject('rootStore'),
  inject(({ rootStore }) => ({
    exampleStore: rootStore.exampleStore,
  })),
  observer,
)(Home)
