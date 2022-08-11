// require dotenv
require('dotenv').config()

// require modules
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

// require routes
const userRoutes = require('./routes/user')
const noteRoutes = require('./routes/note')

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

app.use((req, res, next) => {
    console.log(req.method, req.path)
    next()
})

// routes
app.use('/api/user', userRoutes)
app.use('/api/note', noteRoutes)

// connection string
//mongoURI = 'mongodb+srv://nastya:eIudKM89AJO51exB@cluster0.we8xbbc.mongodb.net/?retryWrites=true&w=majority'

var mongoUrl = '"mongodb://localhost:27017"'
    var mongoose = require('mongoose')
    // updated 2021
    mongoose.Promise = global.Promise;
    mongoose.set('useNewUrlParser', true);
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true)
    
    mongoose.connect(mongoUrl, { useUnifiedTopology: true })
    .then(() => { log('Connected to MongoDB: %s \n ', mongoUrl) }) 
    .catch((err) => { error('MongoDB connection error: %s \n', err); })


// connect to db
// mongoose.connect(mongoURI)
//     .then(() => {
//         console.log('Connected to DB')

//         app.listen(4000, () => {
//             console.log(`Server listening on port ${process.env.PORT}....`)
//         })
//     })
//     .catch((error) => {
//         console.log(error)
//     })
