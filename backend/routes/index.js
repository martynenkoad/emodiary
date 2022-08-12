const userRoutes = require('./user')
const noteRoutes = require('./note')

const initRoutes = (app) => {
  app.use('/api/user', userRoutes)
  app.use('/api/note', noteRoutes)
}

module.exports = initRoutes
