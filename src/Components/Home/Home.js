import React from 'react';
import HomePicture from '../../Assests/Image/picture-1.png';
import useReviews from '../../hooks/useReviews';
import ReviewDetails from '../ReviewDetails/ReviewDetails';

import './Home.css';

const Home = () => {
  const [reviews, setReviews] = useReviews();
  return (
    <div>
      <div className='home-container'>
        <div className='image-container'>
          <img src={HomePicture} alt='' />
        </div>
        <div className='details-container'>
          <h1>
            <span className='blue-color'>Welcome to Lappy</span> <br />
            Pick your best Laptop
          </h1>
          <p>
            We provide the best laptop for you. Are you ready to explore us?
          </p>
          <button className='home-btn'>Live Demo</button>
        </div>
      </div>
      <div className='customer-review-container'>
        <h1 className='review-heading'>Customer Review</h1>
        <div className='reviews-container'>
          {reviews.slice(0, 3).map((review) => (
            <ReviewDetails key={review.id} review={review}></ReviewDetails>
          ))}
        </div>
        <div className='btn-container'>
          <button className='review-btn'>See All Reviews</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
