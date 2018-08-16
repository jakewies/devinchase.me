import React from 'react'
import Link from 'gatsby-link'
import Thumbnail from './Thumbnail/Thumbnail'

const PortfolioItem = ({ ...item }) => (
  <Link to={item.fields.slug} style={{ textDecoration: 'none' }}>
    <Thumbnail
      img={item.frontmatter.thumbnail.childImageSharp.sizes}
      title={item.frontmatter.title}
    />
  </Link>
)

export default PortfolioItem
