// require jsonwebtoken & user model
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

// create token
const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' })
}


// sign up user controller
const signupUser = async (req, res) => {

    const { firstName, lastName, login, password } = req.body

    try {
        // try to sign up user & create token for them
        const user = await User.signup(firstName, lastName, login, password)

        const token = createToken(user._id) 

        res.status(200).json({firstName: user.firstName, lastName: user.lastName, login: user.login, password: user.password, token})
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// log in user controller
const loginUser = async (req, res) => {
    const { login, password } = req.body

    try {
        // try to login user & create token for them
        const user = await User.logIn(login, password)

        const token = createToken(user._id)

        res.status(200).json({firstName: user.firstName, lastName: user.lastName, login:user.login, password:user.password, token})
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

module.exports = {
    signupUser, 
    loginUser
}