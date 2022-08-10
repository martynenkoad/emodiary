// requires
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')


const Schema = mongoose.Schema

// user schema
const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    login: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})


function onlyLetters(string) {
    return /^[a-zA-Z]+$/.test(string);
}

function replaceSpaces(string) {
    return string.replace(/\s+/g, '')
}

// static method for signup
userSchema.statics.signup = async function(firstName, lastName, login, password) {

    // check if input is correct
    const nameWoutSpaces = await replaceSpaces(firstName)
    const surnameWoutSpaces = await replaceSpaces(lastName)
    const loginWoutSpaces = await replaceSpaces(login)

    if(!firstName || !lastName || !login || !password) {
        throw Error('Oops! All fields must be filled :(')
    }

    if (!onlyLetters(nameWoutSpaces) || !onlyLetters(surnameWoutSpaces) || nameWoutSpaces.length < 2 || surnameWoutSpaces.length < 2) {
        throw Error('Does not look like your real name....')
    }

    if (!validator.isStrongPassword(password)) {
        throw Error('Oh no! I know you love your password but please type the strong one (e.q.: ABCabc123!#). Take care of your security! <3')
    }
    if(loginWoutSpaces.length < 6) {
        throw Error('Friend you deserve more letters in your login!')
    }
    const exists = await this.findOne({ login: loginWoutSpaces })

    if (exists) {
        throw Error('Oops! Login is already in use :(')
    }
    
    // generate salt
    const salt = await bcrypt.genSalt(10)
 
    // hash password
    const hash = await bcrypt.hash(password, salt)
    
    // create the user
    const user = await this.create({ firstName: nameWoutSpaces, lastName: surnameWoutSpaces, login: loginWoutSpaces, password: hash })

    return user
}

// static method for login
userSchema.statics.logIn = async function(login, password) {
    if(!login || !password) {
        throw Error("Oh no what happened? Don't you want to fill all the fields my friend? :(")
    }
    
    // find user in db
    const user = await this.findOne({ login })

    if(!user) {
        throw Error("Ooops you are not the emo yet! :( Don't worry - you can sign up any time you want! <3")
    }
    
    // check if password matches
    const match = await bcrypt.compare(password, user.password)

    if(!match) {
        throw Error('Are you hacker or just forgot the password? Or both, my emo-friend? o_0')
    }

    return user 
}

module.exports = mongoose.model('User', userSchema)
