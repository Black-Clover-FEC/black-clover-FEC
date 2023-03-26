import React from 'react';
import RelatedLib from '../assets/Stylesheet.jsx';
import StyleLib from '../../../assets/Stylesheet.jsx'

const ProductInfo = ({details, price, styleName}) => {

  return (
    <RelatedLib.productInfo>
      <StyleLib.h6>{details.category}</StyleLib.h6>
      <StyleLib.p>{details.name + ' | ' + styleName}</StyleLib.p>
      <h4>{price}</h4>
    </RelatedLib.productInfo>
  )
}

export default ProductInfo;