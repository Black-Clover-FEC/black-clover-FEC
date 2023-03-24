import React from 'react';
import StyleLib from '../../assets/Stylesheet.jsx';
import DetailsLib from './assets/Stylesheet.jsx';
import api from '../../../../client/src/lib/api.js';

import Header from './header.jsx';
import ProductInformation from './productInformation.jsx';
import Image from './image.jsx';
import ExpandedImage from './expandedImage.jsx';
import Description from './description.jsx';

const OverviewModule = () => {
  const [styleList, setStyleList] = React.useState([
    /* ARRAY OF STYLES */
    /*filler data (not used):*/
    0, 1, 2, 3, 4, 5, 6
  ]);
  const [openModal, setOpenModal] = React.useState(false);

  return (
    <div>
      {openModal ? <ExpandedImage setOpenModal={setOpenModal}/> : <></>}
      <Header />
      Hello World, this is where the Overview goes!
      <StyleLib.h2>
        Product Overview
      </StyleLib.h2>

      <DetailsLib.cols>
        <Image setOpenModal={setOpenModal}/>
        <ProductInformation styleList={styleList}/>
      </DetailsLib.cols>

      <Description />
    </div>
  )
}


export default OverviewModule;