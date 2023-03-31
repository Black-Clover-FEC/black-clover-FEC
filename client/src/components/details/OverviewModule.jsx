import React from 'react';
import StyleLib from '../../assets/Stylesheet.jsx';
import DetailsLib from './assets/Stylesheet.jsx';
import api from '../../lib/api.js';

import Header from './header.jsx';
import ProductInformation from './productInformation.jsx';
import Image from './image.jsx';
import ExpandedImage from './expandedImage.jsx';
import Description from './description.jsx';
import ProductInfoObject from '../../lib/productInfoObjectTemplate.js';

const OverviewModule = ({product}) => {
  const [styleList, setStyleList] = React.useState(product.styles.results);
  const [favorite, setFavorite] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const [currentStyle, setCurrentStyle] = React.useState(product.styles.results[0]);

  for (var i = 0; i < product.styles.results.length; i++) {
    if (product.styles.results[i]['default?']) {
      setCurrentStyle(product.styles.results[i]);
    }
  }

  return (
    <div>
      {openModal ? <ExpandedImage currentStyle={currentStyle} openModal={openModal} setOpenModal={setOpenModal}/> : <></>}
      <Header />
      <StyleLib.h2>
        Product Overview
      </StyleLib.h2>
      <DetailsLib.cols>
        <Image currentStyle={currentStyle} styleList={styleList} openModal={openModal} setOpenModal={setOpenModal}/>
        <ProductInformation currentStyle={currentStyle} setCurrentStyle={setCurrentStyle} product={product} styleList={styleList} favorite={favorite} setFavorite={setFavorite}/>
      </DetailsLib.cols>
      <Description product={product} />
    </div>
  )
}


export default OverviewModule;