import React from 'react';
import StyleLib from '../../assets/Stylesheet.jsx';
import DetailsLib from './assets/Stylesheet.jsx';

const Description = ({product}) => {

  return (
    <DetailsLib.description>
      <strong>{product.details.slogan}</strong>
      <br/>
      <StyleLib.small>
        {product.details.description}
      </StyleLib.small>
      <br/>
      <br/>
      <DetailsLib.pinterest />
      <DetailsLib.twitter />
      <DetailsLib.facebook />
    </DetailsLib.description>
  )
}

export default Description;