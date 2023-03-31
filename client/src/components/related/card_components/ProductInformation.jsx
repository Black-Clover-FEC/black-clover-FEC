import React from 'react';
import RelatedLib from '../assets/Stylesheet.jsx';
import StyleLib from '../../../assets/Stylesheet.jsx'

const ProductInfo = ({details, price, styleName}) => {

  return (
    <RelatedLib.productInfo>

      <StyleLib.h6>{details.category}</StyleLib.h6>
      <StyleLib.p>{details.name}</StyleLib.p>
      <StyleLib.p>{styleName}</StyleLib.p>
      <h4>{price}</h4>
      {/* <h6>{details.category}</h6>
      <p>{details.name + ' | ' + styleName}</p>
      <h4>{price}</h4> */}


    </RelatedLib.productInfo>
  )
}

export default ProductInfo;