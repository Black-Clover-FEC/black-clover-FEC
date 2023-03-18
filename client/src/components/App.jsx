import React from 'react';
import Overview from './details/OverviewModule.jsx';
import RelatedProducts from './related/RelatedProductsModule.jsx';
import QA from './questions/QAModule.jsx';
import Reviews from './ratings/ReviewsModule.jsx';

const App = () => {

  return (
    <div>
      Hello World! This is from App.
      <Overview />
      <RelatedProducts />
      <QA />
      <Reviews />
    </div>
  )
}

export default App;