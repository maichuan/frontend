import React, { useState, useEffect } from 'react'
import { Alert } from 'react-native'
import PropTypes from 'prop-types'
import * as firebase from 'firebase'
import { firebaseApp } from '../../utils/firebase'

import withSafeArea from '../../hocs/withSafeView'
import {
  ProfileImg,
  Input,
  Container,
  BGroup,
  SLButton,
  SRButton,
  VLine,
  SText,
  FBLogin,
  FBBlock,
  FBLogo,
  FBText,
} from './styled'

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

  const signInWithFB = () => {
    let provider = new firebase.auth.FacebookAuthProvider()

    firebaseApp
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        token = result.credential.accessToken
        // The signed-in user info.
        user = result.user
        // ...
      })
      .catch(function(error) {
        // Handle Errors here.
        //errorCode = error.code;
        errorMessage = error.message
        // The email of the user's account used.
        femail = error.email
        // The firebase.auth.AuthCredential type that was used.
        credential = error.credential
        // ...
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
      <BGroup>
        <SLButton onPress={signin}>
          <SText>SignIn</SText>
        </SLButton>
        <VLine />
        <SRButton onPress={signup}>
          <SText>SignUp</SText>
        </SRButton>
      </BGroup>
      <FBLogin onPress={signInWithFB}>
        <FBBlock>
          <FBLogo source={require('../../../assets/fb_logo.png')} />
          <FBText>Continue with Facebook</FBText>
        </FBBlock>
      </FBLogin>
    </Container>
  )
}

Login.propTypes = {
  navigation: PropTypes.object,
}

export default withSafeArea(Login)
