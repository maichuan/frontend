import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Checkbox from './Checkbox'

const Component = styled.View`
  background-color: #fff;
  padding: 7px;
`
const Question = styled.Text`
  font-size: 20px;
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
      {data.choices.map((choice, i) => (
        <Checkbox key={i} choice={choice} onListChecked={updateCheckedList} />
      ))}
    </Component>
  )
}

MultipleAnswer.propTypes = {
  data: PropTypes.object.isRequired,
  onAnswer: PropTypes.func.isRequired,
}

export default MultipleAnswer
