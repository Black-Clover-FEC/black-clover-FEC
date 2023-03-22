import React from 'react';
import StyleLib from '../../assets/Stylesheet.jsx';
import DetailsLib from './assets/Stylesheet.jsx';

const StyleListItem = ({item, index}) => {

  return (
    <DetailsLib.styleList>
      <DetailsLib.styleListItem>
        {'Item ' + String(index + 1)}
      </DetailsLib.styleListItem>
    </DetailsLib.styleList>
  )
}

export default StyleListItem;