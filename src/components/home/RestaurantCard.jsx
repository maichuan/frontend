import React, { useContext } from 'react'
import { Text, Card, Left, Right, CardItem } from 'native-base'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { HomeContext } from '../../utils/context'

import { observer, inject } from 'mobx-react'
import { compose } from 'recompose'

import { getDistance } from 'geolib'

const RestaurantImage = styled.Image`
  height: 200px;
  flex: 1;
`

const RestaurantCard = ({ data, authStore }) => {
  const { navigation } = useContext(HomeContext)

  const changePage = () => {
    navigation.navigate('Restaurant', {
      ...data,
      table: 0,
    })
  }
  return (
    <Card>
      <CardItem cardBody button onPress={() => changePage()}>
        <RestaurantImage
          source={
            data.imgURL
              ? { uri: data.imgURL }
              : require('../../../assets/hamburger.jpg')
          }
        />
      </CardItem>
      <CardItem button onPress={() => changePage()}>
        <Left>
          <Text>{data.name}</Text>
        </Left>
        <Right>
          <Text>
            {getDistance(authStore.curLocation, {
              latitude: data.lat,
              longitude: data.long,
            }) /
              1000 +
              ' km'}
          </Text>
        </Right>
      </CardItem>
    </Card>
  )
}

RestaurantCard.propTypes = {
  data: PropTypes.object,
  authStore: PropTypes.object,
}
RestaurantCard.defaultProps = {
  data: {
    name: 'เบอร์เกอร์ท่านก้อง',
    distance: 10,
    lat: 13,
    long: 100,
  },
}

export default compose(
  inject(({ rootStore }) => ({
    authStore: rootStore.authStore,
  })),
  observer,
)(RestaurantCard)
