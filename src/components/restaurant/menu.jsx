import React, { useState } from 'react'
import { Text, Card, Left, Right, CardItem, Body, Button } from 'native-base'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { observer, inject } from 'mobx-react'
import { compose } from 'recompose'

const InlineBody = styled(Body)`
  display: flex;
  flex-direction: row;
  margin: auto;
`
const Quantity = styled(Text)`
  width: 30px;
  margin: auto 0px;
  background-color: white;
  text-align: center;
`
const Price = styled(Text)`
  font-size: 20px;
  margin: 7px 10px;
  font-weight: bold;
`

const Menu = ({ data, menusStore }) => {
  const [quantity, setQuantity] = useState(1)

  const addMenu = () => {
    menusStore.addMenu({ ...data, quantity })
  }

  const increase = () => {
    setQuantity(quantity + 1)
  }

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <Card>
      <CardItem>
        <Left>
          <Text>{data.name}</Text>
        </Left>
        <InlineBody>
          <Button bordered onPress={() => decrease()}>
            <Text>-</Text>
          </Button>
          <Quantity>{quantity}</Quantity>
          <Button bordered onPress={() => increase()}>
            <Text>+</Text>
          </Button>
        </InlineBody>
        <Right>
          <Price>{'฿' + data.price}</Price>
          <Button bordered onPress={() => addMenu()}>
            <Text>Add</Text>
          </Button>
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
