import React from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import { Provider, Subscribe } from 'unstated'
import NavContainer from './NavContainer'
import Burger from './Burger'
import { StyledNav, NavInner, Logo, NavLinks, NavLink, LeftContainer } from './styled'

const Nav = ({ router }) => (
  <Provider>
    <Subscribe to={[NavContainer]}>
      {nav => (
        <StyledNav>
          <NavInner>
            <LeftContainer>
              <Burger handleClick={nav.toggleMobileNav} />
              {router.route !== '/' && (
                <Logo>
                  <Link href="/" prefetch>
                    <a>Devin Chase</a>
                  </Link>
                </Logo>
              )}
            </LeftContainer>
            <NavLinks mobileNavActive={nav.state.mobileNavActive}>
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
  </Provider>
)

export default withRouter(Nav)
