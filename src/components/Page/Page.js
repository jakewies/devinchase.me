import React from 'react'
import { Provider } from 'unstated'
import Burger from './Burger/Burger'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Wrapper } from './styled'

const Page = ({ children, route }) => {
  const logoActive = route !== '/'
  return (
    <Provider>
      <Wrapper>
        <Burger logoActive={logoActive} />
        <Header logoActive={logoActive} />
        {children}
        <Footer />
      </Wrapper>
    </Provider>
  ) 
}

export default Page
