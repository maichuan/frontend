import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import PropTypes from 'prop-types'

const TabBarIcon = ({ tintColor, name, type }) => {
  return <FontAwesome type={type} color={tintColor} name={name} size={26} />
}

TabBarIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  focused: PropTypes.bool,
}

TabBarIcon.defaultProps = {
  type: 'AntDesign',
}

export default TabBarIcon
