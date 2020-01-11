import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'
import PropTypes from 'prop-types'

import { CameraView } from './styled'

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

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true)
    alert(`Bar code with type ${type} and data ${data} has been scanned!`)

    navigation.navigate('Restaurant', {
      id: 12345,
      table: 0,
    })
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
