import styled from 'styled-components'
import media from '../../../utils/media'
import { NAV_HEIGHT, MOBILE_NAV_WIDTH, NAV_BG } from '../../../utils/constants'

export const StyledHeader = styled.nav`
  font-family: 'Josefin Sans', sans-serif;
  background-color: ${NAV_BG};
  height: ${NAV_HEIGHT}px;

  ${media.mobile`
    z-index: 2;
    height: auto;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    padding-top: 3rem;
    width: ${MOBILE_NAV_WIDTH}px;
    background: #333;
    transition: transform 200ms cubic-bezier(.46, .18, .83, .67);
    transform: ${props =>
      props.mobileNavActive
        ? 'translateX(0)'
        : 'translateX(' + MOBILE_NAV_WIDTH + 'px)'};
  `};
`

export const HeaderInner = styled.div`
  height: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.mobile`
      display: block;
      padding: 0 1rem;
  `};
`

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;

  ${media.mobile`
      display: none;
  `};
`
