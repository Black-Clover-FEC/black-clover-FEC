import React from 'react';
import StyleLib from '../../assets/Stylesheet.jsx';
import DetailsLib from './assets/Stylesheet.jsx';

const StyleListItem = ({item, currentStyle, setCurrentStyle}) => {
  return (
    <DetailsLib.styleList>
      <DetailsLib.styleListItem onClick={() => setCurrentStyle(item)} src={item.photos[0].thumbnail_url}/>
      {currentStyle.style_id === item.style_id ? <DetailsLib.checkmark /> : <></>}
    </DetailsLib.styleList>
  )
}

export default StyleListItem;