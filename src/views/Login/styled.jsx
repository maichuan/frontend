import styled from 'styled-components'
import constants from '../../utils/constants'

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: ${constants.veryWeakColor};
`
export const ProfileImg = styled.Image`
  width: 150px;
  height: 150px;
`
export const Input = styled.TextInput`
  height: 40px;
  min-width: 300px;
  border-color: gray;
  border-width: 1px;
  margin: 10px 0px;
  padding: 0px 10px;
  border-radius: 10px;
`
export const BGroup = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 20px;
`
export const SLButton = styled.TouchableOpacity`
  width: 40%;
  background-color: ${({ isSignIn }) =>
    isSignIn ? constants.tabColor : 'transparent'};
  border: 2px solid ${constants.weakColor};
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`
export const SRButton = styled.TouchableOpacity`
  width: 40%;
  background-color: ${({ isSignIn }) =>
    !isSignIn ? constants.tabColor : 'transparent'};
  border: 2px solid ${constants.weakColor};
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`
export const VLine = styled.View`
  background-color: grey;
  border: 1px solid grey;
  margin-left: 12px;
  margin-right: 12px;
`
export const SText = styled.Text`
  color: ${constants.strongColor};
  margin: 10px;
  text-align: center;
  font-size: 15px;
  font-weight: 600;
`
export const FBLogin = styled.TouchableOpacity`
  width: 80%;
  background-color: #4267b2;
  border: 2px solid #4267b2;
  border-radius: 10px;
`
export const FBBlock = styled.View`
  margin: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`
export const FBLogo = styled.Image`
  width: 24px;
  height: 24px;
`
export const FBText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
  margin-left: 20px;
`
export const KeyBoardAvoiding = styled.KeyboardAvoidingView`
  flex: 1;
`
export const WithoutFeedback = styled.TouchableWithoutFeedback``
