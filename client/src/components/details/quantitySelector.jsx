import React from 'react';
import Stars from '../../assets/Stars.jsx';
import StyleLib from '../../assets/Stylesheet.jsx';
import DetailsLib from './assets/Stylesheet.jsx';

const QuantitySelector = ({product}) => {
  // IMPORTANT: INCLUDE WHICH STYLE'S SIZE's QUANTITY WE ARE LOOKING AT. CURRENTLY JUST STYLE 0, SIZE XS
  var skuArray = [];
  for (var key in product.styles.results[0].skus) {
    skuArray.push(product.styles.results[0].skus[key]);
  }

  var quantityArr = [];
  for (var i = 0; i < skuArray[0].quantity; i++) {
    quantityArr.push(i);
  }

  return (
    <DetailsLib.quantity>
        {quantityArr.map((item) => {
          return <option key={item} value={item}>{item}</option>;
        })}
    </DetailsLib.quantity>
  )
}

export default QuantitySelector;