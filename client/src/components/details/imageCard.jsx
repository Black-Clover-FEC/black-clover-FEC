import React from 'react';
import StyleLib from '../../assets/Stylesheet.jsx';
import DetailsLib from './assets/Stylesheet.jsx';

const ImageCard = ({photo, setOpenModal}) => {
  return (
    <DetailsLib.col1>
      <DetailsLib.defaultImage onClick={() => setOpenModal(true)} src={photo.url}/>
      <DetailsLib.openModalBtn onClick={() => setOpenModal(true)}/>
    </DetailsLib.col1>
  )
}

export default ImageCard;