import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Checkbox from './Checkbox'

const Component = styled.View`
  /* flex: 1; */
  /* background-color: blue; */
`
const Question = styled.Text`
  font-size: 30px;
`

const MultipleAnswer = ({ data }) => {
  const [checkedList, setCheckedList] = useState([])

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
}

export default MultipleAnswer
