import React from 'react';
import Stars from '../../assets/Stars.jsx';
import StyleLib from '../../assets/Stylesheet.jsx';
import DetailsLib from './assets/Stylesheet.jsx';
import Carousel from 'react-responsive-carousel';

const Image = ({styleList, setOpenModal}) => {
  // TODO: return, change default product to be currently selected style instead
  var defaultStyle = styleList[0];
  for (var i = 0; i < styleList.length; i++) {
    if (styleList[i]['default?']) {
      defaultStyle = styleList[i];
    }
    // testing with other images
    // if (i === 3) {
    //   defaultStyle = styleList[3];
    // }
  }

  return (
    <DetailsLib.col1>
      <DetailsLib.defaultImage onClick={() => setOpenModal(true)} src={defaultStyle.photos[0].url}/>
      <DetailsLib.openModalBtn onClick={() => setOpenModal(true)}/>
    </DetailsLib.col1>
  )
}

export default Image;