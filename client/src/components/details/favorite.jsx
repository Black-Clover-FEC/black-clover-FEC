import React from 'react';
import StyleLib from '../../assets/Stylesheet.jsx';
import DetailsLib from './assets/Stylesheet.jsx';
import { FaRegStar } from 'react-icons/fa';

const Favorite = () => {

  return (
    <DetailsLib.favoriteButton><FaRegStar /></DetailsLib.favoriteButton>
  )
}

export default Favorite;