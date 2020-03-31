import React, { useState } from 'react'
import PropTypes from 'prop-types'

import CheckBox from 'react-native-check-box'
import constants from '../../utils/constants'

const Checkbox = ({ choice, onListChecked }) => {
  const [checked, setIsCheck] = useState(false)

  const handleCheck = () => {
    setIsCheck(!checked)
    onListChecked(choice)
  }

  return (
    <CheckBox
      style={{ flex: 1 }}
      rightTextStyle={{
        color: checked ? constants.tabColor : constants.strongColor,
      }}
      onClick={handleCheck}
      isChecked={checked}
      rightText={choice}
      checkedCheckBoxColor={constants.tabColor}
      checkBoxColor={constants.strongColor}
    />
  )
}

Checkbox.propTypes = {
  choice: PropTypes.string.isRequired,
  onListChecked: PropTypes.func.isRequired,
}

export default Checkbox
