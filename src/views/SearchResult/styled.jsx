import styled from 'styled-components'
import { Platform } from 'react-native'
import constants from '../../utils/constants'
import { Width } from '../../utils/utils'

export const Containers = styled.View`
  background-color: ${constants.veryWeakColor};
  flex: 1;
  justify-content: center;
  align-items: center;
`
export const WelcomeView = styled.View`
  background-color: ${constants.tabColor};
  /* height: 100px; */
  width: ${Width};
  display: flex;
  justify-content: center;
  border-bottom-width: 1px;
  border-bottom-color: #aaa;
`
export const SearchContainer = styled.View`
  display: flex;
  align-items: center;
  width: ${Width};
`
export const Body = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
`
export const SearchText = styled.Text`
  font-style: normal;
  color: ${constants.strongColor};
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  margin: 10px;
`
