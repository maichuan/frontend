import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Component = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  border-width: 1px;
  border-color: #adadad;
  height: 100px;
  align-items: center;
`
const Name = styled.Text`
  font-size: 20px;
`

const ProcessMenu = ({ data }) => {
  return (
    <Component>
      <Name>{data.name}</Name>
    </Component>
  )
}

ProcessMenu.propTypes = {
  data: PropTypes.object,
}

export default ProcessMenu
