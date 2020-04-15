import React from 'react'
import { Alert } from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { SwipeRow } from 'react-native-swipe-list-view'
import { BallIndicator } from 'react-native-indicators'

import Status from './Status'
import { Width } from '../../utils/utils'
import constants from '../../utils/constants'
import { serverClient } from '../../api'

const Component = styled.View`
  display: flex;
  flex-direction: row;
  border-width: 1px;
  border-color: #adadad;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  height: 80px;
  align-items: center;
  margin: 5px;
  background-color: #fff;
`
const Name = styled.Text`
  padding: 0 12px;
  font-size: 18px;
  font-weight: 500;
  width: 75%;
  flex-wrap: wrap;
  color: ${constants.strongColor};
`
const StatusView = styled.View`
  border-top-right-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const CancelButton = styled.TouchableOpacity`
  bottom: 0;
  top: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 80px;
  background-color: ${constants.redColor};
  border-radius: 5px;
`
const Cancel = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #fff;
`
const ProcessStatusView = styled.View`
  width: ${Width / 3.5};
  border-right-width: 0.5px;
  border-right-color: #aaaaaa;
  height: 100%;
  align-items: center;
  justify-content: center;
`
const CancelView = styled.View`
  align-items: center;
  background-color: ${constants.weakColor};
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 10px;
  margin: 6.5px;
`

const ProcessMenu = ({ data, onCancelComplete }) => {
  const cancelOrder = async () => {
    const { status } = await serverClient.put('/order', {
      orderId: data.orderId,
      orderItemId: data.id,
      menuId: data.menuId,
    })
    if (status === 200) {
      onCancelComplete(data.id)
    } else {
      Alert.alert(
        'Cannot cancel this order',
        'Maybe this order is start cooking',
        [
          {
            text: 'Ok',
            // onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
        ],
        { cancelable: false },
      )
    }
  }

  return (
    <SwipeRow
      disableRightSwipe={true}
      disableLeftSwipe={data.status === 1}
      stopRightSwipe={-100}
      rightOpenValue={-80}
    >
      <CancelView>
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
                  onPress: cancelOrder,
                },
              ],
              { cancelable: false },
            )
          }
        >
          <Cancel>Cancel</Cancel>
        </CancelButton>
      </CancelView>
      <Component>
        <ProcessStatusView>
          <StatusView>
            {data.status === 0 ? (
              <Status status={data.status} queue={data.queue} />
            ) : (
              <BallIndicator color={constants.strongColor} />
            )}
          </StatusView>
        </ProcessStatusView>
        <Name>{data.name}</Name>
      </Component>
    </SwipeRow>
  )
}

ProcessMenu.propTypes = {
  data: PropTypes.object,
  onCancelComplete: PropTypes.func,
}

export default ProcessMenu
