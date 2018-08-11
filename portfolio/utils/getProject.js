const portfolio = require('../index.js')

export default slug => portfolio.find(item => item.slug === slug)
