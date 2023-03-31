import React from 'react';
import Stars from '../../assets/Stars.jsx';
import StyleLib from '../../assets/Stylesheet.jsx';
import DetailsLib from './assets/Stylesheet.jsx';

const SizeSelector = ({currentStyle, setCurrentSize}) => {
  // var sizeArray = [];
  // for (key in currentStyle.skus) {
  //   sizeArray.push({size = currentStyle.skus[key].size});
  // }

  return (
    <DetailsLib.size>
      <option value="selectSize">Select Size</option>
      <option value="xs">XS</option>
      <option value="s">S</option>
      <option value="m">M</option>
      <option value="l">L</option>
      <option value="xl">XL</option>
      <option value="xxl">XXL</option>
    </DetailsLib.size>
  )

  // {sizeArray.map((sku) => {
  //   return <option value={sku.size}>{sku.size}</option>
  // })}

}

export default SizeSelector;