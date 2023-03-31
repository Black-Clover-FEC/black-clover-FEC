import React, {useState, useEffect} from 'react';
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
  console.log(product.details.id);
  const [favorite, setFavorite] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  let styleList = product.styles.results;
  let defaultStyle = product.styles.results[0]

  for (var i = 0; i < styleList.length; i++) {
    if (styleList[i]['default?']) {
      defaultStyle = styleList[i];
    }
  }
  const [currentStyle, setCurrentStyle] = useState(defaultStyle);

  useEffect(() => {setCurrentStyle(defaultStyle)}, [product])

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