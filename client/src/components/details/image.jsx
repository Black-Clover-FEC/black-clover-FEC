import React from 'react';
import Stars from '../../assets/Stars.jsx';
import StyleLib from '../../assets/Stylesheet.jsx';
import DetailsLib from './assets/Stylesheet.jsx';
import Carousel from 'react-responsive-carousel';

const Image = ({currentStyle, styleList, setOpenModal}) => {
  return (
    <DetailsLib.col1>
      <DetailsLib.defaultImage onClick={() => setOpenModal(true)} src={currentStyle.photos[0].url}/>
      <DetailsLib.openModalBtn onClick={() => setOpenModal(true)}/>
    </DetailsLib.col1>
  )
}

export default Image;