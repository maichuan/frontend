import React from 'react'
import { View, Icon } from 'native-base'
import styled from 'styled-components'
import Constants from '../../utils/constants'

const BottomTab = styled(View)`
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  bottom: 0px;
  /* margin-bottom: 7px; */
`
const OpenQrButton = styled(View)`
  width: 90px;
  height: 90px;
  border-radius: 1000;
  background-color: ${Constants.tabColor};
  border-width: 3px;
`
const QrCodeIcon = styled(Icon)`
  font-size: 50px;
  margin: auto;
  color: #fff;
`

const QrCodeButton = () => {
  return (
    <BottomTab>
      <OpenQrButton>
        <QrCodeIcon type="AntDesign" name="qrcode" />
      </OpenQrButton>
    </BottomTab>
  )
}

export default QrCodeButton
