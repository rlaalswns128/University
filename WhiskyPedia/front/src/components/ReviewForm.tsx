import React, { useState } from 'react';
import { createReview, Review } from '../apis/WhiskySearch';
import './components.css';

interface ReviewFormProps {
  whiskyId: string;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ whiskyId }) => {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(1);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newReview: Review = { reviewID: 0, userEmail: 'test@example.com', review, whiskyID: whiskyId }; // Adjust userEmail as necessary

    try {
      await createReview(newReview);
      console.log('Review submitted successfully');
      setError(null); // Clear error on success
    } catch (error) {
      console.error('There was an error submitting the review!', error);
      setError('Failed to submit review. Please try again.'); // Set error message
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Write your review here"
        required
      ></textarea>
      <select value={rating} onChange={(e) => setRating(parseInt(e.target.value))}>
        {[1, 2, 3, 4, 5].map(num => (
          <option key={num} value={num}>{num}</option>
        ))}
      </select>
      <button type="submit">Submit Review</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default ReviewForm;