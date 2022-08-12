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

// routes
app.use('/api/user', userRoutes)
app.use('/api/note', noteRoutes)

// connection string
mongoURI = 'mongodb+srv://nastya:eIudKM89AJO51exB@cluster0.we8xbbc.mongodb.net/?retryWrites=true&w=majority'

// connect to db
mongoose.connect(mongoURI)
    .then(() => {
        console.log('Connected to DB')

        app.listen(4000, () => {
            console.log(`Server listening on port ${process.env.PORT}....`)
        })
    })
    .catch((error) => {
        console.log(error)
    })
