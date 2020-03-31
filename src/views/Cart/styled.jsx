import styled from 'styled-components'
import Constants from '../../utils/constants'

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
  width: 100%;
  border-radius: 10px;
  height: 50px;
  justify-content: center;
  align-items: center;
`
export const ConfirmText = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: ${Constants.strongColor};
`
