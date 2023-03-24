import React from 'react';
import StyleLib from './Stylesheet.jsx';
import ReviewAndQuestionTile from './ReviewAndQuestionTile.jsx';


const ReviewAndQuestionList = ({reviews, helpReportCB}) => {
  return (
    <ul>
      {reviews.map(review => <ReviewAndQuestionTile key={review.review_id} review={review} helpReportCB={helpReportCB} />)}
    </ul>
  );
}

export default ReviewAndQuestionList;