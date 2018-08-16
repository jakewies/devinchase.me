import React from 'react'
import { StyledSpecs, Spec, Key, Value } from './styled'

const Specs = ({ data }) => (
  <StyledSpecs>
    {Object.keys(data).map((spec, i) => (
      <Spec key={i}>
        <Key>{spec}</Key>
        <Value>{data[spec]}</Value>
      </Spec>
    ))}
  </StyledSpecs>
)

export default Specs
