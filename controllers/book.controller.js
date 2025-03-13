import { Book } from "../models/books.model.js"
export const addBook = async(req,res) => {
    try{
        const {name,author} = req.body
        const addBook = new Book({name,author})
        const saveBook = await addBook.save()
        if(!saveBook){
            return res.status(400).json({message: "error occured while saving book"})
        }
        res.status(201).json({message: "Book added successfully", book: saveBook})
    }catch(error){
        console.log("error occured while adding book")
        res.status(500).json({error: "internal server error",errorMessage: error.message})
    }
}

export const getBooks = async(req,res) => {
    try{
        const books = await Book.find()
        if(books.length === 0){
            return res.status(400).json({error: "no books found."})
        }
        res.status(200).json({message: "books found", books})
    }catch(error){
        console.log("error occured while fetching books")
        res.status(500).json({error: "internal server error",errorMessage: error.message})
    }
}

export const deleteBook = async(req,res) => {
    try{
        const {bookId} = req.params
        const findBook = await Book.findByIdAndDelete(bookId)
        if(!findBook){
            return res.json(404).json({message: "book not found"})
        }
        res.status(200).json({message: "Book deleted successfully"})
    }catch(error){
        console.log("error occured while fetching books")
        res.status(500).json({error: "internal server error",errorMessage: error.message})
    }
}

export const updateStatus = async(req,res) => {
    try{
       const {bookId} = req.body
       const findBook = await Book.findById(bookId)
       if(!findBook){
            return res.status(404).json({message: "book not found"})
       }
       const updateBookStatus = await Book.findByIdAndUpdate(bookId, {$set: {status: !findBook.status}},{new : true})
       res.status(200).json({message: "status updated", book: updateBookStatus})
    }catch(error){
        console.log("error occured while fetching books")
        res.status(500).json({error: "internal server error",errorMessage: error.message})
    }
}