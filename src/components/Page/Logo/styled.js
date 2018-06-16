import styled from 'styled-components'
import { media } from '../../../utils'
import { BLACK } from '../../../constants'

export const StyledLogo = styled.h1`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 2rem;
  flex-shrink: 0;
  margin-right: 10px;

  a {
    color: #f7fff7;
    text-decoration: none;
    font-weight: lighter;

    ${media.mobileNav`
      color: ${BLACK};
    `};
  }
`
