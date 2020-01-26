import styled from 'styled-components'

export const SafeView = styled.SafeAreaView`
  flex: ${({ bottom }) => (bottom ? 0 : 1)};
  background-color: ${({ color }) => (color ? color : 'transparent')};
`
