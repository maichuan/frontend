import React, { useContext } from 'react'
import { Image } from 'react-native'
import { Text, Card, Left, Right, CardItem } from 'native-base'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { HomeContext } from '../../utils/context'

const RestaurantImage = styled.Image`
  height: 200px;
  flex: 1;
`

const RestaurantCard = ({ data }) => {
  const { navigation } = useContext(HomeContext)

  const changePage = () => {
    navigation.navigate('Restaurant', {
      id: 12345,
      table: 0,
    })
  }
  return (
    <Card>
      <CardItem cardBody button onPress={() => changePage()}>
        <RestaurantImage source={require('../../../assets/hamburger.jpg')} />
      </CardItem>
      <CardItem button onPress={() => changePage()}>
        <Left>
          <Text>{data.name}</Text>
        </Left>
        <Right>
          <Text>{data.distance}</Text>
        </Right>
      </CardItem>
    </Card>
  )
}

RestaurantCard.propTypes = {
  data: PropTypes.object,
}
RestaurantCard.defaultProps = {
  data: {
    name: 'เบอร์เกอร์ท่านก้อง',
    distance: 10,
  },
}

export default RestaurantCard
