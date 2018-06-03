import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { media } from '../utils'
import { NAV_HEIGHT } from '../constants'

const Nav = () => (
  <StyledNav>
    <NavInner>
      <NavLinks>
        <Link href="/">
          <NavLink>Home</NavLink>
        </Link>
        <Link href="/about">
          <NavLink>About</NavLink>
        </Link>
        <NavLink target="_blank" href="https://www.etsy.com/shop/chaseprints">
          Chase Prints
        </NavLink>
        <Link href="/work">
          <NavLink>Work</NavLink>
        </Link>
      </NavLinks>
    </NavInner>
  </StyledNav>
)

const StyledNav = styled.nav`
  background-color: #82a7a6;
  height: ${NAV_HEIGHT}px;
`

const NavInner = styled.div`
  height: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const NavLinks = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: space-between;
`

const NavLink = styled.a`
  color: #f7fff7;
  text-decoration: none;
  text-transform: uppercase;
  padding: 0 10px;
  cursor: pointer;

  &:first-child {
    padding-left: 0px;
  }

  &:last-child {
    padding-right: 0px;
  }

  ${media.mobile`
    font-size: 12px;
  `};
`

export default Nav
