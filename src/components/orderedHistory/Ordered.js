import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Constants from '../../utils/constants'

const Container = styled.View`
  display: flex;
  border-bottom-width: 1px;
  border-color: #e1e1e1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const QuantityView = styled.View`
  width: 20%;
  padding: 10px;
`
const FoodView = styled.View`
  width: 60%;
  padding: 10px 0;
  display: flex;
`
const PriceView = styled.View`
  width: 20%;
  margin: auto;
  padding-right: 8px;
`
const Quantity = styled.Text`
  border-width: 2px;
  border-color: ${Constants.tabColor};
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  color: ${Constants.tabColor};
`
const MenuName = styled.Text`
  font-size: 18px;
  font-weight: 500;
  padding-bottom: 5px;
  color: ${Constants.strongColor};
`
const Price = styled.Text`
  font-size: 18px;
  text-align: right;
  color: ${Constants.strongColor};
`
const Description = styled.Text`
  font-size: 12px;
  font-weight: 200;
  color: ${Constants.strongColor};
`

const Ordered = ({ data }) => {
  return (
    <Container>
      <QuantityView>
        <Quantity>{data.quantity}&times;</Quantity>
      </QuantityView>
      <FoodView>
        <MenuName>{data.name}</MenuName>
        {data.special !== '' && <Description>{data.special}</Description>}
      </FoodView>
      <PriceView>
        <Price>{data.totalPrice + '.-'}</Price>
      </PriceView>
    </Container>
  )
}

Ordered.propTypes = {
  data: PropTypes.object,
}

export default Ordered
