import React from 'react';
import StyleLib from './Stylesheet.jsx';
import styled from 'styled-components';




const StarsInput = () => {

  return (
    <div>
      {stars.map((star, index) => (
        <span onClick={(e) => updateRating(index)} >{star}</span>
      ))}
    </div>
  );
}

export default StarsInput;