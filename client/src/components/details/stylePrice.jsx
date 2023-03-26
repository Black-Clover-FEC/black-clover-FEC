import React from 'react';
import StyleLib from '../../assets/Stylesheet.jsx';
import DetailsLib from './assets/Stylesheet.jsx';

const StylePrice = ({currentStyle}) => {
  const onSale = currentStyle.sale_price !== null;
  return (
    onSale
    ?
    <>
      <DetailsLib.salePrice>{'$' + currentStyle.sale_price + '   '}</DetailsLib.salePrice>
      <DetailsLib.origPriceCrossed>{'$' + currentStyle.original_price}</DetailsLib.origPriceCrossed>
      <StyleLib.small>{'  SALE!'}</StyleLib.small>
    </>
    :
    <StyleLib.small>{'$' + currentStyle.original_price}</StyleLib.small>
  );
}

export default StylePrice;