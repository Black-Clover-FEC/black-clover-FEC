import React from 'react';
import StyleLib from './Stylesheet.jsx';
import styled from 'styled-components';


const emptyStar = '☆';
const fullStar = '★';


const StarsInput = () => {
  const [stars, setStars] = React.useState(new Array(5).fill(emptyStar));

  const updateRating = (index) => {
    let newStars = [];
    let key = 0;
    for (let i = 0; i < 5; i++) {
      if (i <= index){
        newStars.push(fullStar);
      } else {
        newStars.push(emptyStar);
      }
    }
    setStars(newStars);
  }

  return (
    <div>
      {stars.map((star, index) => (
        <span onClick={(e) => updateRating(index)} >{star}</span>
      ))}
    </div>
  );
}

export default StarsInput;