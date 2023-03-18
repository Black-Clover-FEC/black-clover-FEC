import React from 'react';
import Overview from './details/OverviewModule.jsx';
import RelatedProducts from './details/RelatedProductsModule.jsx';
import QA from './details/QAModule.jsx';
import Reviews from './details/ReviewsModule.jsx';

const App = () => {

  return (
    <div>
      <Overview />
      <RelatedProducts />
      <QA />
      <Reviews />
    </div>
  )
}

export default App;