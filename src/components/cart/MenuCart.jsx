import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { SwipeRow } from 'react-native-swipe-list-view'

import { observer, inject } from 'mobx-react'
import { compose } from 'recompose'

import { displayToast } from '../../utils/utils'
import { Width } from '../../utils/utils'
import constants from '../../utils/constants'

const Component = styled.TouchableHighlight`
  width: ${Width};
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  border-width: 0.2px;
  border-color: #d1d0cd;
  border-radius: 10px;
`
const Quantity = styled.Text`
  border-width: 1px;
  /* border-color: #adadad; */
  border-color: ${constants.tabColor};
  color: ${constants.tabColor};
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  font-weight: 600;
`
const Name = styled.Text`
  font-size: 18px;
  flex: 1;
  flex-wrap: wrap;
  padding: 0px 10px;
  color: ${constants.strongColor};
`
const Price = styled.Text`
  font-size: 18px;
  color: ${constants.strongColor};
`
const DeleteView = styled.View`
  align-items: center;
  background-color: #ddd;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 10px;
  margin: 1px;
`
const DeleteButton = styled.TouchableOpacity`
  align-items: center;
  bottom: 0;
  top: 0;
  right: 0;
  justify-content: center;
  position: absolute;
  width: 80px;
  background-color: ${constants.redColor};
  border-radius: 10px;
`
const DeleteText = styled.Text`
  color: #fff;
  font-weight: 600;
  font-size: 15px;
`

const MenuCart = ({ data, menusStore }) => {
  const removeMenu = () => {
    menusStore.removeMenu(data)
    displayToast('Item removed')
  }

  return (
    <SwipeRow
      disableRightSwipe={true}
      stopRightSwipe={-100}
      rightOpenValue={-80}
    >
      <DeleteView>
        <DeleteButton activeOpacity={0.8} onPress={removeMenu}>
          <DeleteText>Delete</DeleteText>
        </DeleteButton>
      </DeleteView>
      <Component underlayColor={'#fff'}>
        <>
          <Quantity>{data.quantity + 'x'}</Quantity>

          <Name>{data.name}</Name>
          <Price>{data.price * data.quantity + '.-'}</Price>
        </>
      </Component>
    </SwipeRow>
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
