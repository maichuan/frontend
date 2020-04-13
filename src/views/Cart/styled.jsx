import styled from 'styled-components'
import { Icon } from 'native-base'
import Constants from '../../utils/constants'
import { Width } from '../../utils/utils'

export const Container = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  padding-top: 7px;
  background-color: ${Constants.veryWeakColor};
`
export const SummayText = styled.Text`
  color: #d1d0cd;
  font-size: 25px;
  font-weight: 600;
  width: 100%;
  padding: 10px 15px;
  color: ${Constants.strongColor};
`
export const TotalPriceView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 15px;
  background-color: #fff;
  background-color: ${Constants.weakColor};
`
export const TotalText = styled.Text`
  font-size: 20px;
  font-weight: 300;
  color: ${Constants.strongColor};
`
export const PriceText = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: ${Constants.strongColor};
`
export const ConfirmButton = styled.TouchableOpacity`
  background-color: ${({ disabled }) =>
    disabled ? '#d1d0cd' : Constants.tabColor};
  width: 45%;
  border-radius: 10px;
  height: 50px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const ConfirmText = styled.Text`
  font-size: ${Width / 23};
  font-weight: 700;
  color: ${Constants.strongColor};
`
export const SubmitIcon = styled(Icon)`
  font-size: ${({ size }) => (size ? (Width * 3) / 40 : Width / 20)};
  padding-right: 5px;
  color: ${Constants.strongColor};
`
