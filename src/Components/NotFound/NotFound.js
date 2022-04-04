import React from 'react';
import NotFoundImage from '../../Assests/Image/not-found.png';
import './NotFound.css';

const NotFound = () => {
  return (
    <div>
      <img src={NotFoundImage} alt='404' />
    </div>
  );
};

export default NotFound;
