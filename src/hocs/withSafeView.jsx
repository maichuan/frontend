import React from 'react'
import { SafeView } from '../components/common/styled'

const withSafeView = Component => {
  return class extends React.Component {
    render() {
      return (
        <SafeView>
          <Component {...this.props} />
        </SafeView>
      )
    }
  }
}

export default withSafeView
