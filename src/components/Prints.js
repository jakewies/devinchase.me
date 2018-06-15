import React from 'react'
import styled from 'styled-components'
import { Grid, Cell } from 'flexomatic'
import prints from '../prints'

const Prints = () => (
  <PrintsContainer>
    <Grid>{prints.map((print, i) => <Print key={i} print={print} />)}</Grid>
  </PrintsContainer>
)

const Print = ({ print }) => (
  <Cell width={[1, 1 / 3]}>
    <Thumbnail src={`/static/images/chase-prints/${print}.jpg`} title={print} />
  </Cell>
)

const PrintsContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`

const Thumbnail = styled.img`
  width: 100%;
`

export default Prints
