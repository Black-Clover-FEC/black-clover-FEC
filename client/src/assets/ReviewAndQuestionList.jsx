import React from 'react';
import StyleLib from './Stylesheet.jsx';
import ReviewAndQuestionTile from './ReviewAndQuestionTile.jsx';


const ReviewAndQuestionList = ({reviews, helpReportCB}) => {
  return (
    <StyleLib.vertPaddedList>
      {reviews.map(review => <ReviewAndQuestionTile key={review.review_id} review={review} helpReportCB={helpReportCB} />)}
    </StyleLib.vertPaddedList>
  );
}

export default ReviewAndQuestionList;