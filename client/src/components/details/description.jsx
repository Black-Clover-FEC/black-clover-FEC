import React from 'react';
import Stars from '../../assets/Stars.jsx';
import StyleLib from '../../assets/Stylesheet.jsx';
import DetailsLib from './assets/Stylesheet.jsx';

const Description = () => {

  return (
    <DetailsLib.description>
      <div>
        <strong>Product Slogan.</strong>
        <div style={{fontSize: 'small'}}>
          Ice cream ice cream GUMMIES
        </div>
      </div>
    </DetailsLib.description>
  )
}

export default Description;