import styled from 'styled-components'

export const Container = styled.ScrollView`
  flex: 1;
`
export const Header = styled.View`
  margin: 5px;
  border-width: 0.5px;
  border-color: #000;
`
export const RestaurantName = styled.Text`
  font-size: 30px;
  font-weight: 700;
`
export const TransactionId = styled.Text`
  font-size: 10px;
  font-weight: 300;
`
export const Menus = styled.View`
  border-width: 0.5px;
  border-color: #000;
  border-radius: 10px;
  margin: 5px;
`
export const ShowMore = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  background-color: green;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`
export const ShowMoreText = styled.Text`
  font-weight: 600;
`
