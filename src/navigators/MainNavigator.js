import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'

import QrCode from '../components/common/QrCodeButton'
import TabBarIcon from '../components/common/TabBarIcon'

import Home from '../views/Home'
import Restaurant from '../views/Restaurant'
import Cart from '../views/Cart'
import UserInfo from '../views/UserInfo'
import QrCodeScanner from '../views/QrCodeScanner'

const options = {
  // headerMode: 'none',
  // navigationOptions: {
  //   headerVisible: false,
  //   cardStyle: {
  //     shadowColor: 'transparent',
  //     backgroundColor: 'transparent',
  //   },
  // },
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'hsla(0,100%,50%,0.5)',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerBackTitle: 'Back',
    headerTitle: 'Kong',
    // headerTitle: (
    //   <Image
    //     style={{
    //       width: 70,
    //       height: 70,
    //       resizeMode: 'contain',
    //       marginHorizontal: 7,
    //     }}
    //     source={require('../assets/app_logo-removebg.png')}
    //   />
    // ),
  },
}

const MainTab = createStackNavigator({
  Home: Home,
  Restaurant: Restaurant,
  Cart: Cart,
})

MainTab.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true
  if (navigation.state.index > 0) {
    tabBarVisible = false
  }

  return {
    tabBarVisible,
    tabBarLabel: 'Home',
    // eslint-disable-next-line react/prop-types
    tabBarIcon: ({ focused, tintColor }) => (
      <TabBarIcon
        focused={focused}
        tintColor={tintColor}
        type="FontAwesome"
        name="home"
      />
    ),
  }
}

const UserTab = createStackNavigator({
  Info: UserInfo,
})

UserTab.navigationOptions = {
  tabBarLabel: 'Home',
  // eslint-disable-next-line react/prop-types
  tabBarIcon: ({ tintColor }) => (
    <TabBarIcon tintColor={tintColor} type="FontAwesome" name="user" />
  ),
}

const QrCodeTab = createStackNavigator({ Empty: () => null })

QrCodeTab.navigationOptions = {
  tabBarIcon: <QrCode />,
  tabBarOnPress: ({ navigation }) => {
    navigation.navigate('QrCode')
  },
}

const TabNav = createBottomTabNavigator(
  {
    MainTab,
    QrCodeTab,
    UserTab,
  },
  {
    initialRouteName: 'MainTab',
    tabBarOptions: {
      showLabel: false,
      activeTintColor: '#F8F8F8',
      inactiveTintColor: '#586589',
      style: {
        backgroundColor: '#171F33',
      },
      labelStyle: {
        fontSize: 15,
        margin: 0,
        padding: 0,
        fontWeight: 'bold',
      },
      //     style: {
      //       height: 60,
      //       backgroundColor: '#c33bab',
      //     },
      //     activeTintColor: 'white',
      //     inactiveTintColor: '#de90cd',
    },
  },
)

export default createStackNavigator(
  {
    TabNav,
    QrCode: QrCodeScanner,
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
)
