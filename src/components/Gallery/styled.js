import styled from 'styled-components'
import media from '../../utils/media'

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto 2rem;
`

const Chevron = styled.div`
  cursor: pointer;

  &:before {
    border-style: solid;
    border-width: 0.2rem 0.2rem 0 0;
    border-color: #fff;
    opacity: 0.6;
    content: '';
    display: inline-block;
    height: 1rem;
    width: 1rem;
    position: relative;
    top: 0.15em;
    transform: rotate(-45deg);
    vertical-align: top;

    ${media.mobile`
      border-width: 2px 2px 0 0;
      height: 10px;
      width: 10px;
    `};
  }
`

export const Previous = Chevron.extend`
  &:before {
    transform: rotate(-135deg);
    left: 10px;
  }
`

export const Next = Chevron.extend`
  &:before {
    transform: rotate(45deg);
    right: 10px;
  }
`
