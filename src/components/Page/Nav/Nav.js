import React from 'react'
import Link from 'next/link'
import { Subscribe } from 'unstated'
import NavContainer from '../../../containers/NavContainer'
import Logo from '../Logo/Logo'
import { StyledNav, NavInner, NavLinks, NavLink, LeftContainer } from './styled'

const Nav = () => (
  <Subscribe to={[NavContainer]}>
    {nav => (
      <StyledNav mobileNavActive={nav.state.mobileNavActive}>
        <NavInner>
          <LeftContainer>
            <Logo />
          </LeftContainer>
          <NavLinks>
            <Link href="/about" prefetch>
              <NavLink>About</NavLink>
            </Link>
            <NavLink target="_blank" href="https://www.etsy.com/shop/chaseprints">
              Chase Prints
            </NavLink>
            <Link href="/work" prefetch>
              <NavLink>Work</NavLink>
            </Link>
          </NavLinks>
        </NavInner>
      </StyledNav>
    )}
  </Subscribe>
)

export default Nav
