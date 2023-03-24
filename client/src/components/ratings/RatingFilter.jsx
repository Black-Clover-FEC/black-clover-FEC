import React from 'react';
import StyleLib from '../../assets/Stylesheet.jsx';
import styled from 'styled-components';

const StyledMeter = styled.meter`
  height: 1.3em;
  width: 10em;
  ::-webkit-meter-bar {
    background: none;
    border-radius: 0;
    border: none;
    background: #D5D5D5;
  }

  ::-webkit-meter-optimum-value	{
    background-color: #E7A66C;
  }
  `

const RatingBreakdownFilter = ({score, barValue, barMax, handleClick}) => {

  return (
    // <li>{score} stars, {barValue} / {barMax}</li>
    <li onClick={handleClick}>
      <StyleLib.linkButton >{score} stars</StyleLib.linkButton>
      <StyledMeter max={barMax} value={barValue} title="Stars"></StyledMeter>
      <StyleLib.linkButton >({barValue} reviews)</StyleLib.linkButton>
    </li>
  );
}

export default RatingBreakdownFilter;