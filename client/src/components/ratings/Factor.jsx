import React from 'react';
import StyleLib from '../../assets/Stylesheet.jsx';
import styled from 'styled-components';

const maxScore = 5;

const StyledDiv = styled.div`
background-color: #D5D5D5;
height: 0.7em;
width: 80%;
position: relative;
`

const StyledSpan = styled.span.attrs(props => ({
  left: props.left || '0'
}))`
color: black;
position: absolute;
left: ${props => props.left}%;
bottom: 40%;
transform: translateX(-50%);
`


const Factor = ({factor, value}) => {

  value = Number.parseFloat(value).toFixed(1)
  const left = Math.round((value / maxScore) * 100);
  console.log(left);

  return (
    <div>
      {factor}: {value}
      <StyledDiv>
        <StyledSpan left={left}>⌄</StyledSpan>
      </StyledDiv>
    </div>
  );
}

export default Factor;