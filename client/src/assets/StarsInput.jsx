import React from 'react';
import StyleLib from './Stylesheet.jsx';
import styled from 'styled-components';




const StarsInput = ({starRating, handleClick}) => {
  const emptyStar = '☆';
  const fullStar = '★';

  let stars = [];
  for (let i = 0; i < 5; i++) {
    if (i <= starRating) {
      stars.push(fullStar);
    } else {
      stars.push(emptyStar);
    }
  }

  return (
    <div>
      {stars.map((star, index) => (
        <span key={index} onClick={(e) => handleClick(index)} >{star}</span>
      ))}
    </div>
  );
}

export default StarsInput;