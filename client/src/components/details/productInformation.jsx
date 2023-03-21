import React from 'react';
import Stars from '../../assets/Stars.jsx';
import StyleLib from '../../assets/Stylesheet.jsx';

const ProductInformation = () => {

  return (
    <div>
      <div>
        <Stars rating={3.65} />
        <StyleLib.p className="review">Read All Reviews</StyleLib.p>
      </div>
      <StyleLib.p>Category</StyleLib.p>
      <StyleLib.p>EXPANDED PRODUCT NAME</StyleLib.p>
    </div>
  )
}

export default ProductInformation;