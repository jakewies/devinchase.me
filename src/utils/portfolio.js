const portfolio = require('../../portfolio')

export const getPortfolio = () => portfolio
export const getPortfolioItem = id => portfolio.find(item => item.id === +id)
