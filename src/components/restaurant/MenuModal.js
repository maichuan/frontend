import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Modal from 'react-native-modal'
import PropTypes from 'prop-types'

import { observer, inject } from 'mobx-react'
import { compose } from 'recompose'
import { questionConverter } from '../../utils/utils'
import SingleAnswer from './SingleAnswer'
import MultipleAnswer from './MultipleAnswer'

const mockQuestion =
  'ท่านก้องอายุเท่าไร:0:20;30;10,ท่านก้องชอบอะไร:1:react;vue;java,ท่านก้องอายุเท่าไร:0:20;30;10,ท่านก้องชอบอะไร:1:react;vue;java'

const BottomModal = styled(Modal)`
  margin: 0;
`
const SafeBottom = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-end;
`
const ModalView = styled.View`
  background-color: #fff;
  padding: 22px;
  display: flex;
  flex-direction: column;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-color: rgba(0, 0, 0, 0.1);
  height: 75%;
`
const ModalScroll = styled.ScrollView``
// const ModalTouch = styled.TouchableOpacity``
const ModalFeed = styled.TouchableWithoutFeedback``
const ModalInnerView = styled.View``
const RestaurantName = styled.Text`
  font-weight: bold;
  font-size: 28px;
  margin: 10px 0px;
`
const Description = styled.Text`
  font-weight: normal;
  font-size: 20px;
  margin: 10px 0px;
`
const RowView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const QuestionText = styled.Text`
  font-weight: bold;
  font-size: 20px;
  margin: 10px 0px;
`
const QuantityView = styled.View`
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  background-color: #c4c4c4;
  justify-content: center;
  align-items: center;
`
const QuantityButton = styled.TouchableOpacity`
  width: 40px;
  align-items: center;
  justify-content: center;
`
const QuantityAction = styled.Text`
  font-size: 30px;
  font-weight: 900;
`
const Quantity = styled.Text`
  width: 40px;
  background-color: white;
  text-align: center;
  font-size: 25px;
`
const ConfirmButton = styled.TouchableOpacity`
  width: 100%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  align-items: center;
  justify-content: center;
  background-color: green;
  height: 50px;
`
const ComfirmText = styled.Text`
  font-size: 25px;
  font-weight: 500;
  color: #fff;
`
const Special = styled.TextInput`
  border-bottom-width: 1px;
  border-bottom-color: #e5e5e5;
  font-size: 18px;
  margin: 10px;
`

const MenuModal = ({ data, showModal, closeModal, menusStore }) => {
  const [quantity, setQuantity] = useState(1)
  const [special, setSpecial] = useState('')
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    const ques = questionConverter(mockQuestion)
    setQuestions(ques)
  }, [])

  const increase = () => {
    setQuantity(quantity + 1)
  }

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const onChangeText = text => {
    setSpecial(text)
  }

  const handleConfirmClicked = () => {
    menusStore.addMenu({ ...data, quantity })
    closeModal()
  }

  return (
    <BottomModal
      isVisible={showModal}
      onBackdropPress={closeModal}
      swipeDirection="down"
      propagateSwipe
      onSwipeComplete={closeModal}
    >
      <SafeBottom>
        <ModalView>
          <ModalScroll>
            <ModalFeed>
              <ModalInnerView>
                <RestaurantName>{data.name}</RestaurantName>
                <Description>Food description Lorem ipsum</Description>
                <RowView>
                  <QuestionText>Quantity</QuestionText>
                  <QuantityView>
                    <QuantityButton bordered onPress={() => decrease()}>
                      <QuantityAction>-</QuantityAction>
                    </QuantityButton>
                    <Quantity>{quantity}</Quantity>
                    <QuantityButton bordered onPress={() => increase()}>
                      <QuantityAction>+</QuantityAction>
                    </QuantityButton>
                  </QuantityView>
                </RowView>
                {questions.length > 0 &&
                  questions.map((q, i) => {
                    if (q.type === 1) {
                      return <SingleAnswer key={i} data={q} />
                    } else {
                      return <MultipleAnswer key={i} data={q} />
                    }
                  })}
                <QuestionText>Special Instructions</QuestionText>
                <Special
                  onChangeText={text => onChangeText(text)}
                  placeholder="Add some special instructions here."
                  value={special}
                />
              </ModalInnerView>
            </ModalFeed>
          </ModalScroll>
        </ModalView>
        <ConfirmButton activeOpacity={1} onPress={() => handleConfirmClicked()}>
          <ComfirmText>Add to Cart: {data.price * quantity} .-</ComfirmText>
        </ConfirmButton>
      </SafeBottom>
    </BottomModal>
  )
}

MenuModal.propTypes = {
  data: PropTypes.object.isRequired,
  showModal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  menusStore: PropTypes.object.isRequired,
}

export default compose(
  inject(({ rootStore }) => ({
    menusStore: rootStore.menusStore,
  })),
  observer,
)(MenuModal)
