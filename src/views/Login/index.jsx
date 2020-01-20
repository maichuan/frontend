import React from 'react'
import { Image } from 'react-native'
import { Content, Text, Button, View } from 'native-base'
import PropTypes from 'prop-types'

import withSafeArea from '../../hocs/withSafeView'
import { ProfileImg, Input, Container } from './styled'

const Login = ({ navigation }) => {
  return (
    <Container>
      <ProfileImg source={require('../../../assets/hamburger.jpg')} />
      <Input placeholder={'Email Addesss'} />
      <Input secureTextEntry placeholder={'Password'} />
    </Container>
  )
}

Login.propTypes = {
  navigation: PropTypes.object,
}

export default withSafeArea(Login)
