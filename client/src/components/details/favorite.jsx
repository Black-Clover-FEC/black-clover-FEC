import React from 'react';
import StyleLib from '../../assets/Stylesheet.jsx';
import DetailsLib from './assets/Stylesheet.jsx';

const Favorite = ({favorite, setFavorite}) => {
  return (
    <DetailsLib.favoriteButton onClick={() => setFavorite(!favorite)}>{favorite ? <DetailsLib.faStarFavorite /> : <DetailsLib.faStarNotFavorite />}</DetailsLib.favoriteButton>
  )
}

export default Favorite;