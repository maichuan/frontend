import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button'

const Component = styled.View`
  /* flex: 1; */
  /* background-color: blue; */
`
const Question = styled.Text`
  font-size: 30px;
`

const SingleAnswer = ({ data }) => {
  const [ans, setAns] = useState(0)
  console.log(data.choices.map((c, i) => ({ label: c, value: i })))

  return (
    <Component>
      <Question>{data.question}</Question>

      <RadioForm
        radio_props={data.choices.map((c, i) => ({ label: c, value: i }))}
        initial={-1}
        onPress={value => setAns(value)}
      />
    </Component>
  )
}

SingleAnswer.propTypes = {
  data: PropTypes.object.isRequired,
}

export default SingleAnswer
