import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Width } from '../../utils/utils'
import Constants from '../../utils/constants'
import MenuModal from './MenuModal'

const MenuImage = styled.Image`
  width: 33%;
  height: ${({ size }) => size};
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`
const NameView = styled.View`
  bottom: 0;
  padding: 10px;
  width: 42%;
`
const PriceView = styled.View`
  bottom: 0;
  padding: 10px;
  width: 25%;
  align-items: flex-end;
`
const Box = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  margin: 10px;
  border-width: 1px;
  border-color: ${Constants.strongColor};
  max-width: 500px;
  border-radius: 10px;
  background-color: #fff;
`
const Name = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: ${Constants.strongColor};
`

const Menu = ({ data }) => {
  const [showModal, setShowModal] = useState(false)

  const addMenu = () => {
    setShowModal(true)
  }

  return (
    <>
      <Box activeOpacity={0.9} onPress={() => addMenu()}>
        <MenuImage
          size={Width / 3}
          source={
            data.imgURL
              ? { uri: data.imgURL }
              : require('../../../assets/shrimp.jpg')
          }
        />

        <NameView>
          <Name> {data.name}</Name>
        </NameView>
        <PriceView>
          <Name> {data.price + '.-'}</Name>
        </PriceView>
      </Box>
      <MenuModal
        data={data}
        showModal={showModal}
        closeModal={() => setShowModal(false)}
      />
    </>
  )
}

Menu.propTypes = {
  data: PropTypes.object,
}

export default Menu
