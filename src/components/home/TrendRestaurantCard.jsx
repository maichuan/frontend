import React, { useContext } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { HomeContext } from '../../utils/context'

import { observer, inject } from 'mobx-react'
import { compose } from 'recompose'
import { getDistance } from 'geolib'
import Constants from '../../utils/constants'
import { Width } from '../../utils/utils'
import { serverClient } from '../../api'

const RestaurantImage = styled.Image`
  height: ${Width / 2 - 50};
  width: ${Width / 2};
  flex: 1;
  border-radius: 10px;
`
const Component = styled.View`
  height: ${Width / 2};
  width: ${Width / 2};
  margin: 10px;
`
const Item = styled.TouchableOpacity`
  height: ${Width / 2};
  width: ${Width / 2};
`
export const TextImage = styled.View`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  width: 100%;
  padding: 5px 10px;
`
export const Name = styled.Text`
  font-size: 15px;
  color: ${Constants.strongColor};
  font-weight: 600;
`

const TrendRestaurantCard = ({ data, authStore }) => {
  const { navigation } = useContext(HomeContext)

  const changePage = () => {
    serverClient.post('/restaurants/click', {
      userId: authStore.user.id || null,
      resId: data.id,
    })
    navigation.navigate('Restaurant', {
      ...data,
      table: 0,
    })
  }
  return (
    <Component>
      <Item onPress={() => changePage()}>
        <RestaurantImage
          source={
            data.imgURL
              ? { uri: data.imgURL }
              : require('../../../assets/hamburger.jpg')
          }
        />
      </Item>
      <TextImage>
        <Name>
          {data.name.length > 15
            ? data.name.substring(0, 15) + '...'
            : data.name}
        </Name>
        <Name>
          {(
            getDistance(authStore.curLocation, {
              latitude: data.lat,
              longitude: data.long,
            }) / 1000
          )
            .toFixed(2)
            .slice(0, 4) + ' km'}
        </Name>
      </TextImage>
    </Component>
  )
}

TrendRestaurantCard.propTypes = {
  data: PropTypes.object,
  authStore: PropTypes.object,
}
TrendRestaurantCard.defaultProps = {
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
)(TrendRestaurantCard)
