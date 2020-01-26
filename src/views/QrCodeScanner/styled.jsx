import { View } from 'native-base'
import styled from 'styled-components'

export const CameraView = styled(View)`
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
`
export const Exit = styled.TouchableOpacity`
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #adadad;
  top: 20;
  left: 20;
  border-radius: 100px;
`
export const XText = styled.Text`
  font-size: 30px;
  font-weight: 800;
`
