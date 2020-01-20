import React, { useState, useEffect } from 'react'
import { Image } from 'react-native'
import { Content, Text, SButton, View, Alert } from 'native-base'
import PropTypes from 'prop-types'
import { firebaseApp } from '../../utils/firebase'

import withSafeArea from '../../hocs/withSafeView'
import { ProfileImg, Input, Container, Button } from './styled'

const Login = ({ navigation }) => {
  const [email, setEmail] = useState(null)
  const [pass, setPass] = useState(null)

  const signin = () => {
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(email, pass)
      .then(() => {
        navigation.navigate('Home')
      })
      .catch(function(error) {
        console.log(error)
        Alert.alert(
          'Authentication Failed',
          'Your email or password is wrong',
          [{ text: 'OK', onPress: () => {} }],
          { cancelable: false },
        )
      })
  }

  const signup = () => {
    firebaseApp
      .auth()
      .createUserWithEmailAndPassword(email, pass)
      .catch(function(error) {
        console.log(error)
        Alert.alert(
          'SignUp Failed',
          'Check your email format',
          [{ text: 'OK', onPress: () => {} }],
          { cancelable: false },
        )
      })
  }

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
      <SButton onPress={signup} />
    </Container>
  )
}

Login.propTypes = {
  navigation: PropTypes.object,
}

export default withSafeArea(Login)
