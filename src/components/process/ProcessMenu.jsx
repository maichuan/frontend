import React from 'react'
import { Alert, Text } from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Status from './Status'

const Component = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  border-width: 1px;
  border-color: #adadad;
  height: 100px;
  align-items: center;
  margin: 5px;
`
const Name = styled.Text`
  font-size: 20px;
`
const StatusView = styled.View``
const CancelButton = styled.TouchableOpacity`
  background-color: red;
  border-radius: 5px;
  padding: 5px;
  align-items: center;
  justify-content: center;
`
const Cancel = styled.Text`
  font-weight: 600;
  color: #fff;
`

const ProcessMenu = ({ data }) => {
  return (
    <Component>
      <Name>{data.name}</Name>
      <StatusView>
        <Status status={data.status} queue={data.queue} />
      </StatusView>
      <CancelButton
        onPress={() =>
          Alert.alert(
            'Cancel order',
            'Are you sure to cancel this order?',
            [
              {
                text: 'Just press wrong',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {
                text: 'Cancel this order',
                onPress: () => console.log('OK Pressed'),
              },
            ],
            { cancelable: false },
          )
        }
      >
        <Cancel>Cancel</Cancel>
      </CancelButton>
    </Component>
  )
}

ProcessMenu.propTypes = {
  data: PropTypes.object,
}

export default ProcessMenu
