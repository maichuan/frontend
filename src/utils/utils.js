import { Toast } from 'native-base'

export const displayToast = text =>
  Toast.show({
    text: text,
    textStyle: {
      textAlign: 'center',
    },
  })
