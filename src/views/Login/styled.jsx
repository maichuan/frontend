import styled from 'styled-components'

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
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
  padding: 0px 5px;
  border-radius: 5px;
`
export const BGroup = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 20px;
`

export const SLButton = styled.TouchableOpacity`
  width: 40%;
  backgroundcolor: grey;
  border: 2px solid grey;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
`
export const SRButton = styled.TouchableOpacity`
  width: 40%;
  backgroundcolor: grey;
  border: 2px solid grey;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
`
export const VLine = styled.View`
  backgroundcolor: grey;
  border: 1px solid grey;
  marginleft: 12px;
  marginright: 12px;
`

export const SText = styled.Text`
  color: white;
  margin: 10px;
  textalign: center;
`
export const FBLogin = styled.TouchableOpacity`
  width: 80%;
  backgroundcolor: #4267b2;
  border: 2px solid #4267b2;
  border-radius: 3px;
`
export const FBBlock = styled.View`
  margin: 10px;
  display: flex;
  flexdirection: row;
  justifycontent: center;
`
export const FBLogo = styled.Image`
  width: 24px;
  height: 24px;
`
export const FBText = styled.Text`
  color: white;
  fontweight: bold;
  fontsize: 16px;
  marginleft: 20px;
`
