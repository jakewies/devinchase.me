import styled from 'styled-components'
import { media } from '../../../utils'

export const Container = styled.div`
  display: none;

  ${media.mobileNav`
    display: flex;
    padding: 2rem 1rem;
  `};
`

export const StyledBurger = styled.div`
  margin-right: 1rem;
  cursor: pointer;
`
