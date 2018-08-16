import styled from 'styled-components'
import media from '../../utils/media'
import { BLACK } from '../../utils/constants'

export const Container = styled.div`
  flex-grow: 1;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;

  p {
    color: ${BLACK};
  }

  ${media.mobile`
    padding: 2rem 1rem;
  `};
`

export const Header = styled.h2`
  margin-bottom: 0.8rem;

  a {
    color: ${BLACK};
    text-decoration: none;

    &:before {
      border-style: solid;
      border-width: 2px 2px 0 0;
      content: '';
      display: inline-block;
      height: 8px;
      width: 8px;
      position: relative;
      top: -3px;
      transform: rotate(-135deg);
      margin-right: 3px;
    }
  }
`
