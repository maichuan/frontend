import React from 'react'
import { Content, Text, Container, Button } from 'native-base'
import PropTypes from 'prop-types'
import Menu from '../../components/restaurant/menu'

import { observer, inject } from 'mobx-react'
import { compose } from 'recompose'

import { SafeView } from '../../components/common/styled'

import { mock } from './mock'

const Restaurant = ({ navigation, menusStore }) => {
  const { params } = navigation.state
  const restaurantId = params.id
  const table = params.table

  const changePage = () => {
    console.log('clicked!!')
    console.log(navigation)

    navigation.navigate('Cart')
  }

  return (
    <SafeView>
      <Content>
        <Text>Hello! Mr. Kong</Text>
        <Text>This is your restaurant</Text>
        <Text>
          {restaurantId + ' ===> '} Sat on table: {table}
        </Text>
        {mock.map((m, i) => (
          <Menu key={i} data={m} />
        ))}
      </Content>
      <Button onPress={() => menusStore.clear()}>
        <Text>Clear</Text>
      </Button>
      <Button onPress={() => navigation.navigate('Cart')}>
        <Text>Check Order</Text>
      </Button>
    </SafeView>
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
