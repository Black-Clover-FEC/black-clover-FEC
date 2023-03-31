import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLoaderData } from "react-router-dom";
import api from '../lib/api.js';

import Overview from './details/OverviewModule.jsx';
import RelatedProductsModule from './related/RelatedProductsModule.jsx';
import QA from './questions/QAModule.jsx';
import Reviews from './ratings/ReviewsModule.jsx';

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

  return (
    <StyledDiv>
      <Overview product={product}/>
      <RelatedProductsModule product={product}/>
      <QA product={product}/>
      <Reviews product={product}/>
    </StyledDiv>
  )
}

export default App;