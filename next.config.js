const portfolio = require('./portfolio')

module.exports = {
  async exportPathMap() {
    // create static pages for dynamic portfolio routes
    const portfolioPages = portfolio.reduce((accum, curr) => {
      return Object.assign({}, accum, {
        [`/portfolio/${curr.slug}`]: {
          page: '/portfolio/item',
          query: {
            slug: curr.slug
          }
        }
      })
    }, {})

    const pages = {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/portfolio': { page: '/portfolio' }
    }

    return Object.assign({}, pages, portfolioPages)
  }
}
