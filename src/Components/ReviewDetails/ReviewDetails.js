import React from 'react';
import './ReviewDetails.css';

import './ReviewDetails.css';

const ReviewDetails = (props) => {
  const { name, img, userReview, ratings } = props.review;
  return (
    <div className='review-details'>
      <img src={img} alt='' />
      <h2>{name}</h2>
      <p>{userReview}</p>
      <p>Ratings: {ratings} out of 5</p>
    </div>
  );
};

export default ReviewDetails;
