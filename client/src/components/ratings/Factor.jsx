import React from 'react';
import StyleLib from '../../assets/Stylesheet.jsx';


const Factor = ({factor, value}) => {

  return (
    <li>{factor}: {value}</li>
  );
}

export default Factor;