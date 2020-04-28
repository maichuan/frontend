import React, { useContext } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { HomeContext } from '../../utils/context'
import { observer, inject } from 'mobx-react'
import { compose } from 'recompose'
import { getDistance } from 'geolib'
import Constants from '../../utils/constants'
import { serverClient } from '../../api'

const RestaurantImage = styled.Image`
  height: 200px;
  width: 100%;
  flex: 1;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`
const Component = styled.TouchableOpacity`
  flex: 1;
  border-radius: 10px;
  height: 250px;
  margin: 10px;
`
export const TextImage = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 5px 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-width: 1px;
  border-top-width: 0;
  border-color: ${Constants.strongColor};
`
export const DataText = styled.Text`
  color: ${Constants.strongColor};
`

const RestaurantCard = ({ data, authStore }) => {
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
    <Component onPress={changePage}>
      <RestaurantImage
        source={
          data.imgURL
            ? { uri: data.imgURL }
            : require('../../../assets/no_image.png')
        }
      />
      <TextImage>
        <DataText>{data.name}</DataText>
        <DataText>
          {getDistance(authStore.curLocation, {
            latitude: data.lat,
            longitude: data.long,
          }) /
            1000 +
            ' km'}
        </DataText>
      </TextImage>
    </Component>
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
