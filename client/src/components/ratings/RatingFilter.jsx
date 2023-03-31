import React from 'react';
import StyleLib from '../../assets/Stylesheet.jsx';
import ReviewStyles from './assets/ReviewStyles.jsx';

const RatingBreakdownFilter = ({score, barValue, barMax, handleClick}) => {
  return (
    <ReviewStyles.meterDiv onClick={handleClick}>
      <ReviewStyles.starsLink >{score} stars</ReviewStyles.starsLink>
      <ReviewStyles.meter max={barMax} value={barValue} title="Stars"></ReviewStyles.meter>
      <ReviewStyles.countLink >({barValue})</ReviewStyles.countLink>
    </ReviewStyles.meterDiv>
  );
}

export default RatingBreakdownFilter;