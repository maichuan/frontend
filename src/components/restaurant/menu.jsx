import React from 'react'
import { Text, Card, Left, Right, CardItem } from 'native-base'
import PropTypes from 'prop-types'

import { observer, inject } from 'mobx-react'
import { compose } from 'recompose'

const Menu = ({ data, menusStore }) => {
  const addMenu = () => {
    menusStore.addMenu(data)
  }

  return (
    <Card>
      <CardItem button onPress={() => addMenu()}>
        <Left>
          <Text>{data.name}</Text>
        </Left>
        <Right>
          <Text>{data.price || 0}.-</Text>
        </Right>
      </CardItem>
    </Card>
  )
}

Menu.propTypes = {
  data: PropTypes.object,
  menusStore: PropTypes.object,
}

export default compose(
  inject(({ rootStore }) => ({
    menusStore: rootStore.menusStore,
  })),
  observer,
)(Menu)
