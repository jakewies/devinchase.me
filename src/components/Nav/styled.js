import styled from 'styled-components'
import { media } from '../../utils'
import { NAV_HEIGHT, MOBILE_NAV_WIDTH } from '../../constants'

export const StyledNav = styled.nav`
  background-color: #82a7a6;
  height: ${NAV_HEIGHT}px;
`

export const NavInner = styled.div`
  height: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.mobile`
    padding: 0 1rem;
  `};
`

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`

export const BurgerContainer = styled.div`
  display: none;
  margin-right: 2rem;
  cursor: pointer;

  ${media.mobileNav`
    display: block;
  `};
`

export const Logo = styled.h1`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 2rem;
  flex-shrink: 0;
  margin-right: 10px;

  a {
    color: #f7fff7;
    text-decoration: none;
    font-weight: lighter;
  }
`

export const NavLinks = styled.div`
  width: 100%;
  max-width: 20rem;
  display: flex;
  justify-content: space-between;
  font-family: 'Josefin Sans', sans-serif;

  ${media.mobileNav`
    flex-direction: column;
    justify-content: flex-start;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    padding-top: 3rem;
    width: ${MOBILE_NAV_WIDTH}px;
    background: #333;
    transition: transform 200ms cubic-bezier(.46, .18, .83, .67);
    transform: ${props =>
      props.mobileNavActive ? 'translateX(0)' : 'translateX(' + MOBILE_NAV_WIDTH + 'px)'};
  `};
`

export const NavLink = styled.a`
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

  ${media.mobileNav`
    font-size: 16px;
    padding: 0;
    margin-bottom: 2rem;
    padding-left: 1rem;

    &:first-child {
      padding-left: 1rem;
    }
  `};
`
