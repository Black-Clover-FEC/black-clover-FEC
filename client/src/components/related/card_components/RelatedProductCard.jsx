import React, {useState, useEffect} from 'react';
import api from '../../../../../client/src/lib/api.js';
import RelatedLib from '../assets/Stylesheet.jsx';
import ProductInfo from './ProductInformation.jsx';
import Stars from '../../../assets/Stars.jsx'

const RelatedProductCard = () => {


  return (
    <RelatedLib.card>
      <h4>Related Product Card</h4>
      <div>
        <img alt='image'/>
      </div>
      <ProductInfo />
      {/* placeholder star rating */}
      <Stars rating={3.50}/>
    </RelatedLib.card>
  )
}

export default RelatedProductCard;