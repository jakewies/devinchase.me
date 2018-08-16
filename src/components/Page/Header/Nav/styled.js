import styled from 'styled-components'
import Link from 'gatsby-link'
import media from '../../../../utils/media'

export const StyledNav = styled.div`
  width: 100%;
  max-width: 20rem;
  display: flex;
  justify-content: space-between;

  ${media.mobile`
    flex-direction: column;
  `};
`

export const GatsbyLink = styled(Link)`
  color: #f7fff7;
  text-decoration: none;
  text-transform: uppercase;
  padding: 0 10px;
  cursor: pointer;
  opacity: 0.75;

  &:first-child {
    padding-left: 0px;
  }

  &:last-child {
    padding-right: 0px;
  }

  ${media.mobile`
    padding: 0;
    margin-bottom: 2rem;
    padding-left: 1rem;

    &:first-child {
      padding-left: 1rem;
    }
  `};
`

export const OuterLink = GatsbyLink.withComponent('a')
