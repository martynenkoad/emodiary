// require jsonwebtoken & user model
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

// func to check if user is already authorized
const useAuth = async (req, res, next) => {
    const { authorization } = req.headers
    
    // check if user is authorized
    if(!authorization) {
        return res.status(401).json({ error: 'You are not emo yet! But you can always fix it ;>' })
    }
    
    // grab token
    const token = authorization.split(' ')[1]
    try {
        // verifying of token
        const { _id } = jwt.verify(token, process.env.SECRET)

        req.user = await User.findOne({ _id }).select('_id')

        next()
    } catch (error) {
        res.status(401).json({ error: 'Oops! Something went wrong w/ the authentication :(' })
    }
}

module.exports = useAuth