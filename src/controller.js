import {nanoid} from 'nanoid'
import {books} from './books.js'

/**
 * Display all books
 * 
 * @returns {JSON} books
 */
const getBooks = (req, res) => {
  const {name, reading, finished} = req.query

  if (name) {
    const searchBooks = books.filter((book) => book.name.toLowerCase().includes(name.toLowerCase()))

    return res.json({
      status: 'success',
      data: {
        books: searchBooks.map((book) => ({
          id: book.id,
          name: book.name,
          publisher: book.publisher
        }))
      }
    })
  }

  if (reading) {
    const readingBooks = books.filter((book) => Number(book.reading) === Number(reading))

    return res.json({
      status: 'success',
      data: {
        books: readingBooks.map((book) => ({
          id: book.id,
          name: book.name,
          publisher: book.publisher
        }))
      }
    })
  }
  
  if (finished) {
    const finishedBooks = books.filter((book) => Number(book.finished) === Number(finished))
    
    return res.json({
      status: 'success',
      data: {
        books: finishedBooks.map((book) => ({
          id: book.id,
          name: book.name,
          publisher: book.publisher
        }))
      }
    })
  }

  return res.json({
    status: 'success',
    data: {
      books: books.map((book) => ({
        id: book.id,
        name: book.name,
        publisher: book.publisher
      }))
    }
  })
}

/**
 * Create or insert a new book
 * 
 * @returns {JSON} books
 */
const createBook = (req, res, next) => {
  const {name, year, author, summary, publisher, pageCount, readPage, reading} = req.body
  const id = nanoid(16)
  const finished = readPage === pageCount ? true : false
  const insertedAt = new Date().toISOString()
  const updatedAt = insertedAt

  // Check if name is empty
  if (!name) return res.status(400).json({status: 'fail', message: 'Gagal menambahkan buku. Mohon isi nama buku'})

  // Check if readPage greater than pageCount
  if (readPage > pageCount) return res.status(400).json({status: 'fail', message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount'})

  // Collect into newBook variable
  const newBook = {id, name, year, author, summary, publisher, pageCount, readPage, finished, reading, insertedAt, updatedAt}

  // Push into books data
  books.push(newBook)

  // Success variable
  const isSuccess = books.filter((book) => book.id === id)

  // Check if book created
  if (isSuccess) {
    return res.status(201).json({
      status: 'success',
      message: 'Buku berhasil ditambahkan',
      data: {
        bookId: id
      }
    })
  }

  // Otherwise return fail
  return res.status(500).json({
    status: 'fail',
    message: 'Internal server error'
  })
}

/**
 * Get book by id
 * 
 * @param {String} id
 * @returns {JSON} book
 */
const getBookById = (req, res) => {
  const {id} = req.params

  const book = books.find((book) => book.id === id)

  // Check if book found
  if (book) {
    return res.json({
      status: 'success',
      data: {book}
    })
  }

  // Otherwise return fail
  return res.status(404).json({
    status: 'fail',
    message: 'Buku tidak ditemukan'
  })
}

/**
 * Update book
 * 
 * @param {String} id
 * @returns {JSON} book
 */
const updateBookById = (req, res) => {
  const {id} = req.params
  const {name, year, author, summary, publisher, pageCount, readPage, reading} = req.body
  const updatedAt = new Date().toISOString()

  // Check if name is empty
  if (!name) return res.status(400).json({status: 'fail', message: 'Gagal memperbarui buku. Mohon isi nama buku'})

  // Check if readPage greater than pageCount
  if (readPage > pageCount) return res.status(400).json({status: 'fail', message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount'})

  // Find book index
  const index = books.findIndex((book) => book.id === id)

  // Check if book found
  if (index !== -1) {
    books[index] = {...books[index], name, year, author, summary, publisher, pageCount, readPage, reading, updatedAt}

    return res.json({
      status: 'success',
      message: 'Buku berhasil diperbarui'
    })
  }

  // Otherwise return fail
  return res.status(404).json({
    status: 'fail',
    message: 'Gagal memperbarui buku. Id tidak ditemukan'
  })
}

/**
 * Delete book
 * 
 * @param {String} id
 * @returns {JSON} books
 */
const deleteBookById = (req, res) => {
  const {id} = req.params

  // Find book index
  const index = books.findIndex((book) => book.id === id)

  // Check if book found
  if (index !== -1) {
    books.splice(index, 1)

    return res.json({
      status: 'success',
      message: 'Buku berhasil dihapus'
    })
  }

  // Otherwise return fail
  return res.status(404).json({
    status: 'fail',
    message: 'Buku gagal dihapus. Id tidak ditemukan'
  })
}

export {getBooks, createBook, getBookById, updateBookById, deleteBookById}