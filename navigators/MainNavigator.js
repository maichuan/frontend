import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Home from '../views/Home'
import Camera from '../views/Camera'

export default createAppContainer(
  createStackNavigator(
    {
      Home: Home,
      Camera: Camera,
    },
    {
      headerMode: 'none',
      navigationOptions: {
        headerVisible: false,
        cardStyle: {
          shadowColor: 'transparent',
          backgroundColor: 'transparent',
        },
      },
    },
  ),
)
