import React, { useState, useEffect } from 'react'
import { Image, Alert } from 'react-native'
import { Content, Text, View } from 'native-base'
import PropTypes from 'prop-types'
import { firebaseApp } from '../../utils/firebase'

import withSafeArea from '../../hocs/withSafeView'
import { ProfileImg, Input, Container, SButton } from './styled'

const Login = ({ navigation }) => {
  const [email, setEmail] = useState(null)
  const [pass, setPass] = useState(null)

  const signin = () => {
    if (email === null || pass === null) {
      Alert.alert(
        'Authentication Failed',
        'Please enter your email and password',
        [{ text: 'OK', onPress: () => {} }],
        { cancelable: false },
      )
    } else if (firebaseApp != undefined) {
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
  }

  const signup = () => {
    if (email === null || pass === null) {
      Alert.alert(
        'Authentication Failed',
        'Please enter your email and password',
        [{ text: 'OK', onPress: () => {} }],
        { cancelable: false },
      )
    } else if (firebaseApp != undefined) {
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
      <SButton onPress={signin}>
        <Text>SignIn</Text>
      </SButton>
      <SButton onPress={signup}>
        <Text>SignUp</Text>
      </SButton>
    </Container>
  )
}

Login.propTypes = {
  navigation: PropTypes.object,
}

export default withSafeArea(Login)
