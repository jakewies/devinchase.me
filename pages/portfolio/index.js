import React, { Component } from 'react'
import dynamic from 'next/dynamic'
import styled from 'styled-components'
import { Grid, Cell } from 'flexomatic'
import { Page, Thumbnail } from '../../src/components'

class Portfolio extends Component {
  static async getInitialProps() {
    const portfolio = await import('../../portfolio')
    return { portfolio }
  }

  render() {
    const { portfolio } = this.props
    return (
      <Page>
        <Container>
          <Grid>
            {portfolio.map(p => <PortfolioItem key={p.id} data={p} />)}
          </Grid>
        </Container>
      </Page>
    )
  }
}

const PortfolioItem = ({ data }) => (
  <Cell width={[1, 1 / 2, 1 / 3]}>
    <Thumbnail {...data} />
  </Cell>
)

const Container = styled.div`
  flex-grow: 1;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 4rem 2rem;
`

export default Portfolio
