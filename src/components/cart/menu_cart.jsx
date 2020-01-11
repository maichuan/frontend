import React from 'react'
import { Text, Card, Left, Right, CardItem, Button } from 'native-base'
import PropTypes from 'prop-types'

import { observer, inject } from 'mobx-react'
import { compose } from 'recompose'

const MenuCart = ({ data, menusStore }) => {
  const removeMenu = () => {
    menusStore.removeMenu(data)
  }

  return (
    <Card>
      <CardItem>
        <Left>
          <Text>{data.name}</Text>
        </Left>

        <Right>
          <Text>{data.price || 0}.-</Text>
          <Button transparent onPress={() => removeMenu()}>
            <Text>&#x2718;</Text>
          </Button>
        </Right>
      </CardItem>
    </Card>
  )
}

MenuCart.propTypes = {
  data: PropTypes.object,
  menusStore: PropTypes.object,
}

export default compose(
  inject(({ rootStore }) => ({
    menusStore: rootStore.menusStore,
  })),
  observer,
)(MenuCart)
