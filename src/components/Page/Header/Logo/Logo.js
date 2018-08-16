import React from 'react'
import Link from 'gatsby-link'
import { StyledLogo } from './styled'

const Logo = ({ active }) =>
  active ? (
    <StyledLogo>
      <Link to="/">Devin Chase</Link>
    </StyledLogo>
  ) : null

export default Logo
