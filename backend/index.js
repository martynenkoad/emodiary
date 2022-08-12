// require dotenv
require('dotenv').config()

// require modules
const express = require('express')
const cors = require('cors')

const initRoutes = require('./routes/index')
const initMongo = require('./lib/init-mongo')

// create express app
const app = express()

// parse json
app.use(express.json())

// use cors to deal with cross-origin policy
app.use(
  cors({
    origin: '*'
  })
)

// Log requests
app.use((req, res, next) => {
  console.log(req.method, req.path)
  next()
})

/**
 * Start listening on the configured port.
 */
const startServer = () => {
  const appPort = process.env.PORT || 4000
  app.listen(appPort, () => {
    console.log('The server is running on port:', appPort)
  })
}

initRoutes(app)
initMongo(app, startServer)
