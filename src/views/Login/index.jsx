import React, { useState, useEffect } from 'react'
import { Image } from 'react-native'
import { Content, Text, Button, View } from 'native-base'
import PropTypes from 'prop-types'
import { firebaseApp } from '../../utils/firebase'

import withSafeArea from '../../hocs/withSafeView'
import { ProfileImg, Input, Container } from './styled'

const Login = ({ navigation }) => {
  const [email, setEmail] = useState(null)
  const [pass, setPass] = useState(null)

  return (
    <Container>
      <ProfileImg source={require('../../../assets/hamburger.jpg')} />
      <Input
        onChangeText={text => {
          setEmail(text)
        }}
        placeholder={'Email Addesss'}
      />
      <Input
        onChangeText={text => {
          setPass(text)
        }}
        secureTextEntry
        placeholder={'Password'}
      />
    </Container>
  )
}

Login.propTypes = {
  navigation: PropTypes.object,
}

export default withSafeArea(Login)
