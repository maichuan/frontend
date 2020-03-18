import React from 'react'
import {
  NativeModules,
  LayoutAnimation,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native'
import PropTypes from 'prop-types'

const { UIManager } = NativeModules

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true)

// export default class App extends React.Component {
//   state = {
//     w: 100,
//     h: 100,
//   }

//   render() {
//     return <View>{this.props.children}</View>
//   }
// }
const AnimationHeight = ({ children }) => {
  return <View>{children}</View>
}

AnimationHeight.propTypes = {
  children: PropTypes.node,
}

export default AnimationHeight
