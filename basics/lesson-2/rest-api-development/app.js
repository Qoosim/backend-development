const express = require('express');
const app = express()
const PORT = 3000

// Middleware
app.use(express.json())

const books = [
    {
        id: 1,
        title: "Book 1"
    },
    {
        id: 2,
        title: "Book 2"
    },
    {
        id: 3,
        title: "Book 3"
    }
]

// Welcome route
app.get('/', (req, res) => {
    res.json({
        message: "Welcome to the bookstore apis"
    })
})

// Fetch all the books
app.get('/get-books', (req, res) => {
    res.json(books)
})

// Get single book
app.get('/get-books/:id', (req, res) => {
    const book = books.find((book) => book.id === parseInt(req.params.id))
    if (!book) {
        return res.status(404).json({
            message: "Book not found. Try with diff book id"
        })
    } else {
        res.status(200).json(book)
    }
})

// Adding new book
app.post('/add-book', (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: `Book ${books.length + 1}`
    } 
    books.push(newBook)
    res.status(201).json({
        data: newBook,
        message: "A new book was added successfully."
    })
})

// Update a book
app.put('/update/:id', (req, res) => {
    const currentBook = books.find((book) => book.id === parseInt(req.params.id))
    if (!currentBook) {
        return res.status(404).json({
            message: "Book ID not found. Try again with diff book id"
        })
    } else {
        currentBook.title = req.body.title || currentBook.title
        res.status(200).json({
            data: currentBook,
            message: `Book with ID ${req.params.id} was updated successfully`
        })
    }
})

// Delete a book
app.delete('/delete/:id', (req, res) => {
    const currentBookIndex = books.findIndex((book) => book.id === parseInt(req.params.id))
    if (currentBookIndex !== -1) {
        const deletedBook = books.splice(currentBookIndex, 1);
         res.status(200).json({
            data: deletedBook[0],
            message: "Book deleted successfully"
         })
    } else {
        return res.status(404).json({
            message: "Book not found"
        })
    }
})

app.listen(PORT, () => {
    console.log(`Server is now running on port ${PORT}`);
})