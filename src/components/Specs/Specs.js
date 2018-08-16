import React from 'react'
import { StyledSpecs, Spec, Key, Value } from './styled'

const keys = {
  sqft: 'sq. ft.',
}

const Specs = ({ data }) => (
  <StyledSpecs>
    {Object.keys(data).map((spec, i) => (
      <Spec key={i}>
        <Key>{keys[spec] ? keys[spec] : spec}</Key>
        <Value>{data[spec]}</Value>
      </Spec>
    ))}
  </StyledSpecs>
)

export default Specs
