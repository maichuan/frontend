import React, { useState } from 'react'
import PropTypes from 'prop-types'

import CheckBox from 'react-native-check-box'

const Checkbox = ({ choice, onListChecked }) => {
  const [checked, setIsCheck] = useState(false)

  const handleCheck = () => {
    setIsCheck(!checked)
    onListChecked(choice)
  }

  return (
    <CheckBox
      style={{ flex: 1 }}
      onClick={handleCheck}
      isChecked={checked}
      rightText={choice}
      checkedCheckBoxColor="#75cf55"
    />
  )
}

Checkbox.propTypes = {
  choice: PropTypes.string.isRequired,
  onListChecked: PropTypes.func.isRequired,
}

export default Checkbox
