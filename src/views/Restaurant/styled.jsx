import styled from 'styled-components'
import { Width } from '../../utils/utils'

export const Container = styled.ScrollView`
  flex: 1;
`
export const HeadImage = styled.Image`
  align-self: stretch;
  height: ${Width / 1.75};
`
export const TextImage = styled.View`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: ${Width};
  height: ${Width / 1.75};
`
export const RestaurantName = styled.Text`
  text-shadow: 2px 2px black;
  color: white;
  font-weight: bold;
  font-size: 20px;
  display: flex;
  align-items: center;
  text-align: center;
`
export const TableNoView = styled.View`
  display: flex;
  flex-direction: column;
  margin: 10px;
`
export const TableNo = styled.Text`
  text-shadow: 2px 2px black;
  color: white;
  font-weight: bold;
  font-size: 25px;
  display: flex;
  align-items: center;
  text-align: center;
  margin: 20px;
`
export const SearchView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const FilterButton = styled.TouchableOpacity`
  width: ${Width / 4};
  border-color: #575757;
  border-width: 1px;
  margin: 10px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  height: 40px;
`
export const PopularText = styled.Text`
  font-size: 20px;
  font-weight: 500;
  margin: 10px;
`
export const HorizontalView = styled.ScrollView`
  margin: 0px 10px;
`
