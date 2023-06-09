import React from 'react';
import Stars from '../ratings/Stars.jsx';
import StyleLib from '../../assets/Stylesheet.jsx';
import DetailsLib from './assets/Stylesheet.jsx';

import StyleList from './styleList.jsx';
import SizeSelector from './sizeSelector.jsx';
import QuantitySelector from './quantitySelector.jsx';
import AddToBag from './addToBag.jsx';
import Favorite from './favorite.jsx';
import Reviews from './reviews.jsx';
import StylePrice from './stylePrice.jsx';

const ProductInformation = ({product, styleList, favorite, setFavorite, currentStyle, setCurrentStyle}) => {
  const [currentSize, setCurrentSize] = React.useState('S');
  console.log(currentStyle);
  return (
    <DetailsLib.col2>
      <Reviews product={product}/>
      <br/>
      <StyleLib.small><b>{'Category > '}</b> {product.details.category}</StyleLib.small>
      <StyleLib.h1>{product.details.name}</StyleLib.h1>
      <StylePrice currentStyle={currentStyle}/>
      <StyleList currentStyle={currentStyle} setCurrentStyle={setCurrentStyle} styleList={styleList}/>
      <DetailsLib.center>
        {/*TODO: have sizes reflect on currently selected style, quantity depends on size*/}
        <SizeSelector currentStyle={currentStyle}/>
        <QuantitySelector product={product} currentSize={currentSize}/>
      </DetailsLib.center>
      <DetailsLib.center>
        {/*TODO: connect favorite with outfit, then figure out what addtobag does*/}
        <AddToBag />
        <Favorite favorite={favorite} setFavorite={setFavorite}/>
      </DetailsLib.center>

    </DetailsLib.col2>
  );
}

export default ProductInformation;