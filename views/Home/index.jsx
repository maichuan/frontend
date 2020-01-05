import React from 'react'
import { Text, Button, Alert } from 'react-native'
import { observer, inject } from 'mobx-react'
import { compose } from 'recompose'
import { Container } from './styled'

const Home = ({ exampleStore }) => {
  return (
    <Container>
      <Text>Open up App.js to start working on your app!!!</Text>
      <Text>{exampleStore.test || '555'}</Text>
      <Button title="Press me" onPress={() => exampleStore.testFunc()} />
    </Container>
  )
}

export default compose(inject('exampleStore'), observer)(Home)
