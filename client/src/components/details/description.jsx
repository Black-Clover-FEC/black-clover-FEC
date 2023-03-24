import React from 'react';
import StyleLib from '../../assets/Stylesheet.jsx';
import DetailsLib from './assets/Stylesheet.jsx';

const Description = ({product}) => {

  return (
    <DetailsLib.description>
      <div>
        <strong>{product.details.slogan}</strong>
        <br/>
        <StyleLib.small>
          {product.details.description}
        </StyleLib.small>
      </div>
    </DetailsLib.description>
  )
}

export default Description;