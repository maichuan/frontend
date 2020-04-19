import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { CreditCardInput } from 'react-native-credit-card-input'

import { observer, inject } from 'mobx-react'
import { compose } from 'recompose'

import { Container, Submit, SubmitText, ButtonView } from './styled'

const Payment = ({ navigation, authStore }) => {
  const [credit, setCredit] = useState()

  const handleSubmitForm = () => {
    if (credit) {
      console.log(
        credit.values,
        // credit.value.expiry,
        // credit.value.number,
        // credit.value.type,
        // credit.value.name,
      )
    }
  }

  return (
    <Container>
      <CreditCardInput onChange={setCredit} requiresName allowScroll />
      <ButtonView>
        <Submit onPress={handleSubmitForm}>
          <SubmitText>Submit</SubmitText>
        </Submit>
      </ButtonView>
    </Container>
  )
}

Payment.propTypes = {
  navigation: PropTypes.object,
  authStore: PropTypes.object,
}

Payment.navigationOptions = {
  headerTitle: 'Payment info',
}

export default compose(
  inject(({ rootStore }) => ({
    authStore: rootStore.authStore,
  })),
  observer,
)(Payment)
