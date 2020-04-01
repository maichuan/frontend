import styled from 'styled-components'
import { Width } from '../../utils/utils'
import constants from '../../utils/constants'

export const Container = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  background-color: ${constants.veryWeakColor};
`
export const Logout = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: ${constants.weakColor};
  width: ${Width / 2};
  height: 50px;
  margin: 15px 0px;
  border-radius: 50px;
`
export const LogoutText = styled.Text`
  color: ${constants.strongColor};
  font-size: 20px;
  font-weight: 700;
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
