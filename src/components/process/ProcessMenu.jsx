import React from 'react'
import { Alert, Text } from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Status from './Status'
import { Width } from '../../utils/utils'

const Component = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-width: 1px;
  border-color: #adadad;
  border-radius: 10px;
  height: 100px;
  align-items: center;
  margin: 5px;
  background-color: #fff;
`
const Name = styled.Text`
  padding: 0 10px;
  font-size: 20px;
`
const StatusView = styled.View`
  border-top-right-radius: 10px;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const CancelButton = styled.TouchableOpacity`
  background-color: ${({ disabled }) => (disabled ? 'gray' : 'red')};
  border-bottom-right-radius: 10px;
  padding: 5px;
  align-items: center;
  justify-content: center;
  height: 50%;
`
const Cancel = styled.Text`
  font-weight: 600;
  color: #fff;
`
const RightView = styled.View`
  width: ${Width / 3.5};
  border-left-width: 0.5px;
  border-left-color: #aaaaaa;
`

const ProcessMenu = ({ data }) => {
  return (
    <Component>
      <Name>{data.name}</Name>
      <RightView>
        <StatusView>
          <Status status={data.status} queue={data.queue} />
        </StatusView>
        <CancelButton
          disabled={data.status !== 0}
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
      </RightView>
    </Component>
  )
}

ProcessMenu.propTypes = {
  data: PropTypes.object,
}

export default ProcessMenu
