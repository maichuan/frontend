import styled from 'styled-components'
import { Width } from '../../utils/utils'

export const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Logout = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: red;
  width: ${Width / 1.5};
  height: 50px;
  margin: 15px 0px;
`
export const LogoutText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: 600;
`
export const ProfileImg = styled.Image`
  width: ${Width / 3};
  height: ${Width / 3};
  border-radius: 100px;
  margin: 10px 0;
`
export const Name = styled.Text`
  font-size: 20px;
  font-weight: 600;
`
