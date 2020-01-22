import React, { useState } from 'react'
import { Text, Card, Left, Right, CardItem, Button } from 'native-base'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import MenuModal from './MenuModal'

const MenuButton = styled.TouchableOpacity`
  margin: 10px 10px 10px 0px;
  width: 300px;
  height: 150px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
const MenuImage = styled.Image`
  width: 300px;
  height: 150px;
`
const NameView = styled.View`
  position: absolute;
  bottom: 0;
  margin: 10px;
  align-self: stretch;
`
const Box = styled.View``
const Name = styled.Text`
  font-size: 30px;
  font-weight: 500;
  color: white;
  text-shadow: 2px 2px black;
`

const PopularMenu = ({ data }) => {
  const [showModal, setShowModal] = useState(false)

  const addMenu = () => {
    setShowModal(true)
  }

  return (
    <>
      <Box>
        <MenuButton onPress={() => addMenu()}>
          <MenuImage source={require('../../../assets/shrimp.jpg')} />
        </MenuButton>
        <NameView>
          <Name> {data.name}</Name>
        </NameView>
      </Box>
      <MenuModal
        data={data}
        showModal={showModal}
        closeModal={() => setShowModal(false)}
      />
    </>
  )
}

PopularMenu.propTypes = {
  data: PropTypes.object,
}

export default PopularMenu
