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
  width: 80px;
  height: 80px;
  border-radius: 1000;
  background-color: ${Constants.tabColor};
  border-color: ${Constants.weakColor};
  border-width: 1.5px;
`
const QrCodeIcon = styled(Icon)`
  font-size: 45px;
  margin: auto;
  color: ${Constants.weakColor};
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
