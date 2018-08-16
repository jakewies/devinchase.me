import React, { Component } from 'react'
import { Grid, Cell } from 'flexomatic'
import PortfolioItem from '../../components/PortfolioItem'
import { Container } from '../../styles/pages/portfolio.styled'

const Portfolio = ({ data }) => {
  const items = data.allMarkdownRemark.edges
  return (
    <Container>
      <Grid>
        {items.map((item, i) => (
          <Cell width={[1, 1 / 2, 1 / 3]} key={i}>
            <PortfolioItem key={i} {...item.node} />
          </Cell>
        ))}
      </Grid>
    </Container>
  )
}

export default Portfolio

export const query = graphql`
  query PortfolioQuery {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            thumbnail {
              publicURL
              childImageSharp {
                sizes(maxWidth: 1000) {
                  ...GatsbyImageSharpSizes_noBase64
                }
              }
            }
          }
        }
      }
    }
  }
`
