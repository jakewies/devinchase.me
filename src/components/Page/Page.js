import React from 'react'
import { Provider } from 'unstated'
import Burger from './Burger/Burger'
import Nav from './Nav/Nav'
import Footer from './Footer/Footer'
import { Wrapper } from './styled'

const Page = ({ children }) => (
  <Provider>
    <Wrapper>
      <Burger />
      <Nav />
      {children}
      <Footer />
    </Wrapper>
  </Provider>
)

export default Page
