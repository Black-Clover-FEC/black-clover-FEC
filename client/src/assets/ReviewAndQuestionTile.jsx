import React from 'react';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import StyleLib from './Stylesheet.jsx';
import Stars from './Stars.jsx';


const ReviewAndQuestionTile = ({review}) => {


  return (
    <StyleLib.tile>
      <Stars rating={review.rating} />
      <StyleLib.small>{review.reviewer_name}, {review.date}</StyleLib.small>
      <StyleLib.h4>{review.summary}</StyleLib.h4>
      <StyleLib.p>{review.body}</StyleLib.p>
      {/* {review.response && <Response response={review.response} />} */}
    </StyleLib.tile>
  );
}

export default ReviewAndQuestionTile;