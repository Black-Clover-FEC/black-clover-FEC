import React from 'react';
import Stars from '../../assets/Stars.jsx';
import StyleLib from '../../assets/Stylesheet.jsx';
import DetailsLib from './assets/Stylesheet.jsx';

import StyleList from './styleList.jsx';
import SizeSelector from './sizeSelector.jsx';
import QuantitySelector from './quantitySelector.jsx';
import AddToBag from './addToBag.jsx';
import Favorite from './favorite.jsx';

const ProductInformation = ({styleList}) => {

  return (
    <DetailsLib.productInfo>
      <br/>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        Average Rating: <Stars rating={3.65} />
        <StyleLib.p style={{fontSize: 'x-small', textDecoration: 'underline'}} >Read All Reviews</StyleLib.p>
      </div>

      <StyleLib.p style={{fontSize: 'small', margin: '0px'}}>Category</StyleLib.p>
      <br/>
      <StyleLib.h4 style={{fontSize: 'x-large', margin: '0px'}}>Expanded Product Name</StyleLib.h4>
      <br/>
      <StyleLib.p style={{fontSize: 'small', margin: '0px'}}>$1000</StyleLib.p>
      <br/>
      <StyleList styleList={styleList}/>
      <br/>
      <div style={{textAlign: 'center'}}>
        <SizeSelector />
        <QuantitySelector />
      </div>
      <br/>
      <br/>
      <br/>
      <div style={{textAlign: 'center'}}>
        <AddToBag />
        <Favorite />
      </div>

    </DetailsLib.productInfo>
  )
}

export default ProductInformation;