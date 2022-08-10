const Note = require('../models/noteModel')
const mongoose = require('mongoose')

// fetch all notes
const getNotes = async (req, res) => {
    const user_id = req.user._id
    const notes = await Note.find({ user_id }).sort({ createdAt: -1 })

    res.status(200).json(notes)
}

// fetch one note
const getNote = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'My friend are sure that id is correct? :(' })
    } else {
        const note = await Note.findById(id)

        if(!note) {
            return res.status(404).json({ error: 'I guess that the note was lost somewhere....' })
        }

        res.status(200).json(note)
    }
}

// create new note
const createNote = async (req, res) => {
    const { title, note } = req.body

    if(!title && !note) {
        return res.status(400).json({ error: "Do you really want to create an empty (like my life) note? :( " })
    }

    if(!title) {
        return res.status(400).json({ error: 'Your note deserves to have a name....' })
    }

    try {
        const user_id = req.user._id
        const newNote = await Note.create({ title, note, user_id })
        res.status(200).json(newNote)
    } catch (error) {
        res.status(400).json({ error: error.message })
    } 
}

// delete note
const deleteNote = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "I guess you're trying to do something bad...."})
    } else {
        const newNote = await Note.findOneAndDelete({ _id: id })

        if(!newNote) {
            return res.status(404).json({ error: "Can't find this note.... Maybe you've already deleted it? Who knows...." })
        }

        res.status(200).json(newNote)
    }
}

// update note
const updateNote = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "I guess this note was lost somewhere... Or has never existed - like my relationships." })
    } else {
        const temp = await Note.find({ _id: id })
        if(!temp.title) { 
            return res.status(400).json({ error: 'Oops! I think your note deserves to have a name... :(' })
        }
        const newNote = await Note.findOneAndUpdate({ _id: id }, {
            ...req.body
        })

        if(!newNote) {
            return res.status(404).json({ error: "Are you sure it exists? I mean note, not God :>" })
        }

        res.status(200).json(newNote)
    }
}

module.exports = {
    getNotes,
    getNote,
    createNote, 
    deleteNote,
    updateNote
}