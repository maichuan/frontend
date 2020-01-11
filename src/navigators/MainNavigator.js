import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Home from '../views/Home'
import Camera from '../views/Camera'
import Restaurant from '../views/Restaurant'
import Cart from '../views/Cart'

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

export default createAppContainer(
  createStackNavigator(
    {
      Home: Home,
      Camera: Camera,
      Restaurant: Restaurant,
      Cart: Cart,
    },
    options,
  ),
)
