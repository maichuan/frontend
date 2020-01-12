import React, { useContext } from 'react'
import { Image } from 'react-native'
import { Text, Card, Left, Right, CardItem } from 'native-base'
import PropTypes from 'prop-types'
import { HomeContext } from '../../utils/context'

const RestaurantCard = () => {
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
        <Image
          source={require('../../../assets/hamburger.jpg')}
          style={{ height: 200, width: null, flex: 1 }}
        />
      </CardItem>
      <CardItem button onPress={() => changePage()}>
        <Left>
          <Text>เบอร์เกอร์ท่านก้อง</Text>
        </Left>

        <Right>
          <Text>อร่อย</Text>
        </Right>
      </CardItem>
    </Card>
  )
}

RestaurantCard.propTypes = {
  data: PropTypes.object,
}

export default RestaurantCard
