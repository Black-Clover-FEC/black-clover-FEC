import React from 'react';
import StyleLib from '../../assets/Stylesheet.jsx';
import Stars from '../../assets/Stars.jsx';

const ReviewsModule = () => {

  return (
    <div>
      <StyleLib.h2>Ratings and Reviews</StyleLib.h2>
      <StyleLib.h4>248 reviews, sorted by relevance</StyleLib.h4>
      <StyleLib.h4>Review title: this product is ballin'!</StyleLib.h4>
      <StyleLib.p>Here's some example text input from a user that would be what you see in the review body.</StyleLib.p>
      <StyleLib.button>More Reviews</StyleLib.button>
      <StyleLib.dropdown>
        <option value="option1">option 1</option>
        <option value="option2">option 2</option>
        <option value="option3">option 3</option>
      </StyleLib.dropdown>
      <Stars rating={3.65} />
    </div>
  )
}

export default ReviewsModule;