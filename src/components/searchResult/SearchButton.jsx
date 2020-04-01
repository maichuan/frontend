import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import constants from '../../utils/constants'

const SearchBox = styled.TouchableOpacity``
export const Input = styled.Text`
  color: ${constants.strongColor};
  font-size: 16px;
  font-weight: 500;
  padding: 0 10px;
`

const SearchButton = ({ onSearchClicked }) => {
  return (
    <SearchBox onPress={onSearchClicked}>
      <Input>Search</Input>
    </SearchBox>
  )
}

SearchButton.propTypes = {
  onSearchClicked: PropTypes.func,
}

export default SearchButton
