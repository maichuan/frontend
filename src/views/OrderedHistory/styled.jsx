import styled from 'styled-components'
import Constants from '../../utils/constants'

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${Constants.veryWeakColor};
`
export const FreeView = styled.View`
  height: 35px;
`
export const Header = styled.View`
  margin: 5px;
  border-width: 1px;
  border-color: #aaaaaa;
  border-radius: 10px;
  background-color: #fff;
`
export const RestaurantName = styled.Text`
  font-size: 25px;
  font-weight: 700;
  padding: 15px 15px 5px 15px;
  color: ${Constants.strongColor};
`
export const TransactionId = styled.Text`
  font-size: 10px;
  font-weight: 300;
  padding: 0 15px 10px 15px;
  color: ${Constants.strongColor};
`
export const Menus = styled.View`
  border-width: 1px;
  border-color: #aaaaaa;
  border-radius: 10px;
  margin: 5px;
  background-color: #fff;
`
export const ShowMore = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  background-color: ${Constants.tabColor};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`
export const ShowMoreText = styled.Text`
  font-weight: 600;
  color: ${Constants.strongColor};
`
export const SummaryView = styled.View`
  border-width: 1px;
  border-color: #aaaaaa;
  border-radius: 10px;
  background-color: #fff;
  margin: 5px;
`
export const IncreaseView = styled.View`
  padding: 5px;
`
export const IncreasePriceView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px;
`
export const IncreaseText = styled.Text`
  font-size: 13px;
  color: ${Constants.strongColor};
`
export const TotalPriceView = styled.View`
  border-top-width: 1px;
  border-color: #aaaaaa;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const TotalPrice = styled.Text`
  font-size: 20px;
  color: ${Constants.strongColor};
  font-weight: 600;
`
