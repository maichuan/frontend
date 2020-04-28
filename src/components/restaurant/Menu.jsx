import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Width } from '../../utils/utils'
import Constants from '../../utils/constants'
import MenuModal from './MenuModal'

const MenuImage = styled.Image`
  width: ${Width / 4};
  height: ${Width / 4};
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`
const NameView = styled.View`
  bottom: 0;
  padding: 10px;
  width: ${Width / 2};
`
const PriceView = styled.View`
  bottom: 0;
  padding: 10px;
  width: ${Width / 5.5};
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
  /* background-color: #fff; */
  background-color: ${Constants.weakColor};
`
const Name = styled.Text`
  font-size: 16px;
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
          source={
            data.imgURL
              ? { uri: data.imgURL }
              : require('../../../assets/no_image.png')
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
