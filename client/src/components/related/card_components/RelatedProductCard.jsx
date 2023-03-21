import React from 'react';
import RelatedLib from '../assets/Stylesheet.jsx';
import ProductInfo from './ProductInformation.jsx';
import Stars from '../../../assets/Stars.jsx'

const RelatedProductCard = () => {


  return (
    <RelatedLib.card>
      <h4>Related Product Card</h4>
      <div>
        <div>image</div>
      </div>
      <ProductInfo />
      <Stars rating={3.50}/>
    </RelatedLib.card>
  )
}

export default RelatedProductCard;