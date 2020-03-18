import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.View`
  display: flex;
  border-bottom-width: 1px;
  margin: 5px;
`
const MenuDetail = styled.View`
  display: flex;
  flex-direction: row;
`
const Quantity = styled.Text`
  font-weight: 700;
`
const MenuName = styled.Text``
const Price = styled.Text``
const Description = styled.Text``

const Ordered = ({ data }) => {
  return (
    <Container>
      <MenuDetail>
        <Quantity>{data.quantity}&times;</Quantity>
        <MenuName>{data.name}</MenuName>
        <Price>{data.totalPrice}</Price>
      </MenuDetail>
      <Description>{data.special}</Description>
    </Container>
  )
}

Ordered.propTypes = {
  data: PropTypes.object,
}

export default Ordered
