import React from 'react';
import StyleLib from '../../assets/Stylesheet.jsx';
import RatingFilter from './RatingFilter.jsx';


const RatingFiltersList = ({ratings}) => {

  const max = Math.max(...ratings);

  return (
    <ul>
      {ratings.map((count, index) => <RatingFilter key={index} score={index + 1} barValue={count} barMax={max} />).reverse()}
    </ul>
  );
}

export default RatingFiltersList;