import React, { useState, useEffect } from 'react';
import StyleLib from '../assets/Stylesheet.jsx';
import { useLoaderData } from 'react-router-dom';
import api from '../lib/api.js';

import Header from './details/header.jsx';
import Overview from './details/OverviewModule.jsx';
import RelatedProductsModule from './related/RelatedProductsModule.jsx';
import QA from './questions/QAModule.jsx';
import Reviews from './ratings/ReviewsModule.jsx';

export async function productLoader({ params }) {
  const product = await api.collectProductInfo(params.productId);
  return { product };
}

const App = () => {
  const { product } = useLoaderData();
  const [currentStyle, setCurrentStyle] = useState(product.styles.default);
  useEffect(() => {
    setCurrentStyle(product.styles.default);
  }, [product]);

  return (
    <>
      <Header />
      <StyleLib.appDiv>
        <Overview
          product={product}
          currentStyle={currentStyle}
          setCurrentStyle={setCurrentStyle}
        />
        <RelatedProductsModule product={product} currentStyle={currentStyle} />
        <Reviews product={product.details} reviewsMeta={product.reviewsMeta} />
        <QA product={product.details} />
      </StyleLib.appDiv>
    </>
  );
};

export default App;
