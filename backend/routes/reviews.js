const express = require('express');
const { getReviewsByBook, addReview } = require('../controllers/reviewController');
const router = express.Router();

router.get('/:bookId', getReviewsByBook);
router.post('/', addReview);

module.exports = router;
