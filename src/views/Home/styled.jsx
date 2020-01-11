import styled from 'styled-components'
import { Container, Button, View } from 'native-base'

export const Containers = styled(Container)`
  background-color: #fff;
  flex: 1;
`
export const BottomTab = styled(View)`
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  bottom: 0px;
  background-color: #000;
`
export const OpenQrButton = styled(Button)`
  width: 100px;
  height: 100px;
  border-radius: 1000;
`
