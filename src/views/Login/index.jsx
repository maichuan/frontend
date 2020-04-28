import React, { useState, useEffect } from 'react'
import { Alert, Platform, Keyboard } from 'react-native'
import PropTypes from 'prop-types'
import * as firebase from 'firebase'
import * as Facebook from 'expo-facebook'
import { firebaseApp } from '../../utils/firebase'
import { FACEBOOK_APPID, FACEBOOK_APPNAME } from 'react-native-dotenv'
import { serverClient } from '../../api'

import { observer, inject } from 'mobx-react'
import { compose } from 'recompose'

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
  KeyBoardAvoiding,
  WithoutFeedback,
} from './styled'

const Login = ({ navigation, authStore, spinnerStore }) => {
  const [email, setEmail] = useState(null)
  const [pass, setPass] = useState(null)
  const [username, setUsername] = useState('')
  const [isSignIn, setIsSignIn] = useState(true)

  const signin = () => {
    if (isSignIn) {
      if (email === null || pass === null) {
        Alert.alert(
          'Authentication Failed',
          'Please enter your email and password',
          [{ text: 'OK', onPress: () => {} }],
          { cancelable: false },
        )
      } else if (firebaseApp) {
        spinnerStore.open()
        firebaseApp
          .auth()
          .signInWithEmailAndPassword(email, pass)
          .then(user => {
            serverClient.post('/user/signup', {
              uid: user.user.uid,
            })
            //   navigation.navigate('Home')
            spinnerStore.close()
          })
          .catch(function(error) {
            console.log(error)
            spinnerStore.close()

            Alert.alert(
              'Authentication Failed',
              'Your email or password is wrong',
              [{ text: 'OK', onPress: () => {} }],
              { cancelable: false },
            )
          })
      }
    } else {
      setIsSignIn(!isSignIn)
    }
  }

  const signup = () => {
    if (isSignIn) {
      setIsSignIn(!isSignIn)
    } else {
      if (email === null || pass === null || username === '') {
        Alert.alert(
          'Authentication Failed',
          'Please enter your email and password',
          [{ text: 'OK', onPress: () => {} }],
          { cancelable: false },
        )
      } else if (firebaseApp) {
        console.log('log spinner open ja')

        spinnerStore.open()
        firebaseApp
          .auth()
          .createUserWithEmailAndPassword(email, pass)
          .then(async user => {
            const { data } = await serverClient.post('/user/signup', {
              uid: user.user.uid,
              username,
            })
            authStore.setUser(data.user)
          })
          .catch(function(error) {
            console.log(error)

            Alert.alert(
              'SignUp Failed',
              'Check your email format',
              [{ text: 'OK', onPress: () => {} }],
              { cancelable: false },
            )
          })
          .finally(() => {
            spinnerStore.close()
          })
      }
    }
  }

  const signInWithFB = async () => {
    const permissions = ['public_profile', 'email'] // Permissions required, consult Facebook docs

    Facebook.initializeAsync(FACEBOOK_APPID, FACEBOOK_APPNAME)

    const { type, token } = await Facebook.logInWithReadPermissionsAsync(
      FACEBOOK_APPID,
      {
        permissions,
      },
    )

    switch (type) {
      case 'success': {
        spinnerStore.open()
        await firebaseApp
          .auth()
          .setPersistence(firebase.auth.Auth.Persistence.LOCAL) // Set persistent auth state
        const credential = firebase.auth.FacebookAuthProvider.credential(token)
        const facebookProfileData = await firebaseApp
          .auth()
          .signInWithCredential(credential) // Sign in with Facebook credential

        // Do something with Facebook profile data
        // OR you have subscribed to auth state change, authStateChange handler will process the profile data

        const { data } = await serverClient.post('/user/signup', {
          uid: firebaseApp.auth().currentUser.uid,
          username: firebaseApp.auth().currentUser.displayName,
        })
        authStore.setUser(data.user)
        spinnerStore.close()

        return Promise.resolve({ type: 'success' })
      }
      case 'cancel': {
        console.log('cancel')
        return Promise.reject({ type: 'cancel' })
      }
    }
  }

  return (
    <KeyBoardAvoiding behavior={Platform.OS == 'ios' ? 'padding' : undefined}>
      <WithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <>
            <Input
              onChangeText={text => {
                setEmail(text)
              }}
              placeholder="Email Addesss"
            />
            <Input
              onChangeText={text => {
                setPass(text)
              }}
              secureTextEntry
              placeholder="Password"
            />
            {!isSignIn && (
              <Input
                onChangeText={text => {
                  setUsername(text)
                }}
                placeholder="Username"
              />
            )}
            <BGroup>
              <SLButton isSignIn={isSignIn} onPress={signin}>
                <SText>SignIn</SText>
              </SLButton>
              <VLine />
              <SRButton isSignIn={isSignIn} onPress={signup}>
                <SText>SignUp</SText>
              </SRButton>
            </BGroup>
            <FBLogin onPress={signInWithFB}>
              <FBBlock>
                <FBLogo source={require('../../../assets/fb_logo.png')} />
                <FBText>Continue with Facebook</FBText>
              </FBBlock>
            </FBLogin>
          </>
        </Container>
      </WithoutFeedback>
    </KeyBoardAvoiding>
  )
}

Login.propTypes = {
  navigation: PropTypes.object,
  authStore: PropTypes.object,
  spinnerStore: PropTypes.object,
}

export default compose(
  withSafeArea,
  inject(({ rootStore }) => ({
    authStore: rootStore.authStore,
    spinnerStore: rootStore.spinnerStore,
  })),
  observer,
)(Login)
