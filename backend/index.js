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



// mongoose.connect('mongodb://localhost:27017/emo' ,{useNewUrlParser: true})
// const connection = mongoose.connection
// connection.on('connected', () => {
//     console.log('db is connected succesfully')
//     app.listen(4000, () => {
//         console.log('server on 4000')
//     })
// })
// connection.on('disconnected', () => {
//     console.log('db is disconnected succesfully')
// })
// connection.on('error', console.error.bind(console, 'connection error: '))
// // connect to db

const mongoURI = process.env.MONGO_URL



mongoose.Promise = global.Promise;
    mongoose.set('useNewUrlParser', true);
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true)
    
    mongoose.connect(mongoUrl, { useUnifiedTopology: true })
    .then(() => { 
        console.log('Connected to MongoDB: %s \n ', mongoUrl) 
        app.listen(4000, () => {
            console.log('Server listening on mport 4000....')
        })
    }) 
    .catch((err) => { error('MongoDB connection error: %s \n', err); })

// // connect to db
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
