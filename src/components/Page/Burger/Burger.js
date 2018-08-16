import React from 'react'
import { Subscribe } from 'unstated'
import Logo from '../Header/Logo/Logo'
import NavContainer from '../../../containers/NavContainer'
import { BurgerContainer, StyledBurger } from './styled'
import { BLACK } from '../../../utils/constants'

const Burger = ({ logoActive }) => (
  <Subscribe to={[NavContainer]}>
    {nav => (
      <BurgerContainer>
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
        <Logo active={logoActive} />
      </BurgerContainer>
    )}
  </Subscribe>
)

export default Burger
