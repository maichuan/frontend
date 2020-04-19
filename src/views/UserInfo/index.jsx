import React from 'react'
import { Linking } from 'expo'
import * as Application from 'expo-application'
import * as IntentLauncher from 'expo-intent-launcher'
import PropTypes from 'prop-types'

import { observer, inject } from 'mobx-react'
import { compose } from 'recompose'
import Login from '../Login'
import EditInfo from '../../components/userInfo/EditInfo'

import {
  Logout,
  LogoutText,
  ProfileImg,
  Container,
  Name,
  InfoView,
} from './styled'
import { firebaseApp } from '../../utils/firebase'
import TabBarIcon from '../../components/common/TabBarIcon'
import constants from '../../utils/constants'

const UserInfo = ({ navigation, authStore }) => {
  const onLogoutClicked = async () => {
    await firebaseApp.auth().signOut()
    authStore.removeAuth()
  }

  const handleSetting = () => {
    if (Platform.OS === 'ios') {
      Linking.openURL(`app-settings:`)
    } else if (Platform.OS === 'android' && Platform.Version >= 26) {
      const bundleIdentifier = Application.applicationId
      IntentLauncher.startActivityAsync(
        IntentLauncher.ACTION_APPLICATION_DETAILS_SETTINGS,
        {
          data: `package:${bundleIdentifier}`,
        },
      )
    }
  }

  const handlePayment = () => {
    navigation.navigate('Payment')
  }

  return authStore.auth.uid ? (
    <Container>
      <ProfileImg
        source={
          authStore.auth.photoURL
            ? { uri: authStore.auth.photoURL }
            : require('../../../assets/no_image.png')
        }
      />

      <Name>
        {authStore.auth.displayName
          ? authStore.auth.displayName
          : authStore.auth.email}
      </Name>

      <InfoView>
        <EditInfo first word="Payment" onPress={handlePayment} />
        <EditInfo word="Update permission setting" onPress={handleSetting} />
      </InfoView>

      <Logout onPress={() => onLogoutClicked()}>
        <LogoutText>Logout</LogoutText>
      </Logout>
    </Container>
  ) : (
    <Login navigation={navigation} />
  )
}

UserInfo.propTypes = {
  navigation: PropTypes.object,
  authStore: PropTypes.object,
}

UserInfo.navigationOptions = {
  headerTitle: () => (
    <TabBarIcon
      tintColor={constants.strongColor}
      type="FontAwesome"
      name="user-circle-o"
    />
  ),
}

export default compose(
  inject(({ rootStore }) => ({
    authStore: rootStore.authStore,
  })),
  observer,
)(UserInfo)
