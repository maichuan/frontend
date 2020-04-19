import { Notifications } from 'expo'
import * as Permissions from 'expo-permissions'
import * as Location from 'expo-location'

export const getAndSetLocation = async () => {
  let { status } = await Permissions.askAsync(Permissions.LOCATION)
  if (status !== 'granted') {
    return
  }

  if (status === 'granted') {
    return await Location.getCurrentPositionAsync({})
  }
}

export const getAndSetNotificationToken = async () => {
  const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS)
  if (status !== 'granted') {
    // alert('No notification permissions!')
    return
  }

  return await Notifications.getExpoPushTokenAsync()
}
