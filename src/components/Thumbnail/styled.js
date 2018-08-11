import styled from 'styled-components'
import { media } from '../../utils'

export const Container = styled.div`
  position: relative;
`

export const StyledThumbnail = styled.img`
  width: 100%;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.6);
  opacity: ${props => (props.visible ? 1 : 0)};
  color: #333;
  transition: opacity 200ms ease-in;
  cursor: pointer;
  font-size: 1.4rem;

  ${media.tablet`
    position: initial;
    background: transparent;
    font-size: 1rem;
    cursor: auto;
    opacity: 1;
    margin: 1rem 0;
  `};
`
