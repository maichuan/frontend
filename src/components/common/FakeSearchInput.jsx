import React from 'react'
import { Icon } from 'native-base'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import constants from '../../utils/constants'

const SearchBox = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${constants.veryWeakColor};
  border-width: 1px;
  border-color: ${constants.strongColor};
  border-radius: 6px;
  max-width: ${props => (props.width ? props.width : '370px')};
  margin: 10px 0px;
`
const SearchIcon = styled(Icon)`
  margin: 3px 10px;
  color: ${constants.strongColor};
`
export const Input = styled.Text`
  flex: 1;
  color: ${constants.strongColor};
`

const SearchInput = ({ placeholder, width }) => {
  return (
    <SearchBox width={width}>
      <SearchIcon name="ios-search" size={20} color="#000" />
      <Input>{placeholder}</Input>
    </SearchBox>
  )
}

SearchInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  width: PropTypes.number,
}

export default SearchInput
