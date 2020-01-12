import React from 'react'
import { Content, Text, Button } from 'native-base'
import PropTypes from 'prop-types'
import Menu from '../../components/restaurant/Menu'

import { observer, inject } from 'mobx-react'
import { compose } from 'recompose'

import withSafeArea from '../../hocs/withSafeView'
import Cart from '../../components/restaurant/Cart'
import { RestaurantContext } from '../../utils/context'

import { mock } from './mock'

const Restaurant = ({ navigation, menusStore }) => {
  const { params } = navigation.state
  const restaurantId = params.id
  const table = params.table

  return (
    <RestaurantContext.Provider value={{ navigation }}>
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
      <Cart />
    </RestaurantContext.Provider>
  )
}

Restaurant.propTypes = {
  navigation: PropTypes.object,
  menusStore: PropTypes.object,
}

export default compose(
  withSafeArea,
  inject(({ rootStore }) => ({
    menusStore: rootStore.menusStore,
  })),
  observer,
)(Restaurant)
