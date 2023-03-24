import React from 'react';
import StyleLib from '../../assets/Stylesheet.jsx';
import DetailsLib from './assets/Stylesheet.jsx';

const StyleListItem = ({item}) => {

  return (
    <DetailsLib.styleList>
      <DetailsLib.styleListItem src={item.photos[0].thumbnail_url}/>
    </DetailsLib.styleList>
  )
}

export default StyleListItem;