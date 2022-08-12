// require express, controllers & middleware
const express = require('express')
const {
  getNotes,
  getNote,
  createNote,
  deleteNote,
  updateNote
} = require('../controllers/noteController')
const useAuth = require('../middleware/useAuth')

const router = express.Router()

// check if the user is authorized
router.use(useAuth)

// note routes
router.get('/', getNotes)
router.get('/:id', getNote)
router.post('/', createNote)
router.delete('/:id', deleteNote)
router.patch('/:id', updateNote)

module.exports = router
