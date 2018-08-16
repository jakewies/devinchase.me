import React from 'react'
import { StyledNav, GatsbyLink, OuterLink } from './styled'

const Nav = () => (
  <StyledNav>
    <GatsbyLink to="/about" activeClassName="nav--active">
      About
    </GatsbyLink>
    <OuterLink target="_blank" href="https://www.etsy.com/shop/chaseprints">
      Chase Prints
    </OuterLink>
    <GatsbyLink to="/portfolio" activeClassName="nav--active">
      Portfolio
    </GatsbyLink>
  </StyledNav>
)

export default Nav
