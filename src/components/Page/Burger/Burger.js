import React from 'react'
import { Subscribe } from 'unstated'
import Logo from '../Logo/Logo'
import NavContainer from '../../../containers/NavContainer'
import { Container, StyledBurger } from './styled'
import { BLACK } from '../../../constants'

const Burger = () => (
  <Subscribe to={[NavContainer]}>
    {nav => (
      <Container>
        <StyledBurger onClick={nav.toggleMobileNav}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke={BLACK}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-menu"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </StyledBurger>
        <Logo />
      </Container>
    )}
  </Subscribe>
)

export default Burger
