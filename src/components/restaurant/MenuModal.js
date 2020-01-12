import React, { useState } from 'react'

import { Text, Button, View } from 'native-base'
import styled from 'styled-components'
import Modal from 'react-native-modal'
import PropTypes from 'prop-types'

import { observer, inject } from 'mobx-react'
import { compose } from 'recompose'

const BottomModal = styled(Modal)`
  margin: 0;
`
const SafeBottom = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-end;
`
const ModalView = styled(View)`
  background-color: #fff;
  padding: 22px;
  justify-content: center;
  align-items: center;
  border-radius: 4;
  border-color: rgba(0, 0, 0, 0.1);
  height: 50%;
`
const Quantity = styled(Text)`
  width: 30px;
  margin: auto 0px;
  background-color: white;
  text-align: center;
`
const InlineView = styled(View)`
  display: flex;
  flex-direction: row;
`

const MenuModal = ({ data, showModal, closeModal, menusStore }) => {
  const [quantity, setQuantity] = useState(1)

  const increase = () => {
    setQuantity(quantity + 1)
  }

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const handleConfirmClicked = () => {
    menusStore.addMenu({ ...data, quantity })
    closeModal()
  }

  return (
    <BottomModal
      isVisible={showModal}
      onBackdropPress={() => closeModal()}
      swipeDirection="down"
      onSwipeComplete={() => closeModal()}
    >
      <SafeBottom>
        <ModalView>
          <Text>I am the modal content!</Text>
          <Text>{data.name + '(' + data.price + '.-)'}</Text>
          <InlineView>
            <Button bordered onPress={() => decrease()}>
              <Text>-</Text>
            </Button>
            <Quantity>{quantity}</Quantity>
            <Button bordered onPress={() => increase()}>
              <Text>+</Text>
            </Button>
          </InlineView>
        </ModalView>
        <Button success onPress={() => handleConfirmClicked()}>
          <Text>Confirm</Text>
        </Button>
      </SafeBottom>
    </BottomModal>
  )
}

MenuModal.propTypes = {
  data: PropTypes.object,
  showModal: PropTypes.bool,
  closeModal: PropTypes.func,
  menusStore: PropTypes.object,
}

export default compose(
  inject(({ rootStore }) => ({
    menusStore: rootStore.menusStore,
  })),
  observer,
)(MenuModal)
