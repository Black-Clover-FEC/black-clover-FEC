import React from 'react';
import Stars from '../../assets/Stars.jsx';
import StyleLib from '../../assets/Stylesheet.jsx';
import DetailsLib from './assets/Stylesheet.jsx';

const Image = ({ setOpenModal }) => {

  return (
    <DetailsLib.col1>
      <DetailsLib.rating>
        Image
        <DetailsLib.openModalBtn onClick={() => setOpenModal(true)}/>
      </DetailsLib.rating>
    </DetailsLib.col1>
  )
}

export default Image;