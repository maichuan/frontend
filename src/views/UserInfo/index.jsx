import React from 'react'
import { View, Text } from 'native-base'
import PropTypes from 'prop-types'

const UserInfo = ({ navigation }) => {
  return (
    <View>
      <Text>User information page</Text>
    </View>
  )
}

UserInfo.propTypes = {
  navigation: PropTypes.object,
}

export default UserInfo
