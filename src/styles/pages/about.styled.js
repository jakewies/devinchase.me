import styled from 'styled-components'
import media from '../../utils/media'
import { BLACK } from '../../utils/constants'

export const Container = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 34rem;
  margin: 0 auto;
  padding: 2rem;

  ${media.mobile`
    padding: 2rem 1rem;
  `};
`

export const ContainerInner = styled.div`
  p {
    color: ${BLACK};
  }
`

export const AboutHeader = styled.h2`
  color: ${BLACK};
  font-style: italic;
`

export const A = styled.a`
  color: #4c4e51;
  font-style: italic;
`
