import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { observer, inject } from 'mobx-react'
import { compose } from 'recompose'

import { displayToast } from '../../utils/utils'
import { Width } from '../../utils/utils'

const Component = styled.View`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  border-width: 0.2px;
  border-color: #d1d0cd;
`
const Quantity = styled.Text`
  border-width: 1px;
  border-color: #adadad;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  font-weight: 600;
`
const Remove = styled.TouchableOpacity``
const RemoveText = styled.Text`
  font-size: 30px;
  color: #adadad;
`
const Name = styled.Text`
  font-size: 18px;
  flex: 1;
  flex-wrap: wrap;
  padding: 0px 10px;
`
const Price = styled.Text`
  font-size: 18px;
`

const MenuCart = ({ data, menusStore }) => {
  const removeMenu = () => {
    menusStore.removeMenu(data)
    displayToast('Item removed')
  }

  return (
    <Component>
      <Quantity>{data.quantity + 'x'}</Quantity>

      <Name>{data.name}</Name>
      <Price>{data.price * data.quantity + '.-'}</Price>

      <Remove activeOpacity={0.8} onPress={() => removeMenu()}>
        <RemoveText>&times;</RemoveText>
      </Remove>
    </Component>
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
