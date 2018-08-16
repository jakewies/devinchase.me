import styled from 'styled-components'
import media from '../../utils/media'

export const Container = styled.div`
  flex-grow: 1;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 4rem 2rem;

  ${media.mobile`
    padding: 2rem 1rem;
  `};
`
