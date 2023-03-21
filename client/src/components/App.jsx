import React from 'react';
import styled from 'styled-components';

import Overview from './details/OverviewModule.jsx';
import RelatedProducts from './related/RelatedProductsModule.jsx';
import QA from './questions/QAModule.jsx';
import Reviews from './ratings/ReviewsModule.jsx';

const StyledDiv = styled.div`
width: 80%;
max-width: 1500px;
margin: auto;
`

const App = () => {

  return (
    <StyledDiv>
      Hello World! This is from App.
      <Overview />
      <RelatedProducts />
      <QA />
      <Reviews />
    </StyledDiv>
  )
}

export default App;