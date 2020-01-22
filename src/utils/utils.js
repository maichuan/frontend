import { Toast } from 'native-base'
import { Dimensions } from 'react-native'

export const Height = Dimensions.get('window').height

export const Width = Dimensions.get('window').width

export const displayToast = text =>
  Toast.show({
    text: text,
    textStyle: {
      textAlign: 'center',
    },
  })
