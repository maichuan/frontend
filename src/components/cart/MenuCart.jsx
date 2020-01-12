import React from 'react'
import { Text, Card, Left, Right, CardItem, Button, Body } from 'native-base'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { observer, inject } from 'mobx-react'
import { compose } from 'recompose'

import { displayToast } from '../../utils/utils'

const InlineBody = styled(Body)`
  display: flex;
  flex-direction: row;
  margin: auto;
`

const MenuCart = ({ data, menusStore }) => {
  const removeMenu = () => {
    menusStore.removeMenu(data)
    displayToast('Item removed')
  }

  return (
    <Card>
      <CardItem>
        <Left>
          <Text>{data.name}</Text>
        </Left>
        <InlineBody>
          <Text>{(data.price || 0) + ' x '}</Text>
          <Text>
            {data.quantity + ' = ' + data.price * data.quantity + '.-'}
          </Text>
        </InlineBody>
        <Right>
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
