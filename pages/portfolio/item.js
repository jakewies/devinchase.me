import React, { Component } from 'react'
import styled from 'styled-components'
import { Page } from '../../src/components'
import getProject from '../../portfolio/utils/getProject'

class PortfolioItem extends Component {
  static async getInitialProps({ query }) {
    const data = await getProject(query.slug)
    return { data }
  }

  render() {
    const { data } = this.props
    return (
      <Page>
        <Container>
          <h1>{data.slug}</h1>
        </Container>
      </Page>
    )
  }
}

const Container = styled.div`
  flex-grow: 1;
`

export default PortfolioItem
