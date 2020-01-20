import styled from 'styled-components'
import { Container, Icon } from 'native-base'

export const Containers = styled(Container)`
  background-color: #fff;
  flex: 1;
  justify-content: center;
  align-items: center;
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
  background-color: #171f33;
  height: 100px;
  width: 100%;
`
export const WelcomeMessage = styled.Text`
  color: white;
  margin: auto;
  font-size: 30px;
  font-weight: 700;
`
export const SearchBox = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  border-width: 1px;
  border-color: #000;
  border-radius: 6px;
  max-width: 370px;
  margin: 10px 0px;
`
export const SearchContainer = styled.View`
  display: flex;
  align-items: center;
  width: 100%;
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
  max-width: 370px;
  height: 128px;
  box-shadow: 10px 10px 5px grey;
  border: 2px solid rgba(183, 183, 183, 0.83);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
`
export const TrendRestaurant = styled.TouchableOpacity`
  width: 160px;
  margin: 5px;
  border-width: 1px;
  border-color: #c4c4c4;
  background: #c4c4c4;
  align-items: center;
  justify-content: center;
`
export const NearByText = styled.Text`
  font-style: normal;
  color: #4a4a4a;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  margin: 10px;
`
