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

const OverviewModule = (props) => {
  const [product, setProduct] = React.useState(ProductInfoObject);
  const [styleList, setStyleList] = React.useState(ProductInfoObject.styles.results);
  const [favorite, setFavorite] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const [currentStyle, setCurrentStyle] = React.useState(ProductInfoObject.styles.results[0]);

  React.useEffect(() => refreshOverviewModule(props.product.id), []);

  const refreshOverviewModule = (p_id) => {
    api.collectProductInfo(p_id)
      .then(prod => {
        console.log(prod);
        setProduct(prod);
        setStyleList(prod.styles.results);
        var defaultStyle = prod.styles.results[0];
        for (var i = 0; i < prod.styles.results.length; i++) {
          if (prod.styles.results[i]['default?']) {
            defaultStyle = prod.styles.results[i];
          }
        }
        setCurrentStyle(defaultStyle);
        return;
      })
      .catch(err => console.log(err));
  }



  return (
    <div>
      {openModal ? <ExpandedImage openModal={openModal} setOpenModal={setOpenModal}/> : <></>}
      <Header />
      <StyleLib.h2>
        Product Overview
      </StyleLib.h2>
      <DetailsLib.cols>
        <Image currentStyle={currentStyle} styleList={styleList} setOpenModal={setOpenModal}/>
        <ProductInformation currentStyle={currentStyle} setCurrentStyle={setCurrentStyle} product={product} styleList={styleList} favorite={favorite} setFavorite={setFavorite}/>
      </DetailsLib.cols>
      <Description product={product} />
    </div>
  )
}


export default OverviewModule;