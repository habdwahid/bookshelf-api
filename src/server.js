import cors from 'cors'
import express from 'express'
import routes from './routes.js'

// Server configuration
const app = express()
const PORT = process.env.PORT || 9000
const HOST = process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0'

// CORS configuration
app.use(cors({
  origin: '*'
}))

// Content-Type configuration using JSON
app.use(express.json())

// Routes configuration
app.use('/', routes)

// Server start
app.listen(PORT, () => console.log(`Server is running at http://${HOST}:${PORT}`))