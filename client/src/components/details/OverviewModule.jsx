import React from 'react';
import ProductInformation from './productInformation.jsx';
import StyleLib from '../../assets/Stylesheet.jsx';

const OverviewModule = () => {

  return (
    <div>
      <StyleLib.h3>Hello World, this is where the Overview goes!</StyleLib.h3>
      <ProductInformation />
    </div>
  )
}

export default OverviewModule;