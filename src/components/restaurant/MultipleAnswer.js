import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Constants from '../../utils/constants'
import Checkbox from './Checkbox'

const Component = styled.View`
  background-color: #fff;
  padding: 7px;
`
const Question = styled.Text`
  font-size: 20px;
  color: ${Constants.strongColor};
`
const CheckBoxView = styled.View`
  padding: 10px 0 0 10px;
`

const MultipleAnswer = ({ data, onAnswer }) => {
  const [checkedList, setCheckedList] = useState([])

  useEffect(() => {
    onAnswer({ question: data.question, choices: checkedList })
  }, [checkedList])

  const updateCheckedList = choice => {
    if (checkedList.includes(choice)) {
      setCheckedList(checkedList.filter(list => list !== choice))
    } else {
      setCheckedList([...checkedList, choice])
    }
  }

  return (
    <Component>
      <Question>{data.question}</Question>
      <CheckBoxView>
        {data.choices.map((choice, i) => (
          <Checkbox key={i} choice={choice} onListChecked={updateCheckedList} />
        ))}
      </CheckBoxView>
    </Component>
  )
}

MultipleAnswer.propTypes = {
  data: PropTypes.object.isRequired,
  onAnswer: PropTypes.func.isRequired,
}

export default MultipleAnswer
