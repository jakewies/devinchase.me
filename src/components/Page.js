import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'
import Footer from './Footer'

const Page = ({ children }) => (
  <Wrapper>
    <Nav />
    {children}
    <Footer />
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export default Page
