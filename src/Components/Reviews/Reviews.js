import React, { useEffect, useState } from 'react';
import ReviewDetails from '../ReviewDetails/ReviewDetails';
import './Reviews.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('reviews.json')
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <div className='reviews-container'>
        {reviews.map((review) => (
          <ReviewDetails key={review.id} review={review}></ReviewDetails>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
