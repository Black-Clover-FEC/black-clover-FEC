import React from 'react';
import Stars from '../../assets/Stars.jsx';
import StyleLib from '../../assets/Stylesheet.jsx';
import DetailsLib from './assets/Stylesheet.jsx';

import StyleList from './styleList.jsx';
import SizeSelector from './sizeSelector.jsx';
import QuantitySelector from './quantitySelector.jsx';
import AddToBag from './addToBag.jsx';
import Favorite from './favorite.jsx';

const ProductInformation = ({product, styleList, favorite, setFavorite, currentStyle, setCurrentStyle}) => {
  return (
    <DetailsLib.col2>
      <br/>
      <DetailsLib.rating>
      <StyleLib.small> Average Rating: </StyleLib.small> <Stars rating={product.reviewsMeta.averageRating} />
        <DetailsLib.smallUnderline>{'Read All ' + product.reviewsMeta.reviewsCount + ' Reviews'}</DetailsLib.smallUnderline>
      </DetailsLib.rating>
      <br/>
      <StyleLib.small>{product.details.category}</StyleLib.small>
      <br/>
      <br/>
      <StyleLib.h3>{product.details.name}</StyleLib.h3>
      <br/>
      {/*TODO: take note of sales on certain styles and include strikethrough if so*/}
      <StyleLib.small>{'$' + product.details.default_price}</StyleLib.small>
      <br/>
      <br/>
      {/*TODO: have styleList have currently selected style have checkmark on it*/}
      <StyleList currentStyle={currentStyle} setCurrentStyle={setCurrentStyle} styleList={styleList}/>
      <br/>
      <DetailsLib.center>
        {/*TODO: have sizes reflect on currently selected style, quantity depends on size*/}
        <SizeSelector />
        <QuantitySelector product={product}/>
      </DetailsLib.center>
      <br/>
      <br/>
      <br/>
      <DetailsLib.center>
        {/*TODO: connect favorite with outfit, then figure out what addtobag does*/}
        <AddToBag />
        <Favorite favorite={favorite} setFavorite={setFavorite}/>
      </DetailsLib.center>

    </DetailsLib.col2>
  )
}

export default ProductInformation;