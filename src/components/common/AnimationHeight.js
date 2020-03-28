import React from 'react'
import { NativeModules, View } from 'react-native'
import PropTypes from 'prop-types'

const { UIManager } = NativeModules

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true)

const AnimationHeight = ({ children }) => {
  return <View>{children}</View>
}

AnimationHeight.propTypes = {
  children: PropTypes.node,
}

export default AnimationHeight
