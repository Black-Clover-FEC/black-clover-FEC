import React, {useState, useEffect} from 'react';
import api from '../../../../../client/src/lib/api.js';
import RelatedLib from '../assets/Stylesheet.jsx';
import ProductInfo from './ProductInformation.jsx';
import Stars from '../../../assets/Stars.jsx'

const RelatedProductCard = ({product}) => {

console.log(product);

  return (
    <RelatedLib.card>
      <h4>Related Product Card</h4>
      <div>
        <img alt='image'/>
      </div>
      <ProductInfo details={product.details} styles={product.styles}/>
      {/* placeholder star rating */}
      <Stars rating={product.reviewsMeta.averageRating}/>
    </RelatedLib.card>
  )
}

export default RelatedProductCard;