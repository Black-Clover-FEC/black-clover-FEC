import React from 'react';
import StyleLib from '../../assets/Stylesheet.jsx';
import DetailsLib from './assets/Stylesheet.jsx';

const StyleListItem = ({item, currentStyle, setCurrentStyle}) => {
  console.log(currentStyle, item);
  return (
    <DetailsLib.styleList>
      <DetailsLib.styleListItem onClick={() => setCurrentStyle(item.name)} src={item.photos[0].thumbnail_url}/>
      {currentStyle === item.name ? <DetailsLib.checkmark /> : <></>}
    </DetailsLib.styleList>
  )
}

export default StyleListItem;