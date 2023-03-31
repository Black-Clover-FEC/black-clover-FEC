import React from 'react';
import StyleLib from '../../assets/Stylesheet.jsx';
import RatingFilter from './RatingFilter.jsx';


const RatingFiltersList = ({ratings, handleClick}) => {
  const max = Math.max(...ratings);

  return (
    <StyleLib.vertPaddedList>
      {ratings.map((count, index) => (
      <RatingFilter
        key={index}
        score={index + 1}
        barValue={count}
        barMax={max}
        handleClick={(e) => handleClick(index)} />)
        ).reverse()
      }
    </StyleLib.vertPaddedList>
  );
}

export default RatingFiltersList;