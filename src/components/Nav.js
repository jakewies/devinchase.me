import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Nav = () => (
  <StyledNav>
    <NavInner>
      <NavLinks>
        <NavLink target="_blank" href="https://www.behance.net/devinchase">
          Behance
        </NavLink>
        <NavLink target="_blank" href="https://www.instagram.com/vitamin_ddd">
          Instagram
        </NavLink>
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
  height: 25vh;
`

const NavInner = styled.div`
  height: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1rem;
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
`

export default Nav
