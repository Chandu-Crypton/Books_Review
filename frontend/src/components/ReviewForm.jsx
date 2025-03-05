import React, { useState } from 'react';
import axios from '../api';

const ReviewForm = ({ bookId, onReviewAdded }) => {
  const [content, setContent] = useState('');
  const [rating, setRating] = useState(5);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/reviews', { bookId, content, rating });
    setContent('');
    setRating(5);
    onReviewAdded();  // Refresh reviews after submitting
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <textarea
        placeholder="Write your review..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="border p-2 w-full"
        rows="4"
      />
      <select value={rating} onChange={(e) => setRating(e.target.value)} className="border p-2">
        {[1, 2, 3, 4, 5].map(num => <option key={num} value={num}>{num} Stars</option>)}
      </select>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
