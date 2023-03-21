import React from 'react';
import StyleLib from '../../assets/Stylesheet.jsx';


const RatingBreakdownFilter = ({score, barValue, barMax}) => {

  return (
    <li>{score} stars, {barValue} / {barMax}</li>
  );
}

export default RatingBreakdownFilter;