import React, { useState, useEffect } from 'react'
import { Platform } from 'react-native'
import styled from 'styled-components'
import Modal from 'react-native-modal'
import PropTypes from 'prop-types'

import { observer, inject } from 'mobx-react'
import { compose } from 'recompose'
import { questionConverter, Height } from '../../utils/utils'
import SingleAnswer from './SingleAnswer'
import MultipleAnswer from './MultipleAnswer'
import Constants from '../../utils/constants'

const mockQuestion =
  'ท่านก้องอายุเท่าไร:0:20;30;10,ท่านก้องชอบอะไร:1:react;vue;java'

const BottomModal = styled(Modal)`
  margin: 0;
  justify-content: flex-end;
`
const SafeBottom = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-end;
`
const ModalView = styled.View`
  background-color: #fff;
  padding-bottom: 15px;
  display: flex;
  flex-direction: column;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  /* border-color: rgba(0, 0, 0, 0.1); */
  max-height: 75%;
`
const ModalScroll = styled.ScrollView``
const ModalAvoidView = styled.KeyboardAvoidingView`
  justify-content: flex-end;
  background-color: red;
  margin: 0;
  padding: 0;
`
const ModalFeed = styled.TouchableWithoutFeedback``
const ModalInnerView = styled.View``
const RestaurantName = styled.Text`
  font-weight: bold;
  font-size: 23px;
  margin: 15px;
  color: ${Constants.strongColor};
`
const Description = styled.Text`
  font-weight: normal;
  font-size: 16px;
  margin: 20px;
  color: ${Constants.strongColor};
`
const RowView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`
const QuestionText = styled.Text`
  font-weight: bold;
  font-size: 20px;
  margin: 10px 0px;
  color: ${Constants.strongColor};
`
const QuantityView = styled.View`
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  /* background-color: #c4c4c4; */
  background-color: ${Constants.tabColor};
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
  color: ${Constants.strongColor};
`
const Quantity = styled.Text`
  width: 40px;
  background-color: white;
  text-align: center;
  font-size: 25px;
  color: ${Constants.strongColor};
`
const ConfirmView = styled.View`
  padding: 15px;
  /* background-color: #fff; */
  background-color: ${Constants.weakColor};
  border-width: 1px;
  border-color: #c7c7c7;
`
const ConfirmButton = styled.TouchableOpacity`
  width: 100%;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  /* background-color: #75cf55; */
  background-color: ${Constants.tabColor};
  height: 50px;
`
const ComfirmText = styled.Text`
  font-size: 25px;
  font-weight: 600;
  color: ${Constants.strongColor};
`
const Special = styled.TextInput`
  border-bottom-width: 1px;
  border-bottom-color: #e5e5e5;
  font-size: 18px;
  margin: 10px;
`
const QuestionView = styled.View`
  /* background-color: #ededed; */
  background-color: ${Constants.weakColor};
  padding: 5px 0;
`
const SingleQuestionView = styled.View`
  margin: 5px 0;
`
const SpecialView = styled.View`
  padding: 10px;
`
const SwipeDownArea = styled.View`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const HeadSign = styled.View`
  width: 75px;
  height: 10px;
  border-radius: 10px;
  border-width: 1px;
  border-color: #5e5e5e;
  background-color: #202020;
  margin: 7px;
`

const MenuModal = ({ data, showModal, closeModal, menusStore }) => {
  const [quantity, setQuantity] = useState(1)
  const [special, setSpecial] = useState('')
  const [questions, setQuestions] = useState([])
  const [answers, setAnswers] = useState([])
  const [contentSize, setContentSize] = useState(0)

  useEffect(() => {
    setQuestions(data.question)
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
    menusStore.addMenu({ ...data, quantity, answers })
    closeModal()
  }

  const updateAnswers = answer => {
    const existAnswer = answers.find(
      ({ question }) => question === answer.question,
    )
    if (existAnswer) {
      setAnswers(
        answers.map(ans =>
          ans.question === answer.question
            ? { ...ans, choices: answer.choices }
            : ans,
        ),
      )
    } else {
      setAnswers([...answers, answer])
    }
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
        {/* <ModalAvoidView
          behavior={Platform.OS === 'android' ? undefined : 'position'}
        > */}
        <SwipeDownArea>
          <HeadSign />
        </SwipeDownArea>
        <ModalView>
          <ModalScroll
            scrollEnabled={contentSize > Height * 0.65}
            onContentSizeChange={(_, contentHeight) =>
              setContentSize(contentHeight)
            }
          >
            <ModalFeed>
              <ModalInnerView>
                <RestaurantName>{data.name}</RestaurantName>
                {data.description !== '' && (
                  <Description>{data.description}</Description>
                )}
                <QuestionView>
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
                        return (
                          <SingleQuestionView key={i}>
                            <SingleAnswer data={q} onAnswer={updateAnswers} />
                          </SingleQuestionView>
                        )
                      } else {
                        return (
                          <SingleQuestionView key={i}>
                            <MultipleAnswer data={q} onAnswer={updateAnswers} />
                          </SingleQuestionView>
                        )
                      }
                    })}
                </QuestionView>

                <SpecialView>
                  <QuestionText>Special Instructions</QuestionText>
                  <Special
                    placeholderTextColor={Constants.tabColor}
                    onChangeText={text => onChangeText(text)}
                    placeholder="Add some special instructions here."
                    value={special}
                  />
                </SpecialView>
              </ModalInnerView>
            </ModalFeed>
          </ModalScroll>
        </ModalView>
        <ConfirmView>
          <ConfirmButton activeOpacity={1} onPress={handleConfirmClicked}>
            <ComfirmText>Add to Cart: {data.price * quantity} .-</ComfirmText>
          </ConfirmButton>
        </ConfirmView>
        {/* </ModalAvoidView> */}
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
