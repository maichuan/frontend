import React from 'react'
import { View, Text } from 'native-base'
import PropTypes from 'prop-types'

import { observer, inject } from 'mobx-react'
import { compose } from 'recompose'
import Login from '../Login'

import {
  Logout,
  LogoutText,
  ProfileImg,
  Container,
  Name,
  EditInfoView,
  EditButton,
  EditText,
} from './styled'
import { firebaseApp } from '../../utils/firebase'

const UserInfo = ({ navigation, authStore }) => {
  const onLogoutClicked = async () => {
    await firebaseApp.auth().signOut()
    authStore.removeAuth()
  }

  return authStore.auth.uid ? (
    <Container>
      {authStore.auth.photoURL && (
        <ProfileImg source={{ uri: authStore.auth.photoURL }} />
      )}
      <Name>
        {authStore.auth.displayName
          ? authStore.auth.displayName
          : authStore.auth.email}
      </Name>

      <EditInfoView>
        <EditButton activeOpacity={0.8}>
          <EditText>Payment</EditText>
          <EditText>{'>'}</EditText>
        </EditButton>
      </EditInfoView>

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

export default compose(
  inject(({ rootStore }) => ({
    authStore: rootStore.authStore,
  })),
  observer,
)(UserInfo)
