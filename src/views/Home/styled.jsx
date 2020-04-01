import styled from 'styled-components'
import { Platform } from 'react-native'
import { Icon } from 'native-base'
import { Width } from '../../utils/utils'
import Constants from '../../utils/constants'

export const Containers = styled.View`
  background-color: ${Constants.veryWeakColor};
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: ${Platform.OS === 'android' ? '25px' : '0'};
`
export const ScrollBody = styled.ScrollView.attrs(props => ({
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
}))`
  flex: 1;
  margin-top: 20px;
  align-self: stretch;
`
export const Body = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
`
export const WelcomeView = styled.View`
  background-color: ${Constants.tabColor};
  height: 100px;
  width: ${Width};
  display: flex;
  justify-content: center;
  border-bottom-width: 1px;
  border-bottom-color: #aaa;
`
export const WelcomeMessage = styled.Text`
  color: ${Constants.strongColor};
  font-size: 20px;
  font-weight: 600;
  padding: 0 20px;
`
// export const SearchBox = styled.View`
//   flex-direction: row;
//   align-items: center;
//   background-color: #fff;
//   border-width: 1px;
//   border-color: ${Constants.strongColor};
//   border-radius: 6px;
//   max-width: 370px;
//   margin: 10px 0px;
// `
export const SearchContainer = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  width: ${Width};
`
export const SearchIcon = styled(Icon)`
  margin: 3px 10px;
`
export const SearchInput = styled.TextInput`
  flex: 1;
  background-color: #fff;
  color: #424242;
`
export const HorizontalView = styled.ScrollView`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
export const TrendRestaurant = styled.TouchableOpacity`
  width: ${Width / 2};
  margin: 5px;
  border-width: 1px;
  border-color: #c4c4c4;
  background: #c4c4c4;
  align-items: center;
  justify-content: center;
`
export const NearByText = styled.Text`
  font-style: normal;
  color: ${Constants.strongColor};
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  margin: 10px;
`
export const FreeView = styled.View`
  height: 30px;
`
