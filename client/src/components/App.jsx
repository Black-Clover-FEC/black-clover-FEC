import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { useLoaderData } from "react-router-dom";
import api from '../lib/api.js';

import Overview from './details/OverviewModule.jsx';
import RelatedProductsModule from './related/RelatedProductsModule.jsx';
import QA from './questions/QAModule.jsx';
import Reviews from './ratings/ReviewsModule.jsx';
import prodMock from '../../../__mocks__/productMock.js';

const StyledDiv = styled.div`
width: 80%;
max-width: 1500px;
margin: auto;
`

export async function productLoader({ params }) {
  const product = await api.collectProductInfo(params.productId);
  return { product };
};

const App = () => {
  const {product} = useLoaderData();

  const [currentProduct, setCurrentProduct] = useState(product);
  const [currentStyle, setCurrentStyle] = useState(product.styles.results[0]);

  useEffect(() => {getDefaultStyle(currentProduct)}, [currentProduct]);

  const getDefaultStyle = (prod) => {
    var defaultStyle = prod.styles.results[0];
    for (var i = 0; i < prod.styles.results.length; i++) {
      if (prod.styles.results[i]['default?']) {
        defaultStyle = prod.styles.results[i];
      }
    }
    setCurrentStyle(defaultStyle);
    return;
  }

  const changeProduct = (newProduct) => {
    setCurrentProduct(newProduct);
  }

  return (
    <StyledDiv>
      <Overview product={currentProduct} currentStyle={currentStyle} setCurrentStyle={setCurrentStyle}/>
      <RelatedProductsModule product={currentProduct} changeProduct={changeProduct} currentStyle={currentStyle}/>
      <QA product={currentProduct.details}/>
      <Reviews product={currentProduct.details}/>
    </StyledDiv>
  )
}

export default App;