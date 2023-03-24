import React from 'react';
import StyleLib from './Stylesheet.jsx';
import ReviewAndQuestionTile from './ReviewAndQuestionTile.jsx';


const ReviewAndQuestionList = ({reviews}) => {
console.log(reviews);

  return (
    <ul>
      {reviews.map(review => <ReviewAndQuestionTile key={review.review_id} review={review} />)}
    </ul>
  );
}

export default ReviewAndQuestionList;