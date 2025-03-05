const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require("cors");
const booksRoutes = require('./routes/books');
const reviewsRoutes = require('./routes/reviews');

dotenv.config();
const app = express();
app.use(cors())
app.use(express.json());
app.use('/books', booksRoutes);
app.use('/reviews', reviewsRoutes);

mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(5000, () => console.log('Server running on port 5000'));
});
