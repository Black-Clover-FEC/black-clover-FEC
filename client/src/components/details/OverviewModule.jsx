import React, {useState, useEffect} from 'react';
import StyleLib from '../../assets/Stylesheet.jsx';
import DetailsLib from './assets/Stylesheet.jsx';
import api from '../../lib/api.js';

import Header from './header.jsx';
import ProductInformation from './productInformation.jsx';
import Image from './image.jsx';
import ExpandedImage from './expandedImage.jsx';
import Description from './description.jsx';

const OverviewModule = ({product, currentStyle, setCurrentStyle}) => {
  const [favorite, setFavorite] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      {openModal ? <ExpandedImage currentStyle={currentStyle} openModal={openModal} setOpenModal={setOpenModal}/> : <></>}
      <Header />
      <StyleLib.h2>
        Product Overview
      </StyleLib.h2>
      <DetailsLib.cols>
        <Image currentStyle={currentStyle} styleList={product.styles.results} openModal={openModal} setOpenModal={setOpenModal}/>
        <ProductInformation currentStyle={currentStyle} setCurrentStyle={setCurrentStyle} product={product} styleList={product.styles.results} favorite={favorite} setFavorite={setFavorite}/>
      </DetailsLib.cols>
      <Description product={product} />
    </div>
  )
}


export default OverviewModule;