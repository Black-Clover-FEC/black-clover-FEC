import React from 'react';
import StyleLib from '../../assets/Stylesheet.jsx';
import DetailsLib from './assets/Stylesheet.jsx';

const Description = () => {

  return (
    <DetailsLib.description>
      <div>
        <strong>Product Slogan.</strong>
        <br/>
        <StyleLib.small>
          Ice cream ice cream GUMMIES
        </StyleLib.small>
      </div>
    </DetailsLib.description>
  )
}

export default Description;