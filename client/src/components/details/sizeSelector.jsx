import React from 'react';
import Stars from '../../assets/Stars.jsx';
import StyleLib from '../../assets/Stylesheet.jsx';
import DetailsLib from './assets/Stylesheet.jsx';

const SizeSelector = () => {

  return (
    <StyleLib.dropdown style={{width: '60%', float: 'left'}}>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
    </StyleLib.dropdown>
  )
}

export default SizeSelector;