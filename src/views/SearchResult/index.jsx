import React from 'react'
import PropTypes from 'prop-types'

import { observer, inject } from 'mobx-react'
import { compose } from 'recompose'

import {
  Containers,
  WelcomeView,
  Body,
  SearchText,
  SearchContainer,
} from './styled'
import RestaurantCard from '../../components/home/RestaurantCard'
import { HomeContext } from '../../utils/context'
import SearchInput from '../../components/common/SearchInput'
import RefreshView from '../../components/common/RefreshView'
import { serverClient } from '../../api'

import { API_READY } from 'react-native-dotenv'

import { mock } from './mock'
import SearchButton from '../../components/searchResult/SearchButton'

// const SearchResult = ({ authStore, navigation }) => {
//   const [searchText, setSearchText] = useState('')
//   const [data, setData] = useState({})
//   const [displayText, setDisplayText] = useState(false)

//   // const fetchWelcome = async () => {
//   //   const { latitude, longitude } = authStore.curLocation
//   //   if (API_READY === 'true' && latitude !== -1) {
//   //     console.log('API Mode', API_READY)
//   //     const res = await serverClient.get(
//   //       `/welcome?lat=${latitude}&long=${longitude}`,
//   //     )
//   //     setData(res.data)
//   //   } else {
//   //     console.log('Mock Mode')
//   //     setData(mock)
//   //   }
//   // }

//   useEffect(() => {
//     navigation.setParams({ handleSearch })
//   }, [])

//   useEffect(() => {
//     console.log(searchText)
//     if (searchText.length > 5) {
//       handleSearch()
//     }
//   }, [searchText])

//   const handleSearch = async () => {
//     if (searchText) {
//       if (API_READY === 'true') {
//         const res = await serverClient.get(`/search?q=${searchText}`)
//         setData(res.data)
//       } else {
//         console.log('Why searchText print nothing => ' + searchText)
//         setDisplayText(true)
//         setData(mock)
//       }
//     } else {
//       console.log('GG', searchText)
//     }
//   }

//   return (
//     <HomeContext.Provider value={{ navigation }}>
//       <Containers>
//         <WelcomeView>
//           <SearchContainer>
//             <SearchInput
//               placeholder="Search for your restaurant"
//               text={searchText}
//               setText={setSearchText}
//             />
//           </SearchContainer>
//         </WelcomeView>
//         <RefreshView>
//           <Body>
//             {displayText && <SearchText>Search for {searchText}</SearchText>}
//             {data.restaurants &&
//               data.restaurants.map((d, i) => (
//                 <RestaurantCard key={i} data={d} />
//               ))}
//           </Body>
//         </RefreshView>
//       </Containers>
//     </HomeContext.Provider>
//   )
// }

// NOTE: Because of `handleSearch` with stateless component cannot access to searchText
//       state value and the solution that I found is use class component instead.
class SearchResult extends React.Component {
  state = {
    searchText: '',
    data: {},
    displayText: false,
  }

  componentDidMount() {
    this.props.navigation.setParams({ handleSearch: this.handleSearch })
  }

  handleSearch = async () => {
    if (API_READY === 'true') {
      const res = await serverClient.get(`/search?q=${this.state.searchText}`)

      this.setState({ data: res.data })
    } else {
      console.log(`/search?q=${this.state.searchText}`)
      this.setState({
        displayText: true,
        data: mock,
      })
    }
  }

  render() {
    const { navigation } = this.props
    return (
      <HomeContext.Provider value={{ navigation }}>
        <Containers>
          <WelcomeView>
            <SearchContainer>
              <SearchInput
                placeholder="Search for your restaurant"
                text={this.state.searchText}
                setText={e => this.setState({ searchText: e })}
              />
            </SearchContainer>
          </WelcomeView>
          <RefreshView>
            <Body>
              {this.state.displayText && (
                <SearchText>
                  Search for &quot;{this.state.searchText}&quot;
                </SearchText>
              )}
              {this.state.data.restaurants &&
                this.state.data.restaurants.map((d, i) => (
                  <RestaurantCard key={i} data={d} />
                ))}
            </Body>
          </RefreshView>
        </Containers>
      </HomeContext.Provider>
    )
  }
}

SearchResult.propTypes = {
  authStore: PropTypes.object,
  navigation: PropTypes.object,
}

SearchResult.navigationOptions = props => {
  const { params = {} } = props.navigation.state
  return {
    headerTitle: '',
    headerStyle: {
      ...props.navigationOptions.headerStyle,
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0,
    },

    headerRight: () => <SearchButton onSearchClicked={params.handleSearch} />,
    // headerShown: false,
  }
}

export default compose(
  inject(({ rootStore }) => ({
    authStore: rootStore.authStore,
  })),
  observer,
)(SearchResult)
