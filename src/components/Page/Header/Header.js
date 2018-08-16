import React from 'react'
import { Subscribe } from 'unstated'
import NavContainer from '../../../containers/NavContainer'
import Logo from './Logo/Logo'
import Nav from './Nav/Nav'
import { StyledHeader, HeaderInner, LeftContainer } from './styled'

const Header = ({ logoActive }) => (
  <Subscribe to={[NavContainer]}>
    {nav => (
      <StyledHeader mobileNavActive={nav.state.mobileNavActive}>
        <HeaderInner>
          <LeftContainer>
            <Logo active={logoActive} />
          </LeftContainer>
          <Nav />
        </HeaderInner>
      </StyledHeader>
    )}
  </Subscribe>
)

export default Header
