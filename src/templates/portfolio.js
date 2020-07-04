import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Gallery from '../components/Gallery/Gallery'
import Specs from '../components/Specs/Specs'
import Tags from '../components/Tags/Tags'
import {
  GalleryContainer,
  Container,
  Header,
} from '../styles/templates/portfolio.styled'

const PortfolioTemplate = ({ data }) => {
  const item = data.markdownRemark
  const images = data.allFile.edges
  return (
    <Container>
      <Header>
        <Link to="/portfolio">{item.frontmatter.title}</Link>
      </Header>
      <Specs data={item.frontmatter.specs} />
      <Gallery
        images={images.map((img, i) => (
          <Img key={i} sizes={img.node.childImageSharp.sizes} />
        ))}
      />
      <div dangerouslySetInnerHTML={{ __html: item.html }} />
      <Tags items={item.frontmatter.tags} />
    </Container>
  )
}

export default PortfolioTemplate

export const query = graphql`
  query PortfolioItemQuery($slug: String!, $gallery: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tags
        specs {
          client
          location
          sqft
          completed
          specialty
        }
      }
    }
    allFile(filter: { relativeDirectory: { eq: $gallery } }) {
      edges {
        node {
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
`
