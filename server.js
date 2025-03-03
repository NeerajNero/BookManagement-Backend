import express from 'express'
import dotenv from 'dotenv'
import { initializeDatabase } from './db.connect/db.connect.js'
import bookRoutes from './routes/book.routes.js'

const app = express()
dotenv.config()

initializeDatabase()

app.use(express.json())

const PORT = process.env.PORT

app.use('/books', bookRoutes)

app.listen(PORT, () => {
    console.log("Server is running on PORT:",PORT)
})