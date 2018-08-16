import styled from 'styled-components'
import media from '../../../utils/media'

export const BurgerContainer = styled.div`
  display: none;

  ${media.mobile`
    display: flex;
    align-items: center;
    padding: 2rem 1rem;
  `};
`

export const StyledBurger = styled.div`
  margin-right: 1rem;
  cursor: pointer;
`
