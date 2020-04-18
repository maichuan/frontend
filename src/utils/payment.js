import Omise from 'omise-react-native'
import { serverClient } from '../api'

export const mockPayment = async totalPrice => {
  const data = await Omise.createToken({
    card: {
      name: 'JACK DOE',
      city: 'Bangkok',
      postal_code: 10320,
      number: '4242424242424242',
      expiration_month: 10,
      expiration_year: 2022,
      security_code: 123,
    },
  })
  return await serverClient.post('/payment', { tokenId: data.id, totalPrice })
}
