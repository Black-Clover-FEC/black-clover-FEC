import React from 'react';
import StyleLib from '../../assets/Stylesheet.jsx';
import DetailsLib from './assets/Stylesheet.jsx';

const ExpandedImageCard = ({photo}) => {
  return (
    <DetailsLib.modalCarouselImg src={photo.url} />
  )
}

export default ExpandedImageCard;