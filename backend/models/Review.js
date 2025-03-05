const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    bookId: mongoose.Schema.Types.ObjectId,
    userId: mongoose.Schema.Types.ObjectId,
    content: String,
    rating: Number,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Review', reviewSchema);
