import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        required: true,
        default: false
    }
})

export const Book = mongoose.model('Book', bookSchema, 'booksOfContext')