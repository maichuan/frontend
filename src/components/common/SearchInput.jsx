import React from 'react'
import { Icon } from 'native-base'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const SearchBox = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  border-width: 1px;
  border-color: #000;
  border-radius: 6px;
  max-width: ${props => (props.width ? props.width : '370px')};
  margin: 10px 0px;
`
const SearchIcon = styled(Icon)`
  margin: 3px 10px;
`
export const Input = styled.TextInput`
  flex: 1;
  background-color: #fff;
  color: #424242;
`

const SearchInput = ({ placeholder, text, setText, width }) => {
  return (
    <SearchBox width={width}>
      <SearchIcon name="ios-search" size={20} color="#000" />
      <Input
        value={text}
        placeholder={placeholder}
        onChangeText={searchString => {
          setText(searchString)
        }}
      />
    </SearchBox>
  )
}

SearchInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  setText: PropTypes.func.isRequired,
  width: PropTypes.number,
}

export default SearchInput
