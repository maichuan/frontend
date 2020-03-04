import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import RadioForm from 'react-native-simple-radio-button'

const Component = styled.View`
  background-color: #fff;
  padding: 7px;
`
const Question = styled.Text`
  font-size: 20px;
`

const SingleAnswer = ({ data, onAnswer }) => {
  const [ans, setAns] = useState(0)

  useEffect(() => {
    onAnswer({ question: data.question, choices: ans })
  }, [ans])

  return (
    <Component>
      <Question>{data.question}</Question>

      <RadioForm
        radio_props={data.choices.map(choice => ({
          label: choice,
          value: choice,
        }))}
        initial={-1}
        onPress={value => setAns(value)}
        buttonSize={10}
        buttonColor="#000"
        selectedButtonColor="green"
      />
    </Component>
  )
}

SingleAnswer.propTypes = {
  data: PropTypes.object.isRequired,
  onAnswer: PropTypes.func.isRequired,
}

export default SingleAnswer
