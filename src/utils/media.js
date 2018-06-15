import { css } from 'styled-components'

const sizes = {
  mobile: 500,
  mobileNav: 600,
  tablet: 1024
}

const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})

export default media
