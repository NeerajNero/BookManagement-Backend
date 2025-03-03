import { Router } from "express";
import { addBook,getBooks,deleteBook } from "../controllers/book.controller.js";
const router = Router()

router.get('/books', getBooks)
router.post('/addBook', addBook)
router.delete('/deleteBook/:bookId', deleteBook)

export default router