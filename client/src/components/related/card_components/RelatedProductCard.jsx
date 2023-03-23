import React, {useState, useEffect} from 'react';
import api from '../../../../../client/src/lib/api.js';
import RelatedLib from '../assets/Stylesheet.jsx';
import ProductInfo from './ProductInformation.jsx';
import Stars from '../../../assets/Stars.jsx'

const RelatedProductCard = ({product}) => {

 // HELPER FUNCTIONS
 const findDefault = (style) => {
  if (style['default?']) {
    return true;
  }
}

const returnDefaultStyle = (styles) => {
  for (let i = 0; i < styles.length; i++) {
    if (findDefault(styles[i])) {
      return styles[i];
    }
  }
  return styles[0];
}

// TODO - revisit to format strikethrough original price when sales price active
const formatPrice = (style) => {
  if (style.sale_price) {
    return 'on sale - $' + style.sale_price;
  } else {
    return '$' + style.original_price;
  }
}

  // Returns product price
  const getPrice = (styles) => {
    let prodefault = returnDefaultStyle(styles);
    return formatPrice(prodefault);
  }

  // PHOTO
  const getPhoto = (styles) => {
    let prodefault = returnDefaultStyle(styles);
    return prodefault.photos[0].thumbnail_url;
  }

  const getStyleName = (styles) => {
    let prodefault = returnDefaultStyle(styles);
    return prodefault.name;
  }

  return (
    <RelatedLib.card>
      <div>
        <RelatedLib.cardImg src={getPhoto(product.styles.results)} alt='product-image'/>
      </div>
      <ProductInfo
      details={product.details}
      price={getPrice(product.styles.results)}
      styleName={getStyleName(product.styles.results)}/>
      <Stars rating={product.reviewsMeta.averageRating}/>
    </RelatedLib.card>
  )
}

export default RelatedProductCard;