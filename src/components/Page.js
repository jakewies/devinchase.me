import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'

const Page = ({ children }) => (
  <FlexContainer>
    <Nav />
    <Main>{children}</Main>
  </FlexContainer>
)

const FlexContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column-reverse;
`

const Main = styled.main`
  height: 75vh;
`

export default Page
