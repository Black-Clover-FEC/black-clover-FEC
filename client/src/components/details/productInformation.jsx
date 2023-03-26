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
  // functions for conditional rendering: review/rating, price
  const reviewsAndRatings = () => {
    const hasReviews = product.reviewsMeta.reviewsCount > 0;
    return (
      hasReviews
      ?
      <DetailsLib.rating>
      <StyleLib.small> Average Rating: </StyleLib.small> <Stars rating={product.reviewsMeta.averageRating} />
        <DetailsLib.smallUnderline>{'Read All ' + product.reviewsMeta.reviewsCount + ' Reviews'}</DetailsLib.smallUnderline>
      </DetailsLib.rating>
      :
      <DetailsLib.rating>
      <StyleLib.small></StyleLib.small>
        <DetailsLib.smallUnderline></DetailsLib.smallUnderline>
      </DetailsLib.rating>
    );
  }

  const stylePrice = () => {
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

  return (
    <DetailsLib.col2>
      <br/>
      {reviewsAndRatings()}
      <br/>
      <StyleLib.small>{product.details.category}</StyleLib.small>
      <br/>
      <br/>
      <StyleLib.h3>{product.details.name}</StyleLib.h3>
      <br/>
      {stylePrice()}
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
  );
}

export default ProductInformation;