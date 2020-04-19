import React from 'react'
import { Icon } from 'native-base'
import styled from 'styled-components'
import { Width } from '../../utils/utils'
import PropTypes from 'prop-types'
import constants from '../../utils/constants'

const EditButton = styled.TouchableOpacity`
  width: ${Width};
  border-width: 0.5px;
  border-top-width: ${({ first }) => (first ? '0.5px' : '0')};
  border-color: ${constants.strongColor};
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`
export const EditText = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: ${constants.strongColor};
`
export const RightIcon = styled(Icon)`
  color: ${constants.strongColor};
  padding: 0 10px;
`

const EditInfoView = ({ word, onPress, first }) => {
  return (
    <EditButton first={first} onPress={onPress} activeOpacity={0.8}>
      <EditText>{word}</EditText>
      <RightIcon name="ios-arrow-forward" type="Ionicons" />
    </EditButton>
  )
}

EditInfoView.propTypes = {
  word: PropTypes.string,
  onPress: PropTypes.func,
  first: PropTypes.bool,
}

export default EditInfoView
