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
    <DetailsLib.col2>
      <br/>
      <DetailsLib.rating>
        Average Rating: <Stars rating={3.65} />
        <DetailsLib.smallUnderline>Read All Reviews</DetailsLib.smallUnderline>
      </DetailsLib.rating>
      <br/>
      <StyleLib.small>Category</StyleLib.small>
      <br/>
      <br/>
      <StyleLib.h3>Expanded Product Name</StyleLib.h3>
      <br/>
      <StyleLib.small>$1000</StyleLib.small>
      <br/>
      <br/>
      <StyleList styleList={styleList}/>
      <br/>
      <DetailsLib.center>
        <SizeSelector />
        <QuantitySelector />
      </DetailsLib.center>
      <br/>
      <br/>
      <br/>
      <DetailsLib.center>
        <AddToBag />
        <Favorite />
      </DetailsLib.center>

    </DetailsLib.col2>
  )
}

export default ProductInformation;