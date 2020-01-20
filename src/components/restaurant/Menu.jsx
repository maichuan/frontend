import React, { useState } from 'react'
import { Text, Card, Left, Right, CardItem, Button } from 'native-base'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import MenuModal from './MenuModal'

const Price = styled(Text)`
  font-size: 20px;
  margin: 7px 10px;
  font-weight: bold;
`

const Menu = ({ data }) => {
  const [showModal, setShowModal] = useState(false)

  const addMenu = () => {
    setShowModal(true)
  }

  return (
    <Card>
      <CardItem>
        <Left>
          <Text>{data.name}</Text>
        </Left>
        <Right>
          <Price>{'฿' + data.price}</Price>
          <Button bordered onPress={() => addMenu()}>
            <Text>Add</Text>
          </Button>
        </Right>
      </CardItem>
      <MenuModal
        data={data}
        showModal={showModal}
        closeModal={() => setShowModal(false)}
      />
    </Card>
  )
}

Menu.propTypes = {
  data: PropTypes.object,
}

export default Menu
