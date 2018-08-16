import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Page from '../components/Page/Page'
import '../styles/layouts/index.css'

const Layout = ({ children, data, location }) => (
  <Page route={location.pathname}>
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
      <meta charSet="UTF-8" />
      <meta name="language" content="en" />
      <meta name="description" content="Interior Designer and Artist." />
      <meta
        name="keywords"
        content="interior design, Artist, PhotoShop, Illustrator"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
    </Helmet>
    {children()}
  </Page>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
