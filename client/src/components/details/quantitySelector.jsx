import React from 'react';
import Stars from '../../assets/Stars.jsx';
import StyleLib from '../../assets/Stylesheet.jsx';
import DetailsLib from './assets/Stylesheet.jsx';

const QuantitySelector = () => {

  return (
    <StyleLib.dropdown style={{width: '35%', float: 'right'}}>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
    </StyleLib.dropdown>
  )
}

export default QuantitySelector;