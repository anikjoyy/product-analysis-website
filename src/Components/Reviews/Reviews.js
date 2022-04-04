import React, { useEffect, useState } from 'react';
import useReviews from '../../hooks/useReviews';
import ReviewDetails from '../ReviewDetails/ReviewDetails';
import './Reviews.css';

const Reviews = () => {
  const [reviews, setReviews] = useReviews();
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
