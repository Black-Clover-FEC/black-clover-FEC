import React from 'react';
import StyleLib from '../../assets/Stylesheet.jsx';
import ReviewTile from './ReviewTile.jsx';


const ReviewsList = ({reviews, helpReportCB}) => {
  return (
    <StyleLib.vertPaddedList>
      {reviews.map(review => <ReviewTile key={review.review_id} review={review} helpReportCB={helpReportCB} />)}
    </StyleLib.vertPaddedList>
  );
}

export default ReviewsList;