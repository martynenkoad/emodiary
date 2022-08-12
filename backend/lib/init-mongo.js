const mongoose = require('mongoose')

/**
 * Initialize mongo DB and call callback when done.
 * @param app
 * @param whenDone
 */
const initMongo = (app, whenDone) => {
  const mongoUrl = process.env.MONGO_URL
  mongoose.Promise = global.Promise

  mongoose.connect(mongoUrl, { useUnifiedTopology: true })
    .then(() => {
      console.log('Connected to MongoDB: ', mongoUrl)

      if (whenDone) {
        whenDone()
      }
    })
    .catch((err) => { console.error('MongoDB connection error: ', err) })
}

module.exports = initMongo
