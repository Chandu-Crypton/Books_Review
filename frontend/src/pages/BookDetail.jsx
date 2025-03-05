import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../api';
import ReviewForm from '../components/ReviewForm';

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [reviews, setReviews] = useState([]);

  const fetchReviews = () => {
    axios.get(`/reviews/${id}`)
      .then(res => setReviews(res.data))
      .catch(console.error);
  };

  useEffect(() => {
    axios.get(`/books/${id}`)
      .then(res => setBook(res.data))
      .catch(console.error);

    fetchReviews();
  }, [id]);

  return (
    <div className="p-4">
      {book ? (
        <>
          <h1 className="text-3xl">{book.title}</h1>
          <p>{book.description}</p>
          <p>Author: {book.author}</p>
          <p>Genre: {book.genre}</p>

          <h2 className="text-xl mt-6">Reviews</h2>
          <ul className="space-y-2">
            {reviews.map((review, index) => (
              <li key={index} className="border p-2">
                <p>{review.content}</p>
                <p className="text-sm">Rating: {review.rating} Stars</p>
              </li>
            ))}
          </ul>

          <h2 className="text-xl mt-6">Add Review</h2>
          <ReviewForm bookId={id} onReviewAdded={fetchReviews} />
        </>
      ) : <p>Loading...</p>}
    </div>
  );
};

export default BookDetail;
