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

export const questionConverter = question => {
  return question.split(',').map(q => {
    questions = q.split(':')
    if (questions.length === 3) {
      return {
        question: questions[0],
        type: questions[1],
        choices: questions[2].split(';'),
      }
    } else {
      return {}
    }
  })
}
