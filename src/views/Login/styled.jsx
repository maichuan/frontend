import styled from 'styled-components'
import { Button } from 'native-base'

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
export const HorizontalView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: 1;
`
export const SButton = styled(Button)`
  width: 80%;
  margin-bottom: 20px;
`
