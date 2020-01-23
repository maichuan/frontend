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

export const SButton = styled.TouchableOpacity`
  width: 40%;
  border: 2px solid palevioletred;
  border-radius: 3px;
`
export const SText = styled.Text`
  margin: 5px;
  textalign: center;
`
