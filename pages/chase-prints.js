import React from 'react'
import { Page, Prints } from '../src/components'
import prints from '../src/prints.js'

const ChasePrints = () => (
  <Page>
    <Prints prints={prints} />
  </Page>
)

export default ChasePrints
