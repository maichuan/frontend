import styled from 'styled-components'
import { Width } from '../../utils/utils'
import constants from '../../utils/constants'

export const Container = styled.View`
  flex: 1;
  display: flex;
  padding-top: 30px;
  background-color: ${constants.veryWeakColor};
`
export const ButtonView = styled.View`
  display: flex;
  width: ${Width};
  align-items: center;
  padding-top: 30px;
`
export const Submit = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: ${constants.tabColor};
  width: ${Width / 2};
  height: 50px;
  margin: 15px 0px;
  border-radius: 20px;
`
export const SubmitText = styled.Text`
  color: ${constants.strongColor};
  font-size: 20px;
  font-weight: 700;
`
