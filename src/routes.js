import express from 'express'
import {createBook, deleteBookById, getBookById, getBooks, updateBookById} from './controller.js'

// Router initialization
const router = express.Router()

// Display books route
router.get('/books', getBooks)

// Create book route
router.post('/books', createBook)

// Get book by id route
router.get('/books/:id', getBookById)

// Update book by id route
router.put('/books/:id', updateBookById)

// Delete book route
router.delete('/books/:id', deleteBookById)

export default router