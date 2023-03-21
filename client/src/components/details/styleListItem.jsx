import React from 'react';
import StyleLib from '../../assets/Stylesheet.jsx';
import DetailsLib from './assets/Stylesheet.jsx';

const StyleListItem = ({item, index}) => {

  return (
    <div style={{display: 'inline-block', padding: '7px'}}>
      <DetailsLib.styleListItem>
        {'Item ' + String(index + 1)}
      </DetailsLib.styleListItem>
    </div>
  )
}

export default StyleListItem;