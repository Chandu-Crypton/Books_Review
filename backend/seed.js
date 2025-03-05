const mongoose = require('mongoose');
const Book = require('./models/Book');
const dotenv = require('dotenv');


dotenv.config();
const sampleBooks = [
    {
        title: 'The Pragmatic Programmer',
        author: 'Andrew Hunt, David Thomas',
        description: 'A book about software craftsmanship.',
        genre: 'Programming',
        coverImage: 'https://books.google.com/books/content?id=6e0PAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        rating: 4.5
    },
    {
        title: 'Clean Code',
        author: 'Robert C. Martin',
        description: 'A book about writing cleaner code.',
        genre: 'Programming',
        coverImage: 'https://example.com/cleancode.jpg',
        rating: 4.8
    },
    {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        description: 'A fantasy adventure novel.',
        genre: 'Fantasy',
        coverImage: 'https://example.com/hobbit.jpg',
        rating: 4.7
    }
];


const seedDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');

        await Book.deleteMany({});
        console.log('Existing books deleted');

        const result = await Book.insertMany(sampleBooks);
        console.log('Books inserted:', result);

        mongoose.connection.close();
        console.log('Connection closed');
    } catch (err) {
        console.error('Error seeding database:', err);
    }
};

seedDB();
