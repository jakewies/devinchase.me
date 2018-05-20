import React from 'react'
import styled from 'styled-components'
import { Grid, Cell } from 'flexomatic'

const Prints = ({ prints }) => (
  <PrintsContainer>
    <Grid>{prints.map((print, i) => <Print key={i} print={print} />)}</Grid>
  </PrintsContainer>
)

const Print = ({ print }) => (
  <Cell width={1 / 3}>
    <Thumbnail src={`/static/images/chase-prints/${print}.jpg`} title={print} />
  </Cell>
)

const PrintsContainer = styled.div`
  width: 100%;
  max-width: 900px;
`

const Thumbnail = styled.img`
  width: 200px;
`
export default Prints
