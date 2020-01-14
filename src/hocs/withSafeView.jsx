import React from 'react'
import { SafeView } from '../components/common/styled'

const withSafeView = Component => {
  return props => (
    <SafeView {...props}>
      <Component {...props} />
    </SafeView>
  )
}

export default withSafeView
