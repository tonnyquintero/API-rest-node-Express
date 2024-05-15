const productsRouter = require('./products')
const usersRouter = require('./users')
const categoriesRouter = require('./categories')

function routerApi (app) {
  app.use('/api/products', productsRouter)
  app.use('/api/users', usersRouter)
  app.use('/api/categories', categoriesRouter)
}

module.exports = routerApi
