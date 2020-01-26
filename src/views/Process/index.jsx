import React from 'react'
import { View, Text } from 'native-base'
import PropTypes from 'prop-types'

const Process = ({ navigation }) => {
  return (
    <View>
      <Text>Order processing page</Text>
    </View>
  )
}

Process.propTypes = {
  navigation: PropTypes.object,
}

export default Process
