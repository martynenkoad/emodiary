// require express & controllers
const express = require('express')
const {
    signupUser,
    loginUser
} = require('../controllers/userController')

const router = express.Router()

// user routes
router.post('/login', loginUser)

router.post('/signup', signupUser)

module.exports = router