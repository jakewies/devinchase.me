import styled from 'styled-components'
import media from '../../../../utils/media'
import { BLACK } from '../../../../utils/constants'

export const StyledLogo = styled.h1`
  font-size: 2rem;
  flex-shrink: 0;
  margin: 0;
  margin-right: 10px;

  a {
    color: #f7fff7;
    text-decoration: none;
    font-weight: lighter;

    ${media.mobile`
      color: ${BLACK};
    `};
  }
`
