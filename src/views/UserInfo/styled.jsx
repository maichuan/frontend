import styled from 'styled-components'
import { Width } from '../../utils/utils'

export const Container = styled.View`
  flex: 1;
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
  border-radius: 20px;
`
export const LogoutText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: 800;
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
export const EditInfoView = styled.View`
  width: ${Width};
  padding: 15px 0;
`
export const EditButton = styled.TouchableOpacity`
  width: ${Width};
  border-width: 0.5px;
  border-color: #aaaaaa;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`
export const EditText = styled.Text``
