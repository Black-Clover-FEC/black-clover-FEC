import React from 'react';
import RelatedLib from '../assets/Stylesheet.jsx';

const ProductInfo = ({details, price, styleName}) => {


  return (
    <div>
      <h5>{details.category}</h5>
      <h4>{details.name + ' | ' + styleName}</h4>
      <h4>{price}</h4>
    </div>
  )
}

export default ProductInfo;