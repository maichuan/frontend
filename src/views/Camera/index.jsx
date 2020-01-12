import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, Button } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'
import PropTypes from 'prop-types'

import { CameraView } from './styled'
import { validateQrCode } from '../../utils/validators'

const Camera = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null)
  const [scanned, setScanned] = useState(false)

  const checkAndSetPermission = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync()
    setHasPermission(status === 'granted')
  }

  useEffect(() => {
    checkAndSetPermission()
  }, [])

  const handleBarCodeScanned = ({ data }) => {
    try {
      const dataToJson = JSON.parse(data)
      if (validateQrCode(dataToJson)) {
        setScanned(true)
        navigation.navigate('Restaurant', dataToJson)
      }
    } catch (e) {
      // skip
    }
  }

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>
  }

  return (
    <CameraView>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned && (
        <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />
      )}
      <Button
        title={'Back to Home'}
        onPress={() => navigation.navigate('Home')}
      />
    </CameraView>
  )
}

Camera.propTypes = {
  navigation: PropTypes.object,
}

export default Camera
