import styled from 'styled-components'
import { Icon } from 'native-base'
import { Width } from '../../utils/utils'
import Constants from '../../utils/constants'

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${Constants.veryWeakColor};
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
  color: #fff;
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
  color: #fff;
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
  background-color: #fff;
`
export const PopularText = styled.Text`
  font-size: 20px;
  font-weight: 500;
  margin: 10px;
  color: ${Constants.strongColor};
`
export const HorizontalView = styled.ScrollView`
  margin: 0px 10px;
`
export const LocationView = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  /* background-color: #fff; */
  /* background-color: ${Constants.weakColor}; */
`
export const LocationIconView = styled.View`
  border-right-width: 1px;
  width: ${Width * 0.3};
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: #cccccc;
`
export const LocationTextView = styled.View`
  width: ${Width * 0.7};
  justify-content: center;
`
export const LocationText = styled.Text`
  padding: 10px;
  color: ${Constants.strongColor};
`
export const LocationIcon = styled(Icon)`
  color: ${Constants.strongColor};
  padding: 10px;
`
export const Hr = styled.View`
  border-bottom-color: ${Constants.strongColor};
  border-bottom-width: 0.5px;
`
export const Detail = styled.View`
  margin: 5px;
  border-radius: 10px;
  background-color: ${Constants.weakColor};
`
