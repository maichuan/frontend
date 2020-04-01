import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { TransitionPresets, createStackNavigator } from 'react-navigation-stack'

import QrCode from '../components/common/QrCodeButton'
import TabBarIcon from '../components/common/TabBarIcon'

import Home from '../views/Home'
import Restaurant from '../views/Restaurant'
import Cart from '../views/Cart'
import UserInfo from '../views/UserInfo'
import Login from '../views/Login'
import QrCodeScanner from '../views/QrCodeScanner'
import Process from '../views/Process'
import History from '../views/History'

import Constants from '../utils/constants'
import OrderedHistory from '../views/OrderedHistory'
import SearchResult from '../views/SearchResult'

const options = {
  // headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
    cardStyle: {
      shadowColor: 'transparent',
      backgroundColor: 'transparent',
    },
  },
  // defaultNavigationOptions: {
  //   headerStyle: {
  //     backgroundColor: 'hsla(0,100%,50%,0.5)',
  //   },
  //   headerTintColor: '#fff',
  //   headerTitleStyle: {
  //     fontWeight: 'bold',
  //   },
  //   headerBackTitle: 'Back',
  //   headerTitle: 'Kong',
  //   // headerTitle: (
  //   //   <Image
  //   //     style={{
  //   //       width: 70,
  //   //       height: 70,
  //   //       resizeMode: 'contain',
  //   //       marginHorizontal: 7,
  //   //     }}
  //   //     source={require('../assets/app_logo-removebg.png')}
  //   //   />
  //   // ),
  // },
}
const optionsHeader = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Constants.tabColor,
    },
    headerTintColor: Constants.strongColor,
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 18,
      color: Constants.strongColor,
    },
    headerBackTitle: ' ',
  },
}

const MainTab = createStackNavigator(
  {
    Home: Home,
    Search: SearchResult,
    Restaurant: Restaurant,
    Cart: Cart,
  },
  optionsHeader,
  // options,
)

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

const UserTab = createStackNavigator(
  {
    Info: UserInfo,
    // Login: Login,
  },
  optionsHeader,
)

UserTab.navigationOptions = {
  tabBarLabel: 'User',
  // eslint-disable-next-line react/prop-types
  tabBarIcon: ({ tintColor }) => (
    <TabBarIcon tintColor={tintColor} type="FontAwesome" name="user" />
  ),
}

const ProcessTab = createStackNavigator(
  {
    Process: Process,
  },
  optionsHeader,
)

ProcessTab.navigationOptions = {
  tabBarLabel: 'Process',
  // eslint-disable-next-line react/prop-types
  tabBarIcon: ({ tintColor }) => (
    <TabBarIcon tintColor={tintColor} type="FontAwesome" name="spinner" />
  ),
}

const HistoryTab = createStackNavigator(
  {
    History: History,
    OrderedHistory: OrderedHistory,
  },
  optionsHeader,
)

HistoryTab.navigationOptions = {
  tabBarLabel: 'History',
  // eslint-disable-next-line react/prop-types
  tabBarIcon: ({ tintColor }) => (
    <TabBarIcon tintColor={tintColor} type="FontAwesome" name="history" />
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
    ProcessTab,
    QrCodeTab,
    HistoryTab,
    UserTab,
  },
  {
    initialRouteName: 'MainTab',
    tabBarOptions: {
      showLabel: false,
      // activeTintColor: '#F8F8F8',
      // inactiveTintColor: '#586589',
      activeTintColor: Constants.strongColor,
      inactiveTintColor: Constants.weakColor,
      style: {
        backgroundColor: Constants.tabColor,
        height: 60,
        // borderTopWidth: '2px',
        // borderTopColor: '#e6b400',
      },
      // labelStyle: {
      //   fontSize: 15,
      //   margin: 0,
      //   padding: 0,
      //   fontWeight: 'bold',
      // },
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
    defaultNavigationOptions: {
      gestureEnabled: true,
      cardOverlayEnabled: true,
      ...TransitionPresets.ModalPresentationIOS,
    },
  },
)
