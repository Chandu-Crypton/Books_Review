const Book = require('../models/Book');




exports.getAllBooks = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;     // Default page = 1
        const limit = parseInt(req.query.limit) || 10;  // Default limit = 10 books per page
        const skip = (page - 1) * limit;                 // Calculate how many books to skip

        const books = await Book.find()
            .skip(skip)
            .limit(limit);

        const totalBooks = await Book.countDocuments();  // Total number of books

        res.json({
            totalBooks,
            totalPages: Math.ceil(totalBooks / limit),
            currentPage: page,
            books,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error while fetching books' });
    }
};


exports.getBookById = async (req, res) => {
    const book = await Book.findById(req.params.id);
    res.json(book);
};




