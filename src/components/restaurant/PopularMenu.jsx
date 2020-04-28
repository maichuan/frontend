import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Width } from '../../utils/utils'
import MenuModal from './MenuModal'

const MenuButton = styled.TouchableOpacity`
  margin: 10px 10px 10px 0px;
  width: ${Width / 2};
  height: ${Width / 3};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
const MenuImage = styled.Image`
  width: ${Width / 2};
  height: ${Width / 3};
  border-radius: 10px;
`
const NameView = styled.View`
  position: absolute;
  bottom: 0;
  align-self: stretch;
`
const Box = styled.View``
const Name = styled.Text`
  padding: 15px 10px;
  font-size: 15px;
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
          <MenuImage
            source={
              data.imgURL
                ? { uri: data.imgURL }
                : require('../../../assets/no_image.png')
            }
          />
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
