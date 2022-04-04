import React from 'react';
import './Blogs.css';

const Blogs = () => {
  return (
    <div>
      <div className='questions-container'>
        <div className='question-container'>
          <h2>What is Context Api ?</h2>
          <p>
            The Context API is a component structure which is provided by React.
            It provide us to share specific forms of data across all level of
            the application. Context API store the information in a central
            place and when user request it allows to share the information to
            any component. It can only pass the data from parent to child via
            props.
          </p>
        </div>
        <div className='question-container'>
          <h2>What is Semantic tag ?</h2>
          <p>
            Semantic tag is a HTML5 element. Semantic tag is HTML that
            introduces meaning to the web page rather than just presentation.
            Semantic tags are those which people understand what is the tag and
            the browser also know how to display them in a efficient way. Some
            semantic tags are: Header tag (h1 to h6), blockquote, nav, div,
            section, main etc.{' '}
          </p>
        </div>
        <div className='question-container'>
          <h2>Difference between Inline and Inline-block elements ?</h2>
          <p>
            The inline and inline block elements are the CSS element. Some
            inline elements are: a, img, br etc. Some line-block elements are:
            p, div etc. The major difference between inline and inline-block
            element is that inline-block allows to set a width and height on the
            element.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
