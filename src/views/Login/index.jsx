import React, { useState, useEffect } from 'react'
import { Alert } from 'react-native'
import PropTypes from 'prop-types'
import { firebaseApp } from '../../utils/firebase'

import withSafeArea from '../../hocs/withSafeView'
import { ProfileImg, Input, Container, BGroup, SButton, SText } from './styled'

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
          firebase
            .auth()
            .currentUser.getIdToken(/* forceRefresh */ true)
            .then(function(idToken) {
              // Send token to your backend via HTTPS
              // ...
            })
            .catch(function(error) {
              // Handle error
            })
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
      <BGroup>
        <SButton onPress={signin}>
          <SText>SignIn</SText>
        </SButton>
        <SButton onPress={signup}>
          <SText>SignUp</SText>
        </SButton>
      </BGroup>
    </Container>
  )
}

Login.propTypes = {
  navigation: PropTypes.object,
}

export default withSafeArea(Login)
